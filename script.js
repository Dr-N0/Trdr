 var pullfiles=function(){ 
    // love the query selector
    var fileInput = document.querySelector("#file-to-upload");
    var files = fileInput.files;
    // cache files.length 
    var fl=files.length;
    var i=0;

    while ( i < fl) {
        // localize file var in the loop
        var file = files[i];
        alert(file.name);
        i++;
    }    
}


function email() {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: '',
        pass: ''
      }
    });
    
    
    var from,to,text;
    $("#send_email").click(function(){  
        to = $("#to").val();
        text = $("#content").val();
    });
    
    var mailOptions = {
          from: 'Trdr',
          to: 'Something went wrong!',
          subject: 'Trade Request',
          html: '<p>Something went wrong!</p>'
        };
    
    var identifier = $("#content").val();
    var identifierThree = $("#content-two").val();
    var identifierTwo = $("#to").val();
    
    //THIS IS THE PART WHERE YOU CHANGE HOW EVERY MESSAGE SENDS
    mailOptions.to = $("#to").val();
    mailOptions.html = '<h1 style="text-decoration: none; color: #00743F;"> This information trade request was sent by ' + identifierTwo + '</h1> <br> <a href="file:///Users/beckettjenen/Desktop/electron/addinfo.html" style="background-color: #00743F; color: white; border: 1px solid transparent; outline: none; padding-top: 15px; padding-bottom: 15px; padding-left: 20px; padding-right: 20px; font-size: 25px; border-radius: 50px; -ms-touch-action: manipulation; touch-action: manipulation; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; margin-right: 1%;">Accept</a> <a href="#" style="background-color: #00743F; color: white; border: 1px solid transparent; outline: none; padding-top: 15px; padding-bottom: 15px; padding-left: 20px; padding-right: 20px; font-size: 25px; border-radius: 50px; -ms-touch-action: manipulation; touch-action: manipulation; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;">Add More</a> <br> <h1 style="text-decoration: none; color: #00743F;"> Information to be traded </h1> <h2 style="color: black; text-decoration: none; -webkit-text-security: disc;">' + forge_sha256(identifier) + '</h2> <br> <h1 style="text-decoration: none; color: #00743F;"> Additional Information: </h1> <h2 style="color: black; text-decoration: none; -webkit-text-security: disc;">' + identifierThree + '</h2>';
    

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    $("#to").val("");
    $(".info-area").val("");
}

window.onload = function () { $("#money").hide(); $("#data").hide(); }

function showWindowI(){
    $("#info").show();
    $("#money").hide();
    $("#data").hide();
    $(".info-area").val("");
    $("#to").val("");
}

function showWindowM(){
    $("#money").show();
    $("#info").hide();
    $("#data").hide();
    $("#emailM").val("");
}

function showWindowD(){
    $("#data").show();
    $("#money").hide();
    $("#info").hide();
    $("#emailD").val("");
}

function clearEmail(){
    $("#email").val("");
}

function clearEmailM(){
    $("#emailM").val("");
}

function clearEmailD(){ 
    $("#emailD").val("");
}
