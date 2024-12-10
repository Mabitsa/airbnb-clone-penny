import React, { useState} from 'react'
import "react-date-range/dist/styles.css"; // Main style file
import "react-date-range/dist/theme/default.css"; // Theme file
import { DateRangePicker } from "react-date-range";
import PeopleIcon from '@mui/icons-material/People';
import { Button } from "@mui/material";
import "./Search.css";
import { format, parse, addYears } from 'date-fns';

const Search = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
  return (
    <div className='search'>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <h2>
            Number of guests <PeopleIcon /> 
            <input min={0} defaultValue={2} type="number" />
            <Button>Search AirBnB</Button>

        </h2>
    </div>
  )
}

export default Search