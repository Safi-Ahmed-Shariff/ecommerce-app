# Use official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) into the container
COPY package.json package-lock.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app will run on (port 3000)
EXPOSE 3000

# Start the Node.js app
CMD ["npm", "start"]
