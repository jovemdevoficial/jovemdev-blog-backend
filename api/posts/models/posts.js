'use strict';

const index = 'JOVEMDEV';
const axios = require('axios');

module.exports = ({ env }) => ({
  lifecycles: {
    async afterCreate(result, data) {
      axios.post(env('VERCEL_HOOK_URL'));
    },
    async afterUpdate(result, params, data) {
      axios.post(env('VERCEL_HOOK_URL'));
      
      if (result.published_at) {
        strapi.services.algolia.saveObject(result, index);
      } else {
        strapi.services.algolia.deleteObject(result.id, index);
      }
    },
    async afterDelete(result, params) {
      strapi.services.algolia.deleteObject(result.id, index);
    },
  },
});
