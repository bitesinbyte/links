import configJson from '../data/links.json';
export default function getLinkData():LinkData {
    let data:LinkData = JSON.parse(JSON.stringify(configJson));
    return data;
}