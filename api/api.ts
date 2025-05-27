import { strapi } from "@strapi/client"

const client = strapi({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
    auth: process.env.NEXT_PUBLIC_STRAPI_TOKEN
    
})

export default client;