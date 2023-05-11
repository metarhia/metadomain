({
  Entity: {},

  entity: '?Identifier',
  storage: {
    enum: ['master', 'cache', 'backup', 'replica'],
    default: 'master',
    index: true,
  },
  status: {
    enum: ['prealloc', 'init', 'actual', 'historical'],
    default: 'actual',
    index: true,
  },
  creation: { type: 'datetime', default: 'now' },
  change: { type: 'datetime', default: 'now' },
  locked: { type: 'boolean', default: false },
  version: { type: 'number', default: 0 },
  hashsum: { type: 'string', default: '' },
});
