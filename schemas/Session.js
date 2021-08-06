({
  Details: {},

  account: { type: 'Account', delete: 'cascade' },
  token: { type: 'string', unique: true },
  ip: 'ip',
  data: 'json',
});
