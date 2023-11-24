import { useState } from "react";
import { Row, Col, Slider, Typography } from "antd"

import './App.css';
import Header from './components/Header';
import _Table from './components/Table';

function App() {
  const [rows, setRows] = useState(5)

  return (
    <>
      <Header title="AntDesign Demo"></Header>
      <Row>
        <Col xs={24} md={{ span: 12, offset: 6 }}>
          <Typography.Title level={4}>Количество покемонов на странице:</Typography.Title>
          <Slider min={1} max={20} defaultValue={rows} onChange={setRows}></Slider>
          <_Table rows={rows}></_Table>
        </Col>
      </Row>
    </>
  );
}

export default App;
