import translations from './translations.json'

type Translations = typeof translations
export type Locale = keyof Translations
export type MessageKey = keyof Translations[Locale]

const supportedLocales: readonly Locale[] = Object.keys(
  translations,
) as Locale[]

export const createTranslator = (
  locale: string,
): (key: MessageKey) => string => {
  const effectiveLocale: Locale = supportedLocales.includes(
    locale as Locale,
  )
    ? (locale as Locale)
    : 'en'
  const localeMessages = translations[effectiveLocale] || translations.en
  return (key: MessageKey): string =>
    localeMessages[key] || `[Translation missing for key: ${key}]`
}

export { supportedLocales }