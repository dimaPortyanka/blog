import * as React from 'react'
import {
    Accordion, 
    AccordionButton, 
    AccordionIcon, 
    AccordionItem, 
    AccordionPanel, 
    Box, 
    Center, 
    Flex, 
    Heading, 
    Link,
    Spacer, 
    Stack,
} from '@chakra-ui/react'
import {
    CalendarIcon, 
    EmailIcon, 
} from '@chakra-ui/icons'

const CV: React.FC = () => {
    return (
        <Stack
            gap={5}
        >
            <Center>
                <Heading
                    size="l"
                >
                    Dmytro Portianka - Software Engineer
                </Heading>
            </Center>
            <Box>
                <Heading
                    size="m"
                >
                    Contact me with:
                </Heading>
                <Flex
                    gap={5}
                >
                    <Link
                        href="mailto:me@dmytro-portianka.xyz"
                    >
                        <EmailIcon
                            margin="2"
                        />
                        me@dmytro-portianka.xyz
                    </Link>
                    or
                    <Link
                        href="https://calendly.com/portyanka-d/15min" 
                        isExternal={true}
                    >
                        <CalendarIcon
                            margin="2"
                        />
                        schedule 1 on 1
                    </Link>
                </Flex>
            </Box>
            <Heading
                size="m"
            >
                Work experience
            </Heading>
            <Accordion
                allowMultiple 
                allowToggle
            >
                <AccordionItem>
                    <AccordionButton 
                        display="flex"
                    >
                        KAYAK
                        <Spacer />
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                        Description what ive done in kayak
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        Capabuild
                        <Spacer />
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                        A bit of experience about working in Capabuild
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        SkyCell AG
                        <Spacer />
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                        A bit of experience about working in SkyCell AG
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        Ciklum
                        <Spacer />
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                        A bit of experience about working in Ciklum
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        Innovecs
                        <Spacer />
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                        A bit of experience about working in Innovecs
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        DataArt
                        <Spacer />
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                        A bit of experience about working in Dataart
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Stack>
    )
}

export default CV
