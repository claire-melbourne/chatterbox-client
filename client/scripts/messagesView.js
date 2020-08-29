var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.$chats.load(MessagesView.render);
    $('.username').on( 'click', function() {
      Friends.toggleStatus();
    });
    $('.username').trigger('click');
  },

  render: function() {
    //is our object
    //run messageView.render on each message?
  },

  renderMessage: function(message) {
    MessagesView.$chats.append(`<div><h3 class="username">${message.username}</h3><br>
    <div>${message.text}</div></div>`);
  },

};

