FROM node:lts AS DEPENDENCIES

WORKDIR /app

COPY package*.json ./
COPY .env ./
COPY tsconfig.json ./

COPY . .

RUN yarn



CMD yarn start & npx nodemon -w package.json --exec "yarn"