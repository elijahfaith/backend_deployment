# Use the official Node.js image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY app/package*.json ./

# Install dependencies (only production for smaller footprint, but keeping it simple for now)
RUN npm install

# Copy the rest of the application code
COPY app/ .

# Expose the application port
EXPOSE 3000

# Start the Node.js application
CMD [ "npm", "start" ]
