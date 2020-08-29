var FormView = {

  $form: $('form'),
  // this links the submit button to the handleSubmit function
  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    //Parse.create();

    // Stop the browser from submitting the form
    event.preventDefault();

    console.log('click!');


  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};