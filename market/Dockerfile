FROM node:16

WORKDIR /MARKET/
COPY . /MARKET/

RUN yarn install
RUN yarn build:ssr
CMD yarn start
