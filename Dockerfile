FROM node:16-alpine3.11

WORKDIR /var/www/app

COPY . /var/www/app
RUN npm install

CMD [ "index.js" ]
ENTRYPOINT [ "node" ]