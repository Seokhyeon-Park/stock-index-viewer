import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import styles from './CustomInput.module.css';
import "./react-datepicker.css";

const DayPicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const CustomInput = ({ value, onClick }) => (
    <button className={styles.customInput} onClick={onClick}>
      {value}
    </button>
  );

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat={DATE_FORMAT}
        dateFormatCalendar={DATE_FORMAT_CALENDAR}
        customInput={<CustomInput />}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        dateFormat={DATE_FORMAT}
        dateFormatCalendar={DATE_FORMAT_CALENDAR}
        customInput={<CustomInput />}
      />
    </>
  );
};

export default DayPicker;

const DATE_FORMAT = 'yyyy년 MM월 dd일';
const DATE_FORMAT_CALENDAR = 'yyyy년 MM월';