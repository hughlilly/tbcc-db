# IT5090 Capstone Project: Telugu Badminton Club of Canterbury

## Introduction

This repository contains the website for the IT5090 Capstone Project. The author is Hugh Lilly (ID 20220344).

## Source code

### Architecture

The source code for the site is in the `/src` directory. There is an HTML page for the index. The entry point is `App.js`. There are four subdirectories, `assets`, which holds the images and other media assets, `Components`, which holds the React components, `Data`, which holds the app data, and `styles`, which holds the CSS.

### Seed data

Of the two files in the `Data` directory, `FilmData.js` is the larger. It contains titles, director names, runtimes, release-year data, IMDB and YouTube IDs, and a synopsis for each film. It also references an imported JPEG still of that film.

## Running locally

### Requirements/prerequisites

- [Node.js](https://nodejs.org/en/) ()>=14.19.1 <=18.x.x),
- [yarn](https://yarnpkg.com)

### Installation

First, create a file to hold your environment variables:

```bash
cp .env.example .env
```

#### Install dependencies, seed data, and start server

Install dependencies, seed data, and start the Strapi instance:

```bash
yarn && yarn seed && yarn develop
```

This should install all dependencies, seed data from the `data.zip` file, and start the Strapi server.

You will need to create an admin user. You do not have to use a real email address, but you will have to create a password (minimum 8 characters, at least one uppercase (A-Z), at least one lowercase (a-z), and at least one digit (0-9)).

## Contact

Contact the author, Hugh Lilly (ID 20220344), by email (20220344@mywhitecliffe.com) if you have any questions.
