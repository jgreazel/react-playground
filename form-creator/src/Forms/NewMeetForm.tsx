import React, { useState } from "react";
import moment from "moment";
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Typography,
} from "antd";

import {
  handleChangeId,
  handleCheckboxChange,
  handleDateChange,
  handleInputChange,
} from "./util";

const NewMeetForm = () => {
  const dateFormat = "MM/DD/YYYY";
  const [data, setData] = useState({
    name: "Annual Meet",
    startDate: moment(),
    endDate: moment(),
    facility: "Track High School",
    city: "Manning",
    state: "IA",
    type: "college",
    season: "outdoor",
    straightaway: 10,
    oval: 8,
    score: true,
    useDivisions: false,
  });

  const onFinish = () => {
    console.log("state", data);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  };
  const buttonRowLayout = {
    wrapperCol: { span: 8, offset: 8 },
  };

  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          <Typography.Title level={3}>Create New Meet</Typography.Title>
        </Col>
      </Row>

      <Form name="newMeet" {...layout} onFinish={onFinish} initialValues={data}>
        <Form.Item label="Name" name="name">
          <Input
            id="name"
            value={data.name}
            onChange={(e) => handleInputChange(e, setData)}
          />
        </Form.Item>
        <Form.Item label="Start Date" name="startDate">
          <DatePicker
            id="startDate"
            value={data.startDate}
            format={dateFormat}
            onChange={(date, dateString) =>
              handleDateChange(date, dateString, "startDate", setData)
            }
          />
        </Form.Item>
        <Form.Item label="End Date" name="endDate">
          <DatePicker
            id="endDate"
            value={data.endDate}
            format={dateFormat}
            onChange={(date, dateString) =>
              handleDateChange(date, dateString, "endDate", setData)
            }
          />
        </Form.Item>
        <Form.Item label="Facility" name="facility">
          <Input
            id="facility"
            value={data.facility}
            onChange={(e) => handleInputChange(e, setData)}
          />
        </Form.Item>
        <Form.Item label="City" name="city">
          <Input
            id="city"
            value={data.city}
            onChange={(e) => handleInputChange(e, setData)}
          />
        </Form.Item>
        <Form.Item label="State" name="state">
          <Select
            id="state"
            showSearch
            style={{ width: 100 }}
            onChange={(v) => handleChangeId(v, "state", setData)}
          >
            <Select.Option value="AL">AL</Select.Option>
            <Select.Option value="AK">AK</Select.Option>
            <Select.Option value="AR">AR</Select.Option>
            <Select.Option value="AZ">AZ</Select.Option>
            <Select.Option value="CA">CA</Select.Option>
            <Select.Option value="CO">CO</Select.Option>
            <Select.Option value="CT">CT</Select.Option>
            <Select.Option value="DC">DC</Select.Option>
            <Select.Option value="DE">DE</Select.Option>
            <Select.Option value="FL">FL</Select.Option>
            <Select.Option value="GA">GA</Select.Option>
            <Select.Option value="HI">HI</Select.Option>
            <Select.Option value="IA">IA</Select.Option>
            <Select.Option value="ID">ID</Select.Option>
            <Select.Option value="IL">IL</Select.Option>
            <Select.Option value="IN">IN</Select.Option>
            <Select.Option value="KS">KS</Select.Option>
            <Select.Option value="KY">KY</Select.Option>
            <Select.Option value="LA">LA</Select.Option>
            <Select.Option value="MA">MA</Select.Option>
            <Select.Option value="MD">MD</Select.Option>
            <Select.Option value="ME">ME</Select.Option>
            <Select.Option value="MI">MI</Select.Option>
            <Select.Option value="MN">MN</Select.Option>
            <Select.Option value="MO">MO</Select.Option>
            <Select.Option value="MS">MS</Select.Option>
            <Select.Option value="MT">MT</Select.Option>
            <Select.Option value="NC">NC</Select.Option>
            <Select.Option value="NE">NE</Select.Option>
            <Select.Option value="NH">NH</Select.Option>
            <Select.Option value="NJ">NJ</Select.Option>
            <Select.Option value="NM">NM</Select.Option>
            <Select.Option value="NV">NV</Select.Option>
            <Select.Option value="NY">NY</Select.Option>
            <Select.Option value="ND">ND</Select.Option>
            <Select.Option value="OH">OH</Select.Option>
            <Select.Option value="OK">OK</Select.Option>
            <Select.Option value="OR">OR</Select.Option>
            <Select.Option value="PA">PA</Select.Option>
            <Select.Option value="RI">RI</Select.Option>
            <Select.Option value="SC">SC</Select.Option>
            <Select.Option value="SD">SD</Select.Option>
            <Select.Option value="TN">TN</Select.Option>
            <Select.Option value="TX">TX</Select.Option>
            <Select.Option value="UT">UT</Select.Option>
            <Select.Option value="VT">VT</Select.Option>
            <Select.Option value="VA">VA</Select.Option>
            <Select.Option value="WA">WA</Select.Option>
            <Select.Option value="WI">WI</Select.Option>
            <Select.Option value="WV">WV</Select.Option>
            <Select.Option value="WY">WY</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Type" name="type">
          <Radio.Group
            id="type"
            value={data.type}
            onChange={(e) => handleChangeId(e.target.value, "type", setData)}
          >
            <Radio.Button value="middleSchool">Middle School</Radio.Button>
            <Radio.Button value="highSchool">High School</Radio.Button>
            <Radio.Button value="college">College</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Season" name="season">
          <Radio.Group
            id="season"
            value={data.season}
            onChange={(e) => handleChangeId(e.target.value, "season", setData)}
          >
            <Radio.Button value="outdoor">Outdoor</Radio.Button>
            <Radio.Button value="indoor">Indoor</Radio.Button>
            <Radio.Button value="xc">XC</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Straightaway Lanes" name="straightaway">
          <InputNumber
            id="straightaway"
            value={data.straightaway}
            min={0}
            onChange={(v) => handleChangeId(v, "straightaway", setData)}
          />
        </Form.Item>
        <Form.Item label="Oval Lanes" name="oval">
          <InputNumber
            id="oval"
            value={data.oval}
            min={0}
            onChange={(v) => handleChangeId(v, "oval", setData)}
          />
        </Form.Item>
        <Form.Item label="Score" name="score">
          <Checkbox
            id="score"
            checked={data.score}
            onChange={(e) => handleCheckboxChange(e, setData)}
          />
        </Form.Item>
        <Form.Item label="Use Divisions" name="useDivisions">
          <Checkbox
            id="useDivisions"
            checked={data.useDivisions}
            onChange={(e) => handleCheckboxChange(e, setData)}
          />
        </Form.Item>

        <Form.Item {...buttonRowLayout}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NewMeetForm;
