import React, { useState } from 'react';
import { Form, DatePicker, Select, Button, Table } from "antd";
import "../styles/query2.css"
const { Option } = Select;



const Query2 = () => {
  const [queryResult, setQueryResult] = useState([]);
  const [form] = Form.useForm();

  const handleQuerySubmit = async () => {
    try {
      const values = await form.validateFields();
      const { startDate, endDate, trainid} = values;

      const apiUrl = `/api/v1/analytics/query2?startDate=${startDate.format(
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
    { title: "TRAIN ID", dataIndex: "railwayZone", key: "railwayZone" },
    { title: "TOTAL REVENUE", dataIndex: "totalRevenue", key: "totalRevenue" },
    
  ];

  return (
    <div className="query2-container">
      <h2 className="header334" style={{fontSize:'30px',color:"black",right:"200px"}} ><em>TOTAL REVENUE TRAINWISE BETWEEN TWO YEARS</em> </h2>
      <Form form={form} className='form' onFinish={handleQuerySubmit}>
        <Form.Item name="startDate" label="Enter the Start Date">
          <DatePicker style={{ width: "40%",right: '-50px' }} />
        </Form.Item>

        <Form.Item name="endDate" label="Enter the End Date" >
          <DatePicker style={{ width: "40%",right: '-55px' }} />
        </Form.Item>

        
        

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "40%" ,right:' -90px'}}>
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

export default Query2;
