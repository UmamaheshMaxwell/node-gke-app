FROM node:16
WORKDIR /app
copy . .
RUN npm install
CMD ["npm", "start"]