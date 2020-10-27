import { h } from 'preact';
import { MDXProvider } from '@mdx-js/preact';
import { Helmet } from 'react-helmet';

export default function PageWrapper({ children }) {
  return (
    <MDXProvider
      components={{
        codeblock: ({ children }) => {
          return (
            <div
              style={{ backgroundColor: 'black' }}
              dangerouslySetInnerHTML={{ __html: children }}
            />
          );
        },
      }}
    >
      <Helmet>
        <link rel="stylesheet" href="/styles.css" />
      </Helmet>
      <header>
        <a href="/" rel="home">
          Home
        </a>
      </header>
      <main>{children}</main>
      <footer>powered by boops</footer>
    </MDXProvider>
  );
}
