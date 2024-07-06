module.exports = {
    basePath: process.env.NODE_ENV === 'production' ? '/innopolis' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/innopolis/' : '',
    output: 'export'
};
