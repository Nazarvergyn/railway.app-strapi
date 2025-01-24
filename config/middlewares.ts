export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'ws:', 'wss:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'res.cloudinary.com',
            '*.cloudinary.com',
            'https://*.cloudinary.com'
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'res.cloudinary.com',
            '*.cloudinary.com',
            'https://*.cloudinary.com'
          ],
          'frame-src': ["'self'", 'player.vimeo.com', 'youtube.com', 'www.youtube.com'],
          upgradeInsecureRequests: null,
        },
      },
      frameguard: {
        action: 'sameorigin'
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
