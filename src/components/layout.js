import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/scss/main.scss';

const Layout = ({ children, location }) => {
  let content;

  if (location && location.pathname === '/') {
    content = <div>{children}</div>;
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>{children}</div>
      </div>
    );
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Robert Macaibay | Software Engineer | Looking for SWE positions! | Filipino-American | Java, C, C++, JavaScript, React' },
              { name: 'keywords', content: 'SWE, software engineer, programmer, personal, Java, C, C++, React, JavaScript, Gatsby, Backend, Frontend, Full-Stack' },
              { property: 'og:type', content: 'website'},
              { property: 'og:url', content: 'https://macaibay.com'},
              { property: 'og:title', content: 'Robert Macaibay | SWE'},
              { property: 'og:description', content: 'Robert Macaibay | Software Engineer | Looking for SWE positions! | Filipino-American | Java, C, C++, JavaScript, React'},
              { property: 'og:image', content: 'https://i.imgur.com/NHvRWwg.jpg'},
              { property: 'twitter:card', content: 'summary_large_image'},
              { property: 'twitter:url', content: 'https://macaibay.com'},
              { property: 'twitter:title', content: 'Robert Macaibay | SWE'},
              { property: 'twitter:description', content: 'Robert Macaibay | Software Engineer | Looking for SWE positions! | Filipino-American | Java, C, C++, JavaScript, React'},
              { property: 'twitter:image', content: 'https://i.imgur.com/NHvRWwg.jpg'}
            ]}
          >
            <html lang="en" />
          </Helmet>
          <base target="_blank" />
          {content}
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
