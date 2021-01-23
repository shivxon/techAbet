const AWS = require('aws-sdk');
const { listOfTemplates } = require('./config');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION_EMAIL
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

listOfTemplates.forEach(async template => {
    if (template.create) {
        ses.createTemplate(template.params, (error, data) => {
            console.log(data);
            console.log('cnjdsjnhfhh')
            console.log(error);
        });
    } else if (template.update) {
        ses.updateTemplate(template.params, (error, data) => {
            console.log('cnjdsjn')
            console.log(data);
            console.log(error);
        });
    }
});