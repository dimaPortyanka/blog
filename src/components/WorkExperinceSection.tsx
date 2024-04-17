import {
    Accordion, 
    AccordionButton, 
    AccordionIcon, 
    AccordionItem, 
    AccordionPanel, 
    Box, 
    Heading, 
    ListItem,
    Spacer,
    Text,
    UnorderedList,
} from '@chakra-ui/react'

import React, {
    useState,
} from 'react'

import workExperience from './workExperience'

const WorkExperienceSection = () => {
    const [activeAccordionItems, setActiveAccordionItems,] = useState([0,1,2,],)
    return (
        <Box>
            <Heading
                size="m"
            >
            Work experience
            </Heading>
            <Accordion
                allowMultiple 
                allowToggle
                defaultIndex={activeAccordionItems}
                onChange={(newActiveAccordionItems,) => {
                    setActiveAccordionItems(newActiveAccordionItems as number[],)
                }}
            >
                {
                    workExperience.map(
                        ({
                            location,
                            company,
                            start,
                            end,
                            role,
                            achievements,
                        }, index,) => {
                            const itemIsExpanded = activeAccordionItems.includes(index,)

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
                                            {!itemIsExpanded && (
                                                <Text
                                                    textAlign="start"
                                                >
                                                    {end}
                                                    <br />
                                                    {start}
                                                </Text>
                                            )}
                                            <Text
                                                as={itemIsExpanded ? 'b': 'samp'}
                                            >
                                                {role.split(',',).map((rolePart, index, arr,) => {
                                                    return (
                                                        <>
                                                            {rolePart}
                                                            {index < arr.length - 1 && <br />}
                                                        </>
                                                    )
                                                },)}
                                            </Text>
                                            <Text
                                                as={itemIsExpanded ? 'b': 'samp'}
                                                textAlign="end"
                                            >
                                                {company}
                                                <br />
                                                {location}
                                            </Text>
                                        </Box>
                                        <Spacer />
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel
                                        display="flex"
                                        flexDir={{
                                            base: 'column',
                                            md: 'row',
                                        }}
                                    >
                                        {itemIsExpanded && (
                                            <>
                                                <Text
                                                    as="b"
                                                    display={{
                                                        sm: 'none',
                                                    }}
                                                    textAlign="start"
                                                >
                                                    {start}
                                                    {' '}
                                                -
                                                    {' '}
                                                    {end}
                                                </Text>
                                                <Text
                                                    as="b"
                                                    display={{
                                                        base: 'none',
                                                        sm: 'block',
                                                    }}
                                                    minW="6em"
                                                    textAlign="start"
                                                >
                                                    {end}
                                                    <br />
                                                    {start}
                                                </Text>
                                            </>
                                        )}
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
        </Box>
    )
}

export default WorkExperienceSection
