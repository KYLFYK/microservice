FROM node:16
ENV NODE_ENV=production
RUN node -v
RUN mkdir -p /var/www/api
WORKDIR /var/www/api
ADD . /var/www/api
RUN yarn install
CMD yarn build && yarn start:prod
