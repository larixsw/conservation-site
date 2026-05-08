/// <reference types="vite/client" />

namespace globalThis {
  interface Window {
    env: {
      API_URL: string
      MAPBOX_TOKEN: string
    }
  }
}
