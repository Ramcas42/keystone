var keystone = require('keystone');

keystone.init({
  'cookie secret': '123',
});

keystone.start();