# 1. For build React app
FROM node:16.18.0
# Set working directory
WORKDIR /app
#
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
# Same as npm install
RUN npm i
COPY . .
ENV CI=true
ENV PORT=3000
CMD [ "npm", "start" ]
