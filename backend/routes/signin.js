const User = require('../models/Users')
const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


router.post('/signup', (req,res)=> {
    var { firstName, lastName, username, password }=req.body
    console.log(req.body)
    if( !firstName || !lastName || !username || !password )
    {
        return res.status(200).json({error:"Add all data"})
    }
    bcrypt.hash(password, 12)
    .then((hashedpw) => {
        User.findOne({ username: username })
        .then((savedUser) => {
            if (savedUser) {
                 return res.status(422).json({error:"User already exists with that username"})
            }
            const user=new User({
             firstName,
             lastName,
             username,
             password: hashedpw,
         })
         user.save()
         .then((user)=>{
             res.json({message:"Saved Successfully"})
             console.log(user.email)
         })
         .catch((err)=>{
             console.log(err)
         })
    })
    .catch((err)=>{
        console.log(err)
    })   

})
.catch((err)=>{
    console.log(err)
    })
})

router.post('/login', (req,res) => {
    var { username, password } = req.body
    if(!username || !password )
    {
        return res.status(422).json({error:"Please add all fields"})
    }
    User.findOne({ username: username })
    .then((savedUser) => {
        if(!savedUser){
            return res.status(422).json({ error:"Invalid username or password" })
       }
        bcrypt.compare(password, savedUser.password)
        .then(match => {
            if (match)
            {
                const token = jwt.sign({ _id: savedUser._id }, 'JWT_SECRET')
                res.json({ token: token })
                window.location = '/ChoreList';
            }
            else{
                return res.status(422).json({error:"Invalid username or password"})
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    })
})

module.exports = router




// router.post('/signin', async (req, res) => {
//     const user = User.find( user => user.username = req.body.username)
//     if (user == null) {
//         return res.status(400).send('Cannt find user')
//     }
//     try {

//     }
// })


// router.post('/signup', (req, res) => {
//     const signedUpUser = new User({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         username: req.body.username,
//         password: req.body.password 
//     })

//     signedUpUser.save()
//     .then(data => {
//         res.json(data)
//     })
//     .catch(error => {
//         res.json(error)
//     })
// })





























// module.exports = (app) => {


// app.post('/api/account/signup', (req, res, next) => {
//     const { body } = req;
//     const {
//         firstName, 
//         lastName,
//         username,
//         password
//     } = body;

//     if (!firstName) {
//         return res.end({
//             success: false,
//             message: 'Error: First name cannot be blank.'
//         });
//     }

//     if (!lastName) {
//         return res.end({
//             success: false,
//             message: 'Error: Last name cannot be blank.'
//         });
//     }

//     if (!password) {
//         return res.end({
//             success: false,
//             message: 'Error: Password cannot be blank'
//         });
//     }

//     if(!username) {
//         return res.end({
//             success: false,
//             message: 'Error: Username cannot be blank'
//         });
//     }

//     username = username.toLowerCase();

//     User.find({

//     }, (err, previousUsers) => {
//         if (err) {
//             return res.end({
//                 success: false,
//                 message: 'Error: Server Error'
//             })
//         } else if (previousUsers.length > 0){
//             return res.end({
//                 success: false,
//                 message: 'Error: Username alreay exists'
//             })
//         }
        
//         const newUser = new User();

//         newUser.username = username;
//         newUser.firstName = firstName;
//         newUser.lastName = lastName;
//         newUser.password = newUser.generateHash(password);
//         newUser.save((err, user) => {
//             if(err) {
//                 return res.end({
//                     success: false,
//                     message: 'Error: Server error'
//                 })
//             }

//             res.end({
//                 success: true,
//                 message: 'Signed Up!'
//             })
//         })
//     })

//   });

// }