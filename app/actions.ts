'use server'
import { createTranslator } from '@/lib/localization'
import type { MessageKey } from '@/lib/localization'

export async function translate(
  locale: string,
  key: MessageKey,
): Promise<string> {
  return createTranslator(locale)(key)
}