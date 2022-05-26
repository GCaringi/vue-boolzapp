const app = new Vue({
    el: "#app",
    data: {
        newMessage: "",
        currentContact: 0,
        showNotify: true,
        filter: "",
        messageMenuShow: false,
        contacts: [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent',
                openMenu: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
                openMenu: false
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received',
                openMenu: false
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent',
                openMenu: false
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                openMenu: false
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
                openMenu: false
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received',
                openMenu: false
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
                openMenu: false
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received',
                openMenu: false
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
                openMenu: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received',
                openMenu: false
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent',
                openMenu: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received',
                openMenu: false
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent',
                openMenu: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received',
                openMenu: false
            },
            {
                date: '10/01/2020 15:57:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent',
                openMenu: false
            }
        ],
    },
    {
        name: 'Federico',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent',
                openMenu: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received',
                openMenu: false
            }
        ],
    },
    {
        name: 'Davide',
        avatar: '_8',
        visible: true,
        messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received',
                    openMenu: false
                 },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent',
                    openMenu: false
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received',
                    openMenu: false
                }
            ],
        },
    ]
    },
    methods: {
        notShowNotifys(){
            this.showNotify = false;
        },
        toggleNotify(){
            this.showNotify = !this.showNotify;
        },
        changeUser(obj){
            this.currentContact = this.contacts.indexOf(obj);
        },
        getHour(str){
            let tmp = str;
            let newStr;
            tmp = tmp.split(" ").splice(1).join().split(":");
            newStr = tmp[0] + ":";
            if (tmp[1].length === 1){
                newStr+= "0" + tmp[1]
            }else{
                newStr+= tmp[1];
            }
            return newStr;
        },
        messageLastIndex(arr){
            return arr.length-1;
        },
        addMessage(){
            const temporanyIndex = this.currentContact;
            const now = new Date();
            let hour = now.getHours() + ":" +now.getMinutes() + ":" + now.getSeconds();
            const newMessageObj = {
                date : 'xx/xx/xxxx ' + hour,
                message: this.newMessage,
                status: 'sent'
            }
            this.contacts[temporanyIndex].messages.push(newMessageObj);
            this.newMessage = "";
            setTimeout(() => {
                const newNow = new Date();
                hour = newNow.getHours() + ":" +newNow.getMinutes() + ":" + newNow.getSeconds();
                const reply = {
                    date : '10/01/2020 ' + hour,
                    message: "OK",
                    status: 'received'
                }
                this.contacts[temporanyIndex].messages.push(reply);
            },2000);
        },
        filtList(array){
            if (this.filter === ""){
                array.forEach(element => {
                    element.visible = true;
                });
                this.filter = "";
                return;
            }
            this.filter = this.filter.toLowerCase();
            array.forEach(element => {
                let tmp = element.name.toLowerCase();
                if (!tmp.includes(this.filter)){
                    element.visible = false
                }
            })
            this.filter = "";
        },
        toggleMenu(obj){
            obj.openMenu = !obj.openMenu;
        },
        hideMenu(obj){
            obj.openMenu = false;
        },
        removeMessage(obj, index){
            console.log(obj)
            obj.messages.splice(index,1);
        }
    },
    computed: {
        
    }
})