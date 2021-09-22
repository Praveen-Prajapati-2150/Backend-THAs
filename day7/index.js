const express = require("express");
const app = express();

// CRUD -> POST, GET, PUT, DELETE

// const slash = (req, res) => {
//     res.send("Hello");
// }
// app.get('/', slash);
// app.post('/', slash);
// app.put('/', slash);
// app.delete('/', slash);

app.get("/", (req, res) => {
  // res.send("Hello");
  // res.send(['a,b']);
//   res.sendStatus(200);
//   res.json({ a: 1 });
    res.status(200).send("Hello");
});

// app.put("/", (req, res) => {
//   // db update
//   res.sendStatus(201); // updated succesfully
//   res.send();
// });

app.get('/about', (req, res) => {
    res.send(req.query.q);
})

// app.get('/ab?cd', (req, res) => {
//     res.send('abcd');
// })

// app.get('/ab+cd', (req, res) => {
//     res.send('abcd');
// })

app.get('/ab*cd', (req, res) => {
    res.send('abcd');
})

app.get('/ab(cd)?e', (req, res) => {
    res.send('abcd');
})

app.get(/a/, (req, res) => {    // we called it regex
    res.send('abcd');
})

app.get('/.*fly$/', (req, res) => {
    res.send('abcd');
})

// http://localhost:5000/user/1/books/2
app.get('/user/:id/books/:bookId', (req, res) => {
    console.log(req.query);
    res.send(req.params.id);
})

app.listen(5000);
