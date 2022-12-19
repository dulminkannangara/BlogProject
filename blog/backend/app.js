const express = require('express');
const app = express();  // requesting data from server and send data to server --> GET, POST, ...
const cors = require('cors');
const bodyParser = require('body-parser');


//db connection
const mysql = require('mysql2');
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
    console.log("Mysql Connected");
});





//middleware --> Fixing cros oregin error
app.use(cors());
app.options('*',cors);

//Bodyparser middleware for pass body in post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));




//get the posts data
app.get('/api/posts',(req,res,next)=>{

    let sql = "SELECT * FROM posts";
    let query = db_connection.query(sql,(err,result)=>{
        if(err) throw err;
        res.status(200).json({
                message: 'post fetched successfully',
                posts: result
        })
    });

});


// posting data
app.post('/api/posts',(req, res, next)=>{
    const post = req.body;
    let data = {title: post.title, content: post.content,date_Time:new Date()};
    
    let sql = "INSERT INTO posts SET ?";
    let query = db_connection.query(sql,data,(err,result)=>{
        if(err) throw err;
        console.log(result);
        
        res.status(200).json({
            message: 'post added successfully'
        })
    });
   
});

//delete post
app.delete('/api/post/delete/:id',(req, res, next)=>{
    const p_id = req.params.id;
    let sql = "DELETE FROM posts WHERE id="+p_id;
    let query = db_connection.query(sql,(err,result)=>{
        if(err) throw err;
        
        let sql2 = "SELECT * FROM posts";
        let query2 = db_connection.query(sql2,(err,result)=>{
            if(err) throw err;
            res.status(200).json({
                    message: 'post fetched successfully',
                    posts: result
            })
        });
    });

   
});


// update data
app.patch('/api/posts',(req, res, next)=>{
    const post = req.body;
    let data = {title: post.title, content: post.content,date_Time:new Date()};
    
    let sql = "UPDATE posts SET ? WHERE id="+post.id;
    let query = db_connection.query(sql,data,(err,result)=>{
        if(err) throw err;
        
        let sql2 = "SELECT * FROM posts";
        let query2 = db_connection.query(sql2,(err,result)=>{
            if(err) throw err;
            res.status(200).json({
                    message: 'post fetched successfully',
                    posts: result
            })
        });
    });

   
});

module.exports =app;