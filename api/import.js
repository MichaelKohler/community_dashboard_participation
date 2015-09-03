(function () {
  'use strict';
  
  var request = require('request');
  var config = require('./config.js').config;
  var ENDPOINT = config.endpoint;
  var API_KEY = process.argv[2];
  
  if (!API_KEY || API_KEY === '') {
    console.log('Usage: ' + process.argv[0] + ' ' + process.argv[1] + ' YOURKEY');
    return;
  }
  
  config.countries.forEach(function (country) {
    getMozillianInfo(country);
    getSkillsPerCountry(country);
  });
  
  function getMozillianInfo(country) {
    var totalMozillians = 0;
    var averageContributionAge = 0;
    var queryURL = ENDPOINT + 'users/?api-key=' + API_KEY + '&country=' +
                    country.name + '&is_vouched=True&format=json';
    
    request(queryURL, function (error, response, body) {
      if (error) handleError(error);
      
      if (response.statusCode == 200) {
        var parsedResponse = JSON.parse(body);
        totalMozillians = parsedResponse.count;
      }
      
      // TODO: iterate through all the "next" pages as well
      
      
      // TODO: get contribution age for every single mozillian returned and
      // calculate average
      
      // gather everything together so we can save it to the db
      saveResultsToDB({
        countryCode: country.countryCode,
        numberOfMozillians: totalMozillians,
        averageContributionAge: averageContributionAge,
        fetchDate: Date.now()
      }, 'mozillian_userdata');
    });
  }
  
  function getSkillsPerCountry(country) {
    // TODO: get top skills per country, this is hard to do currently
    // since the user endpoint doesn't provide skills, so we need to
    // go through every single skill to match member users to countries
    // and count them
    
    var topSkills = [];
    
    saveResultsToDB({
      countryCode: country.countryCode,
      topSkills: topSkills
    }, 'mozillian_skills');
  }
  
  function saveResultsToDB(results, tableName) {
    // TODO: save country data as a single record to the db
    console.log('saving to DB, table: ' + tableName);
    console.log(results);
  }
  
  function errorHandler(e) {
    console.error(e);
    return;
  }
}());
