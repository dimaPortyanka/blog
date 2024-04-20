import * as React from 'react'
import {
    Box,
    Container,
    VStack,
} from '@chakra-ui/react'

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
            bg="Background" 
            minH="100vh"
        >
            <Box
                bg="InfoBackground"
                py={2}
                textColor="InfoText"
                width="100%"
            >
                {!noDisclaimer && (
                    <Container
                        maxW="4xl"
                    >
                        <Intro />
                    </Container>
                )}
            </Box>
            <Container
                maxW="4xl"
            >
                {children}
            </Container>
        </VStack>
    )
}

export default Layout
