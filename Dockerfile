FROM cypress/included:cypress-15.10.0-node-24.13.1-chrome-144.0.7559.132-1-ff-147.0.3-edge-144.0.3719.115-1

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY cypress.config.prod.js ./
COPY cypress/support ./cypress/support
COPY cypress/e2e/hw_22 ./cypress/e2e/hw_22
