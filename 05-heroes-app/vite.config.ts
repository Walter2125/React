import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import React from "@vitejs/plugin-react"

// https://vite.dev/config/
export default defineConfig({
  plugins: [React(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
