({
  Registry: {},

  entity: { type: 'Entity', delete: 'cascade' },
  name: 'string',

  naturalKey: { unique: ['entity', 'name'] },
});
