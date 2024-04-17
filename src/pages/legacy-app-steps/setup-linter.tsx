import * as React from 'react'
 
import {
    Code,
    Heading, 
    Link, 
    ListItem,
    Text,
    UnorderedList,
} from '@chakra-ui/react'
import type {
    HeadFC,
    PageProps, 
} from 'gatsby'

import Layout from 'src/components/Layout'

const SetupLinter: React.FC<PageProps> = () => {
    return (
        <Layout>
            <Heading>Setup linter</Heading>
            <Text>
                So lets imagine this is your first day working with some new project.
            </Text>
            <Text>
                When you start with legacy app you should start 
                with setuping linter if it is not there.
            </Text>
            <Text>
                What problems will you have? what are biggest problems? What are easiest to solve?
            </Text>
            <Text>
                Why to start with linter? because linter is basically low hanging fruit.
                this is the tool that will help you to eliminate some of white screen 
                of death problems, make code style consistant, which helps during code review, 
                you have less noise reviewing code, also this is the tool that will help you
                to be more productive later on.
            </Text>
            <Text>
                How linter can save you from white screen of death? 
                and what is white screen of death?
                So to start what is white screen of death. 
                White screen of death happens when execution
                of your js code cant go any further.
            </Text>
            <Code
                p={2}
                width="100%"
            >
                "use strict"
                <br />
                <br />
                console.log(a)
            </Code>
            <Text>
                First thought that you might have after checking this code is:
                What a silly mistake there is no change that i will do that.
                But lets think a bit more about it, what we can see here is
                usage of undeclared variable. When this might happen even with you?
            </Text>
            <UnorderedList>
                <ListItem>
                    Autoimport in your favourite IDE havnt worked out
                </ListItem>
                <ListItem>
                    You wanter to use some global variable like windows or yup, and made a typo
                </ListItem>
                <ListItem>
                    You've done some refactoring and accidently moves something 
                    and accidently took out variable declaration from this file.
                </ListItem>
            </UnorderedList>
            <Text>
                All this situations seems totaly valid for me and I would like smb let me know
                that im doing something wrong. So this is the moment when eslint come to play
                and in particular "no-undef" rule. This is an example of eslint rule that can
                reduce amount of white screens that you might create. Which is something that i
                trully belive each js app should have. Also very useful rule is "no-undefined"
                which stops from assigning some value to "undefined". So these are rules that 
                help you to reduce amount of possible problems with your js code and you can 
                find more of them on 
                {' '}
                <Link
                    isExternal
                    bg="red.100"
                    href="https://eslint.org/docs/latest/rules/"
                >
                    ESLint page 
                </Link>
            </Text>
            <Text>
                Enfore code style
            </Text>
        </Layout>
    )
}

export default SetupLinter

export const Head: HeadFC = () => <title>Stories of the drunken sailor</title>
