FROM node:13.10.1

WORKDIR /opt

COPY ./server/package-lock.json /opt/package-lock.json
COPY ./server/package.json /opt/package.json

RUN npm install

CMD ["npm","start"]