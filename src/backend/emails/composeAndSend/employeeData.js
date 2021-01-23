const AWS = require('aws-sdk');
const sendEmployeeDataEmail = (user, res, fullName) => {
    const data = {
        employeeName: fullName,
        employeeDataLink: `http://localhost:4200/`
    };

    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION_EMAIL
    });

    const ses = new AWS.SES({ apiVersion: '2010-12-01' });

    const params = {
        Source: "svashishtha90@gmail.com",
        Template: 'EmployeeDetails',
        Destination: {
            ToAddresses: [user.email]
        },
        TemplateData: JSON.stringify(data)
    };


    ses.sendTemplatedEmail(params, (err, data) => {
        if (err) {

            console.log(err, err.stack);
            throw err
        } else {
            console.log(params)
            console.log("Datta-->", data)

        }
    });
};

module.exports = {
    sendEmployeeDataEmail
};