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
          <div className="col-lg-12">
            <div key={index} className="info-box">
              <Row gutter={16}>
                {/* confirmed */}
                <Col span={6}>
                  <Card
                    title="Confirmed"
                    bordered={false}
                    style={{width: 300, height: 215}}
                  >
                    <img
                      src={confirmed}
                      alt="Confirmed"
                      style={{height: '50px'}}
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
                <Col span={6}>
                  <Card
                    title="Active"
                    bordered={false}
                    style={{width: 300, height: 215}}
                  >
                    <span className="imageIcons">
                      <i className="fab fa-creative-commons-sampling fa-3x" />
                    </span>
                    <br />

                    <h2 className="text text-info">{item.active}</h2>
                  </Card>
                </Col>

                {/* recovered */}
                <Col span={6}>
                  <Card
                    title="Recovered"
                    bordered={false}
                    style={{width: 300, height: 215}}
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
                <Col span={6}>
                  <Card
                    title="Death"
                    bordered={false}
                    style={{width: 300, height: 215}}
                  >
                    <span>
                      <i className="fas fa-skull-crossbones fa-3x" />
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
