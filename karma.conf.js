// karma.conf.js
module.exports = function karmaConfiguration(config) {
    config.set({
        basePath: "",
        frameworks: ["jasmine"],
        plugins: [
            require('karma-jasmine'),
            require('karma-webpack'),
            require('karma-chrome-launcher')
        ],
        files: [
            "src/test/ListaCard.test.js"
        ],
        exclude: [
            "*"
        ],
        presets: ["@babel/preset-env", "@babel/preset-react"],
        preprocessors: {
            "src/**/*.test.js": ["webpack"]
        },
        webpack: {
            mode: "development",
            module: {
                rules: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    }
                }]
            },
            resolve: {
                extensions: [".js", ".jsx"]
            }
        },
        reporters: ["progress"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false, // En CI, los tests solo deben correr una vez

        // --- INICIO DE LA CORRECCIÓN PARA GITHUB ACTIONS ---

        // Usaremos ChromeHeadless, que es Chrome sin interfaz gráfica
        browsers: ['ChromeHeadlessCI'],

        // Configuración personalizada para Chrome en entornos de CI
        customLaunchers: {
            ChromeHeadlessCI: {
                base: 'ChromeHeadless',
                flags: [
                    '--no-sandbox', // Requerido para ejecutar como root en contenedores Docker
                    '--disable-gpu'
                ]
            }
        },

        // --- FIN DE LA CORRECCIÓN ---

        singleRun: true, // Esencial para que Karma termine después de los tests
        concurrency: Infinity
    });
};