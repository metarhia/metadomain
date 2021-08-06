({
  Details: {},

  session: { type: 'Session', delete: 'cascade' },
  hashsum: 'string',
  created: { type: 'datetime', default: 'now' },
  query: 'json',
  version: { type: 'number', default: 0 },
});
