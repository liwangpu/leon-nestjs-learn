FROM node:18-bullseye-slim

WORKDIR /var/custom-devkit-backend

COPY . .

RUN yarn -?

RUN yarn build

CMD [ "yarn", "start:prod" ]
