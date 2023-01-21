
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items =["Buy food","Eat food ","cook food"];
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.get("/",function(req,res){      //  "/" represent get request
    var today = new Date();
    var option={
        weekday:"long",
        day:"numeric",
        month:"long"

    }


    var day = today.toLocaleDateString("en-US",option);
  
    
    // switch (currentDay) {
    //     case 0:

    //         day="Sunday";
    //         break;
    //     case 1:
    //         day="Monday";
    //         break;
    //     case 2:
    //         day="Tuesday";
    //         break;
    //     case 3:
    //         day="Wednesday";
    //         break;
    //     case 4:
    //         day="Thursday";
    //         break;
    //     case 5:
    //         day="Friday";
    //         break;
    //     case 6:
    //         day="Saturday";
    //         break;
    
    //     default:
    //         console.log("Error current day is equal to"+currentDay);
            
    // }
    res.render("list.ejs",{KindOfDay:day , newListItems : items});
  

});

app.get("/about",function(req,res){
    res.render("about.ejs");
});
app.post("/",function(req,res){
     var item = req.body.newitem
     items.push(item)
    // console.log(item);
    // res.render("list.ejs",{newListItem : item});
    res.redirect("/") //this command will redirect to home route that is app.get()
}) 

app.listen(3000, function(){
    console.log("Server started on port 3000 ");     //-------> port is basically like a radio channel in which are server is tuned
});


