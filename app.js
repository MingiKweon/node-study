const express = require('express');
const app = express();

//라우팅
app.get('/', (req, res) => {
    res.send('여기는 루트입니다.');
});

app.get('/login', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            body {
                text-align: center;
            }
        </style>
    </head>
    <body>
        ID: <input type="'text" /> </br>
        PW: <input type="'text" /> </br>
    </body>
    </html>
    `);
});

app.listen(3000, () => {
    console.log('서버가동');
}); 