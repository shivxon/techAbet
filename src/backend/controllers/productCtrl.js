var User = require('../models/user')
var Product = require('../models/product');



const product = async(req, res) => {
    body = req.body
    var productDetails = new Product({
        product_title: body.name,
        price: body.phone,

    });

    let products = await productDetails.save();
    console.log("user -->", user)
    return res.status(200).json({ data: products, 'message': "data found" })

}



const userlogin = async(req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            if (req.body.password === user.encryptedPassword) {
                return res.status(200).send(user)
            }
        }
    } catch (error) {
        return res.status(400).send(error)
    }
}


const signup = async(req, res) => {
    try {
        var signupDetail = new User({
            name: req.body.data.name,
            email: req.body.data.email,
            encryptedPassword: req.body.data.password,
        });
        let error = signupDetail.validateSync();
        if (error) {
            return res.status(400).json({ 'message': error.errors });
        } else {
            let user = await signupDetail.save();
            return res.status(200).json({ 'message': 'sucess' });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json(error);
    }
}



const showProducts = async(req, res) => {
    try {

        let fetcheData = await Product.find({})
        console.log(fetcheData)
        if (fetcheData) {
            return res.status(200).send(fetcheData)
        }
    } catch (error) {
        return res.status(400).json(error);
    }
}


const singleProduct = async(req, res) => {
    let param = req.params.id
    console.log(param)
    try {
        let fetcheData = await Product.findById({ _id: param })
        if (fetcheData) {
            console.log(fetcheData)
            return res.status(200).send(fetcheData)
        }
    } catch (err) {
        return res.status(400).send(err)
    }
}

const deleteProduct = async(req, res) => {
    let body = req.body
    try {
        let fetcheData = await Product.findOneAndDelete({ _id: body.params })
        if (fetcheData) {
            return res.status(200).send({ message: 'succces' })
        }
    } catch (err) {
        return res.status(400).send(err)
    }
}



module.exports = {

    showProducts,
    singleProduct,
    deleteProduct,
    signup,
    userlogin,
    product
};