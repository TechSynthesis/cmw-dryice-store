const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  experimental: {
    serverActions: true,
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: ["localhost", process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
