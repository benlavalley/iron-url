Package.describe({
  name: 'iron:url',
  summary: 'Url utilities and support for compiling a url into a regular expression.',
  version: '1.1.1',
  git: 'https://github.com/iron-meteor/iron-url'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@1.8.1');

  api.use('underscore');

  api.use('iron:core@1.0.12');
  api.imply('iron:core');

  api.add_files('lib/compiler.js');
  api.add_files('lib/url.js');
});

Package.on_test(function (api) {
  api.use('iron:url');
  api.use('tinytest');
  api.use('test-helpers');
  api.add_files('test/url_test.js', ['client', 'server']);
});
