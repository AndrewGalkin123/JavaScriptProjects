import { useState } from "react";
import { Row, Col, Slider, Typography } from "antd"
import { ColorPicker } from "antd"
import './App.css';
import Header from './components/Header';
import _Table from './components/Table';
import DynamicButton from "./components/DynamicButton";

function App() {
  const [rows, setRows] = useState(5)
  const [color, setColor] = useState("white")
  const [text, setText] = useState(1)
  
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

      <ColorPicker onChange={setColor}></ColorPicker>
      <Slider min={1} max={20} defaultValue={rows} onChange={setText}></Slider>
      <DynamicButton text={text} color={color}></DynamicButton>
    </>
  );
}

export default App;
