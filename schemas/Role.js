({
  Entity: {},

  name: { type: 'string', unique: true },
  active: { type: 'boolean', default: true },
  unit: { type: 'Unit', delete: 'restrict' },
});
