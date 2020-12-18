if(process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else{
    module.exports = require('./dev');
}

//W4euPtDNkz5lv63z
//mongodb+srv://swagatika:W4euPtDNkz5lv63z@cluster0.6rq5k.mongodb.net/prod_db?retryWrites=true&w=majority