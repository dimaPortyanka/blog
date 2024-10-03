import * as React from 'react'
import type {
    HeadFC, 
    PageProps, 
} from 'gatsby'
import {
    Center,
    Code,
    Heading,
    Link,
    ListItem,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    UnorderedList,
} from '@chakra-ui/react'

import Layout from 'src/components/Layout'
import Image from 'src/components/Image'

import vimiumExample from './assets/vimium_examp.png'
import dasbob from './assets/dasbob.webp'
import kinesis from './assets/kinesis.webp'
import ergodox from './assets/ergodox.webp'
import fzfHistory from './assets/fzf_history.jpg'

const POST_LINK = 'https://githttps://dmytro-portianka.xyz/setuphub.com/kovidgoyal/kitty/issues/391'

const TOOLS = [
    ['dasbob', 'https://github.com/GroooveBob/DASBOB',],
    [
        'Vimium', 
        'https://chromewebstore.google.com/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb',
    ],
    ['NeoVim', 'https://neovim.io/',],
    ['fzf', 'https://github.com/junegunn/fzf',],
    ['kitty', 'https://sw.kovidgoyal.net/kitty/',],
    [
        'steam deck(steamos, arch linux underhood)', 
        'https://store.steampowered.com/steamdeck/',
    ],
]

const MySetup: React.FC<PageProps> = () => {
    return (
        <Layout>
            <Heading
                size="xl"
            >
                What tools do I use daily
            </Heading>
            <Heading 
                size="l"
            >
                List of tools
            </Heading>
            <Text
                fontSize="m"
            >
                if you not interested in content just curious about list of tools,
                I wan't waste your time. I ordered these tools based on how much
                impact it has on my quality of life.
            </Text>
            <UnorderedList>
                {TOOLS.map(([name, path,],) => {
                    return (
                        <ListItem
                            key={name}
                        >
                            {name}
                            {' '}
                            - 
                            {' '}
                            <Link
                                isExternal href={path}
                            >
                            [link]
                            </Link>
                        </ListItem>
                    )
                },)}
            </UnorderedList>
            <Text>
                if you still interested Ill continue sharing my story why i'm using these tools.
            </Text>
            <Heading
                size="l"
            >
                What was before
            </Heading>
            <Heading
                size="m"
            >
                First steps
            </Heading>
            <Text>
                I started my journey in web development back in 2009 or 2010. I was keen about
                wyswig editors. Also it was the result that first IDE that i used was Delpi 7,
                I still think that it was a great tool for a schoolboy. So this landed me to
                DreamViewer which was really highquality editor both with wyswig and editer mode.
                Longer I worked with it, more I was finding myself writing in text editor. So this
                was an experience that showed me in practice that writing code is faster than
                looking for some visual blocks that can be combined to build this interface.
            </Text>
            <Heading
                size="l"
            >
                When software engineering became my work
            </Heading>
            <Text>
                After it i started trying different editors, but mostly I was learning C++,
                so my edior was codeblocks or visual studio, where I find out that editors
                can be better then just notepad. And intelissense is really helpful. But that
                was what i used in my classes, in free time i was curious about web development
                and found SublimeText as my favourite, editor. Also at that time I started
                using Ubuntu and find out that terminal is actually way of communicating with
                PC, but I wasnt using it much. mostly to run one or two commands and close it
                to continue working in some GUI. I really liked my setup, I've been doing
                distrohopping, using different editors. All this landed me to VScode.
                I really liked how customizable it is and how many plugins exists for it.
                I even created few plugins for it and I can say dev experience with creating
                plugins for vscode is really good or at least at was. As from boilerplate
                you are getting setup with e2e tests, typescript. But was one thing that
                bothered me while I've been using VSCode. Panes that had errors, terminal,
                file explorer, wasnt accessible without mouse, or some parts of them wasnt.
                And switching between them was treated not as switching between panes, but
                rather opening separate app in specified upfront pane. So each pane needed
                to be opened by separate shortcut. It was bothering me, but i tolarated it.
            </Text>
            <Heading
                size="l"
            >
                Bigger problem
            </Heading>
            <Text>
                So during the covid I started to feel pain in my shoulder and wrist. 

                As my setup required usage of mouse I was continuosly switching 
                between mouse and keyboard and my posture wasnt good while typing. 

                Biggest issue for me was mouse.
                I wanted to get rid of it ASAP. 
                Also I wanted to have split keyboard by obvious reason our shoulders 
                are wider than typical keyboard width.
                <Code>
                    Still, based on biacromial measurements taken in years passed and 
                    trends observed by researchers, it's probably safe to say that in 
                    the United States average shoulder width is at least 16 inches 
                    (41 cm) for men and 14 inches (36 cm) for women.
                </Code>
                <Center>
                vs 
                </Center>
                <TableContainer>
                    <Table
                        variant="simple"
                    >
                        <TableCaption>
                            Typical size of the keyboard
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th>
                                    Keyboard Size
                                </Th>
                                <Th>
                                    Number of keys
                                </Th>
                                <Th>
                                    Width
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>
                                    Full-Size (100%)
                                </Td>
                                <Td>
                                    104-108 keys
                                </Td>
                                <Td>
                                    42.8 cm
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    Tenkeyless (TKL – 80%)
                                </Td>
                                <Td>
                                    60%
                                </Td>
                                <Td>
                                    28.6 cm
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    40%
                                </Td>
                                <Td>
                                    40-44 keys
                                </Td>
                                <Td>
                                    22.8 cm
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>

                What can we say after this data is that to feel comfortable with average man
                should use 100% keyboar and by default keeping left hand on <Code>ASDF</Code> 
                keys and right hand on numbers.
                Which isnt base hand placement, typing guides suggests
                to keep your right hand on <Code>JKL;</Code>.
                <br />
                So I checked a lot of options, I was thinking about kinesis, but it seemd
                to bulky for me and it also looked quite outdated to me
                (sorry to kinessis fans)
                <Image
                    alt="kinesis" src={kinesis}
                />
                and instead of it i've ordered ergodox ez. 
                <Image
                    alt="ergodox" src={ergodox}
                />
                Which was amazing, it had cool
                online editor to remap keys, ability to emulate mouse from keyboard,
                also it had glowing keys. 
                <br />
                So it looked cool and easy to start with the same time.
                I used it for couple of years and dont regret how much i spent on it. 
                <br />
                But still I've been using vscode that required mouse. 
                So I decided to switch to VIM honestly swith to VIM wasnt a big 
                issue for me after I get used to the keyboard.
                I want to say that decision to switch to VIM was inspired a lot by
                some colleague that I worked with many years ago, he was using it daily
                while I was using VSCode. At that time I couldnt understand why he was
                so excited about terminal applications like <Code>fzf</Code>.
                Which he enforced me to start using, thank you my friend :) 
                I belive that actually influenced me a lot, not imidiatly but
                through the time.
                That switch slow down me but hasnt give me much negative impact while
                I was learning.
                Firstly because I was working with the same tech stack for many years, 
                also when i was doing this switch I was working with known codebase.
                Where I really needed only ability to switch between files fast.
                Also before it i setup precommit hooks and nice CI.
                I wasnt afraid to actually break something. 
                So to make daily work I didnt need much help from editor,
                and i was tweaking my VIM just step by step.
                <br />
                The only big issue that i had was browsing internet, 
                but as VIM motion was something that i already get 
                used to I just installed Vimium chrome extension that
                alowed me to navigate internet without mouse with easy and blazingly fast.
                <Image
                    alt="Example of vimium usage" src={vimiumExample}
                />
                <br />
                I started using tmux mostly for tabs and being able to acces them 
                from keyboard.
                <br />
                So this was the setup that I liked and gradually improving.
            </Text>
            <Heading
                size="l"
            >
                Evolution
            </Heading>
            <Text>
                <p>
                    After some time VIM was changed to NeoVim, as it has more active community.
                    When Im talking about active community Im mostly thinking about TJ DeVries 
                    and ThePrimeagen.
                    <br />
                    Videos of this youtubers helped a lot both by coping theier setup and also by
                    showing different perspective and vision of how software editor should work.
                </p>
                <p>
                    I switched from tmux to kitty(orange to apples one might say).
                    Kitty has everything that i 
                    need(shortcuts to control everything).
                    <Link 
                        href={POST_LINK}
                    >
                        post of kitty author
                    </Link>
                </p>
                <p>
                    One tool that Im using for longest time is 
                    <Code>fzf</Code>
                    This tool is ireplacable for me.
                    It makes usage of terminal so smooth and nice
                    for me.
                    <Image
                        alt="example of history search" src={fzfHistory}
                    />
                    Most usefull for me is history search,
                    as it allows me to find something that i already used.
                </p>
                <p>
                    And also i bought steam deck, for several reasons
                    <UnorderedList>
                        <ListItem>
                            It is portable gaming device
                        </ListItem>
                        <ListItem>
                            And i can use it as desktop
                        </ListItem>
                        <ListItem>
                            It is PC that comes with Linux, 
                            so guys from Valve make sure wifi, bluetooth and
                            rest works without hustle.
                        </ListItem>
                    </UnorderedList>
                    Mostly I use it attached to monitor, keyboard and webcam.
                    So for me it is 100% functional pc and when i unplug it
                    I can play on go or while im waiting for something.
                    <br />
                    And last but something that I love the most is my keyboard.
                    <Center>
                        <Image
                            alt='dasbob keyboard' src={dasbob} width="120"
                        />
                    </Center>
                    I switched from ergodox to dasbob. Mostly because it is smaller.
                    I 3d printed custom case for it, but maybe I'll swich to a
                    new keyboard soon. Something handwired and ultra ergonomic.
                </p>
            </Text>
        </Layout>
    )
}

export default MySetup

export const Head: HeadFC = () => <title>My setup</title>
