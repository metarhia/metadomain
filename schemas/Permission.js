({
  Relation: {},

  role: { type: 'Role', delete: 'cascade' },
  identifier: { type: 'Identifier', delete: 'cascade' },
  action: {
    type: 'string',
    enum: ['read', 'insert', 'update', 'delete', 'audit'],
    default: 'update',
  },

  naturalKey: { unique: ['role', 'identifier'] },
});
