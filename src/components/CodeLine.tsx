import React from 'react'

const CodeLine: React.FC<{
    children: string, 
    offset?: number
}> = ({
    children,
    offset = 0,
},) => {
    return (
        <>
            {Array(offset,).fill('  ',).join('',)}
            {children}
            <br />
        </>
    )
}

export default CodeLine
