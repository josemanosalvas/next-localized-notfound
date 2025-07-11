'use server'

const translation: { [key: string]: string } = {
    en: "/en/route/hello/world",
    fr: "/fr/route/bonjour/monde",
    de: "/de/route/hallo/welt"
}

export default async function getTranslation(pathname: string) {
    'use cache'
    return translation[pathname.split("/")[1]] ?? pathname + " - just as is"
}
