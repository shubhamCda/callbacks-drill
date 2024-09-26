// import { make_directory } from "../problem_01.cjs";



const {make_directory,create_JSON_file, delete_JSON_file} = require("../problem_01.cjs");

make_directory(()=>{
    create_JSON_file(5, (files)=>{
        delete_JSON_file(files)
    });
});