const modules = import.meta.glob<string>(
  "../assets/images/perfume-bottles/*.png",
  { eager: true, import: "default" },
);

const imagesByFilename: Record<string, string> = {};
for (const [path, url] of Object.entries(modules)) {
  const filename = path.split("/").pop() as string;
  imagesByFilename[filename] = url;
}

export function getProductImage(filename: string): string {
  return imagesByFilename[filename];
}
