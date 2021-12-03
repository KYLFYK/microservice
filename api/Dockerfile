FROM node:16
RUN node -v
RUN mkdir -p /var/www/api
WORKDIR /var/www/api
ADD . /var/www/api
RUN yarn install
CMD yarn build && yarn start:dev
