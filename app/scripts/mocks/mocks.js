'use strict';

var mockApp = angular.module('moz.cpd.mocks', ['moz.cpd', 'ngMockE2E']);
mockApp.run(function($httpBackend) {
      var countries = {
        countryCount: 2,
        countries: [{
            countryCode: "de",
            countryName: "Germany",
            numberOfMozillians: 100,
            averageContributionAge: 2.5,
            topSkills: [{
              name: "explaining",
              url: "https://mozillians.org/en-US/skill/explaining/",
              memberCount: 5
            }]
          }, {
            countryCode: "fr",
            countryName: "France",
            numberOfMozillians: 200,
            averageContributionAge: 1.5,
            topSkills: [{
              name: "explaining",
              url: "https://mozillians.org/en-US/skill/explaining/",
              memberCount: 2
            }]
        }]
    };

    $httpBackend.whenGET(/views\//).passThrough();

    $httpBackend.whenGET('/api/countries').respond(countries);
});
