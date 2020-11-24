const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const server = app.listen(process.env.PORT || port, listen);

function listen() {
  let host = server.address().address;
  let port = server.address().port;
  
  if (host === '::') {
    host = 'localhost';
  }

  console.log(`Listening at http://${host}:${port}`);
}

/**
 * The typescript folks--bless their souls for trying--do not support
 * importing javascript modules for web as per:
 * https://github.com/microsoft/TypeScript/issues/27287
 * 
 * More info on javascript web modules here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
 * 
 * As such, we rename imports that are probably for js modules.
 */
app.use((request, _, next) => {
  const referrer = request.headers.referer ?? '';
  if (referrer.endsWith('.js') && !request.url.endsWith('.js')) {
    request.url += '.js'
  }
  next();
})
app.use(express.static('public'));
app.use(bodyParser.json({ limit: "3000mb" }));
app.use(bodyParser.urlencoded({ extended : false }));
