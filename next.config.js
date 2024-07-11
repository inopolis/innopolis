const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    basePath: isProd ? '/innopolis' : '',
    assetPrefix: isProd ? '/innopolis/' : '',
    images: {
        domains: ['imgs.xkcd.com'], // Добавьте сюда нужные домены
    },
    output: 'export',
};
