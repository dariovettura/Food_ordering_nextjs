import React, { useState, useEffect } from "react";
import Footer from '../components/page_sections/Footer';
import  Header  from '../components/page_sections/Header';
import  Hero  from '../components/page_sections/Hero';
import Products from '../components/page_sections/Products';


function Index(props) {
    const [menu, setMenu] = useState(props.menus);

  
    return (
        <div>
           
            <Header></Header>
            <Hero></Hero>
           <Products
           products={menu}/>
            <Footer></Footer>
            
        </div>
    );
}
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
  
    const CK = process.env.NEXT_PUBLIC_CK;
    const CS = process.env.NEXT_PUBLIC_CS;
  
    const url =
      "https://www.dariovettura.com/shop/wp-json/wc/v2/products?_embed&per_page=100&consumer_key=" +
      CK +
      "&consumer_secret=" +
      CS;
  
    //const result = await Axios.get(url);
    //const menu =  result.data
  
    const res = await fetch(url);
    const menus = await res.json();
  
    //  const res = await fetch('https://.../posts')
    // const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        menus,
      },
      revalidate: 1,
    };
  }

export default Index;