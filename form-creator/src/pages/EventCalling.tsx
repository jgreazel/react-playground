import React, { useState, useEffect } from "react";
import { Button, Card, Typography } from "antd";
import { reduceEachLeadingCommentRange } from "typescript";

// ! maybe it could tweet out event calls

type Props = {
  eventList: string[];
};

const callOrder = ["First Call", "Second Call", "Third Call", "Past"];

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
            <Card key={x}>
              {x}
              <Button
                style={{
                  float: "right",
                }}
                type="primary"
                danger={
                  callOrder[eventCalls[props.eventList.indexOf(x)]] ===
                  "Third Call"
                }
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
