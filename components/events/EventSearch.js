import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { useRef } from "react";
import Button from "../ui/Button"
import styles from './EventSearch.module.css';

const EventSearch = (props) => {
const yearRef=useRef();
const monthRef=useRef();

  const handleSubmit=(e)=>{
   
    e.preventDefault();
    
    const selectedYear= yearRef.current.value;
    const selectedMonth= monthRef.current.value;

    props.onSearch(selectedYear, selectedMonth);

    console.log(selectedYear)


}






    return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">Sept</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          
          
          </select>
        </div>
      </div>
      <Button>Find Event</Button>
    </form>
  );
};

export default EventSearch;
