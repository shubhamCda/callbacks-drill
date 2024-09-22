const fs = require("fs");
const path = require("path");

export function make_directory() {
    
    fs.mkdir("./JSON_files", { recursive: true }, (err) =>{
        if (err) {
            console.log(`Error: ${err}`);
            
        }else{
            console.log("directory created successfully...");
            create_JSON_file();
            
        }
    })
}

export function create_JSON_file() {
    fs.writeFile("./JSON_files/sample.json", "", (err) =>{
        if (err) {
            console.log(`Error: ${err}`);  
        }else{
            console.log("json file created successfully...");
            delete_JSON_file();
        }
    })
}

export function delete_JSON_file() {
    fs.unlink("./JSON_files/sample.json", (err) =>{
        if (err) {
            console.log(`Error: ${err}`);
        }else{
            console.log("file deleted successfully...");
            
        }
    });
}