({
  Registry: { realm: 'global', allow: 'append' },

  name: { type: 'string', unique: true },
  kind: {
    enum: [
      'entity',
      'registry',
      'dictionary',
      'journal',
      'details',
      'relation',
      'view',
      'form',
      'projection',
    ],
    default: 'entity',
  },
  scope: { enum: ['system', 'global', 'local'], default: 'system' },
  store: { enum: ['persistent', 'memory'], default: 'persistent' },
  allow: { enum: ['write', 'append', 'read'], default: 'write' },
});
