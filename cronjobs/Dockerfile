FROM node:14
WORKDIR /app
COPY ["cronjobs/package.json", "cronjobs/package-lock.json", "./"]
RUN npm install 
COPY . .
EXPOSE 6969
CMD ["npm", "start"]