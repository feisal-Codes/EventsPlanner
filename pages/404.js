import { useRouter } from "next/router";

const Notfound = () => {
  
  const router = useRouter();
    return ( 
       <div>
           <h1>404 error!</h1>
           <h2>Sorry, page not found</h2>
           <button onClick={()=>{
             router.push("/")
           }}>Homepage</button>
       </div>
     );
}
 
export default Notfound;