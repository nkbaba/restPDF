var express = require('express');
var router = express.Router();

var global;



//First check the file to be copied
router.get('/pdftotext',function(req,res){
		var date = new Date();
		var current_hour = date.getHours();
		//Start recording the whole calculation
		console.log("===================================================================");
		console.log("\n"+date);
		console.time('\nCopyPDF');
		
		//require pdftotext utility
        var pdfUtil = require('pdf-to-text');
        var path = require('path');
        var someVar = req.query.fp;
    
    
        var http = require('https');
        var fs = require('fs');
        
		//Write a PDF file
        var file1 = fs.createWriteStream("/home/atgis/node/public/tempPDF2.pdf");
        var request = http.get(someVar, function(response) {
        response.pipe(file1);
        });
        
		res.send("Copying Done");
        console.log("pdf is copied \n \n");
		//Stop time and calculate the time taken
		console.timeEnd('CopyPDF');
});

//Now convert whole file in to text
router.get('/text',function(req,res){
    console.time('PDFtoTextConversion');
	console.log("\ntext file 1 \n");
	
    var pdfUtil = require('pdf-to-text');
        var path = require('path');
        var GData='';
        var filePath = path.join(__dirname, 'tempPDF2.pdf');

        console.log(filePath);

        var pdf_path = filePath;
        console.log("\ntext file 2 \n \n");
     
            
            // Read Data from File
            // Timeout
            setTimeout(function() {
                //console.log('Blah blah blah blah extra-blah');
            console.log(" \nAfter waiting \n");
                //Shell Script
            var sys = require('sys')
            var exec = require('child_process').exec;
            function puts(error, stdout, stderr) { sys.puts(error) }
            exec("pdftotext -raw ~/node/public/tempPDF2.pdf ~/node/public/temp.txt", puts);
            
            console.log("text file 3 \n \n ");
                
            }, 3000);
    
         res.send("Conversion Done");   
		 console.timeEnd('PDFtoTextConversion');
                       
});
router.get('/gettext',function(req,res){
			 console.time('sendResponse');
            fs = require('fs');
                    fs.readFile('/home/atgis/node/public/temp.txt', 'utf8', function (err,data) {
                          if (err) {
                               var path = require('path');
                              var filePath2 = path.join(__dirname, 'temp.txt');
                            return console.log(err+" "+filePath2);
                          }
                console.log("\ntext file 4 \n \n");
                  console.log(data);
                console.log("After printing data text file 5");
				var filePath1 = "/home/atgis/node/public/temp.txt" ; 
				fs.unlinkSync(filePath1);
				filePath1 = "/home/atgis/node/public/tempPDF2.pdf" ; 
				fs.unlinkSync(filePath1);
                res.send(data);
				console.log("\nFile sent back and deleted from server \n")
				console.timeEnd('PDFtoTextConversion');
				var date2 = new Date();
				console.log("\n"+date2);
				console.log("\n===================================================================");
				
                });
    });


module.exports = router;