import React from 'react'

import CodeLine from 'src/components/CodeLine'

const CodeBlock: React.FC<{
    key:string, 
    lines: [number, string][]
}> = ({
    lines,
    key,
},) => {
    return (
        <>
            {lines.map(([offset, str,],i,) => {
                return (
                    <CodeLine
                        key={`${key}-code-line-${i}`}
                        offset={offset}
                    >
                        {str}
                    </CodeLine>
                )
            },)}
        </>
    )
}

export default CodeBlock
