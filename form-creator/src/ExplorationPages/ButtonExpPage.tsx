import React from 'react';

import {Row, Col} from "antd";
import {HighlightOutlined} from "@ant-design/icons";
import {Button} from "../FormComponents";

const ButtonExpPage = () => (
    <Row gutter={[16, 24]}>
    <Col>
      <Button shape="circle" type="primary" icon={<HighlightOutlined />} />
    </Col>
    <Col>
      <Button>Default</Button>
    </Col>
    <Col>
      <Button type="dashed" onClick={() => console.log("it worked")}>
        Dashed
      </Button>
    </Col>
    <Col>
      <Button type="primary" disabled loading>Disbled</Button>
    </Col>
    <Col>
      <Button
        shape="round"
        href="some-random-page"
        target="_blank"
      >Round</Button>
    </Col>
  </Row>
);

export default ButtonExpPage;