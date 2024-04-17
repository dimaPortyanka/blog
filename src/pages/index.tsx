import * as React from 'react'
import type {
    HeadFC, PageProps, 
} from 'gatsby'

import CV from 'src/components/CV'
import Layout from 'src/components/Layout'

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout
            noDisclaimer
        >
            <CV />
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Dmytro Portianka - CV</title>
