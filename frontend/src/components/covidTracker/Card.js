import React from 'react';
import {Card, Col, Row} from 'antd';
import CountUp from 'react-countup';
import confirmed from './images/confirmed.png';
import './Card.css';

const CardComponent = ({totalCases}) => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
      {totalCases.map((item, index) => (
        <div className="row">
          <div className="col-lg-12 colsInfo">
            <div key={index} className="info-box">
              <Row gutter={16}>
                {/* confirmed */}
                <Col xs={24} md={24} sm={24} lg={6} >
                  <Card className="cardInfo confirm" title="Confirmed" bordered={false}>
                    <img
                      src={confirmed}
                      alt="Confirmed"
                      style={{height: '45px', position: 'relative', top: '-10px'}}
                    />
                    <br />
                    <i className="fas fa-arrow-up" />
                    <CountUp
                      className="count"
                      start={0}
                      end={item.deltaconfirmed}
                      duration={2.75}
                      separator=","
                    />
                    <h2 className="text text-warning">{item.confirmed}</h2>
                  </Card>
                </Col>

                {/* active */}
                <Col xs={24} md={24} sm={24} lg={6}>
                  <Card className="cardInfo active" title="Active" bordered={false}>
                    <span className="imageIcons">
                      <i className="fab fa-creative-commons-sampling fa-3x" />
                    </span>
                    <br />

                    <h2 className="text text-info">{item.active}</h2>
                  </Card>
                </Col>

                {/* recovered */}
                <Col xs={24} md={24} sm={24} lg={6}>
                  <Card
                    className="cardInfo"
                    title="Recovered"
                    bordered={false}

                  >
                    <span style={{color: 'green'}}>
                      <i className="fab fa-creative-commons-sampling fa-3x" />
                    </span>
                    <br />
                    <i className="fas fa-arrow-up" />
                    <CountUp
                      className="count"
                      start={0}
                      end={item.deltarecovered}
                      duration={2.75}
                      separator=","
                    />
                    <h2 className="text text-success">{item.recovered}</h2>
                  </Card>
                </Col>

                {/* death */}
                <Col xs={24} md={24} sm={24} lg={6}>
                  <Card title="Death" bordered={false}>
                    <span style={{color: 'black'}}>
                      <i className="fas fa-peace fa-3x" />
                    </span>
                    <br />
                    <i className="fas fa-arrow-up" />
                    <CountUp
                      className="count"
                      start={0}
                      end={item.deltadeaths}
                      duration={2.75}
                      separator=","
                    />
                    <h2 className="text text-dark">{item.deaths}</h2>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
