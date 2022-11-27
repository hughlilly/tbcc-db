# IT5090 Capstone Project: Telugu Badminton Club of Canterbury

## Introduction

This repository contains the CMS instance for the IT5090 Capstone Project (Q4 2022). The author is Hugh Lilly (ID 20220344).

## Companion frontend repository

The site that displays the information contained in this CMS is in the repository [hughlilly/tbcc](https://github.com/hughlilly/tbcc). Set up and install dependencies for this repository first before moving to that one.

## Source code

### Architecture

This is an instance of the open-source headless CMS [Strapi](http://strapi.io). It is configured through its web interface.

### Seed data

There is a .zip file that contains a copy of the development SQLite database and all necessary image assets. The `yarn seed` script (see below) will automatically extract and import the data.

## Running locally

### Prerequisites

- [Node.js](https://nodejs.org/en/) (>=14.19.1 <=18.x.x)
- npm (>6)
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

## Frontend Remix site

### API token

Once the Strapi instance set up and you have logged in and verified that the seeding operation was successful, generate an API token by going to **Settings** > **API Tokens** > **➕ Create new API Token**. Copy this to your clipboard and save it to a text file immediately. You will not be able to view it again.

Give the token a name of "Remix", set its *Duration* to "Unlimited", and its Type to "Custom". Go down to the "Message" content type, and tick the box for "Create". Click **✔️ Save**.

### Install frontend site

Leaving the Strapi server running, go to the other repository, `tbcc`, and set up the Remix site that will consume its data.

## Deployed version

This database is deployed to Render using PostgreSQL, and its content is consumed by the Remix site at <http://tbcc.onrender.com> (see source repo at <https://github.com/hughlilly/tbcc>). I am using the free tier of Render so initial loads may cause the instance to spin up. If the site does not load initally, try again a few minutes later, or contact me.

## Images

All images are [sourced from Unsplash](https://unsplash.com/collections/OzIboe0O1MQ/it5090).

## Contact

Contact the author, Hugh Lilly (ID 20220344), by email (20220344@mywhitecliffe.com) if you have any questions.
