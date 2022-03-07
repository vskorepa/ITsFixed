import { Button, Row } from '@nextui-org/react'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import ResetPassword from '../../components/login/resetPassword'

const LoginPage: React.FC = () => {
    const { t } = useTranslation('common')
    const router = useRouter()
    return (
        <div>
            <div className="w-full h-85vh">
                <div className="w-full flex-col flex justify-center gap-2 items-center">
                    <div className="text-primary font-semibold w-full pb-4 flex justify-center text-5xl">
                        <h1>{t('forgotPassword')}</h1>
                    </div>
                    <ResetPassword />
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
export default LoginPage
