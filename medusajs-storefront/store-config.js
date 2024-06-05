function withStoreConfig(nextConfig = {}) {
  const features = nextConfig.features || {}
  delete nextConfig.features

  nextConfig.env = nextConfig.env || {}

  Object.entries(features).forEach(([key, value]) => {
    if (key) {
      nextConfig.env[`FEATURE_${key.toUpperCase()}_ENABLED`] = value.toString()
    }
  })

  return nextConfig
}

module.exports = { withStoreConfig }
