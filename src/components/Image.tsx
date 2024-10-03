import React, {
    ImgHTMLAttributes, useEffect, useRef, useState, 
} from 'react'
import {
    Box,
    Card,
    Center,
    Container,
} from '@chakra-ui/react'
import {
    CloseButton, 
} from '@chakra-ui/react'

const Image = (props: ImgHTMLAttributes<HTMLImageElement> & { src: string },) => {
    const {
        src, 
    } = props
    const [fullsreenState, setFullScreenState,] = useState(false,)
    const [intervalId, setIntervalId,] = useState<ReturnType<typeof setTimeout>>()
    const ref = useRef<HTMLDivElement>(null,)
    const onClick = () => {
        ref.current?.requestFullscreen().then(() => {
            setFullScreenState(true,)
        },)
    }

    useEffect(() => {
        if (fullsreenState && intervalId === undefined) {
            const newIntervalId = setInterval(() => {
                if (!document.fullscreenElement) {
                    setFullScreenState(false,)
                }
            }, 200,)
            setIntervalId(newIntervalId,)

        } else if (!fullsreenState && intervalId !== undefined) {
            clearInterval(intervalId,)
            setIntervalId(undefined,)
        }

    }, [fullsreenState, intervalId,],)

    return (
        <>
            <div
                ref={ref}
            >
                {fullsreenState && (
                    <Container 
                        alignItems="center" 
                        display="flex" 
                        height="100%"
                    >
                        <Card>
                            <Box
                                textAlign="right"
                            >
                                <CloseButton />
                            </Box>
                            <Center>
                                <Box>
                                    <img
                                        src={src}
                                    />
                                </Box>
                            </Center>
                        </Card>
                    </Container>
                )}
            </div>
            <img
                {...props}  onClick={onClick}
            />
        </>
    )
}

export default Image
