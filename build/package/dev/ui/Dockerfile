FROM node:13.10.1

WORKDIR /opt

COPY ./web/ui/package-lock.json /opt/package-lock.json
COPY ./web/ui/package.json /opt/package.json
COPY ./web/ui/webpack /opt/webpack
COPY ./web/ui/.babelrc /opt/.babelrc
COPY ./web/ui/images /opt/images
COPY ./web/ui/.eslintrc.json /opt/.eslintrc.json

RUN npm install

CMD ["npm","run","dev:run"]