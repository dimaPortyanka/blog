import {
    extendTheme, 
} from '@chakra-ui/react'

export default extendTheme({
    config: {
        useSystemColorMode: true,
    },
    colors: {
        primary: '#00FFFF',
        secondary: '#FF69B4',
        accent: '#7FFF00',
        semanticTokens: {
            colors: {
                heading: 'silver',        
                body: 'gray.300',       
                link: 'electricBlue',  
                linkHover: 'hotPink',
                error: 'red.500',
                success: 'green.400', 
                warning: 'yellow.400',
            },
        },
    },
},) 
