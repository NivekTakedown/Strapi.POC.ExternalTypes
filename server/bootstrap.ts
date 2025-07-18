import * as Core from '@strapi/strapi';

export default async ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.log.info('Plugin secciones-generales inicializado');
};