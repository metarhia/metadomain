({
  Registry: {},

  login: { type: 'string', length: { min: 8, max: 64 }, unique: true },
  password: { 'string', note: 'Password hash' },
  active: { type: 'boolean', default: true },
  unit: { many: 'Unit' },
  roles: { many: 'Role' },
  email: { type: 'strring', length: { min: 6, max: 255 }, unique: true },
  phone: { type: 'strring', length: { min: 10, max: 15 }, unique: true },

  fullName: {
    given: '?string',
    middle: '?string',
    surname: '?string',
  },
});
