import {
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';

const FinanceDocument = () => {
  return (
    <Html lang="en">
      <Head>
          <meta charSet="utf-8"/>
          <link rel="icon" href="/favicon.png"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="theme-color" content="#000000"/>
          <link rel="manifest" href="/manifest.json"/>
          <title>Sofia React Template - Admin Template built with React</title>
          <meta name="description" content="Sofia React Dashboard Template built with Bootstrap, Redux and React Router by Flatlogic."/>
          <meta name="keywords" content="react admin, react dashboard, react admin template, react theme, react dashboard template, react dashboard template"/>
          <meta name="author" content="by Flatlogic"/>
      </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
    </Html>
  );
};

export default FinanceDocument;