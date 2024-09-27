const fs = require("fs");
const path = require("path");



function append_filenames(filenames, file, callback) {
    fs.appendFile(filenames, file + '\n', callback)
}

function read_source_files(input_file, callback) {
    fs.readFile(input_file, "utf-8", (err, data) => {
        if (err) {
            console.error(err);

        }
        callback(data);
    });
}

function convert_content_uppercase(data, path, callback) {
    const uppercase_content = data.toUpperCase();

    fs.writeFile(path, uppercase_content, (err) => {
        if (err) {
            console.error(err);

        }
        callback(path)
    });
}

function fileReader(path, callback) {
    fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
            console.error(err);

        }
        callback(data);
    })
}

function file_writer(path, data, callback) {
    fs.writeFile(path, data, callback);
}


function convert_content_lowercase(uppFile, lowFile, callback) {

    fileReader(uppFile, (data) => {
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

function sort_content(sortFilePath, lowFile, callback) {
    fileReader(lowFile, (data) => {
        const sorted_content = data.split(" ").sort((a, b) => a.localeCompare(b)).join("\n");

        file_writer(sortFilePath, sorted_content, (err) => {
            if (err) {
                console.error(`Error while storing file ${sortFilePath}: ${err}`);

            }
        })
        callback(sortFilePath);
    });
}


function delete_files(filesPath) {
    fileReader(filesPath, (file) => {
        const rmFile = file.split('\n');

        rmFile.map((link) => {
            fs.unlink(link, (err) => {
                if (err) {
                    console.error(`Error while deleting file ${link}: ${err}`);

                } else {
                    console.log("Successfully deleted...!");

                }
            });
        });
    });
}

module.exports = { read_source_files, convert_content_uppercase, append_filenames, convert_content_lowercase, sort_content, delete_files };