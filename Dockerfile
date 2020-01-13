FROM node:12-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV REACT_APP_BACKEND_URL=http://localhost:3000

COPY ./frontend /frontend

RUN cd /frontend && yarn install && yarn build

COPY ./backend /app

RUN cp -r /frontend/build /app/build

RUN rm -rf /frontend

RUN yarn install

CMD yarn start
