var configvalues = require("./config")

module.exports = {

    getDbConnectionString : function(){
        return mongodb+srv://customerservice_dev:<password>@cluster0-c3q9g.mongodb.net/test;
    }
}