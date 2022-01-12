import React from 'react'
import type { NextPage } from 'next'
import useTranslation from 'next-translate/useTranslation'
import { Text } from '@nextui-org/react'
const Home: NextPage = () => {
    const { t } = useTranslation('common')

    return (
        <div className="text-center">
            <Text className="text-sandy font-bold text-4xl" h1>
                {t('aboutus')}
            </Text>
        </div>
    )
}

export default Home
