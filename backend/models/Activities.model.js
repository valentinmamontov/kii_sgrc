const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const activitiesSchema = new Schema({
    id: {
        type: String,
    },
    category: {
        type: String,
    },
    title: {
        type: String,
    },
    critical_status: {
        type: String,
    },
    owner_proccess: {
        type: String,
    }, //[] должен быть
    security_administrator: {
        type: String,
    },
    security_auditor: {
        type: String,
    },
    control_manager_compliance: {
        type: String,
    },
    description: {
        type: String,
    }
}, {
    timestamps: true
});


const Activities = mongoose.model('Activities', activitiesSchema)
//const Company = mongoose.model('Company', companySchema, 'company')

module.exports = Activities