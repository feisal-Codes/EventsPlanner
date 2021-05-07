import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert/error-alert";
import Button from "../../components/ui/Button";



const SingleEvent = () => {
   
  const router = useRouter();
  const eventid=router.query.eventId;
  console.log(eventid);
  const event=getEventById(eventid);
  console.log(event)
  if(!event){
  return <>
  <ErrorAlert><p>Event not found</p></ErrorAlert>
  <div className="center" ><Button link="/events">Show all Events</Button></div>
  
  </>    
    
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