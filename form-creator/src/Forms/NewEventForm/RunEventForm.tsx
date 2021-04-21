import React, { useState } from "react";
import { Radio, InputNumber, Checkbox, Select, Form, Button } from "antd";

import { handleChangeId, handleCheckboxChange } from "../util";

const RunEventForm = () => {
  const [data, setData] = useState({
    gender: "male",
    eventNo: 2,
    score: true,
    rounds: 1,
    lanesPositions: 8,
    finalsLanesPositions: 8,
    event: "run",
    distance: 100,
    heatAssignment: "seedTime",
    heatOrder: "fastToSlow",
    runInLanes: true,
    lanesPositionAssignment: "random",
    finalsLaneAssignment: "standard",
    advancement: "time",
    finalsHeats: 4,
    semisHeats: 1,
    quartersHeats: 1,
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
  const config = {
    rules: [{ required: true, message: "This field is required!" }],
  };

  const lanesPositionsLabel = data.runInLanes ? "Lanes" : "Positions";
  const lanesPositionsAssignmentOptions = data.runInLanes
    ? [
        { label: "Standard Lanes", value: "standardLanes" },
        { label: "Random", value: "random" },
        { label: "Custom Lanes", value: "customLanes" },
      ]
    : [
        { label: "Random", value: "random" },
        { label: "Waterfall", value: "waterfall" },
        { label: "Alleys", value: "alleys" },
        { label: "Custom Lanes", value: "customLanes" },
      ];

  return (
    <Form name="runEvent" {...layout} onFinish={onFinish} initialValues={data}>
      <Form.Item label="Gender" name="gender">
        <Radio.Group
          id="gender"
          value={data.gender}
          onChange={(e) => handleChangeId(e.target.value, "gender", setData)}
        >
          <Radio.Button value="male">Male</Radio.Button>
          <Radio.Button value="female">Female</Radio.Button>
          <Radio.Button value="multi">Multi</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item {...config} name="eventNo" label="Event #">
        <InputNumber
          id="eventNo"
          value={data.eventNo}
          min={1}
          onChange={(v) => handleChangeId(v, "eventNo", setData)}
        />
      </Form.Item>
      <Form.Item label="Score" name="score">
        <Checkbox
          id="score"
          checked={data.score}
          onChange={(e) => handleCheckboxChange(e, setData)}
        />
      </Form.Item>
      <Form.Item {...config} name="rounds" label="Rounds">
        <InputNumber
          id="rounds"
          value={data.rounds}
          min={1}
          max={4}
          onChange={(v) => handleChangeId(v, "rounds", setData)}
        />
      </Form.Item>
      <Form.Item {...config} name="lanesPositions" label={lanesPositionsLabel}>
        <InputNumber
          id="lanesPositions"
          value={data.lanesPositions}
          min={1}
          onChange={(v) => handleChangeId(v, "lanesPositions", setData)}
        />
      </Form.Item>
      {data.rounds > 1 && (
        <Form.Item
          {...config}
          name="finalsLanesPositions"
          label={`Finals ${lanesPositionsLabel}`}
        >
          <InputNumber
            id="lanesPositions"
            value={data.lanesPositions}
            min={1}
            onChange={(v) => handleChangeId(v, "lanesPositions", setData)}
          />
        </Form.Item>
      )}
      <Form.Item label="Event" name="event">
        <Radio.Group
          id="event"
          value={data.event}
          onChange={(e) => handleChangeId(e.target.value, "event", setData)}
        >
          <Radio.Button value="run">Run</Radio.Button>
          <Radio.Button value="hurdle">Hurdle</Radio.Button>
          <Radio.Button value="steeple">Steeple</Radio.Button>
          <Radio.Button value="walk">Walk</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Distance" name="distance">
        <Select
          id="distance"
          style={{ width: 100 }}
          onChange={(v) => handleChangeId(v, "distance", setData)}
        >
          <Select.Option value={100}>100</Select.Option>
          <Select.Option value={110}>110</Select.Option>
          <Select.Option value={200}>200</Select.Option>
          <Select.Option value={400}>400</Select.Option>
          <Select.Option value={800}>800</Select.Option>
          <Select.Option value={1500}>1500</Select.Option>
          <Select.Option value={1600}>1 Mile</Select.Option>
          <Select.Option value={2000}>2000</Select.Option>
          <Select.Option value={3000}>3000</Select.Option>
          <Select.Option value={3200}>2 Mile</Select.Option>
          <Select.Option value={5000}>5k</Select.Option>
          <Select.Option value={10000}>10k</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Heat Assignment" name="heatAssignment">
        <Select
          id="heatAssignment"
          onChange={(v) => handleChangeId(v, "heatAssignment", setData)}
        >
          <Select.Option value="seedTime">Seed Time</Select.Option>
          <Select.Option value="random">Random</Select.Option>
          <Select.Option value="serpentine">Serpentine</Select.Option>
          <Select.Option value="leftToRight">Left To Right</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Heat Order" name="heatOrder">
        <Select
          id="heatOrder"
          onChange={(v) => handleChangeId(v, "heatOrder", setData)}
        >
          <Select.Option value="fastToSlow">Fast To Slow</Select.Option>
          <Select.Option value="slowToFast">Slow To Fast</Select.Option>
          <Select.Option value="random">Random</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Run In Lanes" name="runInLanes">
        <Checkbox
          id="runInLanes"
          checked={data.runInLanes}
          onChange={(e) => handleCheckboxChange(e, setData)}
        />
      </Form.Item>
      <Form.Item
        label={`${lanesPositionsLabel} Assignment`}
        name="lanesPositionAssignment"
      >
        <Select
          id="lanesPositionAssignment"
          onChange={(v) =>
            handleChangeId(v, "lanesPositionAssignment", setData)
          }
        >
          {lanesPositionsAssignmentOptions.map((option) => (
            <Select.Option key={option.label} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      {data.rounds > 1 && data.runInLanes && (
        <Form.Item label="Finals Lane Assignment" name="finalsLaneAssignment">
          <Select
            id="finalsLaneAssignment"
            onChange={(v) => handleChangeId(v, "finalsLaneAssignment", setData)}
          >
            <Select.Option value="standard">Standard Lanes</Select.Option>
            <Select.Option value="random">Random</Select.Option>
            <Select.Option value="custom">Custom Lanes</Select.Option>
            <Select.Option value="iaaf">IAAF 166.3</Select.Option>
          </Select>
        </Form.Item>
      )}
      {data.rounds > 1 && (
        <Form.Item label="Advancement" name="advancement">
          <Select
            id="advancement"
            onChange={(v) => handleChangeId(v, "advancement", setData)}
          >
            <Select.Option value="time">Time</Select.Option>
            <Select.Option value="placeTime">Place/Time</Select.Option>
          </Select>
        </Form.Item>
      )}
      {data.rounds > 1 && (
        <Form.Item {...config} name="finalsHeats" label="Finals Heats">
          <InputNumber
            id="finalsHeats"
            value={data.finalsHeats}
            min={1}
            onChange={(v) => handleChangeId(v, "finalsHeats", setData)}
          />
        </Form.Item>
      )}
      {data.rounds > 2 && (
        <Form.Item {...config} name="semisHeats" label="Semis Heats">
          <InputNumber
            id="semisHeats"
            value={data.semisHeats}
            min={1}
            onChange={(v) => handleChangeId(v, "semisHeats", setData)}
          />
        </Form.Item>
      )}
      {data.rounds > 3 && (
        <Form.Item {...config} name="quartersHeats" label="Quarters Heats">
          <InputNumber
            id="quartersHeats"
            value={data.quartersHeats}
            min={1}
            onChange={(v) => handleChangeId(v, "quartersHeats", setData)}
          />
        </Form.Item>
      )}

      <Form.Item {...buttonRowLayout}>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RunEventForm;
