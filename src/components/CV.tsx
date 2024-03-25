import {
    Box, 
    Center,
    Flex, 
    Heading,
    Link, 
    Stack, 
    Text, 
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
            <Box>
                <Heading
                    size="m"
                >
                    Contact me with:
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
                        Short summary
                </Heading>
                <Text>
                    Software engineer with 8+ years of experience 
                    with deep knowledge of Front-end ecosystem,
                    but also skilled in Back-end and able to deliver feature
                    from idea to implemention and maintainance.
                    Higly skilled in clean code practices, testing(unit and e2e). 
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
                    Dnipropetrovsk State University, Computer science, Master Degree, 2011-2016
                </Text>
            </Box>
        </Stack>
    )
}

export default CV
