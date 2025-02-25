let userConfig = undefined;

try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // Ignore error if user config doesn't exist
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export if using images
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // basePath: '/portfolio', //  Set this to your GitHub repo name
  // assetPrefix: '/portfolio/', //  Ensures assets load from the correct path
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// Merge userConfig into nextConfig
const mergedConfig = mergeConfig(nextConfig, userConfig);

/**
 * Merges userConfig into nextConfig
 * @param {object} baseConfig - The default Next.js config
 * @param {object} userConfig - The user-defined config
 * @returns {object} - Merged config
 */
function mergeConfig(baseConfig, userConfig) {
  if (!userConfig) {
    return baseConfig;
  }

  for (const key in userConfig) {
    if (
      typeof baseConfig[key] === 'object' &&
      !Array.isArray(baseConfig[key]) &&
      userConfig[key] !== null
    ) {
      baseConfig[key] = {
        ...baseConfig[key],
        ...userConfig[key],
      };
    } else {
      baseConfig[key] = userConfig[key];
    }
  }
  return baseConfig;
}

export default mergedConfig;