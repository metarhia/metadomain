({
  Journal: { scope: 'local', allow: 'append' },

  identifier: 'Identifier',
  account: 'Account',
  server: 'Server',
  action: 'string',
  dateTime: { type: 'datetime', default: 'now' },
  ip: 'ip',
  details: 'json',
});
