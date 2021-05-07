import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEvent = () => {
  const router = useRouter();

  if (!router.query.slug) {
    return <p className="center">Loading...</p>;
  }

  const filteredMonth = router.query.slug[0];
  const filterdYear = router.query.slug[1];

  const month = +filteredMonth;
  const year = +filterdYear;

  if (
    isNaN(month) ||
    isNaN(year) ||
    month < 0 ||
    month > 12 ||
    year > 2025 ||
    year < 2021
  ) {
    return <> 
    
    <ErrorAlert><p className="center">Invalid search values!</p></ErrorAlert>
    <div className="center">
    <Button link="/events">Show All Events</Button>
    </div>
   
   </>
  }

  const dateFilter = {
    month: month,
    year: year,
  };

  console.log(dateFilter);

  const filteredEvents = getFilteredEvents(dateFilter);
  console.log(filteredEvents);

  if (!filteredEvents || filteredEvents.length === 0) {
    return <> 
    
    <ErrorAlert><p className="center">No Events Found!</p></ErrorAlert>
    <div className="center">
    <Button link="/events">Show All Events</Button>
    </div>
   
   </>
  }
  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEvent;
