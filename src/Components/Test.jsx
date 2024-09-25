import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import 'react-date-picker/dist/DatePicker.css';


function Test() {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
     <ReactDatePicker
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
    </div>
  )
}

export default Test