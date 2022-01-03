import Head from 'next/head'
import React from 'react'
import useTranslation from 'next-translate/useTranslation'

export const PageHead: React.FC = () => {
    const { t } = useTranslation('common')
    return (
        <Head>
            <title>FixedIt</title>
            <meta name="description" content={t('metadescription')} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
