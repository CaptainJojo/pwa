FROM node:6.3.0-slim

ENV PWA_SOURCE /usr/src/pwa-planet

# ghost source
RUN mkdir -p $PWA_SOURCE
WORKDIR $PWA_SOURCE

# npm dependencies
COPY package.json package.json
RUN npm install --loglevel warn \
    && npm cache clean \
    && rm -rf /tmp/npm*

VOLUME $PWA_SOURCE

EXPOSE 8080
CMD ["npm", "start"]
