const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    basePath: isProd ? '/innopolis' : '',
    assetPrefix: isProd ? '/innopolis/' : '',
    output: 'standalone',
    exportPathMap: function (defaultPathMap) {
        return {
            '/': { page: '/' },
            '/comic': { page: '/comic' },
        };
    },
};
