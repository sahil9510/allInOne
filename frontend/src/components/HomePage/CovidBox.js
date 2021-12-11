import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import styles from './CovidBox.module.css';

const data = [
  {
    name: 'January',
    2021: 19079,
    2020: 0,
  },
  {
    name: 'February',
   2021: 8635,
   2020: 0,
  },
  {
    name: 'March',
    2021: 12286,
    2020: 20,
  },
  {
    name: 'April',
    2021: 81466,
    2020: 601,
  },
  {
    name: 'May',
   2021: 392488,
   2020: 2394,
  },
  {
    name: 'June',
    2021: 132788,
2020: 7761,
  },
  {
    name: 'July',
    2021: 46617,
    2020: 19160
  },
  {
    name: 'August',
    2021: 40134,
    2020: 54735
  },
  {
    name: 'September',
    2021: 47092,
    2020: 78357,
  },
  {
    name: 'October',
    2021: 24354,
    2020: 81484,
  },
  {
    name: 'November',
    2021: 10423,
    2020: 45231,
  },
  {
    name: 'December',
    2021: 9765,
    2020: 36604,
  },
];

const CovidBox = () => {
  return (
    <div data-aos="fade-left" data-aos-duration="1000" className={styles.covidBox}>
          <h3 className={styles.h3}>Average Daily Cases</h3>
    <div className={styles.data}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={730}
          height={450}
          data={data}
          margin={{top: 15, right: 30, left: 20, bottom: 10}}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" >
          {/* <Label className={styles.labelBox}
              value="Average New Cases"
              position="bottom"
              fontSize={14}
              fill="#676767"
            /> */}
          </XAxis>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="2021"
            stroke="#8884d8"
            
                     />
                     <Line
            type="monotone"
            dataKey="2020"
            stroke="#82ca9d"
                     />
        </LineChart>
      </ResponsiveContainer>
      </div>

    </div>
  );
};

export default CovidBox;
