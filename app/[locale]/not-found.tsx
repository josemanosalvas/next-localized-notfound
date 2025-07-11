'use client'
import { createTranslator } from '@/lib/localization';

import { useParams } from 'next/navigation'
import { Suspense } from 'react'

export default function NotFound() {
    const { locale } = useParams();
    const t = createTranslator(locale as string);
    const message = t('notFound');

    return <>
        <h1>404</h1>
        <Suspense fallback="loading">
            {message}
        </Suspense>
    </>
}

