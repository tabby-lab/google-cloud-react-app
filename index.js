const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('react-app/dist'));
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`listening to port ${port}`);
});

//GET req
app.get('/api/users/:id', (req, res) =>{
    const id =  req.params.id;
    const user = getUser(id);
    if (!user) {
        res.status(404).send({ error: `user ${id} not valid`})
    }
    else {
        res.send({ data: user});
    }
})

//func for user
function getUser(id) {
    const users = [
        {id: 1, name: 'Tabby', country: 'USA'},
        {id: 2, name: 'Grant', country: 'USA'},
        {id: 3, name: 'Bubba', country: 'USA'},
        {id: 4, name: 'Bean', country: 'USA'},
        {id: 5, name: 'Pork Chop', country: 'USA'}
    ];
    return users.find(u => u.id == id);
}