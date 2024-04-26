import {
    Box, 
    Center,
    Flex, 
    Heading,
    Link, 
    ListItem, 
    Stack,
    Text, 
    UnorderedList, 
} from '@chakra-ui/react'
import {
    CalendarIcon, 
    EmailIcon, 
} from '@chakra-ui/icons'

import React from 'react'

import WorkExperienceSection from './WorkExperinceSection'

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
            <Center>
                <Heading
                    size="m"
                >
                    <Link
                        isExternal
                        href="https://maps.app.goo.gl/v1vXvupkvPrrX2CG6"
                    >
                        Cambridge, MA
                    </Link>
                </Heading>
            </Center>
            <Box>
                <Heading
                    size="m"
                >
                    Contact me:
                </Heading>
                <Flex
                    gap={5}
                    justify="center"
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
                        isExternal 
                        href="https://calendly.com/portyanka-d/15min"
                    >
                        <CalendarIcon
                            margin="2"
                        />
                        schedule 1 on 1
                    </Link>
                    or
                    <Link
                        isExternal
                        href="https://github.com/dimaPortyanka"
                    >
                        github
                    </Link>
                </Flex>
            </Box>
            <Box>
                <Heading
                    size="m"
                >
                        Short summary:
                </Heading>
                <Text>
                    Software engineer with 8+ years of experience
                    with deep knowledge of Front-end ecosystem, 
                    and also skilled in Back-end and able to deliver features
                    from idea to implementation and maintenance. 
                    Highly skilled in clean code practices, and testing(unit and e2e). 
                    Has success stories in team leadership and mentoring colleagues.
                </Text>
            </Box>
            <WorkExperienceSection />
            <Box>
                <Heading
                    size="m"
                >
                    Education:
                </Heading>
                <Text>
                    Dnipropetrovsk State University,
                    <br />
                    Computer science, 
                    <br />
                    Master Degree, 2011-2017
                </Text>
            </Box>
            <Box>
                <Heading>Articles</Heading>
                <UnorderedList>
                    <ListItem>
                        <Link
                            href="/legacy-app-steps/setup-linter/"
                        >
                            Evolving legacy app, First steps, Linter
                        </Link>
                    </ListItem>
                </UnorderedList>
            </Box>
        </Stack>
    )
}

export default CV
