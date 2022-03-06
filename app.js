const app = new Vue({
  el: '#app',
  data: {
    // Array oggetti
    activeChat: null,
    writeInputValue: '',
    searchInputValue: '',
    contacts: [
      {
        name: 'Michele',
        avatar: 'https://picsum.photos/60/60',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent',
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received',
          },
        ],
      },
      {
        name: 'Fabio',
        avatar: 'https://picsum.photos/61/61',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent',
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received',
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent',
          },
        ],
      },
      {
        name: 'Samuele',
        avatar: 'https://picsum.photos/62/62',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received',
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent',
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received',
          },
        ],
      },
      {
        name: 'Luisa',
        avatar: 'https://picsum.photos/63/63',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent',
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received',
          },
        ],
      },
    ],
  },
  methods: {
    selectChat: function (el) {
      if (el !== null) this.activeChat = el;
    },
    addMessage: function (chat, text, sent) {
      const message = {
        date: new Date(),
        text: text,
        status: 'received',
      };

      if (sent) {
        message.status = 'sent';
      }

      chat.messages.push(message);
    },
    generateAnswer: function (chat) {
      setTimeout((el) => {
        this.addMessage(chat, 'ok', false);
      }, 2000);
    },
    filterContacts: function () {
      if (this.searchInputValue === '') {
        this.contacts.forEach((el) => {
          el.visible = true;
        });
      } else {
        this.contacts.forEach((el) => {
          const name = el.name.toLowerCase();
          const filter = this.searchInputValue.toLowerCase();

          if (name.includes(filter)) {
            el.visible = true;
          } else {
            el.visible = false;
          }
        });
      }
    },
  },
  mounted() {
    this.selectChat(this.contacts[0]);
  },
});
