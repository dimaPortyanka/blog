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
                /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
                resetCSS: true,
                /**
         * @property {number} [portalZIndex=undefined]
         * The z-index to apply to all portal nodes. This is useful
         * if your app uses a lot z-index to position elements.
         */
                portalZIndex: undefined,
            },
        },
    ], 
}

export default config
