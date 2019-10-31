# Artists Project - SERVER

## Stack

NodeJS, express, MySQL, sequelize, AWS EC2, RDS

## ORDER

### 1. Base Server Setting

> 1. Install require packages
>
>    express express-session cookie-parser morgan dotenv mysql2 sequlize nodemon
>
> 2. Base Setting on app.js
>
> 3. Set MySQL setting by '`sequelize init`'

### 2. Make Schema

<img src="https://github.com/geonhwiii/ArtistsProject-server/blob/master/img/schema.png?raw=true" width="500" height="300">

### 3. Set API

#### 📚 Album API

**[GET]** `/api/album`

**[GET]** `/api/album/:id`

**[POST]** `/api/album`

**[DELETE]** `/api/album/:id`

#### 🎧 Track API

**[GET]** `/api/track`

**[GET]** `/api/track/:id`

**[POST]** `/api/track/`

**[DELETE]** `/api/track/:id`
