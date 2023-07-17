// Update with your config settings.
require("dotenv").config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

// const string = process.env.DB_CONNECTION_STRING

  module.exports = {

    development: {
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        password: 'docker',
        user: 'postgres',
        port: 5432,
        database: 'mini_video_app_db_1'
      }
    }
  
  };


  // module.exports = {

  //   development: {
  //     client: 'pg',
  //     connection: string     
  //   }
  // }
  
