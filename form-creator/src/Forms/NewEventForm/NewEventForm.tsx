import React from "react";
import { Col, Row, Tabs, Typography } from "antd";

import RunEventForm from "./RunEventForm";

const NewEventForm = () => (
  <>
    <Row>
      <Col span={8}>
        <Typography.Title level={3}>New Event</Typography.Title>
      </Col>
    </Row>
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="Run" key="1">
        <RunEventForm />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Field" key="2">
        <div>field</div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Relay" key="3">
        <div>run</div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Multi" key="4">
        <div>Multi</div>
      </Tabs.TabPane>
    </Tabs>
  </>
);

export default NewEventForm;
