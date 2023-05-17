const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            "_components": path.resolve(__dirname, "src/components"),
            "_store": path.resolve(__dirname, "src/store"),
        },
    },
};