var express = require('express');
var router = express.Router();
var fs = require('fs');

const apiRoutes = [
  {
    key: 'getUsers',
    method: 'get',
    path: '/api/account/users'
  },
  {
    key: 'getAccountPlans',
    method: 'get',
    path: '/api/account/plans'
  }
];

registerAPIRoutes(apiRoutes);

function registerAPIRoutes(apiRoutes) {
  apiRoutes.forEach((apiRoute) => {
    switch(apiRoute.method) {
      case 'get':
        getAPI(apiRoute);
      break;
      default:
        console.error('The endpoint ' + apiRoute.path + 'does not exist');
      break;
    }
  });
}

function getAPI(apiRoute) {
  router.get(apiRoute.path, function (req, res) {
    const basePath = __dirname.replace('api/routes','');
    const data =  fs.readFileSync(basePath + apiRoute.path + '/data.json', 'utf8');
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(data);
    res.end();
  });
}

module.exports = router;
