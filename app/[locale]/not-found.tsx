'use client'

import { translate } from '../actions';
import { useParams } from 'next/navigation'
import { Suspense } from 'react'

export default async function NotFound() {
    const {locale} = useParams();

    const message = await translate(locale as string, 'notFound')

    return <>
        <h1>404</h1>
        <Suspense fallback="loading">
            {message}
        </Suspense>
    </>
}

