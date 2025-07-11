'use client'

import { translate } from '../actions';
import { useParams } from 'next/navigation'
import { Suspense } from 'react'

export default function NotFound() {
    const {locale} = useParams();
    return <>
        <h1>404</h1>
        <Suspense fallback="loading">
            {translate(locale as string, 'notFound').then((data) => <h1>{data}</h1>)}
        </Suspense>
    </>
}

