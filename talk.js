
var exec = require('child_process').exec;
var child;
var cmd_current_time = "say it is now `date '+%H hours %M minutes'`";

function create_cmd_say(text) {
  return 'say ' + text;
}

var cron = require('node-cron');

// cron.schedule('* * * * *', function(){
//   child = exec(cmd_current_time, function (error, stdout, stderr) {
//     console.log('stdout: ' + stdout);
//     if (error !== null) {
//       console.log('exec error: ' + error);
//     }
//   });
// });

var request = require('request');
request('https://talaikis.com/api/quotes/random/', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  if (response.statusCode == '200') {
    var quote = JSON.parse(body);
    child = exec(create_cmd_say(quote.quote), function (error, stdout, stderr) {

    });
  }
});