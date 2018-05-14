var request = require('request');
var fs = require('fs');

request.get('https://avatars2.githubusercontent.com/u/192451?v=4')
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    console.log('Response Status Code: ', response.statusCode);
  })
  .pipe(fs.createWriteStream('./avatars/timmywil.jpg'));


/*
https: //avatars3.githubusercontent.com/u/37745408?s=400&v=4
  https: //avatars3.githubusercontent.com/u/36269789?s=400&u=9a92166b205c97cebe73e3d56a11d9ca9405be1b&v=4

  curl - u rafaelgavabarreto: dc4473aaf6bc750fa1f7fec13adf7414f7b3f7d9 - I https: //api.github.com/users/lighthouse-labs
*/