({
  Registry: {},

  parent: '?Catalog',
  name: { type: 'string', index: true },
  entities: { many: 'Identifier' },

  naturalKey: { unique: ['parent', 'name'] },
});
