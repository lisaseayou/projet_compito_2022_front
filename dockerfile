FROM node:lts AS DEPENDENCIES

WORKDIR /app

COPY package*.json ./
COPY .env ./
COPY tsconfig.json ./

COPY . .

RUN yarn --network-timeout 100000



CMD yarn start & npx nodemon -w package.json --exec "yarn --network-timeout 100000"