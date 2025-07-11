'use client'

import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import getTranslation from './action'

export default function NotFound() {
    const pathname = usePathname()

    return <>
        <h1>404</h1>
        <Suspense fallback="loading">
            {getTranslation(pathname).then((data) => <h1>{data}</h1>)}
        </Suspense>
    </>
}

