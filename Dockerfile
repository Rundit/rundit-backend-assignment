FROM node:16.15

WORKDIR /rundit/backend
COPY package*.json ./
RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start" ]
