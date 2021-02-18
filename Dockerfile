FROM node:12.7-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm cache clean --force
RUN npm i
COPY . .
RUN npm run build
FROM nginx:1.17.1-alpine
COPY --from=build /app/dist/b8it148-angular /usr/share/nginx/html/

