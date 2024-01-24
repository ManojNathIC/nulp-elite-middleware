# Use the official Node.js image with Alpine Linux as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Command to run the application
ENTRYPOINT ["npm", "start"]
