// import mysql from 'mysql2'
const mysql = require('mysql2');
// const pool = mysql.createPool({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'password',
//   database: 'notes_app'
// }).promise();

// const result = await pool.query("SELECT * FROM notes");
// console.log(result);



const db_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'blogDB'
});

//connect db
db_connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Mysql");
});















// export async function getNotes() {
//   const [rows] = await pool.query("SELECT * FROM notes")
//   return rows
// }

// export async function getNote(id) {
//   const [rows] = await pool.query(`
//   SELECT * 
//   FROM notes
//   WHERE id = ?
//   `, [id])
//   return rows[0]
// }

// export async function createNote(title, contents) {
//   const [result] = await pool.query(`
//   INSERT INTO notes (title, contents)
//   VALUES (?, ?)
//   `, [title, contents])
//   const id = result.insertId
//   return getNote(id)
// }