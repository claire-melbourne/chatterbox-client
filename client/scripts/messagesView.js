var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.$chats.load(MessagesView.render);

  },

  render: function() {
    //is our object
    //run messageView.render on each message?
  },

  renderMessage: function(message) {
    MessagesView.$chats.append(`<div>${message}</div>`);
  }

};

