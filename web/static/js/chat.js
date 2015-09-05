import socket from './socket'

// Now that you are connected, you can join channels with a topic:
let channel = socket.channel("rooms:*", {})
channel.join()
  .receive("ok", resp => { console.log("Joined successfully", resp) })
  .receive("error", resp => { console.log("Unable to join", resp) })

// Take message provided in inputbox
$('#message-message').off("keypress").on("keypress", function(event) {
  if(event.keyCode == 13) {
    channel.push("message:new", {
      message: $('#message-message').val()
    })
    $('#message-message').val("")
  }
});
