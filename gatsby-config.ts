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
    ], 
}

export default config
