import * as React from 'react'
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Container,
    Heading,
    Text,
} from '@chakra-ui/react'

const Intro: React.FC = () => {
    return (
        <Accordion
            allowToggle
        >
            <AccordionItem>
                <Container
                    maxW="4xl"
                >
                    <h2>
                        <AccordionButton>
                            <Box
                                as="span" flex='1' textAlign='left'
                            >
                                About author
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel
                        pb={4}
                    >
                        <Heading
                            size="lg"
                        >
                            Hey there!
                        </Heading>
                        <Text>
                            I'm Dmytro,
                            and I've been tinkering with code for the past decade – at least,
                            I think it's been that long!
                            Throughout my journey, 
                            I've dabbled in various projects, 
                            and now I'm eager to spill the beans on my experiences and thoughts.
                            Now, let's set the record straight: 
                            I might call myself an expert, 
                            but hey, you don't have to take my word for it. 
                            What follows is just me sharing my two cents, 
                            no more, no less. 
                            Think of it as a friendly chat between us, 
                            where opinions flow and camaraderie reigns.
                            <br />
                            So, buckle up, friend, 
                            and let's dive into the world of software engineering together!
                        </Text>
                    </AccordionPanel>
                </Container>
            </AccordionItem>
        </Accordion>
    )
}

export default Intro
