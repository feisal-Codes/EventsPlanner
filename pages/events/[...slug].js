import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
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
    return <p className="center">Please adjust your search! </p>;
  }

  const dateFilter = {
    month: month,
    year: year,
  };

  console.log(dateFilter);

  const filteredEvents = getFilteredEvents(dateFilter);
  console.log(filteredEvents);

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No Events found!</p>;
  }

  return (
    <div>

      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEvent;
