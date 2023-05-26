({
  Entity: {},

  name: { type: 'string', unique: true },
  active: { type: 'boolean', default: true },
  division: { type: 'Division', delete: 'restrict' },
});
