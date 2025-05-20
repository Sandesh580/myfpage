# Use Node.js 16 to avoid OpenSSL compatibility issues in other environments
FROM node:16

# Set working directory in container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all other project files
COPY . .

# Expose the port (React default is 3000)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
