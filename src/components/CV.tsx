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
    ListItem,
    Spacer, 
    Stack,
    UnorderedList,
} from '@chakra-ui/react'
import {
    CalendarIcon, 
    EmailIcon, 
} from '@chakra-ui/icons'

import workExperience from './workExperience'

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
            <Heading
                size="m"
            >
                Work experience
            </Heading>
            <Accordion
                allowMultiple 
                allowToggle
                defaultIndex={[
                    0,
                    1,
                    2,
                ]}
            >
                {
                    workExperience.map(({
                        location,
                        company,
                        start,
                        end,
                        role,
                        achievements,
                    },) => {
                        return (
                            <AccordionItem
                                key={`${company}-${start}-${end}`}
                            >
                                <AccordionButton 
                                    display="flex"
                                    gap="10"
                                >
                                    <Box
                                        display="flex"
                                        gap="5"
                                        justifyContent="space-between"
                                        width="100%"
                                    >
                                        <div>
                                            {end}
                                            <br />
                                            {start}
                                        </div>
                                        <div>
                                            {role}
                                        </div>
                                        <div>
                                            {company}
                                            <br />
                                            {location}
                                        </div>
                                    </Box>
                                    <Spacer />
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel>
                                    <UnorderedList>
                                        {achievements.map((
                                            achievement,
                                            index,
                                        ) => {
                                            return (
                                                <ListItem
                                                    key={`achievement-${index}`}
                                                >
                                                    {achievement}
                                                </ListItem>
                                            )
                                        },)}
                                    </UnorderedList>
                                </AccordionPanel>
                            </AccordionItem>
                        )
                    },)
                }
            </Accordion>
        </Stack>
    )
}

export default CV
