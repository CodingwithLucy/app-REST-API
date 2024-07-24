const mailgun = require("mailgun-js");

const dotenv = require("dotenv");

dotenv.config();

const DOMAIN = process.env.MG_DOMAIN;
const APIKEY = process.env.MG_KEY;

const mg = mailgun({ apiKey: APIKEY, domain: DOMAIN });

module.exports = mg;
