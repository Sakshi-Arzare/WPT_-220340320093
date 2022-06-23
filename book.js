let dbparams ={
    host:'localhost',
    user:'root',
    password:'cdac',
    database:'pleasework',
    port: 3306,
};
const mysql = require('mysql2');
const con = mysql.createConnection(dbparams);


const express = require('express');
const app = express();

app.use(express.static('abc'));








app.use(express.static('abc'));

app.get('/addBooks', function (req, res) {
    //let input =req.query.x;
    let input = { bookid:req.query.bookid,bookname:req.query.name,
    price:req.query.price};
    let output = false
    con.query('insert into book values (?.?.?)',[bookid,bookname,price],
        (error,res)=>{
            if(error)
            {
                console.log("error found" +error)
            }
            else if(res.affectedRows>o){
                    console.log(res.affectedRows);
                    output= true;
                }
                res.send(output);
            
        }
    
    );

    });




app.listen(8081, function () {
console.log("server listening at port 8081...");
});