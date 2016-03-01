var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = ' d7120b53c3a7e30';

module.exports = window.api = {
  get: function (url) {
    return fetch(rootUrl+url, {
      headers: {
        'Authorization': 'ClIENT-ID '+ apiKey
      }
    })
    .then(function (response) {
      return response.json();
    });
  }
};
