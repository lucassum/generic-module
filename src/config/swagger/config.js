module.exports = (dir) => ({
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
    },
    basedir: dir, //app absolute path
    files: ['./src/**/*.js'] //Path to the API handle folder
})