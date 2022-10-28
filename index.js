const express = require("express");

const app = express();
const cors = require('cors');
const port = process.env.port || 5000 ;

app.use(cors());
const courses = require('./coursedata/coursedata.json');

const categories = require('./coursedata/categories.json');

app.get('/',(req,res)=>{
    res.send('Yes working!');
    
});

app.get('/courses',(req,res)=>{
    res.send(courses);
    console.log(courses);
});

app.get('/courses/:id',(req,res)=>{
    const id = parseInt(req.params.id); // id url er
    const selectedCourses = courses.find(c => c.id===id);
    res.send(selectedCourses);
})


app.get('/course-categories',(req,res)=>{
    res.send(categories);
    console.log(categories);
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
});



app.listen(5000, ()=>console.log("server is running on port 5000"));

//export the express API

module.exports = app ;