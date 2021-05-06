import EventItem from "./EventItem.js";
import styles from "./EventList.module.css";

const EventList = ({items}) => {
  console.log(items);
  return (
    <ul className= {styles.list}>
      {items.map((event) => (
        <EventItem event={event} />
      ))}
    </ul>
  );
};

export default EventList;
