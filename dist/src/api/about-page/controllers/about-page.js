"use strict";
/**
 * about-page controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
module.exports = strapi_1.factories.createCoreController('api::about-page.about-page', ({ strapi }) => ({
    async find(ctx) {
        const entity = await super.find(ctx);
        const content = entity === null || entity === void 0 ? void 0 : entity.data.attributes.content;
        if (content) {
            // Added the backend url to the images paths
            entity.data.attributes.content = content.replace('src="/', `src="${strapi.config.get('server.url')}/`);
        }
        return entity;
    },
}));
