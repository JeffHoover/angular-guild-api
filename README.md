# angular-guild-api

## Pre-requisites
- [NodeJS v.10.X](https://nodejs.org/en/)
- [MySQL Server](https://www.mysql.com/)

## Installation

1. `git clone https://github.com/kyle-angus/angular-guild-api .`
2. `cd angular-guild-api`
3. `npm install`
4. `node_modules/.bin/sequelize db:migrate`
5. `npm start`
6. browse to http://localhost:3000/api/posts

## Routes

- `http://localhost:3000/api/posts`
  - GET : return all posts
  - POST: add a new post
  
