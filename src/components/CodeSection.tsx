import React, {
    ReactNode, 
} from 'react'
import {
    Code, 
} from '@chakra-ui/react'

const CodeSection: React.FC<{children: ReactNode}> = ({
    children,
},) => {
    return (
        <Code
            p={2}
            width="100%"
        >
            <pre>
                {children}
            </pre>
        </Code>
    )
}

export default CodeSection
