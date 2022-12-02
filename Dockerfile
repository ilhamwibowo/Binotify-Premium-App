FROM node:16.3.0-alpine
WORKDIR /usr/local/apps/myapp/react
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

EXPOSE 3000

RUN npm install && npm cache clean --force
CMD ["npm", "run", "start"]