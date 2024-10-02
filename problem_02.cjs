const fs = require("fs");
const path = require("path");

/*
    Problem 2:
    Using callbacks and the fs module's asynchronous functions.   
           
        
*/

const input_file_path = path.join(__dirname, "lipsum.txt");
const uppercase_file_path = path.join(__dirname, "upperCase.txt");
const lowercase_file_path = path.join(__dirname, "lowerCase.txt");
const sorted_file_path = path.join(__dirname, "sorted.txt");
const filenames_path = path.join(__dirname, "filenames.txt");


function problem_02_callbacks() {
    file_reader(input_file_path, (data) => {
        convert_content_uppercase(data, uppercase_file_path, (filePath) => {
            append_filenames(filenames_path, filePath, () => {
                convert_content_lowercase(uppercase_file_path, lowercase_file_path, (filePath) => {
                    append_filenames(filenames_path, filePath, () => {
                        sort_content(sorted_file_path, lowercase_file_path, (filePath) => {
                            append_filenames(filenames_path, filePath, () => {
                                delete_files(filenames_path);
                            })
                        })
                    });
                });
            });
        });

    });
}


// Store the name of the new file in filenames.txt
function append_filenames(filenames, file, callback) {
    fs.appendFile(filenames, file + '\n', callback)
}

// 1. Read the given file lipsum.txt
function file_reader(sourcePath, callback) {
    fs.readFile(sourcePath, "utf-8", (err, data) => {
        if (err) {
            console.error(err);

        }
        callback(data);
    })
}


function file_writer(destinationPath, data, callback) {
    fs.writeFile(destinationPath, data, callback);
}


// 2. Convert the content to uppercase & write to a new file.
function convert_content_uppercase(data, destinationPath, callback) {
    const uppercase_content = data.toUpperCase();

    fs.writeFile(destinationPath, uppercase_content, (err) => {
        if (err) {
            console.error(err);

        }
        callback(destinationPath)
    });
}



// 3. Read the new file and convert it to lower case. Then split the contents into sentences.Then write it to a new file.
function convert_content_lowercase(uppFile, lowFile, callback) {

    file_reader(uppFile, (data) => {
        const lowercase_content = data.toLowerCase();
        const sentences = lowercase_content.match(/[^.!?]+[.!?]+/g) || lowercase_content.split('\n');
        file_writer(lowFile, sentences.join(' '), (err) => {
            if (err) {
                console.error(`Error while storing data in file ${lowFile}: ${err}`);

            }
            console.log("Data saved successfully...!");

        });
        callback(lowFile);
    });
}


// 4. Read the new files, sort the content, write it out to a new file.
function sort_content(sortFilePath, lowFile, callback) {
    file_reader(lowFile, (data) => {
        const sorted_content = data.split(" ").sort((a, b) => a.localeCompare(b)).join("\n");

        file_writer(sortFilePath, sorted_content, (err) => {
            if (err) {
                console.error(`Error while storing file ${sortFilePath}: ${err}`);

            }
        })
        callback(sortFilePath);
    });
}


// 5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
function delete_files(filesPath) {
    file_reader(filesPath, (file) => {
        const rmFile = file.split('\n');

        rmFile.forEach(link => {
            if (link !== '') {

                fs.unlink(link, (err) => {
                    if (err) {
                        console.log(err);

                    } else {
                        console.log("Deleted successfully..!");

                    }
                });
            }
        });
    });
}

module.exports = { problem_02_callbacks };


