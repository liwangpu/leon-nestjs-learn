FROM node:18-bullseye-slim

WORKDIR /var/lowcode-engine-backend

COPY . .

RUN yarn -?

RUN yarn build

CMD [ "yarn", "start:prod" ]