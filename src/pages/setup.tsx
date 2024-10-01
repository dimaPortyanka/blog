import * as React from 'react'
import type {
    HeadFC, PageProps, 
} from 'gatsby'
import {
    Heading,
    Link,
    ListItem,
    Text,
    UnorderedList,
} from '@chakra-ui/react'

import Layout from 'src/components/Layout'

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
                size="l"
            >
                What tools do I use daily
            </Heading>
            <Heading 
                size="m"
            >
                List of tools
            </Heading>
            <Text
                fontSize="sm"
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
                            {name} - 
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
                size="m"
            >
                What was before
            </Heading>
            <Heading
                size="sm"
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
            <Heading>
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
                size="m"
            >
                Bigger problem
            </Heading>
            <Text>
                So during the covid I started to feel pain in my shoulder and wrist. As my
                setup required usage of mouse I was continuosly switching between mouse and
                keyboard and my posture wasnt good while typing. Biggest issue for me was
                mouse. I wanted to get rid of it ASAP. Also I wanted to have split keyboard
                by obvious reason our shoulders are wider then typical keyboard width.
                So I checked a lot of options, I was thinking about kinesis, but it seemd
                to bulky for me and it smelled like a wheelchair to me(sorry to kinessis fans)
                and instead of it i've ordered ergodox ez. Which was amazing, it had cool
                online editor to remap keys, ability to emulate mouse from keyboard,
                also it had glowing keys. So it looked cool and easy to start with the same time.
                I used it for couple of years and dont regret how much i spent on it. But
                still I've been using vscode that required mouse. So I decided to switch to VIM
                honestly swith to VIM wasnt a big issue for me after I get used to the keyboard.
                I want to say that decision to switch to VIM was inspired a lot by
                some colleague that I worked with many years ago, he was using it daily
                while I was using VSCode. At that time I couldnt understand why he was
                so excited about terminal applications like fzf. Which he enforced me to start
                using, thank you my friend :) I belive that actually influenced me a lot.
                Firstly because I was working with the same tech stack for many years, also
                when i was doing this switch I was working with known codebase, that had
                precommit hooks, nice CI and I new it pretty good. So to make daily work
                I didnt need much help from editor, and i was tweaking my VIM just step by step.
                The only big issue that i had was browsing, but as VIM motion was something
                that i already get used to I just installed Vimium chrome extension that
                alowed me to navigate internet without mouse with easy and blazingly fast.
                I started using tmux mostly for tabs and being able to acces them 
                from keyboard.
                So this was the setup that I liked and gradually improving.
            </Text>
            <Heading
                size="m"
            >
                Evolution
            </Heading>
            <Text>
                After some time VIM was changed to NeoVim, as it has more active community.
                When Im talking about active community Im mostly thinking about TJ DeVries 
                and ThePrimeagen.
                Videos of this youtubers helped a lot both by coping theier setup and also by
                showing different perspective and vision of how software editor should work.
                This tool is specified second in my list just as i think this tool is cool but
                still replacable.

                I switched from tmux to kitty(orange to apples one might say).
                From my perspective kitty had everything that i 
                needed(shortcuts to control everything).
                <Link
                    href="https://github.com/kovidgoyal/kitty/issues/391"
                >post of kitty author</Link>
                
                One tool that is with me the longest is fzf. 
                This tool is not replaced by anything yet.
                I used fzy or some other more performant analogues, 
                but fzf is still top tool for me.
                It makes using terminal a breeze and removing 
                huge amount of typing from me.
            </Text>
        </Layout>
    )
}

export default MySetup

export const Head: HeadFC = () => <title>My setup</title>
