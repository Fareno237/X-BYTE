const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU1MWXUwbDlqcE44azdzU3FsdzkyMk5GbytWazZrVC9QbnRkOXArL3htcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXIwQktjOHBzRzZHYnp0c293VGJ2SkorcU94dUJmZUU0QkNIYTJudVExOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSWN3bmloWXVld2UzR2EzbUIvVkVFMmNZTmV1MStPRlUrU0xDajczVVZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnNFlTYitBWFQ0RWVnNTUyNERWSnlJYkVVdmtybEY1SG5tZEVvMDNkL253PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktDejJwUXI2NTVqQm95MXRUcVAvbUxLNDlSdUhQdGp0WlNGanZyYUJMMkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZVT3Q2bHpoenpTZkgvRnNUTHNOUXFkNWZERldmRld6cWk1ZHZHa1JQVFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUxYbXlpTXQyVHo4KzBFMmtvV0pka2tBc290LzVxbFZIMEE2aXRkN3BIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWw0N2R2bkhiTHg3RWNpOTIwVWs3QjRnRFVaVzZVQ0NSSVU0R3c4ZXF3MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFOWmw3Sk94YnlEZlFMclhYaThtamErYUt3bXBTZk1EaW1NTHBITGtqSXVzKy9LRlh4blNkSDZ2c1FvRnJnSGhUbmMwMHoxSXZySlI1VlRrM3UyVURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJUSVFWYUZqdnFWKzdpSlJiY0xnenJlaVg5TkFiSDhTSFJ0dlZjc250eUt3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWUGpjcWprY1EtdUEyR1RPTUxycUlnIiwicGhvbmVJZCI6ImQxNWZkMTBkLTA4ZDQtNDExYy05ODIwLWNjYmNhOTgwMWU4MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKcWhlNXllckpDZzZmN3hCYysrOGttTDlaWWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1N2VVRVdmx0d0NPYXRZbE5qN09kdEs1QzRZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikw4N0FMMzkxIiwibWUiOnsiaWQiOiIyMzc2NTA1NjQ0NDU6OTdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xHNndmWUNFSmUra2JnR0dDTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkMrbzE3QVhVMy9XQlJXUjF6VDIrV1dGMUVJZ2FWQnhpVERlaC91R2hpU009IiwiYWNjb3VudFNpZ25hdHVyZSI6Imc2bmtmSWZuelBydkRHVWplVHRSdXFqSDZmWEdLRUtHU3p1Y3NqZ2dPeFJDd24vcHFxL0h4TGVXS05LeHdQVCtiWU9meFMreDVxY0R2NXppWUZQMENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZdkxVY0h1NXhDWnk3S0tMd0sxdSttWlZJVnlqbDhxenRCODdxR21GUlI2ejBNdFozYUk5VDB3YmZ6NWt5S2UyZWNGVXNzYTZxN2pJTitmbmFKTVREdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY1MDU2NDQ0NTo5N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRdnFOZXdGMU4vMWdVVmtkYzA5dmxsaGRSQ0lHbFFjWWt3M29mN2hvWWtqIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MzM5NzQ4fQ==' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '237650564445' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,
PREFIX: process.env.PREFIX || '!' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || 'Yooo, ça va ? Indisponible actu mais je reviens.'  ,
FOOTER: process.env.FOOTER=== undefined ? '> Made by FARENO': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || false  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '237650564445' : process.env.DELETEMSGSENDTO,
  
};
