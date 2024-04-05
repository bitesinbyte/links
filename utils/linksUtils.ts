import configJson from '../data/links.json';
export default function getLinkData():LinkData {
    let data:LinkData = JSON.parse(JSON.stringify(configJson));
    return data;
}
export function getLinkBrandImage(link: string): string {
    switch (link.toLowerCase()) {
        case "blog":
        case "facebook":
        case "github":
        case "instagram":
        case "linkedin":
        case "snapchat":
        case "tiktok":
        case "twitter":
        case "web":
        case "youtube":
        case "mastodon":
        case "threads":
        case "tools":
            return link;
    }
    return "externallink";
};