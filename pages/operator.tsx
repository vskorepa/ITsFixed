import React, { useState } from 'react'
import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { Text } from '@nextui-org/react'
import { OperatorForm } from '../components/ReactHookForm/Forms'
import { SubmitHandler } from 'react-hook-form'
import { OperatorFormValues } from '../types/formtypes'
import useSubmitOperatorForm from '../hooks/operatorForms/submitOperatorForm'
import { supabase } from '../lib/supabaseClient'
const Home: NextPage = () => {
    const { t } = useTranslation('common')
    const [conviction, setConviction] = useState('')
    const [cvFile, setCvFile] = useState<File[]>()
    const onSubmit: SubmitHandler<OperatorFormValues> = (data) => {
        setConviction(data.conviction)
        setCvFile(data.cv)
        SubmitOperatorFormMutation.mutate()
    }
    const SubmitOperatorFormMutation = useSubmitOperatorForm({
        user_id: supabase.auth.user()?.id!,
        conviction: conviction,
        cv: cvFile!,
    })
    console.log(SubmitOperatorFormMutation.error)
    return (
        <div className="flex justify-center flex-col">
            <Text className="text-sandy font-bold text-4xl" h1>
                {t('operatorForm')}
            </Text>
            <OperatorForm OnFormSubmit={(data) => onSubmit(data)} />
            <div className="w-full flex justify-center pb-2">
                {SubmitOperatorFormMutation.isError && (
                    <p className="text-red-500">
                        {SubmitOperatorFormMutation.error.message ?? ''}
                    </p>
                )}
            </div>
        </div>
    )
}

export default Home
