FROM node:latest
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install
# Bundle app source
COPY . /usr/src/app
# RUN npm test
# ADD sonar.sh /
# RUN chmod +x sonar.sh
# RUN  ./sonar.sh
# RUN npm install sonar-scanner --save-dev
# RUN npm run sonar-scanner
EXPOSE 3002
CMD ["npm", "start"]
