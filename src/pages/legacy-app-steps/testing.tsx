import * as React from 'react'
import {
    PageProps, 
} from 'gatsby'
import {
    Heading,    
    Text,
    VStack,
} from '@chakra-ui/react'

import Layout from 'src/components/Layout'

const Testing: React.FC<PageProps> = () => {
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
                    This is part 2 of series migrating legacy app.
                    You have setuped the linter and integrated it with CI/CD.
                    Now making changes in code you can be sure typo in variable name
                    will be caught by linter and code style of the appliction became more
                    consistent so making changes just a bit more pleasant in general.
                    But still after making change you are not sure if your changes wont brake 
                    previously working functionality. Obvious decision you need testing.
                    But as my experience says you shouldnt start with unit tests, start with
                    small amount of e2e tests.
                </Text>
                <Heading
                    size="l"
                >
                    Unit tests vs E2E tests
                </Heading>
                <Heading
                    size="m"
                >
                    Unit tests
                </Heading>
                <Text>
                    if we explain very briefly unit tests are tests of small units of codebase.
                    As an example it can be a test of utility function
                    or specific component.
                </Text>
                <Heading
                    size="m"
                >
                    E2E tests
                </Heading>
                <Text>
                    From other side E2E tests doesnt care about utility 
                    functions or specific components.
                    You might have broken some unit test by refactoring 
                    functionality of some function
                    and moving this logic to another function, but for user nothing has changed.
                    So this is the difference.
                </Text>
            </VStack>
        </Layout>
    )
}

export default Testing
