FROM node:16
ENV NODE_ENV=production
RUN mkdir -p /var/www/customers
WORKDIR /var/www/customers
ADD . /var/www/customers
RUN yarn install
CMD yarn build && yarn start:dev
