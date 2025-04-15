# Use a node base image
FROM node:14


# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire application code to the container
COPY . .

# Expose the port
EXPOSE 8080

# Start the app
CMD ["node", "app.js"]
