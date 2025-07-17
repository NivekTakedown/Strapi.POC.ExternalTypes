export interface NavigationItem {
    label: string;
    url: string;
  }
  
  export interface HeaderNavigation {
    items: NavigationItem[];
  }
  
  export interface FooterLinks {
    items: NavigationItem[];
  }
  
  export interface SocialMediaItem {
    platform: string;
    url: string;
    icon?: string;
  }
  
  export interface FooterSocialMedia {
    items: SocialMediaItem[];
  }
  
  export interface ItemData {
    title: string;
    publishedAt?: Date;
  }
  
  export interface PageStructureData {
    title: string;
    publishedAt?: Date;
  }

export * from './components';