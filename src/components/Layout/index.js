import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import OurMap from '../OurMap';

import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
        <OurMap />
      </main>
      <Footer />
    </>
  );
}
