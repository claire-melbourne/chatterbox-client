var FormView = {

  $form: $('form'),
  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var message = {
      roomname: 'lobby',
      text: FormView.$form.find('#message').val(),
      username: App.username
    };

    Parse.create(message, () => {
      Messages.unshift(message);
    });
    window.location.reload();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};