const express = require("express");

const app = express();
const cors = require('cors');
const port = process.env.port || 5000 ;

app.use(cors());
const courses = require('./coursedata/coursedata.json');

const courseCategories = require('./coursedata/categories.json');


app.get('/courses',(req,res)=>{
    res.send(courses);
    console.log(courses);
});


app.get('/courseCategories',(req,res)=>{
    res.send(courseCategories);
    console.log(courseCategories);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(courses)
              console.log(courses)
    }
  
    else {
        const category_courses = courses.filter(n => n.category_id === id);
        res.send(category_courses);
        console.log(category-courses);
    }
})

app.listen(5000, ()=>console.log("server running on port 5000"));