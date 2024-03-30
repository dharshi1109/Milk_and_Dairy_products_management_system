import React, { useState } from 'react';
import { Form, DatePicker, Select, Button, Table } from "antd";
import "../styles/query5.css"


const Query5 = () => {
  const [queryResult, setQueryResult] = useState([]);
  const [form] = Form.useForm();

  const handleQuerySubmit = async () => {
    try {
      const values = await form.validateFields();
      const { startDate, endDate, trainid} = values;

      const apiUrl = `/api/v1/analytics/query4?startDate=${startDate.format(
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
    { title: "GENDER", dataIndex: "gender", key: "gender" },
    { title: "TOTAL COUNT", dataIndex: "totalcount", key: "totalcount" },
    
  ];

  return (
    <div className="query5-container">
      <h2 className="header334" style={{fontSize:'30px',color:"black",right:"200px"}} ><em>COUNT OF PASSENGERS GENDERWISE BETWEEN TWO YEARS</em> </h2>
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
          <h3 >RESULT</h3>

          <Table columns={columns} dataSource={queryResult} />
        </div>
      )}
    </div>
  );
};

export default Query5;
