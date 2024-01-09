const element = document.createElementById("rive");
var bot = new RiveScript();

// Load an individual file.
bot.loadFile("testsuite.rive").then(loading_done).catch(loading_error);

// All file loading operations are asynchronous, so you need handlers
// to catch when they've finished. If you use loadDirectory (or loadFile
// with multiple file names), the success function is called only when ALL
// the files have finished loading.
function loading_done() {
	
  element.id = "Bot has finished loading";

  // Now the replies must be sorted!
  bot.sortReplies();

  // And now we're free to get a reply from the brain!

  // RiveScript remembers user data by their username and can tell
  // multiple users apart.
  let username = "local-user";

  // NOTE: the API has changed in v2.0.0 and returns a Promise now.
  bot.reply(username, com).then(function(reply) {
    element.id = reply;
  });
}

// It's good to catch errors too!
function loading_error(error, filename, lineno) {
  console.log("Error when loading files: " + error);
}