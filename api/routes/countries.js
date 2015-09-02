'use strict';

var config = require('../config.js').config;

exports.getAvailableCountries = function (req, res) {
    var response = {};
    response.countryCount = config.countries.length;
    response.countries = config.countries;
    res.json(response);
};
