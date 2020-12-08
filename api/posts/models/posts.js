'use strict';

const index = 'JOVEMDEV';
const axios = require('axios');

module.exports = {
  lifecycles: {
    async afterCreate(result, data) {
      axios.post('https://api.vercel.com/v1/integrations/deploy/prj_ZUGGed9Telrvb4RYYq9ciAwf55Dq/GDGDrRWNA5');
    },
    async afterUpdate(result, params, data) {
      axios.post('https://api.vercel.com/v1/integrations/deploy/prj_ZUGGed9Telrvb4RYYq9ciAwf55Dq/GDGDrRWNA5');

      if (result.published_at) {
        strapi.services.algolia.saveObject(result, index);
      } else {
        strapi.services.algolia.deleteObject(result.id, index);
      }
    },
    async afterDelete(result, params) {
      axios.post('https://api.vercel.com/v1/integrations/deploy/prj_ZUGGed9Telrvb4RYYq9ciAwf55Dq/GDGDrRWNA5');
      
      strapi.services.algolia.deleteObject(result.id, index);
    },
  },
};
