import React, { useState } from 'react';
import axios from 'axios';
import "../styles/query1.css"
import { Form, DatePicker, Select, Button, Table } from "antd";
const { Option } = Select;


const Query1 = () => {
  const [queryResult, setQueryResult] = useState([]);
  const [form] = Form.useForm();

  const handleQuerySubmit = async () => {
    try {
      const values = await form.validateFields();
      const { startDate, endDate, zone} = values;

      const apiUrl = `/api/v1/analytics/calculateRevenue?startDate=${startDate.format(
        "YYYY-MM-DD"
      )}&endDate=${endDate.format("YYYY-MM-DD")}`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };
  const columns = [
    { title: "RAILWAY ZONE", dataIndex: "railwayZone", key: "railwayZone" },
    { title: "TOTAL REVENUE", dataIndex: "totalRevenue", key: "totalRevenue" },
  ];

  return (
    <div className="query1-container">
      <h2 className="header334" style={{fontSize:'30px',color:"black",right:"200px"}} ><em>REVENUE BETWEEN TWO YEARS ZONEWISE</em> </h2>
      <Form form={form} className='form' onFinish={handleQuerySubmit}>
        <Form.Item name="startDate" label="Enter the Start Date">
          <DatePicker style={{ width: "40%",right: '-100px' }} />
        </Form.Item>

        <Form.Item name="endDate" label="Enter the End Date" >
          <DatePicker style={{ width: "40%",right: '-107px' }} />
        </Form.Item>

        

        

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "40%" ,right:' -190px'}}>
            Submit
          </Button>
        </Form.Item>
      </Form>

      {queryResult.length > 0 && (
        <div>
          <h3>RESULT</h3>
          <Table columns={columns} dataSource={queryResult} />
        </div>
      )}
    </div>
  );
};

export default Query1;
