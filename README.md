# Project #13 - Argent Bank

This codebase contains the code needed to run Argent Bank website.

## Getting Started

### Prerequisites

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server v5](https://www.mongodb.com/try/download/community)
- [Yarn v1](https://yarnpkg.com/getting-started/install)

Please make sure you have the right versions and download all packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version

# Check Yarn version
yarn --version
```

### Install

1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
yarn install

# Start local dev server
yarn dev:server

# Populate database with two users
yarn populate-db

# Start App
yarn dev:client
```

The API is served at [http://locahost:3001](http://locahost:3001) and you will now have two users in your MongoDB database!

The App is running at [http://localhost:3000](http://locahost:3000).

## Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

## API Documentation

To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs
