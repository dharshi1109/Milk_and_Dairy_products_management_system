import React, { useState } from 'react';
import { Form, DatePicker, Select, Button, Table } from "antd";
import "../styles/query4.css"


const Query4 = () => {
  const [queryResult, setQueryResult] = useState([]);
  const [form] = Form.useForm();

  const handleQuerySubmit = async () => {
    try {
      const values = await form.validateFields();
      const { startDate, endDate, trainid} = values;

      const apiUrl = `/api/v1/analytics/query5?`;

      const response = await fetch(apiUrl);
      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error("API Error:", error);
    }
  };
  const columns = [
    { title: "COUNT", dataIndex: "passengerCount", key: "passengerCount" },
    
  ];

  return (
    <div className="query4-container">
      <h2 className="header334" style={{fontSize:'30px',color:"black",right:"200px"}} ><em>COUNT OF UNRESERVED PASSENGERS</em> </h2>
      <Form form={form} className='form' onFinish={handleQuerySubmit}>
        
        

        

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "40%" ,right:' -100px'}}>
            Know the count
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

export default Query4;
