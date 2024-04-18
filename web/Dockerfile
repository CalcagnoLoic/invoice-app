FROM node:20-buster-slim
WORKDIR /web

COPY package.json .
RUN npm i
COPY . .

CMD [ "npm", "run", "dev" ]