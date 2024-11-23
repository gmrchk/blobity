module.exports = {
    siteMetadata: {
        siteUrl: `https://blobity.gmrchk.com`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Blobity.dev`,
                short_name: `Blobity`,
                start_url: `/`,
                background_color: `#040404`,
                theme_color: `#040404`,
                display: `standalone`,
                icon: `src/images/icon.png`,
            },
        },
    ],
};
