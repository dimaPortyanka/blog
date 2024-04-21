import * as React from 'react'
import {
    Heading,
    Text, 
} from '@chakra-ui/react'
import {
    Link, PageProps, 
} from 'gatsby'
import Layout from 'src/components/Layout'

const Linter: React.FC<PageProps> = ({
    location,
},) => {
    return (
        <Layout
            noSubscribe
        >
            <Heading>
                Legacy App
            </Heading>
            <Link
                to={`${location.pathname}setup-linter`}
            >
                Part 1: Linter
            </Link>
            <Text>
            </Text>
        </Layout>
    )
}

export default Linter
