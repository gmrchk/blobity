module.exports = {
    siteMetadata: {
        siteUrl: `https://blobity.dev`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'G-91DWBNMP88',
                includeInDevelopment: true,
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'G-91DWBNMP88',
                head: true,
                enableWebVitalsTracking: true,
            },
        },
    ],
};
