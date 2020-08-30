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
    _.each(Messages, (message) => {
      var $currentMessage = MessageView.render(message);
      MessagesView.$chats.append($currentMessage);
    });
  },


  renderMessage: function(message) {
    MessagesView.$chats.append(`<div><h3 class="username">${message.username}</h3><br>
    <div>${message.text}</div></div>`);
  },

};

