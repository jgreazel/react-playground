import React from "react";
import {Row, Col} from "antd";
import {HighlightOutlined} from "@ant-design/icons";
import {Button} from "./FormComponents";
import "./App.less";

const App = () => (
  <div className="App">
    <Row gutter={[16, 24]}>
      <Col>
        <Button shape="circle" type="primary" icon={<HighlightOutlined />} />
      </Col>
      <Col>
        <Button text="Default" />
      </Col>
      <Col>
        <Button
          text="Dashed"
          type="dashed"
          onClick={() => console.log("it worked")}
        />
      </Col>
      <Col>
        <Button text="Disbled" type="primary" disabled loading />
      </Col>
      <Col>
        <Button
          text="Round"
          shape="round"
          href="some-random-page"
          target="_blank"
        />
      </Col>
    </Row>
  </div>
);

export default App;
