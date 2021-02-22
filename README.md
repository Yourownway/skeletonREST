# skeletonREST

--- skeleton API REST ---

- api/
  - controllers/
    - index.js
    - user.js
    - ...
  - db/
    - config.js
    - models/
      - user.js
      - ...
  - config/
    - routes/
      - index.js
      - user.js
      - ...
    - env.js
    - server.js
  - app.js
  - package.json
  - .env

modules: dotenv cors body-parser express morgan mysql2

- ORM : Sequelize Sequelize-cli

securité : helmet sanitize-html
