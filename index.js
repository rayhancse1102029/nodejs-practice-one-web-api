const app = require("./app");
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const RUNNING_PORT = process.env.SERVER_PORT;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(RUNNING_PORT, () => {
  console.log(`Server Running at http://localhost:${RUNNING_PORT}`);
});



