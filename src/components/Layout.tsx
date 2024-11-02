import * as React from 'react'
import {
    Box,
    Container,
    VStack,
} from '@chakra-ui/react'
import desk from './images/desk.jpg'

import Intro from '../components/Intro'

type LayoutProps = {
  children: React.ReactNode,
  noDisclaimer?: boolean,
}

const Layout: React.FC<LayoutProps> = ({
    children,
    noDisclaimer = false,
},) => {
    return (
        <VStack
            background={`url("${desk}")`} 
            backgroundAttachment="fixed"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            minH="100vh"
        >
            {!noDisclaimer && (
                <Box
                    bg="InfoBackground"
                    py={2}
                    textColor="InfoText"
                    width="100%"
                >
                    <Intro />
                </Box>
            )}
            <Container
                background={'rgba(255,255,255,0.8)'}
                marginBottom="2rem"
                marginTop="2rem"
                maxW="4xl"
                paddingBottom="2rem"
            >
                {children}
            </Container>
        </VStack>
    )
}

export default Layout
