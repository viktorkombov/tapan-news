const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 5000,
        dbUrl: 'mongodb+srv://viktorkombov:Fo1k67cd45CqBahB@cluster0.3vnvm.mongodb.net/tapan-bg?retryWrites=true&w=majority',
        cookie: 'cookie-for-auth-token',
        secret: 'SecretService',
        origin: ['http://localhost:3000', 'http://localhost:4200']
    },
    production: {
        port: process.env.PORT || 5000,
        dbUrl: 'mongodb+srv://viktorkombov:Fo1k67cd45CqBahB@cluster0.3vnvm.mongodb.net/tapan-bg?retryWrites=true&w=majority',
        origin: ['https://your-articles-spa.herokuapp.com', 'https://your-articles-spa.herokuapp.com/'],
        cookie: 'cookie-for-auth-token',
        secret: 'SecretService'
    }
}

module.exports = config[env];