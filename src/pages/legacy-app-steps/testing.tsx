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
                    Unit test will check if after sending specific arguments we are getting correct respsonse.
                    In practice we might also check what other function were called.
                    And this mean we really care about implementation of this function.
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
                    So unit tests might slow down refactoring of the application and doesnt bring much benefits.
                </Text>
                <Heading size="m">
                    How to write E2E tests
                </Heading>
                <Text>
                    When you are writing E2E test first thing that you think should be how consistant and reliable my tests will be.
                    So one test shouldnt interfer with other and one test suite run shouldnt depend from another.
                    But you need to start getting benefits already now, without making changing to CI or introducing some seeding mechanism.
                    So quick answer use already existing data and dont modify or if you modify data in this test run revert them back.
                    Either on success or failure, something like afer, or afterEach.
                </Text>
                <Text>
                    First set of E2E tests should be simple, cover critical path of your application and regions that you want to refactor
                    without editing data but rather just make sure everything interactable and visible. 
                </Text>
                <Text>
                    This small subset of E2E tests is easy to write and will bring you a lot of benefits.
                </Text>
            </VStack>
        </Layout>
    )
}

export default Testing
