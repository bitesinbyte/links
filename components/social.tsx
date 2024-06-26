import { SocialLink } from "./socialLink";
import { ThemeSwitch } from "./theme-switch";

type SocialProps = {
    socialLink: SocialLink
};
export const Social = ({ socialLink, ...props }: SocialProps) => {
    return (
        <div className=" gap-4 items-center sm:flex-col">
            {socialLink.blog && <SocialLink href={socialLink.blog} brand="blog" />}
            {socialLink.facebook && <SocialLink href={socialLink.facebook} brand="facebook" />}
            {socialLink.linkedin && <SocialLink href={socialLink.linkedin} brand="linkedin" />}
            {socialLink.instagram && <SocialLink href={socialLink.instagram} brand="instagram" />}
            {socialLink.snapchat && <SocialLink href={socialLink.snapchat} brand="snapchat" />}
            {socialLink.tiktok && <SocialLink href={socialLink.tiktok} brand="tiktok" />}
            {socialLink.twitter && <SocialLink href={socialLink.twitter} brand="twitter" />}
            {socialLink.youtube && <SocialLink href={socialLink.youtube} brand="youtube" />}
            {socialLink.web && <SocialLink href={socialLink.web} brand="web" />}
            {socialLink.github && <SocialLink href={socialLink.github} brand="github" />}
            {socialLink.mastodon && <SocialLink href={socialLink.mastodon} brand="mastodon" />}
            {socialLink.threads && <SocialLink href={socialLink.threads} brand="threads" />}
            <ThemeSwitch />
        </div>);
};