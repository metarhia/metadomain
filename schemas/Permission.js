({
  Relation: {},

  role: 'Role',
  identifier: 'Identifier',
  action: {
    type: 'string',
    enum: ['read', 'insert', 'update', 'delete', 'audit'],
    default: 'update',
  },

  naturalKey: { unique: ['role', 'identifier'] },
});
