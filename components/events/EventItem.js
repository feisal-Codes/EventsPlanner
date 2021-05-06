
import Button from "../ui/Button";
import styles from "./EventItem.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
const EventItem = (props) => {
    const { event } = props
   const date=new Date(event.date).toLocaleDateString('en-US',{
       day: "numeric",
       month: 'long',
       year:"numeric"

   });
   const address= event.location.replace(',','\n')
   const link= `/events/${event.id}`
    return ( 
        
        <li className={styles.item} >
        <img src={'/' + event.image}  alt={event.title}/>
        <div className={styles.content} >
        <div className={styles.summary}>
            <h2>{event.title}</h2>
            <div className={styles.date}>
                <DateIcon/>
                <time>{date}</time></div>
            
            <div className={styles.address}>
                <AddressIcon/>
                <address>{address}</address>
            </div>
        </div>
        <div className={styles.actions}>

                <Button link={link}>
                    <span>Explore Event</span>
                    <span className={styles.icon}><ArrowRightIcon/></span>
                    
                    </Button>
    
        </div>
        </div>
                  

        </li>
     );
}
 
export default EventItem;