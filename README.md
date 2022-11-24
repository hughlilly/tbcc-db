# IT5090 Capstone Project: Telugu Badminton Club of Canterbury

## Introduction

This repository contains the website for the IT5090 Capstone Project (Q4 2022). The author is Hugh Lilly (ID 20220344).

## Source code

### Architecture

This is an instance of the open-source headless CMS [Strapi](http://strapi.io). It is configured through its web interface.

### Seed data

There is a .zip file that contains a copy of the developemnt SQLite database and all necessary image assets. The `yarn seed` script (see below) will automatically extract and import the data.

## Running locally

### Prerequisites

- [Node.js](https://nodejs.org/en/) (>=14.19.1 <=18.x.x)
- npm (> 6)
- [yarn](https://yarnpkg.com)

### Installation

#### Environment variables

First, create a file to hold your environment variables by duplicating the included sample file:

```bash
cp .env.example .env
```

#### Install dependencies, seed data, and start server

Run this series of chained commands:

```bash
yarn && yarn seed && yarn develop
```

This should install all dependencies, seed data from the `data.zip` file, and start the Strapi server. You will need to create an admin user.

## Deployed version

This database is deployed to Render, and its data is consumed by the Remix site at <http://tbcc.onrender.com>. (See source repo at <https://github.com/hughlilly/tbcc>)

## Images

All images are [sourced from Unsplash](https://unsplash.com/collections/OzIboe0O1MQ/it5090).

## Contact

Contact the author, Hugh Lilly (ID 20220344), by email (20220344@mywhitecliffe.com) if you have any questions.
