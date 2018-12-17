var keystone = require("keystone");

keystone.init({
  "cookie secret": "123",
  "name": "Mestiza",
  "user model": "User",
  "auto update": "true",
  "auth": true,

});

keystone.import("models");
keystone.start();