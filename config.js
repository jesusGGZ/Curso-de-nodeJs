const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://jesus:jesus123@cluster0.hgjmo.mongodb.net/cursoNode?retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files',
};

module.exports = config;