import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';


import '../styles/globals.css'
import 'tailwindcss/tailwind.css'



function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);


  return(
    <React.Fragment>
      <Head>
      <meta name='application-name' content='Donuts' />
<meta name='apple-mobile-web-app-capable' content='yes' />
<meta name='apple-mobile-web-app-status-bar-style' content='default' />
<meta name='apple-mobile-web-app-title' content='Donuts' />
<meta name='description' content='Le migliori Donuts del mondo' />
<meta name='format-detection' content='telephone=no' />
<meta name='mobile-web-app-capable' content='yes' />
<meta name='msapplication-config' content='/doughnut_color.png' />
<meta name='msapplication-TileColor' content='#2B5797' />
<meta name='msapplication-tap-highlight' content='no' />
<meta name='theme-color' content='#000000' />

<link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
<link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />
<link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' />
<link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />

<link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
<link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
<link rel='manifest' href='/manifest.json' />
<link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
<link rel='shortcut icon' href='/favicon.ico' />
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
     

<meta property='og:type' content='website' />
<meta property='og:title' content='Donuts' />
<meta property='og:description' content='Le migliori Donuts del mondo' />
<meta property='og:site_name' content='Donuts' />
<meta property='og:url' content='https://food-ordering-nu.vercel.app/' />
<meta property='og:image' content='https://food-ordering-nu.vercel.app/doughnut_color.png' />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
     
       
        <Component {...pageProps} />

     
    </React.Fragment>
  );
  
  
  
 
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp
