import { Strapi } from '@strapi/strapi';

// Importa los schemas de los componentes
import aboutSectionSchema from './components/about-section/schema.json';
import creditsSectionSchema from './components/credits-section/schema.json';
import helpSectionSchema from './components/help-section/schema.json';
import sitemapSectionSchema from './components/sitemap-section/schema.json';
import heroSectionSchema from './components/hero-section/schema.json';
import descriptionsCollectionSchema from './components/DescriptionsCollection/schema.json';
import descriptionItemSchema from './components/description-item/schema.json';
import image from './components/image/schema.json';
import descriptionSectionSchema from './components/description-section/schema.json';
// Importa los nuevos componentes del formulario
import formSectionSchema from './components/form-section/schema.json';
import dropdownFieldSchema from './components/dropdown-field/schema.json';
import textFieldSchema from './components/text-field/schema.json';
import optionSchema from './components/option/schema.json';

// Función para convertir kebab-case a PascalCase
const toPascalCase = (str: string) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

export default ({ strapi }: { strapi: Strapi }) => {
  // Categoría para agrupar los componentes, usualmente el nombre del plugin
  const category = 'secciones-generales';

  const componentsToRegister = [
    { name: 'about-section', schema: aboutSectionSchema },
    { name: 'credits-section', schema: creditsSectionSchema },
    { name: 'help-section', schema: helpSectionSchema },
    { name: 'sitemap-section', schema: sitemapSectionSchema },
    { name: 'hero-section', schema: heroSectionSchema },
    { name: 'descriptions-collection', schema: descriptionsCollectionSchema },
    { name: 'description-item', schema: descriptionItemSchema },
    { name: 'image', schema: image },
    { name: 'description-section', schema: descriptionSectionSchema },
// Nuevos componentes del formulario
    { name: 'form-section', schema: formSectionSchema },
    { name: 'dropdown-field', schema: dropdownFieldSchema },
    { name: 'text-field', schema: textFieldSchema },
    { name: 'option', schema: optionSchema },
  ];

  componentsToRegister.forEach(({ name, schema }) => {
    const uid = `${category}.${name}`;
    const modelName = name;
    const globalId = `Component${toPascalCase(category)}${toPascalCase(name)}`;

    const fullSchema = {
      ...schema,
      uid,
      category,
      modelType: 'component',
      modelName,
      globalId,
      __schema__: {
        ...schema,
        // Estos campos adicionales son cruciales para que Strapi los reconozca
        collectionName: schema.collectionName,
        info: schema.info,
        options: schema.options,
        attributes: schema.attributes,
      },
    };

    // Asigna el schema completo al objeto de componentes de Strapi
    strapi.components[uid] = fullSchema as any;
    strapi.log.info(`✅ Componente '${uid}' registrado correctamente.`);
  });
};
