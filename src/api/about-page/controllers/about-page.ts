/**
 * about-page controller
 */

import { factories } from '@strapi/strapi'

module.exports = factories.createCoreController('api::about-page.about-page', ({ strapi }) => ({

    async find(ctx) {
        const entity = await super.find(ctx);
        const content = entity?.data.attributes.content;
        if (content) {
            // Added the backend url to the images paths
            entity.data.attributes.content = content.replace('src="/', `src="${strapi.config.get('server.url')}/`);
        }
        return entity;
    },

}));
