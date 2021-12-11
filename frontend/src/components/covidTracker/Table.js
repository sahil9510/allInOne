import React, {useState} from 'react';
import {Table, Space, Input, Pagination} from 'antd';
import './Table.css';

const TableComponent = ({
  totalStateWiseCount,
  stateArrayLength,
  loading,
  loadData,
  stateSearch,
  filteredData,
}) => {
  const [sortedInfo, setSortedInfo] = useState({});
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(10);
  const [searchText, setSearchText] = useState('');

  const handleChange = (_, filters, sorter) => {
    const {order, field} = sorter;
    setSortedInfo({columnKey: field, order});
  };

  const indexOfLastPage = page + postPerPage;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currentStateCovidCount = totalStateWiseCount.slice(
    indexOfFirstPage,
    indexOfLastPage
  );


  const itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <button className="nextPrev text-primary">Previous</button>;
    }
    if (type === 'next') {
      return <button className="nextPrev text-info">Next</button>;
    }
    return originalElement;
  };

  const columns = [
    {
      title: 'State/UT',
      dataIndex: 'state',
      sorter: (a, b) => a.state.length - b.state.length,
      sortOrder: sortedInfo.columnKey === 'state' && sortedInfo.order,
      width: 120,
    },
    {
      title: 'Confirmed',
      dataIndex: 'confirmed',
      sorter: (a, b) => a.confirmed.length - b.confirmed.length,
      sortOrder: sortedInfo.columnKey === 'confirmed' && sortedInfo.order,
      width: 120,
    },
    {
      title: 'Active',
      dataIndex: 'active',
      sorter: (a, b) => a.active.length - b.active.length,
      sortOrder: sortedInfo.columnKey === 'active' && sortedInfo.order,
      width: 120,
    },
    {
      title: 'Recovered',
      dataIndex: 'recovered',
      sorter: (a, b) => a.recovered.length - b.recovered.length,
      sortOrder: sortedInfo.columnKey === 'recovered' && sortedInfo.order,
      width: 120,
    },
    {
      title: 'Deaths',
      dataIndex: 'deaths',
      sorter: (a, b) => a.deaths.length - b.deaths.length,
      sortOrder: sortedInfo.columnKey === 'deaths' && sortedInfo.order,
      width: 120,
    },
    {
      title: 'Daily Confirmed',
      dataIndex: 'deltaconfirmed',
      sorter: (a, b) => a.deltaconfirmed.length - b.deltaconfirmed.length,
      sortOrder: sortedInfo.columnKey === 'deltaconfirmed' && sortedInfo.order,
      width: 120,
    },
    {
      title: 'Daily Recovered',
      dataIndex: 'deltarecovered',
      sorter: (a, b) => a.deltarecovered.length - b.deltarecovered.length,
      sortOrder: sortedInfo.columnKey === 'deltarecovered' && sortedInfo.order,
      width: 120,
    },
    {
      title: 'Daily Deaths',
      dataIndex: 'deltadeaths',
      sorter: (a, b) => a.deltadeaths.length - b.deltadeaths.length,
      sortOrder: sortedInfo.columnKey === 'deltadeaths' && sortedInfo.order,
      width: 120,
    },
  ];

  const searchHandler = (e) => {
    setSearchText(e.target.value);
    if (e.target.value === '') {
      loadData();
    }
  };

  const clearAll = () => {
    setSearchText('');
    setSortedInfo({});
    loadData();
  };

  const Refresh = () => {
    window.location.reload();
  };

  const searchData = () => {
    stateSearch(searchText);
  };

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.key === 'Enter') {
      searchData();
    }
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1500" data-aos-offset="400">
      <Space className="space search">
        <Input
          className="inputState"
          placeholder="Search Your State"
          onChange={searchHandler}
          onKeyPress={handleKeypress}
          type="text"
          allowClear
          value={searchText}
        />
        <button
          type="submit"
          onClick={searchData}
          className="btn btn-raised btn-success search"
        >
          Search
        </button>
        <button
          type="submit"
          onClick={clearAll}
          className="btn btn-raised btn-info"
        >
          Clear
        </button>
        <button
          type="submit"
          onClick={Refresh}
          className="btn btn-raised btn-warning"
        >
          Refresh
        </button>
      </Space>
      <Table
        className="table-main"
        columns={columns}
        dataSource={
          filteredData && filteredData.length
            ? filteredData
            : currentStateCovidCount.length !== 0
            ? currentStateCovidCount
            : totalStateWiseCount
        }
        onChange={handleChange}
        pagination={false}
        loading={loading}
        bordered
      />
      <Space className="space num">
        <Pagination
          onChange={(value) => setPage(value)}
          pageSize={postPerPage}
          total={stateArrayLength}
          current={page}
        //   showSizeChanger
          showQuickJumper
        //   onShowSizeChange={onShowSizeChange}
          itemRender={itemRender}
        />
      </Space>
    </div>
  );
};

export default TableComponent;
