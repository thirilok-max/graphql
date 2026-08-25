const express=require("express");
const port=5000;
const app=express();
app.use(express.json());
const {graphqlHTTP}=require("express-graphql");
const {buildSechma}=require("graphql");

// const mySechma=buildSechma(`
//     type User{
//     id:"ID",
//     name:"name",
//     email:"email",
//     password:"password"
// }`);
const User=[
    {
        id:"1",
        name:"thirilok",
        email:"thirilok@gmail.com",
        password:"thirilok@123"
    },
    {
        id:"2",
        name:"tharun",
        email:"tharun@gmail.com",
        password:"tharun@123"
    }
];


app.listen(port,()=>{
    console.log(`server is ruuning on http://localhost:${port}`)
})