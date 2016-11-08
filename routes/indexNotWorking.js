var express = require('express');
var router = express.Router();

var global;




router.get('/pdftotext',function(req,res){
    
        var pdfUtil = require('pdf-to-text');
        var path = require('path');
        var someVar = req.query.fp;
    
    
        var http = require('https');
        var fs = require('fs');
        
        var file1 = fs.createWriteStream("~/node/public/tempPDF2.pdf");
        var request = http.get(someVar, function(response) {
        response.pipe(file1);
        });
        
       res.send("Copying Done");
        console.log("pdf is copied");
});


router.get('/text',function(req,res){
    console.log("text file one");
    var pdfUtil = require('pdf-to-text');
        var path = require('path');
        var GData='';
        var filePath = path.join(__dirname, 'tempPDF2.pdf');

        console.log(filePath);

        var pdf_path = filePath;
        console.log("text file 2");
     
            
            // Read Data from File
            // Timeout
            setTimeout(function() {
                //console.log('Blah blah blah blah extra-blah');
            console.log("After wait");
                //Shell Script
            var sys = require('sys')
            var exec = require('child_process').exec;
            function puts(error, stdout, stderr) { sys.puts(error) }
            exec("pdftotext -raw ~/node/public/tempPDF2.pdf ~/node/public/temp.txt", puts);
            
            console.log("text file 3");
                
            }, 3000);
    
         res.send("Conversion Done");   
                       
});
router.get('/gettext',function(req,res){
            fs = require('fs');
                    fs.readFile('/home/atgis/node	/public/temp.txt', 'utf8', function (err,data) {
                          if (err) {
                               var path = require('path');
                              var filePath2 = path.join(__dirname, 'temp,txt');
                            return console.log(err+" "+filePath2);
                          }
                console.log("text file 4");
                  console.log(data);
                console.log("After printing data text file 5");
				var filePath1 = "/home/atgis/node/public/temp.txt" ; 
				fs.unlinkSync(filePath1);
				filePath1 = "/home/atgis/node/public/tempPDF2.pdf" ; 
				fs.unlinkSync(filePath1);
                res.send(data);
				
				
                });
    });


module.exports = router;