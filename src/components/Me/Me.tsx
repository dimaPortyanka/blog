import * as React from 'react'

import { 
    Box,
    Card, 
    CardBody,
    CardHeader,
    Center, 
    Flex, 
    Grid,
    GridItem,
    Heading,
    Image,
    Text,
} from '@chakra-ui/react'

import saltoImage from './images/jumping.gif'
import snake1ScreenShot from './images/snake_1_screenshot.png'
import delphi7 from './images/Delphi7.webp'
import gameOfLife from './images/game_of_life.png'
import joomlaLogo from './images/joomla.png'
import fontAwesome from './images/font_awesome.png'
import createComponent from './images/create_component.jpg'
import wrestle from './images/wrestle.png'
import benchPress from './images/bench_press150.png'
import deadLift from './images/deadlift200.png'
import mountain2 from './images/mountain2.jpg'
import mountain from './images/mountain.jpg'
import sriLanka from './images/sri_lanka.jpg'
import accelerator from './images/accelerator.jpg'
import adamsPeek from './images/adams_peek.jpg'
import thalwil from './images/thalwil.jpg'

const FUN_PROJECTS: {thumbnail: string, body: string}[] = [{
    thumbnail: delphi7,
    body: `
        Three hundread and one simulation of physics experiments. 
        Say hi to my school teacher. 
        This is the reason why I started doing programming
        I liked physics and wanted to make some simulations.
        Just a bit more details I was a fan of astronomy and
        modeling how cosmic object move it space was something
        that kept me excited.
    `,
}, {
    thumbnail: gameOfLife,
    body: `
        Again some simulations percolations and stuff that
        helped me to understand datastructures and showed
        me reason to learn algorythms.
        To this group I would also add learning something
        new from doing tasks from leetcode or bigfrontend.dev.
    `,
}, {
    thumbnail: joomlaLogo,
    body: `
        One of my first practical things was website for 
        my fathers company, joomla then migrated to
        open cart, probably will be migrated to something
        that ill enjoy more to work with rather then php CMS.
        This project give me a push to move forward and learn
        more about web development.
    `,
}, {
    thumbnail: fontAwesome,
    body: `
          Some side task in startup, tool to load png's of 
          font-awesome icons.
          This thing got kind of popular. That made me fill
          really proud of myself. 
          And gave me confidents for many other projects.
          Just to mention I havent creted font awesome,
          our designer just needed small tool to insert
          icons into our mockups.
          So for one evening I've create a tool to find
          and load any icon.
    `,
}, {
    thumbnail: snake1ScreenShot,
    body: `
        Standrd js with canvas one of first project that
        I decided to ask designer help me with that.
        It wasnt popular but i was just very satisfied
        with the result.
        There was a second version of this game,
        which i just wanted to implement with new
        tooling(TS, RxJS, WebGL, Parcel).
    `,
}, {
    thumbnail: createComponent,
    body: `
        Created VScode plugin to generate react component 
        files with one click based on template. 
        I created it to increase speed of creating new components.
        And also VScode was my main editor at that time.
    `,
},]

const Me = () => {
    return (
        <Flex
            direction="column" gap="2rem"
        >
            <Flex
                alignItems="center"
            >
                <Box>
                    <Heading
                        paddingY="2rem"
                    >
                        Hi there!
                    </Heading>
                    <Heading
                        size="xs"
                    >
                        My name is Dmytro and this is my less formal description of who I am.
                    </Heading>
                    <Text>
                        I'm software engineer and Im happy to say that this is my profession
                        and also my favourite hobby. 
                        I feel happy everytime im writing something cool. 
                        And Im doing it professionally since 2014 and started
                        doing coding since high school 2010.
                    </Text>
                </Box>
                <Image
                    height="20rem" src={saltoImage}
                />
            </Flex>
            <Flex
                direction="column"
            >
                <Heading
                    size="sm"
                >
                    Some stuff that was amazingly fun to make.
                </Heading>
                <Grid
                    gap="1rem"
                    gridTemplateColumns="repeat(3, 1fr);"
                >
                    {FUN_PROJECTS.map(({
                        thumbnail, body,
                    },) => (
                        <GridItem
                            key={thumbnail}
                        >
                            <Card>
                                <CardHeader>
                                    <Center>
                                        <Image
                                            maxH="10rem" maxW="100%" src={thumbnail}
                                        />
                                    </Center>
                                </CardHeader>
                                <CardBody>
                                    {body}
                                </CardBody>
                            </Card>
                        </GridItem>
                    ),)}
                </Grid>
            </Flex>
            <Flex
                direction="column"
            >
                <Heading>
                    I love any activity that can take my breath
                </Heading>
                <Flex>
                    <Box
                        background="lightyellow" flex="1" padding="0.5rem"
                    >
                        <Heading
                            size="sm"
                        >
                            Sport
                        </Heading>
                        <Text>
                            I've bee doing different kind of sports 
                            since age of 3.
                            I started from wrestling, after it was different
                            kind of martial arts till age of 20.
                            Won couple of local championships and just got
                            best lesson how not to give up and overcome any
                            chalange.
                        </Text>
                        <Center>
                            <Image
                                fit="contain" maxH="20rem" src={wrestle}
                            />
                        </Center>
                        <Image
                            fit="contain" maxH="20rem" src={benchPress}
                        />
                        <Image
                            fit="contain" maxH="20rem" src={deadLift}
                        />
                    </Box>
                    <Box
                        background="lightblue" flex="1" padding="0.5rem"
                    >
                        <Heading
                            size="sm"
                        >
                            Travel
                        </Heading>
                        <Text>
                            I lived in Ukraine, Switzerland, USA and visited 
                            Poland, Czehia, Austria, Germany, 
                            France, Lichtenstein, Spain, Israel,
                            United Kingdom, Canada, Bali, Sri Lanka.
                        </Text>
                        <Image
                            src={thalwil}
                        />
                        <Image
                            src={sriLanka}
                        />
                    </Box>
                </Flex>
                <Image
                    src={mountain}
                />
                <Image
                    src={mountain2}
                />
                <Image
                    src={adamsPeek}
                />
                <Image
                    src={accelerator}
                />
            </Flex>
        </Flex>
    )
}

export default Me
