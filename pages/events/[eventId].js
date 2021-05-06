import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";



const SingleEvent = () => {
   
  const router = useRouter();
  const eventid=router.query.eventId;
  console.log(eventid);
  const event=getEventById(eventid);
  console.log(event)
  if(!event){
    
    return <h4>Event not found</h4>
  }

  
  
  return (  
  
       <>
     <EventSummary title={event.title}/>
     <EventLogistics  date={event.date} address ={event.location} image={event.image} imageAlt={event.title}/>
    <EventContent>

      <p>{event.description}</p>
    </EventContent>
       </>
  
    );
  }
   
  export default SingleEvent;