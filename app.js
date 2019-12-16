var express = require('express');

var app = express();

var mongoose = require('mongoose');

var port = process.env.PORT || 4700;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect('mongodb://customerservice_dev:Customer1@cluster0-shard-00-00-c3q9g.mongodb.net:27017,cluster0-shard-00-01-c3q9g.mongodb.net:27017,cluster0-shard-00-02-c3q9g.mongodb.net:27017/tepassword?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority');

var comp = require('./model/company');

app.get("/api", function(req, res){

    var companies = [{ name: 'techCompany',
        dbaName: 'tech Company',
        ein : '929283883',
        isActive: true}, { name: 'innovativeComp',
            dbaName: 'tech group',
            ein : '928373737',
            isActive: true}];
            
            comp.create(companies, function(err, results) {
                res.send(results);
            })
   
})

app.listen(port);