(function () {
  'use strict';

  var express = require('express');
  var bodyParser = require('body-parser');
  var server = express();

  server.set('port', 1337);
  server.use(bodyParser.urlencoded({ extended: false }));

  var countryRoutes = require('./routes/countries.js');
  server.get('/availableCountries', countryRoutes.getAvailableCountries);
  
  server.listen(server.get('port'), function () {
    console.log('API server started on Port ' + server.get('port'));
  });
}());
