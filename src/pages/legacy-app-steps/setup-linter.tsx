import * as React from 'react'
import type {
    HeadFC,
    PageProps, 
} from 'gatsby'

import Layout from 'src/components/Layout'
import Linter from 'src/components/Linter'

const SetupLinter: React.FC<PageProps> = () => {
    return (
        <Layout>
            <Linter />
        </Layout>
    )
}

export default SetupLinter

export const Head: HeadFC = () => <title>Stories of the drunken sailor</title>
