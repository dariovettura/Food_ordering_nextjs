import { useEffect ,useState} from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import axios from 'axios';
import Link from 'next/link'


const Success = () => {

  const CK = process.env.NEXT_PUBLIC_CK;
  const CS = process.env.NEXT_PUBLIC_CS;

  const [datas,setDatas] =useState()

  useEffect(() => {
      if (localStorage.getItem("order")) {
        setDatas(JSON.parse(localStorage.getItem("order")));
      }
     
    }, []);

    const url3 = "https://www.dariovettura.com/shop/wp-json/wc/v2/orders/?consumer_key=" +
    CK +
    "&consumer_secret=" +
    CS;
      const getData = async () => {
          try{
    datas.set_paid=true;
        const result = await axios.post(url3, datas);
    console.log(result.datas);
   }
       
        catch (err) {
            console.log('non lo so')
           
          }
       
      };



  const {
    query: { session_id },
  } = useRouter();

  const fetcher = url => axios.get(url).then(res => res.data);
 

  const { data, error } = useSWR(
    () => `/api/checkout_sessions/${session_id}`,
    fetcher 

  );

// useEffect(() => {
  // if (data) {
    // getData();
    // console.log(datas)
   // console.log(data)
     
  // }
// }, []);

  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
      {error && datas==null ? (
        <div className="p-2 rounded-md bg-rose-100 text-rose-500 max-w-md mx-auto">
          <p className="text-lg">Sorry, something went wrong!</p>
        </div>
      ) : !data ? (
        <div className="p-2 rounded-md bg-gray-100 text-gray-500 max-w-md mx-auto">
          <p className="text-lg animate-pulse">Loading...</p>
        </div>
      ) : (
        <div className="py-4 px-8 rounded-md bg-gray-100 max-w-lg mx-auto">
          <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
         
            <span>Grazie per il tuo ordine!</span>
           
          </h2>
          <p className='text-xs'> {session_id}</p>
          <Link href='/Checkout' className="text-lg mt-3">torna al checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Success;