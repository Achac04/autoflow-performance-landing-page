import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Force Turbopack root when a parent folder also has a lockfile (avoids wrong workspace inference). */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  /** Smaller client bundles from icon barrel imports (helps production Lighthouse “unused JS”). */
  experimental: {
    optimizePackageImports: ["lucide-react", "simple-icons"],
  },
};

export default nextConfig;
