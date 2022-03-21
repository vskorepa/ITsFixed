import React from 'react'
import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { Text } from '@nextui-org/react'
import { SiteLogo } from '../components/Nav/logo'
import { SendMassageForm } from '../components/ReactHookForm/Forms'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.css'
import { RecievedMessage, SentMessage } from '../components/messages/message'

const Home: NextPage = () => {
    const { t } = useTranslation('common')

    const chatData = [
        {
            id: '0',
            sent: true,
            message: "what exactly is IT'sFixed?",
        },
        {
            id: '1',
            sent: false,
            message: "what is IT'sFixed you ask?",
        },
        {
            id: '2',
            sent: false,
            message:
                'well it is an online helpdesk designed for people strugling with their computers and not having the time or the expertiece to find the solution themsefls.',
        },
        {
            id: '3',
            sent: true,
            message:
                'wow that sounds amazing what do I do if i want someone to help me.',
        },
        {
            id: '4',
            sent: false,
            message:
                "It couldn't be more simple belive me :) you just sign up to the app using you email and a password or u can also use your Google or Facebook account if you'd like.",
        },
        {
            id: '5',
            sent: false,
            message:
                'After that you just go to the tickets tab and create your first ticket.',
        },
        {
            id: '6',
            sent: true,
            message: 'That sounds easy enough.',
        },
        {
            id: '7',
            sent: true,
            message:
                'What happends then? How can I be sure you are going to help me?',
        },
        {
            id: '8',
            sent: false,
            message:
                "After you created your ticket you will have a chat just like this one in front of you and you'll be waiting for one of our operators to join.",
        },
        {
            id: '9',
            sent: false,
            message:
                'The operators are not our employees, their selected users of this app with some background in IT usually collage students doing good deads with their free time. \n We cannot guarantee that every singe one of your problems is going to be fixed not everything is even posible to fix online like this, our goal is to send you on the right track to figuring out sollution to your problem and save you as much time as posible.',
        },
        {
            id: '10',
            sent: true,
            message:
                'That makes a lot of sence. Not everything can be delt with over the internet.',
        },
        {
            id: '11',
            sent: true,
            message:
                "Next time a run into some issues with my computer I'll give it a shot.",
        },
        {
            id: '12',
            sent: false,
            message:
                "That is exactly right. Thank you, We couldn't ask for more.",
        },
        {
            id: '13',
            sent: false,
            message:
                "That is exactly right. Thank you, We couldn't ask for more.",
        },
    ]

    return (
        <div className={`w-full h-85vh flex justify-around`}>
            <div className="flex flex-col items-center gap-2 w-full">
                <div className="flex flex-row gap-4 p-4">
                    <Text className="font-bold md:text-5xl text-3xl" h1>
                        {t('greeting')}
                    </Text>
                    <SiteLogo height={50} />
                </div>

                <div className="sm:w-4/5 w-full px-1 h-auto bg-lightDarker border-white m-auto rounded-3xl border-2 dark:border-darkLighter dark:bg-darkDarker ">
                    <div className="flex flex-col justify-end gap-2">
                        <SimpleBar className="w-full flex flex-col max-h-60vh 0vh text-3xl  overflow-y-auto">
                            {chatData.map((message) => {
                                return message.sent ? (
                                    <SentMessage
                                        id={message.id}
                                        key={message.id}
                                        content={t('message_' + message.id)}
                                    />
                                ) : (
                                    <RecievedMessage
                                        id={message.id}
                                        key={message.id}
                                        content={t('message_' + message.id)}
                                    />
                                )
                            })}
                        </SimpleBar>
                        <SendMassageForm isSending={false} disabled={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
