/*
    code is used to make a server

*/

// var http = require("http");

// http.createServer(function (request, response) {
//     // Send the HTTP header
//     // HTTP Status: 200 : OK
//     // Content Type: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});

//     // Send the response body as "Hello World"
//     response.end('Hello World\n');
//  }).listen(8080);

//  // Console will print the message
//  console.log('Server running at http://127.0.0.1:8080/');

/* this is blocking Code .. */

// var fs = require("fs");
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());

// console.log("Program Ended");

/* This is non blocking Code.. */

var fs = require("fs");
// fs.readFile('input.txt', (err,data)=>{
//     if(err){
//         return console.log(err);
//     }else{
//         return console.log(data.toString());
//     }
// });
// const readline = require("readline");
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//   var name =  rl.question("Enter your name : ",function (name) {
//       fs.appendFile('input.txt', "my name is "+ name, function(err){
//           if(err){ console.log(err);}
//           else{
//               console.log("Text appended...");
//               rl.close();
//               console.log("Program Ended");
//             }
//         });
//   });

/* code to replace string from file.. */

function readFile(filename) {
    fs.readFile(filename, (err, data) => {
        if (err) {
            return console.log(err);
    } else {
      var consonants = ["a", "e", "i", "o", "u"];
      var count = 0;
      var newContent = data;
      consonants.forEach((element ,i )=> {
        newContent = newContent.toString().replace(element, '');
        });
        if(fs.writeFile(filename, newContent, (err) => { 
          if (err) 
            console.log(err); 
          else { 
            console.log("File written successfully\n"); 
            console.log("The written has the following contents:"); 
            console.log(fs.readFileSync(filename, "utf8")); 
          } 
      // if(consonants.includes(String.fromCharCode(element))){
      // }
    }));
  }
});
}

/* code to copy file.. */
function coptFile() {
fs.copyFile('file1.txt', 'file2.txt', (err) => {
    if (err) throw err;
    console.log('file1.txt was copied to file2.txt');
  });
}


var nodemailer = require('nodemailer');

var smtpConfig = {
    host: 'mail.mailtest.radixweb.net',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'testphp@mailtest.radixweb.net',
        pass: 'Radix@web#8'
    }
};
var transporter = nodemailer.createTransport(smtpConfig);

var mailOptions = {
  from: 'testphp@mailtest.radixweb.net',
  to: 'jaynesh.mehta@radixweb.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});



/* EVENTS */

// var events = require("events");

// var eventEmitter = new events.EventEmitter();
