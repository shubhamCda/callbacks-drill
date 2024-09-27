const fs = require("fs");
const path = require("path");

const folder = path.join(__dirname, "JSON_files");

function make_directory(callback) {

    fs.mkdir(folder, { recursive: true }, (err) => {
        if (err) {
            console.log(`Error: ${err}`);

        } else {
            console.log("directory created successfully...");
            callback();
        }
    })

}


function create_json_file(count, cb) {
    const files = [];

    for (let index = 1; index <= count; index++) {
        const json_file_path = path.join(folder, `JSON_file${index}.json`);
        fs.writeFile(json_file_path, JSON.stringify({ user: 'shubham' }), (err) => err);

        files.push(json_file_path)
    }
    cb(files);
}

function delete_json_file(paths) {


    paths.forEach(file => {
        fs.unlink(file, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("file deleted successfully....");

            }
        })
    });
}

module.exports = { make_directory, create_json_file, delete_json_file };