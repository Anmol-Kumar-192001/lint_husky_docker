# pull the official base image
FROM node:alpine
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH

# install application dependencies
COPY package.json /app


RUN npm install
# add app
COPY . /app



# start app
CMD ["npm", "start"]