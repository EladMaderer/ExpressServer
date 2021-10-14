const express = require('express');
const app = express();
const port = '3000';
const {users} = require('./mock/users.json');

app.get('/', (req, res) => {
    const {fromIndex, toIndex, searchTerm} = req.query;
    if(searchTerm.length > 1) {
        const regex =  new RegExp(searchTerm.trim(),'i');
        let results = users.filter(({first_name, last_name}) => first_name.match(regex) || last_name.match(regex)).slice(fromIndex, toIndex);
        return res.send(results);
    } else {
        let results = users.slice(fromIndex, toIndex);
        return res.send(results);
    }
});

app.listen(port, () => {
    console.log('Server is running');
});
