export type AppConfig = {
    mainImageSource: string;
    mainImageAlt: string;
    brandName: string;
    socialLinks: SocialLink;
    description: string;
};

export type SocialLink = {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    snapchat?: string;
    tiktok?: string;
    twitter?: string;
    blog?: string;
    youtube?: string;
    web?: string;
    github?: string;
    mastodon?: string;
    threads?: string;
};