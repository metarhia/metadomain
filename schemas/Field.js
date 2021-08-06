({
  Registry: {},

  category: { type: 'Category', delete: 'cascade' },
  name: 'string',

  naturalKey: { unique: ['category', 'name'] },
});
