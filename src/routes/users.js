const express = require('express')

const router_user = express.Router()


router_user.get('/users' , (req, res) => {
    const users = [
        {name: "Jonh Doe", mail: "jonh@mail.com"}
    ];
    
     res.status(200).json(users);
    });

    
router_user.post('/users', (req, res) =>{
    res.status(201).json(req.body);
});


module.exports = router_user

