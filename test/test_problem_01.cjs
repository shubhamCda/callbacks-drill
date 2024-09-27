// import { make_directory } from "../problem_01.cjs";



const { make_directory, create_json_file, delete_json_file } = require("../problem_01.cjs");

make_directory(() => {
    create_json_file(5, (files) => {
        delete_json_file(files)
    });
});