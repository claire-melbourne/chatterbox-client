var FormView = {

  $form: $('form'),
  // this links the submit button to the handleSubmit function
  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    //message.Parse.create()

    // takes in the submission and puts the different inputs into the correct spots in messages and then sends it into Parse
    //
    // var message = {
    //   username: this.username,
    //   text: this.text,
    //   roomname: this.room
    // };

    // Stop the browser from submitting the form
    event.preventDefault();

    console.log('click!');


  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};