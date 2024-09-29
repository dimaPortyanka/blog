import * as React from 'react'
 
import {
    Code,
    Divider, 
    Heading,
    Link,
    ListItem, 
    Text,
    UnorderedList,
    VStack,
} from '@chakra-ui/react'
import type {
    HeadFC,
    PageProps, 
} from 'gatsby'

import Layout from 'src/components/Layout'
import CodeSection from 'src/components/CodeSection'
import CodeLine from 'src/components/CodeLine'
import CodeBlock from 'src/components/CodeBlock'


const SetupLinter: React.FC<PageProps> = () => {
    return (
        <Layout>
            <VStack
                gap={5}
            >
                <Heading
                    size="m"
                >
                    Context
                </Heading>
                <Text>
                    You are working on a project that has been around for a while 
                    and has seen a variety of JavaScript styles come and go. 
                    It started with a single developer and now reflects different 
                    approaches that were popular at the time. Before 2014, developers 
                    often tried to mimic Java-like classes and OOP in JavaScript, 
                    but after 2014(React rise), functional programming became the trend.
                    As the codebase evolved, it shifted from resembling Java to a more 
                    Go-like style. This project might have code from many different eras, 
                    including a mix of different trends developers picked up at JavaScript 
                    conferences. For example, you might find a variety of state management 
                    libraries like plain Redux, Redux Ducks, Redux Thunk (or Saga), Mobx, 
                    and Mobx State Tree.
                    To bring more stability and consistency to this varied mix, it would be 
                    beneficial to standardize the codebase and adopt a more unified style.
                </Text>
                <Divider />
                <Heading>
                    Setup linter
                </Heading>
                <Text>
                    Starting with a linter is a smart move because it's a simple tool 
                    that can help you in many ways. It can reduce those annoying 
                    "white screen of death" errors and make your code style 
                    consistent. This consistency is beneficial during code reviews 
                    as it cuts down on unnecessary noise, making the process smoother. 
                    In the long run, using a linter can also boost your productivity.
                </Text>
                <Heading
                    size="s"
                >
                    White screen of death
                </Heading>
                <Text>
                    How linter can save you from white screen of death? 
                    and what is white screen of death?
                    So to start what is white screen of death. 
                    White screen of death happens when execution
                    of your js code cant go any further.
                </Text>
                <CodeSection>
                    <CodeBlock
                        key="examp-1"
                        lines={[
                            [0, '"use strict"',],
                            [0, '',],
                            [0, '',],
                            [0, 'console.log(a)',],
                        ]}
                    >
                    </CodeBlock>
                </CodeSection>
                <Text>
                    First thought that you might have after checking this code is:
                    What a silly mistake there is no change that i will do that.
                    But lets think a bit more about it, what we can see here is
                    usage of undeclared variable. When this might happen even with you?
                </Text>
                <UnorderedList>
                    <ListItem>
                        Autoimport in your favourite IDE havn't worked out.
                    </ListItem>
                    <ListItem>
                        You wanter to use some global variable like windows or yup, and made a typo.
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
                    reduce amount of white screens that you might create. Which is something that I
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
                <Heading
                    size="s"
                >
                    Enfore code style
                </Heading>
                <Text>
                    Somebody like semicolons, somebody not, somebody find puting properties all in 
                    one line ok, somebody will find that desctractive. 
                    There thousands of variations what you might like or what you may not like. 
                    The linter is a conventation 
                    that all agreed to follow and if something is not in convention this mean that
                    this is not important. 
                    This is extremly important to prevent unneeded discussions.
                    Dont understand me wrong, this discussion will still happen but this will be 
                    independant from feature creation or bugfix. 
                    In ideal scenario, if you see part of code that you think should look different,
                    you should discuss styling changes with team and agree on some good enough for 
                    everyone decision. 
                    Sometimes things like put semicolone or not to put semicolone will just be 
                    somebody to accept decission of the group. 
                    But even in this case linter will make their life better, as with correctly 
                    setuped dev environment, they might continue puting or skipping semicolons,
                    and just on same or pre-commit eslint will be able to fix such errors.
                </Text>
                <Text>
                    Small suggestion after you changed code style you'll end up with your linter
                    showing errors all over the place and in each file. There are few ways how can
                    we keep our builds GREEN but at same time enforce new code to be nice and shiny.
                </Text>
                <CodeSection>
                    npx eslint ./src --max-warnings 20
                </CodeSection>
                <Text>
                    After runing eslint for the first time you can specify all old errors 
                    as value for --max-warnings flag and with each next pr this value 
                    should be only decreasing.
                    Another option that I used is that you can use output of 
                    eslint to prepend and disable rule in each file and gradually remove
                    this comments.
                </Text>
                <Heading
                    size="m"
                >
                    How linter can make you more productive?
                </Heading>
                <Text>
                    So as i mentioned before, is that it saves time and make this code 
                    style discussion outside of the scope of feature creation. 
                    Which make pull/merge request review more productive.
                    Another thing is that you can come up with eslint rules that will 
                    make for example merging easier. 
                    How? if you enforce imports to be sorted alphabetically any new added 
                    import will have its place despite if it was added in parallel by few devs,
                    so this will decreases chance of git conflict. 
                    Another example of decreasing chance of conflicts is trailing commas, 
                    or putting arguments from new line. 
                    You can come up with rules that makes your team productive and with 
                    nice tooling in you dev env linter will play a role of an assistant 
                    who is cleaning your kitchen after or while you were cooking.
                </Text>
                <Heading
                    size="m"
                >
                    What your linter file consists from
                </Heading>
                <Text>
                    I personaly prefer yml for my linter config, it has more compact syntax, 
                    but there other options. 
                    Likejson, js and probably something else.
                </Text>
                <CodeSection >
                    <CodeBlock
                        key='env-setup'
                        lines={[
                            [0, 'env:',],
                            [1, 'broser: true',],
                            [1, 'es2021: true',],
                        ]}
                    >
                    </CodeBlock>
                </CodeSection>
                <Text>
                    So what does this part mean.
                    {' '}
                    <Code>env</Code> 
                    : - basically this is for what environment you will use your code.
                    It is important to understand what js syntax is supported and what
                    global variables you might have. Like browser has window and node has process.
                </Text>
                <Text>
                    Next section is extend, you dont have to write linter from 
                    scratch(cause we want to be productive that is why open to 
                    reuse gifts of community), there are already predefined rules 
                    that solves a lot of pretty straitforward dropbags of js/ts. 
                </Text>
                <CodeSection>
                    <CodeBlock
                        key="extends"
                        lines={[
                            [0, 'extends:',],
                            [1, '- eslint:recommended',],
                            [1, '- plugin:@typescript-eslint/recommended',],
                            [1, '- plugin:import/typescript',],
                            [1, '- plugin:react/recommended',],
                        ]}
                    />
                </CodeSection>
                <Text>
                   eslint:recomended - fixes possible logical errors in code, which as an example
                   array-callback-return - Enforce return statements in callbacks of array methods.
                   Which sounds like something that i definatly need to get some 
                   warning or even error if i forgot to do that. you can look for other rules that
                   are already predefined in these presets.
                </Text>
                <Text>
                    Next section is parser it helps eslint to understand your code.
                </Text>
                <CodeSection>
                    <CodeBlock
                        key="settings"
                        lines={[
                            [0, 'parser: @typescript-eslint/parser',],
                            [0, 'parserOptions:',],
                            [1, 'ecmaVersion: latest',],
                            [1, 'sourceType: module',],
                            [0, 'plugins:',],
                            [1, '@typescript-eslint',],
                            [1, 'react',],
                            [1, '@stylistic/js',],
                            [0, 'settings:',],
                            [1, 'import/resolver:',],
                            [2, 'typescript: true',],
                            [1, 'react',],
                            [2, 'version: detect',],
                        ]}
                    />
                </CodeSection>
                <Heading
                    size="s"
                >
                    Example of rules that I like and why I think they make sense
                </Heading>
                <CodeSection>
                    <CodeLine>
                        rules:
                    </CodeLine>
                </CodeSection>
                <Text>
                    This is the section where you specify eslint rules that you want to assign
                    or re-asign if behavior from presets isnt something that you like.
                </Text>
                <Text>
                    I want to share with you my opinion what rules i like to set:
                </Text>
                <CodeSection>
                    <CodeBlock
                        key="long-line-rule"
                        lines={[
                            [0, '\'@stylistic/js/max-len\':',],
                            [1, '- error',],
                            [1, '- code: 100',],
                        ]}
                    />
                </CodeSection>
                <Text>
                    Long lines just hard to read, so make it better for everyone.
                </Text>
                <Divider />
                <CodeSection>
                    <CodeBlock
                        key="new-line-rules"
                        lines={[
                            [0, '\'@stylistic/js/comma-dangle\':',],
                            [1, '- error',],
                            [1, '- always',],
                            [0, 'object-curly-newline:',],
                            [1, '- error',],
                            [1, '- always',],
                            [0, 'react/jsx-closing-bracket-location:',],
                            [1, '- error',],
                            [1, '- tag-aligned',],
                            [0, 'react/jsx-first-prop-new-line:',],
                            [1, '- error',],
                            [1, '- always',],
                        ]}
                    />
                </CodeSection>
                <Text>
                    Why I like comma dangle? This makes your git diff smaller.
                    Because comma is already in the end in combination with each 
                    element on a new line, it will have only addition in your git diff.
                    This makes working with codebase more productive, small git diffs,
                    less chance of merge conflicts.
                </Text>
                <Divider />
                <CodeSection>
                    <CodeBlock
                        key="sorting-props-rule"
                        lines={[
                            [0, 'react/jsx-sort-props:',],
                            [1, '- error',],
                            [1, '- callbacksLast: true',],
                            [2, 'shorthandFirst: true',],
                            [2, 'reservedFirst: true',],
                            [2, 'noSortAlphabetically: false',],
                            [0, 'sort-imports:',],
                            [1, '- error',],
                            [1, '- ignoreDeclarationSort: true',],
                        ]}
                    />
                </CodeSection>
                <Text>
                    Sorting of imports/props solves even more merge
                    conflict pron scenario. With this rule whatever
                    changes happens specific imports will be always
                    on certain place. Also this eliminate posibility
                    that smb will sort in theier pr props in a different
                    way. So it saves time for whole team and follows
                    the practice only relevant changes in pr.
                </Text>
                <Divider />
            </VStack>
            <Heading>
                Summary
            </Heading>
            <Text>
                Linter is the entry tool that will help you be more
                productive. So it make sense to add it to your project
                as soon as possible. Isnt Prettier good enough? Maybe,
                Prettier doesnt allow to configure rules as eslint
                allows, so if you like prettier it is a good tool, but
                maybe it make sense to rethink, how much prettier
                actually helps you. And remember that spending 1-2 days
                on settuping eslint with really rules that make sense to
                you will be saving each person in team some time every day.
                Maybe it worth.
            </Text>
            <Text>
                This is the first article from the series of articles that
                Im planing to make about evolving legacy apps.
            </Text>
        </Layout>
    )
}

export default SetupLinter

export const Head: HeadFC = () => <title>Setup linter</title>
