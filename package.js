Package.describe({
  summary: 'Trello client API.',
  version: '1.0.0',
  git: 'https://github.com/aknuds1/meteor-trello-client',
  name: 'aknudsen:trello-client',
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.use('jquery');
  api.addFiles([
    'lib/trello-client.js',
    'lib/api.js',
  ], 'client');
  api.export('Trello', 'client');
});
