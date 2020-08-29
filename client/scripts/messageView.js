var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%= username %>:</div><br>
        <div><%= text %></div>
      </div>
    `)
};

