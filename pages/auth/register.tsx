import { Button } from '@nextui-org/react'
import React from 'react'
import SignUp from '../../components/login/signUp'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

const RegisterPage: React.FC = () => {
    const { t } = useTranslation('common')
    const router = useRouter()
    return (
        <div>
            <div className="w-full h-85vh">
                <div className="w-full flex-col flex justify-center gap-2 items-center">
                    <div className="text-primary font-semibold w-full pb-4 flex justify-center text-5xl">
                        <h1>{t('SignUp')}</h1>
                    </div>
                    <SignUp />
                    <div className="flex w-1/2 justify-end">
                        <Button
                            light
                            color="primary"
                            onClick={() => router.push('/auth/login')}
                        >
                            {t('alreadyAccount')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage
