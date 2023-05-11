({
  Entity: {},

  name: { type: 'string', unique: true },
  active: { type: 'boolean', default: true },
  Division: { type: 'Division', delete: 'restrict' },
});
