FROM node:11.6-alpine
MAINTAINER Dennis Boldt info@dennis-boldt.de

WORKDIR /app

ADD package.json .
RUN npm install

ADD mail.js .

CMD ["node", "mail.js"]
