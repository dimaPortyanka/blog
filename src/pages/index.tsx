import * as React from 'react'
import type {
    HeadFC, 
    PageProps, 
} from 'gatsby'

import Layout from 'src/components/Layout'
import Me from 'src/components/Me'

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout
            noDisclaimer
        >
            <Me />
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Dmytro Portianka</title>
