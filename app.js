const express = require('express');
const app = express();


app.set('views', './views');
app.set('view engine', 'ejs');


app.use(); //미들웨어를 등록해주는 매서드

app.listen(3000, () => {
    console.log('서버가동');
}); 