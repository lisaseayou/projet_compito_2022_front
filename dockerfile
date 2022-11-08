FROM node:lts

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
COPY .env ./
COPY tsconfig.json ./

COPY . .

RUN yarn



CMD yarn start & npx nodemon -w package.json --exec "yarn"