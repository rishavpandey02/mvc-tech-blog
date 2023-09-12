const sequelize = require("../config/connection")
const {User,Post,Comment} = require('../models')

const users = [
    {
        username: "Sal",
        password: "password12345"
    },
    {
        username: "Lernantino",
        password: "password12345"
    },
    {
        username: "Amiko",
        password: "password12345"
    },

]

const post = [
    {
        title: "My first post",
        content: "meow",
        userId: 1
    },
    {
        title: "My second post",
        content: "woof",
        userId: 1
    },
    {
        title: "Lernantino's first post",
        content: "hi i'm Lernantino",
        userId: 2
    },
    {
        title: "Amiko's first post",
        content: "hi i'm Amiko",
        userId: 3
    },
]

const comments = [
    {
        body: "great post!",
        postId: 1,
        userId: 1
    },
    {
        body: "100% agree!",
        postId: 3,
        userId: 2
    },
    {
        body: "Great!!!!",
        postId: 4,
        userId: 1
    },
    {
        body: "Awesome!",
        postId: 2,
        userId: 3
    },

]

const plantSeeds = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await Post.bulkCreate(post);
        await Comment.bulkCreate(comments);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

plantSeeds()