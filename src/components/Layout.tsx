import * as React from 'react'
import {
    Box,
    Button,
    Container,
    Divider,
    HStack,
    Input,
    Text,
    VStack,
} from '@chakra-ui/react'

import Intro from '../components/Intro'

type LayoutProps = {
  children: React.ReactNode,
  noDisclaimer?: boolean,
  noSubscribe?: boolean,
}

// eslint-disable-next-line @stylistic/js/max-len
const ENDPOINT_URL = 'https://xyz.us22.list-manage.com/subscribe/post?u=415f2a300ea7e56784ff3a934&amp;id=a03f82efda&amp;f_id=00f8c4e1f0'

const Layout: React.FC<LayoutProps> = ({
    children,
    noDisclaimer = false,
    noSubscribe = false,
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
                    <Intro />
                )}
            </Box>
            <Container
                maxW="4xl"
            >
                {children}
            </Container>
            {!noSubscribe && (
                <>
                    <Divider />
                    <Container
                        paddingY={10}
                    >
                        <form
                            action={ENDPOINT_URL} 
                            method="post" 
                            name="mc-embedded-subscribe-form" 
                            target="_blank"
                        >
                            <Text>
                        If you found it interesting, subscribe to my following posts.
                            </Text>
                            <HStack>
                                <Input
                                    required 
                                    name="EMAIL" 
                                    type="email"
                                />
                                <Button
                                    name="subscribe"
                                    type="submit"
                                >
                            Subscribe
                                </Button>
                            </HStack>
                        </form>
                    </Container>
                </>
            )}
        </VStack>
    )
}

export default Layout
