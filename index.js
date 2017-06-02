const express = require('express');
const jsonParser = require('body-parser').json();
const session = require('express-session');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.use(session({
    secret: 'nguyenchanhdai',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 24*60*60*1000 }
}));
app.listen(3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));

app.use(jsonParser);

app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    if (username === 'ncdai' && password === '123') {
        req.session.user = username;
        return res.send('DANG_NHAP_THANH_CONG');
    }
    return res.send('DANG_NHAP_THAT_BAI');
});

app.get('/getInfo', (req, res) => {
    if (req.session.user) {
        return res.send(req.session.user);
    }
    res.send('CHUA_DANG_NHAP');
});

app.get('/logout', (req, res) => {
    req.session.user = undefined;
    res.send('DA_DANG_XUAT');
})
