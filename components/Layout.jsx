import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';
import Footer from './Footer';

//children prop = whatever we pass into the layout component (once we call it)

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box maxWidth="1280px" m="auto">
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
