const fs = require("fs");
const path = require("path");

const input_file = path.join(__dirname, "lipsum.txt");
 
const filenames = path.join(__dirname, "filenames.txt");


function append_filenames(file, callback) {
    fs.appendFile(filenames, file + '\n', callback)
}

function async_function() {

    // 1. Read the given file lipsum.txt
    fs.readFile(input_file, "utf-8", (err, result) =>{
        if (err) {
            console.log(err);
            
        }
        
        // 2. Convert the content to uppercase & write to a new file: uppercase.txt. 
        const uppercase_content = result.toUpperCase();
        const uppercase_file = "uppercase.txt";

        fs.writeFile(uppercase_file, uppercase_content, (err) =>{
            if (err) {
                console.log(err);
                
            }
            // Store the name of the new file: uppercase.txt in filenames.txt
            append_filenames(uppercase_file, (err) =>{
                if (err) {
                    console.log(err);
                    
                }
                const lowercase_file = "lowercase.txt";
                // 3. Read the new file: uppercase.txt and convert it to lower case.
                fs.readFile(uppercase_file, "utf-8", (err, data_uppercase) =>{
                    if (err) {
                        console.log(err);
                        
                    }
                    const lowercase_content = data_uppercase.toLowerCase();

                    // split the contents into sentences.Then write it to a new file: lowercase.txt.
                    const sentences = lowercase_content.match(/[^.!?]+[.!?]+/g) || lowerCaseContent.split('\n');

                    fs.writeFile(lowercase_file, sentences.join(' '), (err) =>{
                        if (err) {
                            console.log(err);
                            
                        }
                        // Store the name of the new file: lowercase.txt in filenames.txt
                        append_filenames(lowercase_file, (err) =>{
                            if (err) {
                                console.log(err);
                                
                            }
                            const sorted_file = "sorted.txt";
                            // 4. Read the new files: lowercase.txt, sort the content, write it out to a new file: sorted.txt;.
                            fs.readFile(lowercase_file, "utf-8", (err) =>{
                                if (err) {
                                    console.log(err);
                                    
                                }

                                const sorted_content = lowercase_file.split(' ').sort().join(' ');

                                fs.writeFile(sorted_file, sorted_content, (err) =>{
                                    if (err) {
                                        console.log(err);
                                        
                                    }

                                    append_filenames(sorted_file, (err) =>{
                                        if (err) {
                                            console.log(err);
                                            
                                        }

                                        // 5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.

                                        fs.readFile(filenames, "utf-8", (err, filename_content) =>{
                                            if (err) {
                                                console.log(err);
                                                
                                            }
                                            const delete_file_data = filename_content.split('\n').filter(Boolean);

                                            delete_file_data.forEach((file) =>{
                                                fs.unlink(file, (err) =>{
                                                    if (err) {
                                                        console.log(`${err} deleting file: ${file}`);
                                                        
                                                    }else{
                                                        console.log(`Deleted ${file} successfully...`);
                                                        
                                                    }
                                                });
                                            });
                                        });

                                    });
                                });
                            });
                        });
                    });
                });

            });
        });

        
    });   
}

module.exports = async_function;

