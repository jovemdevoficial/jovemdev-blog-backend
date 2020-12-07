'use strict';

const index = 'JOVEMDEV';

module.exports = {
  lifecycles: {
    afterUpdate(result, params, data) {
      if (result.published_at) {
        strapi.services.algolia.saveObject(result, index);
      } else {
        strapi.services.algolia.deleteObject(result.id, index);
      }
    },
    afterDelete(result, params) {
      strapi.services.algolia.deleteObject(result.id, index);
    },
  },
};
