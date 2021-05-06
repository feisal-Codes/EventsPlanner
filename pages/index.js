import EventList from "../components/events/EventList"
import { getFeaturedEvents } from "../dummy-data.js";

const HomePage = () => {

  const items = getFeaturedEvents();



  return (  

    <>
    <EventList items={items}/>
    
  </>

  );
}
 
export default HomePage;