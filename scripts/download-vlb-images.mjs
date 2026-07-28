/**
 * Downloads Unsplash images for NEW VLB products + lifestyle/hero banners.
 * Reads UNSPLASH_ACCESS_KEY from env, .env.unsplash, or .env.local — never hardcodes the key.
 *
 * Usage: node scripts/download-vlb-images.mjs
 */
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

function loadEnvLocal() {
  if (process.env.UNSPLASH_ACCESS_KEY) return;
  for (const name of [".env.unsplash", ".env.local"]) {
    const envPath = path.join(ROOT, name);
    if (!fs.existsSync(envPath)) continue;
    for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
      const match = line.match(/^UNSPLASH_ACCESS_KEY=(.+)$/);
      if (match) {
        process.env.UNSPLASH_ACCESS_KEY = match[1].trim();
        return;
      }
    }
  }
}

const NEW_PRODUCTS = [
  { slug: "sculptural-table-lamp", query: "modern ceramic table lamp interior" },
  { slug: "cashmere-throw-blanket", query: "cashmere throw blanket sofa luxury" },
  { slug: "wireless-charging-desk-pad", query: "leather desk mat workspace minimal" },
  { slug: "marble-soap-dispenser-set", query: "marble bathroom soap dispenser set" },
  { slug: "gooseneck-pour-over-kettle", query: "gooseneck kettle pour over coffee" },
  { slug: "walnut-serving-board", query: "walnut wood charcuterie board" },
  { slug: "ceramic-dinnerware-set", query: "matte ceramic dinnerware plates set" },
  { slug: "leather-crossbody-bag", query: "leather crossbody bag fashion product" },
  { slug: "insulated-travel-tumbler", query: "insulated travel tumbler stainless" },
  { slug: "soft-shell-performance-jacket", query: "softshell jacket outdoor apparel" },
  { slug: "brass-architect-desk-lamp", query: "brass architect desk lamp office" },
  { slug: "outdoor-picnic-hamper", query: "picnic basket hamper outdoor blanket" },
];

const BANNER_TARGETS = [
  { file: "hero/hero-1.jpg", query: "modern luxury living room interior premium lifestyle", width: 2400, orientation: "landscape" },
  { file: "banners/about.jpg", query: "modern apartment interior lifestyle elegant", width: 1600, orientation: "portrait" },
  { file: "banners/lifestyle.jpg", query: "premium modern home interior sunlight", width: 2000, orientation: "landscape" },
  { file: "banners/lifestyle-wfh.jpg", query: "modern home office workspace lifestyle", width: 1200, orientation: "portrait" },
  { file: "banners/lifestyle-smart.jpg", query: "smart home living room technology lifestyle", width: 1200, orientation: "portrait" },
  { file: "banners/lifestyle-health.jpg", query: "healthy lifestyle yoga wellness morning", width: 1200, orientation: "portrait" },
  { file: "banners/lifestyle-travel.jpg", query: "travel packing essentials lifestyle suitcase", width: 1200, orientation: "portrait" },
  { file: "banners/lifestyle-outdoor.jpg", query: "outdoor picnic park lifestyle nature", width: 1200, orientation: "portrait" },
  { file: "categories/home-kitchen.jpg", query: "modern kitchen interior design", width: 1400, orientation: "portrait" },
  { file: "categories/office-supplies.jpg", query: "modern desk workspace essentials", width: 1400, orientation: "portrait" },
  { file: "categories/electronics.jpg", query: "premium electronics gadgets lifestyle", width: 1400, orientation: "portrait" },
  { file: "categories/sports-outdoors.jpg", query: "outdoor living patio lifestyle", width: 1400, orientation: "portrait" },
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function searchPhotos(accessKey, query, perPage = 4, orientation = "squarish") {
  const params = new URLSearchParams({
    query,
    per_page: String(perPage),
    orientation,
    content_filter: "high",
  });
  const res = await fetch(`https://api.unsplash.com/search/photos?${params}`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
      "Accept-Version": "v1",
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Search failed (${res.status}): ${body}`);
  }
  const data = await res.json();
  return data.results || [];
}

async function downloadImage(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "VLBVenturesLLC/1.0 (image-setup)" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`Download HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 8000) throw new Error("File too small");
  return buf;
}

async function saveFromPhoto(photo, dest, width, heightRatio = 1.25) {
  const url = `${photo.urls.regular}&w=${width}&h=${Math.round(width * heightRatio)}&fit=crop&q=82`;
  const buf = await downloadImage(url);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, buf);
  return crypto.createHash("sha256").update(buf).digest("hex");
}

async function main() {
  loadEnvLocal();
  const accessKey = process.env.UNSPLASH_ACCESS_KEY;
  if (!accessKey) {
    console.error("Missing UNSPLASH_ACCESS_KEY. Set it in .env.unsplash (gitignored).");
    process.exit(1);
  }

  const usedPhotoIds = new Set();
  let success = 0;
  let failed = 0;

  console.log("=== New product images ===\n");
  for (let i = 0; i < NEW_PRODUCTS.length; i++) {
    const product = NEW_PRODUCTS[i];
    process.stdout.write(`[${i + 1}/${NEW_PRODUCTS.length}] ${product.slug}... `);
    try {
      const results = await searchPhotos(accessKey, product.query, 5);
      const fresh = results.filter((r) => r?.id && !usedPhotoIds.has(r.id));
      if (fresh.length < 2) throw new Error(`Only ${fresh.length} fresh photos`);

      for (let j = 0; j < 2; j++) {
        const photo = fresh[j];
        const dest = path.join(PUBLIC, "products", `${product.slug}-${j + 1}.jpg`);
        await saveFromPhoto(photo, dest, 900);
        usedPhotoIds.add(photo.id);
      }
      success++;
      console.log("✓");
    } catch (err) {
      failed++;
      console.log(`✗ ${err.message}`);
    }
    await sleep(1200);
  }

  console.log("\n=== Hero / lifestyle / collections ===\n");
  for (const target of BANNER_TARGETS) {
    process.stdout.write(`${target.file}... `);
    try {
      const results = await searchPhotos(
        accessKey,
        target.query,
        4,
        target.orientation || "landscape"
      );
      const fresh = results.filter((r) => r?.id && !usedPhotoIds.has(r.id));
      if (!fresh.length) throw new Error("No photos");
      const photo = fresh[0];
      const dest = path.join(PUBLIC, target.file);
      const ratio = target.orientation === "portrait" ? 1.35 : 0.62;
      await saveFromPhoto(photo, dest, target.width, ratio);
      usedPhotoIds.add(photo.id);
      success++;
      console.log("✓");
    } catch (err) {
      failed++;
      console.log(`✗ ${err.message}`);
    }
    await sleep(1200);
  }

  console.log(`\nDone: ${success} ok, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
