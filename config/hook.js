module.exports = ({ env }) => ({
  settings: {
    algolia: {
      enabled: true,
      applicationId: env('ALGOLIA_ID'),
      apiKey: env('ALGOLIA_ADMIN_KEY'),
      debug: true,
      prefix: env('ALGOLIA_PREFIX')
    },
  }
});
