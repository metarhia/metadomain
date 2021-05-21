({
  Registry: {},

  filename: { type: 'string', index: true },
  crc32: { type: 'string', index: true },
  hashsum: { type: 'string', note: 'use only to resolve collisions' },
  size: 'number',
  mediaType: 'string',

  access: {
    last: 'datetime',
    count: { type: 'number', default: 0 },
  },

  compression: {
    format: 'string',
    size: 'number',
    ratio: (file) => file.compression.size / file.size,
  },
});
