import React, { useState, useEffect } from "react";
import { Button, Card, Typography } from "antd";

type Props = {
  eventList: string[];
};

const callOrder = ["First Call", "Second Call", "Third Call", "Past"];

enum buttonColor {
  "First Call" = "blue",
  "Second Call" = "green",
  "Third Call" = "red",
  "Past" = "black",
}

const EventCalling = (props: Props) => {
  const [eventCalls, setEventCalls] = useState<number[]>([]);

  useEffect(() => {
    const temp = props.eventList.map((e) => 0);
    setEventCalls(temp);
  }, [props.eventList]);

  return (
    <div style={{ padding: "10px", height: "100vh" }}>
      {console.log(props, eventCalls)}
      <Typography.Title level={3}>Order of Events</Typography.Title>
      {props.eventList.map(
        (x) =>
          callOrder[eventCalls[props.eventList.indexOf(x)]] !== "Past" && (
            <Card style={{ width: 500, margin: 5 }} key={x}>
              {x}
              <Button
                style={{
                  float: "right",
                }}
                onClick={() =>
                  setEventCalls((prevEventCalls) => {
                    let prev = [...prevEventCalls];
                    prev[props.eventList.indexOf(x)] += 1;
                    return prev;
                  })
                }
              >
                {callOrder[eventCalls[props.eventList.indexOf(x)]]}
              </Button>
            </Card>
          )
      )}
    </div>
  );
};

export default EventCalling;
