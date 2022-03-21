import { Button } from '@nextui-org/react'
import React from 'react'
import SignIn from '../../components/login/signIn'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

const LoginPage: React.FC = () => {
    const { t } = useTranslation('common')
    const router = useRouter()
    return (
        <div>
            <div className="w-full h-85vh">
                <div className="w-full flex justify-center flex-col items-center">
                    <div className="text-primary font-semibold w-full pb-4 flex justify-center text-5xl">
                        <h1>{t('SignIn')}</h1>
                    </div>
                    <SignIn />
                    <div className="flex w-1/2 justify-end">
                        <Button
                            light
                            color="primary"
                            onClick={() => router.push('/auth/register')}
                        >
                            {t('noAccount')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage
