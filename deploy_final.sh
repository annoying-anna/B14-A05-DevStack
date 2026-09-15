#!/bin/bash
set -e
rm -rf dist assets favicon.svg icons.svg logo.png _redirects vite.svg
npm run build
cp dist/index.html index.html
mkdir -p assets
cp dist/assets/* assets/
rm -rf dist
echo "Done"
