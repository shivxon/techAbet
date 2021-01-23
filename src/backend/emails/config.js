const fs = require('fs');

const listOfTemplates = [{
    params: {
        Template: {
            TemplateName: 'EmployeeDetails',
            SubjectPart: 'Employee Data',
            HtmlPart: String(fs.readFileSync(`./src/backend/emails/templates/employee.html`))
        }
    },

    update: true,
    create: true

}];

module.exports = {
    listOfTemplates
};