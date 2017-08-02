FROM node:alpine

# clone repo
RUN mkdir -p /usr/src/repo
WORKDIR /usr/src/repo
COPY . .

# Install Node.js dependencies
RUN yarn install --no-progress

# build
RUN NODE_ENV=production yarn run build -- --release

# create actual dir
RUN mkdir -p /usr/src/app

# copy built files
COPY ./build ../app
WORKDIR /usr/src/app

# Install Node.js dependencies
RUN yarn install --production --no-progress && yarn cache clean

CMD [ "node", "server.js" ]
