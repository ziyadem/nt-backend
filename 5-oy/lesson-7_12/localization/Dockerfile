FROM node:18.16.1
FROM postgres:15-alpine3.16

WORKDIR /app/src/apps

COPY . .

RUN npm install 
RUN npx prisma migrate deploy
RUN npx prisma generate
RUN npm run build

CMD [ "node", "dist/main.js"]