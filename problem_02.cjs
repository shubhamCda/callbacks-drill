const fs = require("fs");


// 1. Read the given file lipsum.txt
function read_file() {
    
    fs.readFile("/home/shubham/Desktop/JavaScript/callbacks/callbacks-drill/lipsum.txt", "utf-8", (err, result) =>{
        if (err) {
            console.log("Error: ", err);
            
        }else{
            console.log(result);
            convert__data_to_uppercase_and_write(result);
        }
    });


}

// 2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt

function convert__data_to_uppercase_and_write(res) {
    let uppercase_content = res.toUpperCase();
    // console.log(uppercase_content);
    
    fs.writeFile("/home/shubham/Desktop/JavaScript/callbacks/callbacks-drill/filenames.txt", uppercase_content, (err, result) =>{
        if (err) {
            console.log("Error: ", err);
        }else{
            console.log(`write successfull...`);
            
        }
        
    });

    fs.readFile("/home/shubham/Desktop/JavaScript/callbacks/callbacks-drill/lipsum.txt", "utf-8", (err, result) =>{
        if (err) {
            console.log("Error: ", err);
            
        }else{
            console.log(result);
            convert_data_to_lowercase(result);
        }
    });

   

}

function convert_data_to_lowercase(file) {
    const lowercase_file = file.toLowerCase();

    const sentences = lowercase_file.split(/(?<=[.!?])\s+/);

    fs.writeFile("/home/shubham/Desktop/JavaScript/callbacks/callbacks-drill/filenames.txt", sentences.join('\n'), (err) =>{
        if (err) {
            console.log("Error: ", err);
            
        }else{
            console.log("file written successfully...");
            
        }
    })
}

console.log(read_file());

// console.log(convert_data_to_lowercase());

