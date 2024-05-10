import * as React from 'react'
import {
    Heading,
    Stack,
} from '@chakra-ui/react'
import {
    Link, PageProps, 
} from 'gatsby'
import Layout from 'src/components/Layout'

const Linter: React.FC<PageProps> = ({
    location,
},) => {
    return (
        <Layout>
            <Heading>
                Legacy App
            </Heading>
            <Stack>
                <Link
                    to={`${location.pathname}setup-linter`}
                >
                    Part 1: Linter
                </Link>
                <Link
                    to={`${location.pathname}testing`}
                >
                    Part 2: Testing
                </Link>
            </Stack>
        </Layout>
    )
}

export default Linter
