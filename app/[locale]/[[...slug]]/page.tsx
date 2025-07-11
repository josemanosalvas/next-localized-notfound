import { notFound } from "next/navigation"

type Params = Promise<{ slug?: string[] }>

export const dynamic = 'force-static'

export default async function Home(props: { params: Params }) {
  const params = await props.params
  // ignore: logic not important - just a way to test rendering not-found vs found
  if (!params.slug || !params.slug.includes("bypass")) notFound()

  return <h1>PAGE</h1>
}
