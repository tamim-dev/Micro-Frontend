# Use an official node image as the base image
FROM node:18-alpine
 
# Set the working directory in the container
WORKDIR /app
 
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
 
# Install the dependencies
RUN npm install
 
# Copy the rest of the application code to the working directory
COPY . .
 
# Build the React app
RUN npm run build
 
# Install a lightweight web server to serve the React app
# RUN npm install -g serve
 
# Set the environment variable to serve the build
#ENV NODE_ENV production
 
# Start the React app
#CMD ["serve", "-s", "build", "-l", "3001"]
CMD ["npm", "start"]
 
# Expose the port the app will run on
EXPOSE 3002