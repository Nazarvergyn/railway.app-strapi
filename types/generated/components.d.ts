import type { Struct, Schema } from '@strapi/strapi';

export interface TestNazarVerhun extends Struct.ComponentSchema {
  collectionName: 'components_test_nazar_verhuns';
  info: {
    displayName: 'Nazar Verhun';
  };
  attributes: {
    Nazar: Schema.Attribute.String;
  };
}

export interface SeoMetadata extends Struct.ComponentSchema {
  collectionName: 'components_seo_metadata';
  info: {
    displayName: 'Metadata';
    description: 'SEO metadata fields';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
    canonicalURL: Schema.Attribute.String;
    isPublished: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    readingTime: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
    ogType: Schema.Attribute.Enumeration<
      ['website', 'article', 'profile', 'book']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'article'>;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image', 'app', 'player']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
    noIndex: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    noFollow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SectionsService extends Struct.ComponentSchema {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'>;
    serviceName: Schema.Attribute.String;
    serviceItem: Schema.Attribute.Component<'fields.service-item', true>;
    imgService: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SectionsProjectSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_project_section';
  info: {
    displayName: 'Project Section';
    icon: 'align-left';
    description: 'Content sections for projects (Research, Design, Development)';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<['research', 'design', 'development']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'research'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String;
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    additionalContent: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    text: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface SectionsAboutUsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_us_features';
  info: {
    displayName: 'AboutUsFeatures';
  };
  attributes: {
    aboutDescription: Schema.Attribute.Text;
    itemTitle1: Schema.Attribute.String;
    itemIMG1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    itemData1: Schema.Attribute.String;
    itemTitle2: Schema.Attribute.String;
    itemIMG2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    itemData2: Schema.Attribute.String;
    itemTitle3: Schema.Attribute.String;
    itemIMG3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    itemData3: Schema.Attribute.String;
    itemTitle4: Schema.Attribute.String;
    itemIMG4: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    itemData4: Schema.Attribute.String;
  };
}

export interface FieldsServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_fields_service_items';
  info: {
    displayName: 'Service Item';
  };
  attributes: {
    serviceItem: Schema.Attribute.String;
  };
}

export interface CompanySocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_company_social_links';
  info: {
    displayName: 'Social Links';
    description: 'Company social media links';
    icon: 'share-alt';
  };
  attributes: {
    facebook: Schema.Attribute.String;
    twitter: Schema.Attribute.String;
    linkedin: Schema.Attribute.String;
    instagram: Schema.Attribute.String;
    github: Schema.Attribute.String;
  };
}

export interface CompanyLegal extends Struct.ComponentSchema {
  collectionName: 'components_company_legal';
  info: {
    displayName: 'Legal';
    description: 'Company legal information';
    icon: 'balance-scale';
  };
  attributes: {
    companyNumber: Schema.Attribute.String;
    vatNumber: Schema.Attribute.String;
    registeredAddress: Schema.Attribute.Text;
    termsUrl: Schema.Attribute.String;
    privacyUrl: Schema.Attribute.String;
  };
}

export interface CompanyContacts extends Struct.ComponentSchema {
  collectionName: 'components_company_contacts';
  info: {
    displayName: 'Contacts';
    description: 'Company contact information';
    icon: 'phone';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    address: Schema.Attribute.Text;
    workingHours: Schema.Attribute.String;
  };
}

export interface CompanyBranding extends Struct.ComponentSchema {
  collectionName: 'components_company_branding';
  info: {
    displayName: 'Branding';
    description: 'Company branding assets and colors';
    icon: 'palette';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    favicon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mainColor: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#000000'>;
    secondaryColor: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#ffffff'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'test.nazar-verhun': TestNazarVerhun;
      'seo.metadata': SeoMetadata;
      'sections.service': SectionsService;
      'sections.project-section': SectionsProjectSection;
      'sections.hero': SectionsHero;
      'sections.about-us-features': SectionsAboutUsFeatures;
      'fields.service-item': FieldsServiceItem;
      'company.social-links': CompanySocialLinks;
      'company.legal': CompanyLegal;
      'company.contacts': CompanyContacts;
      'company.branding': CompanyBranding;
    }
  }
}
