var request = require('request');
var secrets = require('./secrets');

console.log('Welcome to the GitHub Avatar Downloader!');

var fs = require('fs');

var user = [...process.argv].slice(2);

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'rafaelgavabarreto',
      'Authorization': 'token ' + secrets.GITHUB_TOKEN
    }
  };
  request(options, function(err, res, body) {
    cb(err, body);
  });
}

function downloadImageByURL(url, filePath) {
  request.get(url)
    .on('error', function(err) {
      throw err;
    })
    .on('response', function(response) {
      console.log('Response Status Code: ', response.statusCode);
    })
    .pipe(fs.createWriteStream(filePath));
}


getRepoContributors(user[0], user[1], function(err, result) {

  var arrayUsers = JSON.parse(result);

  for (i = 0; i < arrayUsers.length; i++) {
    downloadImageByURL(arrayUsers[i].avatar_url, './avatars/' + arrayUsers[i].login + '.jpg');
  }

});