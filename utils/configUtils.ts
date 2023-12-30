import configJson from '../data/config.json';
export default function getConfig():AppConfig {
    let config:AppConfig = JSON.parse(JSON.stringify(configJson));
    return config;
}