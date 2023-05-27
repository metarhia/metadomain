({
  Registry: {},

  login: { type: 'string', length: { min: 8, max: 64 }, unique: true },
  password: { type: 'string', note: 'Password hash' },
  active: { type: 'boolean', default: true },
  division: { many: 'Division' },
  roles: { many: 'Role' },
  fullName: '?string',
  email: {
    type: 'string',
    length: { min: 6, max: 255 },
    index: true,
    required: false,
  },
  phone: {
    type: 'string',
    length: { min: 10, max: 15 },
    index: true,
    required: false,
  },
});
