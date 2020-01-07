FROM node:12-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY ./frontend /frontend

RUN cd /frontend && yarn install && yarn build

COPY ./backend /app

RUN cp -r /frontend/build /app/build

RUN rm -rf /frontend

RUN yarn install

CMD yarn start
