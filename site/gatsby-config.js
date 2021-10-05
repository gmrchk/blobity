module.exports = {
    siteMetadata: {
        siteUrl: `https://blobity.dev`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                // The property ID; the tracking code won't be generated without it
                trackingId: 'G-91DWBNMP88',
            },
        },
    ],
};
