FROM node:12
WORKDIR /app
# Install app dependencies
COPY package*.json ./
RUN npm install
COPY client/package*.json ./client/
RUN npm run install-client
# Bundle app source
COPY . .
RUN npm run build-client
EXPOSE 1993
CMD [ "node", "index.js" ]