import type { AppConfig } from "@/types";
import configJson from "../data/config.json";

export default function getConfig(): AppConfig {
  return configJson as AppConfig;
}