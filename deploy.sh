#!/bin/bash

# Build the React app
cd frontend
npm run build

# Copy .htaccess to the dist folder
cp public/.htaccess dist/

# Move back to root
cd ..

# The hosting service should be configured to use the content of frontend/dist
# as the root of public_html 