/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  env: {
    PUBLIC_KEY: process.env.PUBLIC_KEY,
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
  },
};

module.exports = nextConfig;
