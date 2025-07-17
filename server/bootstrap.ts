import * as Core from '@strapi/strapi';
import { ItemData, PageStructureData } from './types';

// Función para generar un slug a partir de un texto
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

export default async ({ strapi }: { strapi: Core.Strapi }) => {
  strapi.log.info('Plugin secciones-generales inicializado');
  await createSampleData(strapi);
};

async function createSampleData(strapi: Core.Strapi): Promise<void> {
  try {
    if (!strapi.entityService) {
      strapi.log.error('❌ strapi.entityService is undefined');
      return;
    }

    // Crear Item de ejemplo
    const existingItems = await strapi.entityService.findMany('plugin::secciones-generales.item', { limit: 1 });
    if (Array.isArray(existingItems) && existingItems.length === 0) {
      const sampleItem: ItemData & { slug: string } = {
        title: 'Item de Ejemplo',
        slug: slugify('Item de Ejemplo'),
        publishedAt: new Date(),
      };
      await strapi.entityService.create('plugin::secciones-generales.item', { data: sampleItem });
      strapi.log.info(`✅ Item de ejemplo creado`);
    } else {
      strapi.log.info('✅ Item de ejemplo ya existe');
    }

    // Crear Estructura de Página de ejemplo
    const existingPage = await strapi.entityService.findMany('plugin::secciones-generales.page-structure', { limit: 1 });
    if (Array.isArray(existingPage) && existingPage.length === 0) {
      const samplePageStructure: PageStructureData & { slug: string } = {
        title: 'Página de Ejemplo',
        slug: slugify('Página de Ejemplo'),
        publishedAt: new Date(),
      };
      await strapi.entityService.create('plugin::secciones-generales.page-structure', { data: samplePageStructure });
      strapi.log.info('✅ Estructura de Página de ejemplo creada');
    } else {
      strapi.log.info('✅ Estructura de Página de ejemplo ya existe');
    }

  } catch (error) {
    strapi.log.error('❌ Error creando datos de ejemplo:', error);
  }
}