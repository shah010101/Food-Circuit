import express from "express"
import cors from "cors"











// app config 

const app=express();
const port=4000;


// add middleware 
app.use(express.json()); // using this middle ware whenever we get the request from the forntend to backend that will be parsed using this JSON
app.use(cors()); // using this we can acess the backend from any frontend 



app.get('/',(req,res)=>{
    res.send("api working ");
})






// run the express server 

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})