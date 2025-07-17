import { Attribute } from '@strapi/strapi';

export interface AboutSection {
  title: Attribute.String & Attribute.Required & Attribute.MaxLength<255>;
  subtitle?: Attribute.Text;
  description?: Attribute.Text;
  image?: Attribute.Media;
  content: Attribute.Blocks & Attribute.Required;
}

export interface CreditsSection {
  backgroundImage: Attribute.Media & Attribute.Required;
  title: Attribute.String & Attribute.Required & Attribute.MaxLength<255>;
  subtitle: Attribute.Text & Attribute.Required;
  workTeams?: Attribute.JSON;
}

export interface HelpSection {
  title: Attribute.String & Attribute.Required & Attribute.MaxLength<255>;
  subtitle?: Attribute.Text;
  items?: Attribute.JSON;
}

export interface SitemapSection {
  content: Attribute.Blocks & Attribute.Required;
  sections?: Attribute.JSON;
}

export interface HeroSection {
  title: Attribute.String & Attribute.Required & Attribute.MaxLength<255>;
  image: Attribute.Media & Attribute.Required;
}