var Employee = require('../models/employee');
const { sendEmployeeDataEmail } = require('../emails/composeAndSend/employeeData')


const employee = async(req, res) => {
    body = req.body
    image = req.body.profile_image

    var employeeDetails = new Employee({
        name: body.name,
        age: body.age,
        image: image,
        phone: body.phone,
        email: body.email,
        salary: body.salary

    });

    let user = await employeeDetails.save();
    sendEmployeeDataEmail(user, res, body.name)
    console.log("user -->", user)
    return res.status(200).json({ data: user, 'message': "data found" })

}



const showEmployees = async(req, res) => {
    try {

        let fetcheData = await Employee.aggregate([

            { "$match": { "salary": { "$lt": "15000", "$gt": "10000" } } }
        ])
        console.log(fetcheData)
        if (fetcheData) {
            return res.status(200).send(fetcheData)
        }
    } catch (error) {
        return res.status(400).json(error);
    }
}


const showSingleEmployees = async(req, res) => {
    let param = req.params.id
    console.log(param)
    try {
        let fetcheData = await Employee.findById({ _id: param })
        if (fetcheData) {
            console.log(fetcheData)
            return res.status(200).send(fetcheData)
        }
    } catch (err) {
        return res.status(400).send(err)
    }
}

const deleteEmployee = async(req, res) => {
    let body = req.body
    try {
        let fetcheData = await Employee.findOneAndDelete({ _id: body.params })
        if (fetcheData) {
            return res.status(200).send({ message: 'succces' })
        }
    } catch (err) {
        return res.status(400).send(err)
    }
}
const EditedEmployeesDetails = async(req, res) => {
    let body = req.body
    console.log(body)
    let param = req.body.params.id
    try {
        let fetcheData = await Employee.findById({ _id: param })
        if (fetcheData) {
            fetcheData.name = body.form.name
            fetcheData.age = body.form.age
            fetcheData.phone = body.form.phone
            fetcheData.salary = body.form.salary
            fetcheData.email = body.form.email
            fetcheData.image = body.form.profile_image
            await fetcheData.save();
            return res.status(200).send({ message: 'succces' })
        }
    } catch (err) {
        return res.status(400).send(err)
    }
}




module.exports = {
    employee,
    showEmployees,
    showSingleEmployees,
    deleteEmployee,
    EditedEmployeesDetails
};