var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
  },

  renderRoom: function(room) {
    RoomsView.$select.append(`<option>${room}</option>`);
  }

};
//make a template to go into select:
//<option value='Room1'></option>
