import React from 'react';

import GlobalStyle from './Styles/GlobalStyle';
import Layout from './components/Layout';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Layout>
        <Navbar />
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default App;
