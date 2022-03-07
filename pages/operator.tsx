import React from 'react'
import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { Text } from '@nextui-org/react'
import { OperatorForm } from '../components/ReactHookForm/Forms'
import { SubmitHandler } from 'react-hook-form'
import { OperatorFormValues } from '../types/formtypes'
const Home: NextPage = () => {
    const { t } = useTranslation('common')

    const onSubmit: SubmitHandler<OperatorFormValues> = (data) => {
        console.log(data)
    }

    return (
        <div className="flex justify-center flex-col">
            <Text className="text-sandy font-bold text-4xl" h1>
                {t('operatorForm')}
            </Text>
            <OperatorForm OnFormSubmit={(data) => onSubmit(data)} />
        </div>
    )
}

export default Home
