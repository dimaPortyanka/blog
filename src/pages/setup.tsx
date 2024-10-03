import React from 'react'
import type {
    HeadFC, 
} from 'gatsby'

import SetupComponent from 'src/components/setup/setup'

const Setup = () => {
    return <SetupComponent />
}

export default Setup
export const Head: HeadFC = () => <title>My setup</title>
