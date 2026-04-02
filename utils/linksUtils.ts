import type { LinkData } from "@/types";
import linksJson from "../data/links.json";

export default function getLinkData(): LinkData {
  return linksJson as LinkData;
}