var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var companySchema = new Schema({
    name: String,
    dbaName: String,
    ein : String,
    isActive: Boolean
});

var Company = mongoose.model('Company', companySchema);

module.exports = Company;