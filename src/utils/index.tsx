export * from "./network";
export * from "./config";
export * from "./getLibrary";
export * from "./address";
export * from "./convertLocaleString";
export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
