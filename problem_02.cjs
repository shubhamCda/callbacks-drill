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
    
    const uppercase_file = "/home/shubham/Desktop/JavaScript/callbacks/callbacks-drill/upperCase.txt"
    fs.writeFile(uppercase_file, uppercase_content, (err, result) =>{
        if (err) {
            console.log("Error: ", err);
        }else{
            console.log(`write successfull...`);
           
            
        }
        
    });

    fs.writeFile("/home/shubham/Desktop/JavaScript/callbacks/callbacks-drill/filenames.txt", "upperCase.txt", (err) =>{
        if (err) {
            console.log(err);
            
        }else{
            console.log("Write successfull..");
            
        }
    })

    fs.readFile(uppercase_file, "utf-8", (err, result) =>{
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

    const new_lowercase_file = "/home/shubham/Desktop/JavaScript/callbacks/callbacks-drill/lowerCase.txt";

    const sentences = lowercase_file.split(/(?<=[.!?])\s+/);

    fs.writeFile(new_lowercase_file, sentences.join('\n'), (err) =>{
        if (err) {
            console.log("Error: ", err);
            
        }else{
            console.log("file written successfully...");

            
        }
    });

    fs.appendFile("/home/shubham/Desktop/JavaScript/callbacks/callbacks-drill/filenames.txt", '\n' + "lowerCase.txt " , (err) =>{
        if (err) {
            console.log(err);
            
        }else{
            console.log("Success....");
            
        }
    })
    
}

console.log(read_file());

// console.log(convert_data_to_lowercase());

