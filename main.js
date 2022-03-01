const app = new Vue({
    el: '#root',
    data : {
        contacts : [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages:[
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'                    
                    }
                ]
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages:[
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'                    
                    }
                ]
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages:[
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages:[
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                ]
            },
        ],
        active:0,
        newMessage:"",
        mySearch : ''
    },
    methods: {
        contactActive (index) {
            this.active = index;
        },

        //funzione che manda il messaggio premendo invio
        sendMessage() {

            /*definisco un nuovo oggetto che sarà il nuovo messaggio da pushare
            dopo gli altri messaggi */
            const messageSent = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: this.newMessage,
                status: 'sent'
            };

            //pusha nuovo messaggio
            this.contacts[this.active].messages.push(messageSent);

            //reimposta il campo newMessage vuoto
            this.newMessage = "";


            //adesso creiamo un messaggio di risposta dopo un secondo

            const reply = {
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: "ok",
                status: 'received'
            };

            //arrow function nella funzione permette di mantenere lo scope
            //del this senza ricorrere al "let that = this;"
            setTimeout(() => {
                this.contacts[this.active].messages.push(reply);

            },1500);
        },

        searchContact() {
            this.contacts.forEach((element) => {
              if ( element.name.toLowerCase().includes(this.mySearch)) {
                  element.visible = true;
                } else {
                    element.visible = false;
                } 
                
            });
        },
            
    }

});
    
