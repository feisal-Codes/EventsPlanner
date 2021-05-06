import { useRouter } from "next/router";
import EventList from "../../components/events/EventList.js";
import EventSearch from "../../components/events/EventSearch.js";
import { getAllEvents } from "../../dummy-data.js";



const EventsPage = () => {
  
const router=useRouter();

 const handleFindEvent =(selectedYear, selectedMonth)=>{
    

  const pathname =`events/${selectedMonth}/${selectedYear}`;
  router.push(pathname);

 }





  const items=getAllEvents();
  return (  
         
       <>
         <EventSearch onSearch={handleFindEvent}/>
         <EventList items={items}/>
       </>
  
    );
  }
   
  export default EventsPage;