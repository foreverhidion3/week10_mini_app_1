FROM node:latest

WORKDIR /mini_video_app/backend/server

COPY . /mini_video_app/backend/server

EXPOSE 8080

RUN npm install

RUN npm run migrate:latest && npm run knex seed:run

CMD ["npm", "start"]