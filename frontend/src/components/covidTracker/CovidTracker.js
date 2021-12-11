import React, {useState, useEffect} from 'react';
import axios from 'axios';
import flag from './images/flag.png';
import CardComponent from './Card';
import TableComponent from './Table';
import {Col, Row} from 'antd';
import Map from './Map';
import './CovidTracker.css';

const CovidTracker = () => {
  let today = new Date();
  let date =
    today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();

  const [totalCases, setTotalCases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalStateWiseCount, setTotalStateWiseCount] = useState([]);
  const [stateArrayLength, setStateArrayLength] = useState('');
  let [filteredData] = useState();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const res = await axios.get(`${process.env.REACT_APP_COVID_DATA_API_KEY}`);
    setTotalCases(res.data.statewise.slice(0, 1));
    const totalStateCount = res.data.statewise.slice(1);
    setTotalStateWiseCount(totalStateCount);
    setStateArrayLength(totalStateCount.length);
    setLoading(false);
  };

  const stateSearch = (searchText) => {
    filteredData = totalStateWiseCount.filter((value) => {
      return value.state.toLowerCase().includes(searchText.toLowerCase());
    });
    setTotalStateWiseCount(filteredData);
  };

  return (<>

    <div className="main">
      <Row className="row-main">
        <Col data-aos="fade-right"
      data-aos-duration="2000" className="col-lg-6 heading">
          <div>
              <img
                src={flag}
                className="flag-img"
                alt="INDIA"
              />{'  '}
               <h1 className="h1">
              Live Covid Tracker
            </h1>
          <h4 className="h4">As of {date}</h4>
          </div>
        </Col>
        <Col  data-aos="fade-left"
      data-aos-duration="2000" className="col-lg-6 mapDiv">
          <Map setLoading={setLoading} />
          <div className="headline">Active Cases WorldWide </div>
        </Col>
      </Row>
      <CardComponent  key={Math.floor(Math.random()*100).toLocaleString()} totalCases={totalCases} />
      <TableComponent 
        totalStateWiseCount={totalStateWiseCount}
        stateArrayLength={stateArrayLength}
        loading={loading}
        loadData={loadData}
        filteredData={filteredData}
        stateSearch={stateSearch}
      />
    </div>
    </>
  );
};

export default CovidTracker;
