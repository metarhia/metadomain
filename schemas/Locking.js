({
  Details: {},

  identifier: 'Identifier',
  session: 'Session',
  request: { type: 'datetime', index: true },
  start: { type: 'datetime', index: true },
  expire: { type: 'datetime', index: true },
  updates: { type: 'number', default: 0 },
});
