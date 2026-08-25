const express=require("express");
const {graphqlHTTP}=require("express-graphql");
const {buildSechma}=require("graphql");

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
]