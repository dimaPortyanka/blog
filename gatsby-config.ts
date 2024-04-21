import type {
    GatsbyConfig, 
} from 'gatsby'

const config: GatsbyConfig = {
    siteMetadata: {
        title: 'Stories of the drunken sailor',
        siteUrl: 'https://www.dmytro-portianka.xyz',
    },
    graphqlTypegen: true,
    plugins: [
        'gatsby-plugin-root-import',
        'gatsby-plugin-postcss',
        {
            resolve: '@chakra-ui/gatsby-plugin',
            options: {
                resetCSS: true,
                portalZIndex: undefined,
            },
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://xyz.us22.list-manage.com/subscribe/post?u=415f2a300ea7e56784ff3a934&amp;id=a03f82efda&amp;f_id=00f8c4e1f0',
                timeout: 3500,
            },
        },
    ], 
}

export default config
