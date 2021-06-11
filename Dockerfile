#FROM node:15.13-alpine
FROM node:16.3.0-alpine
EXPOSE 3000
WORKDIR /todolist
COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production
COPY . .
RUN npm run build
CMD ["npm", "start"]