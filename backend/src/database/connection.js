const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './../../.env') });

const mysql = require('mysql2/promise');
console.log(process.env.HOST);
const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USERDB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DBPORT,
});

module.exports = connection;

// let Vimeo = require('vimeo').Vimeo;
// let client = new Vimeo(
//   'b15aba310e54ee3a43315c9923ad6e1c27d68997',
//   '/6YcfOr5/WP/idvq3Fifn+PLWFKTFuVWvq48tju1O8vtZh2PHfBkPdJcXS7Y0Z6Ve9s970meiY4QG/5yB7iyAKNrWCaTNDKdYHI0GSy42mfQsGe3BOBm2q5mP4LN/8S2',
//   'b7acb3af5659a5eb31adaea7a8843f9f'
// );

// client.request(
//   {
//     method: 'GET',
//     path: '/tutorial',
//   },
//   function (error, body, status_code, headers) {
//     if (error) {
//       console.log(error);
//     }

//     console.log(body);
//   }
// );
