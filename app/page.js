import Image from "next/image";
import Menu from "./menu/page";
import Brief from "./brief/page";
import Impact from "./impact/page";
import Form from "./form/page";
import Reviews from "./reviews/page";


export default function Home() {
  return (

    <>
   
    <Menu />  
    <Brief/>
    <Impact/>
    <Form/>
    <Reviews/>
   
    </>
    
  );
}
