const path = require("path");


const input_file_path = path.join(__dirname, "lipsum.txt");
const uppercase_file_path = path.join(__dirname, "upperCase.txt");
const lowercase_file_path = path.join(__dirname, "lowerCase.txt");
const sorted_file_path = path.join(__dirname, "sorted.txt");
const filenames_path = path.join(__dirname, "filenames.txt");



const { read_source_files, convert_content_uppercase, append_filenames, convert_content_lowercase, sort_content, delete_files } = require("../problem_02.cjs");




read_source_files(input_file_path, (data) =>{
    convert_content_uppercase(data, uppercase_file_path, (filePath) =>{
        append_filenames(filenames_path, filePath, () =>{
            convert_content_lowercase(uppercase_file_path, lowercase_file_path, (filePath) =>{
                append_filenames(filenames_path, filePath, () =>{
                    sort_content(sorted_file_path, lowercase_file_path, (filePath) =>{
                        append_filenames(filenames_path, filePath, () =>{
                            delete_files(filenames_path);
                        })
                    })
                });
            });
        });
    });
    
});
