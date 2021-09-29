const express = require('express');
const app = express();
const port = 3000
//import files
const todoRouter = require('./routes/todo');
const userRouter = require('./routes/userRoutes')
const checkAuth = require('./middleware/checkAuth')
//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set("view enjine", "ejs")

//databse connection
require('./database/mongo')
//routing 
app.get('/', (req, res) => {
    res.render('home.ejs')
});
app.get('/register', (req, res) => {
    res.render('registration.ejs')
})

app.get('/index', checkAuth, (req, res) => {
    res.render('protect.ejs')
})
app.get('/login', (req, res) => {
    res.render('login.ejs')
})
app.use('/todo', todoRouter);
app.use('/user', userRouter)

//listning
app.listen(port, () => {
    console.log(`server is running on port${port}`)
})

