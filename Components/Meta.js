import Head from 'next/dist/shared/lib/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta charSet='utf-8' />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}

Meta.defaultProps = {
  title: "Indy's Indies Restaurant App",
  keywords: "restaurants, indie restaurants, independent restaurants, local restaurants, eat local, shop local, support local, Indianapolis, Indianapolis restaurants",
  description: "Web application highlighting local independent restaurants in and near Indianapolis, Indiana."
}

export default Meta
