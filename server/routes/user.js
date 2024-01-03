const router = require("express").Router();
const {User, validate} = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async(req, res) => {
    try {
        const {error} = validate(req.body);
        if (error) {
            return res.status(400).send({message: error.message});
        }

        const user = await User.findOne({email: req.body.email});
        if (user) {
            return res.status(409).send({message: "User with Given Email Already Exist!"})
        }

        const salt = await bcrypt.genSalt(Mumber(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({...req.body, password:hashPassword}).save();
        res.status(201).send({message: "User Created Successfully"});
    }
    catch (error) {
        res.status(500).send({message: "Internal Service Error"})
    }
})

module.exports = router;