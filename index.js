// const express = require('express');


// const app = express();
// function rootCall(req, res) {
//     res.send('Thank you very much')
// }
// app.get('/', (req, res) => {
//     res.send('Hi ! I just opened the Node server!');
// })

// app.listen(4200, () => console.log('Listening to port 4200'))

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hey!I just opened the node server!');
});

app.listen(3000, () => console.log('Listening to 3000'))