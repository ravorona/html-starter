import 'dotenv/config'
import path from 'path'
import { defineConfig, ServerOptions } from 'vite'

const server: ServerOptions = { open: true }

process.env.DOMAIN && (server.host = process.env.DOMAIN)
process.env.DEV_PORT && (server.port = parseInt(process.env.DEV_PORT))
process.env.HTTPS_KEY &&
    process.env.HTTPS_CERT &&
    (server.https = {
        key: process.env.HTTPS_KEY,
        cert: process.env.HTTPS_CERT
    })

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@scripts': path.resolve(__dirname, 'src/scripts'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@types': path.resolve(__dirname, 'src/types')
        }
    },
    build: {
        sourcemap: true
    },
    server
})
