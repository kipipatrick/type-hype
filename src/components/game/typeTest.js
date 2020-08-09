import React from "react";
import {
  Input,
  Row,
  Col,
  Statistic,
  Button,
  Modal,
  List,
  Rate,
  Progress,
} from "antd";
import { getText, saveScore } from "./gameActions";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
let TypingTest = (props) => {
  const dispatch = useDispatch();
  let text = useSelector((state) => state.game.text, shallowEqual);
  let saved = useSelector((state) => state.game.saved, shallowEqual);
  let history = useHistory();
  let [input, setInput] = React.useState("");
  const [seconds, setSeconds] = React.useState(60);
  const [timeUp, setTimeUp] = React.useState(0);
  const [isActive, setIsActive] = React.useState(false);
  const [showResults, setShowResults] = React.useState(false);
  const speedResults = [
    {
      rate: 5,
      description: "Fast",
      minLimit: 40,
      maxLimit: "or more",
    },
    {
      rate: 3,
      description: "Moderate",
      minLimit: 24,
      maxLimit: "to 39",
    },
    {
      rate: 1,
      description: "Slow",
      minLimit: 23,
      maxLimit: "or less",
    },
  ];
  let textArray = text ? text.split(" ").filter((text) => text !== "") : [];
  let inputArray = text ? input.split(" ").filter((text) => text !== "") : [];

  React.useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
        setTimeUp((timeUp) => timeUp + 1);
      }, 1000);
      if (compareArray(inputArray, textArray)) {
        setIsActive(false);
      }
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  React.useEffect(() => {
    dispatch(getText());
  }, []);

  function confirmSave() {
    window.location.reload();
  }

  function compareArray(input, text) {
    let x = false;
    if (input.length === text.length) {
      text.map((itm, idx) => {
        x = itm === input[idx];
      });
    } else {
      return false;
    }
    return x;
  }

  function saveAndRetry() {
    dispatch(saveScore(getCorrectText() / (timeUp / 60), history));
    setShowResults(false);
  }

  function setColor(index) {
    if (inputArray[index]) {
      if (
        inputArray[index].replace(/\s/g, "") ===
        textArray[index].replace(/\s/g, "")
      ) {
        return "blue";
      } else {
        return "white";
      }
    } else {
      return "white";
    }
  }

  function setText(e) {
    setInput(e);
  }

  function returnStar(value){
    console.log(value)
    if(value >= 40){
        return 5
    } else if( value < 40 && value >23){
        return 3
    } else if(value <= 23){
        return 1
    }
}


  function getCorrectText() {
    let correct = 0;
    textArray.map((item, idx) => {
      if (item === inputArray[idx]) {
        correct = correct + 1;
      }
    });

    return correct;
  }

  return (
    <div>
      <Modal
        title={
          <div
            style={{
              color: "#8E6AAC",
            }}
          >
            Your Results
          </div>
        }
        style={{
          padding: 1,
          backgroundColor: "#8E6AAC",
        }}
        visible={showResults}
        onOk={() => saveAndRetry()}
        onCancel={() => saveAndRetry()}
        okText={"Save and Retry"}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{
          size: "large",
          style: {
            background: "#8E6AAC",
            color: "white",
          },
        }}
        // onCancel={()=>setShowResults(false)}
      >
        <Row gutter={16}>
          <Col span={24} style={{justifyContent: 'center', display: 'flex'}}>
            <div>
          
          <div style={{justifyContent: 'center', display: 'flex', fontSize: 20,  color: "#8E6AAC",
            fontWeight: 400,}}>{getCorrectText() / (timeUp / 60) }<span style={{color: 'grey', fontWeight: 200, fontSize: 20}}>   &nbsp;WPM</span></div>
          <Rate value={returnStar(getCorrectText() / (timeUp / 60))}/>
            </div>
          </Col>
        </Row>
        <div
          style={{
            color: "#8E6AAC",
            fontWeight: 400,
            fontSize: 16,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          What your score means
        </div>
        <List
          itemLayout="horizontal"
          dataSource={speedResults}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Rate value={item.rate} />}
                title={
                  <span style={{ color: "#8E6AAC", fontWeight: 600 }}>
                    {item.description}
                  </span>
                }
                description={`You can correctly encode ${item.minLimit} ${item.maxLimit} words per minute`}
              />
            </List.Item>
          )}
        />
      </Modal>
      <Modal
         title={
          <div
            style={{
              color: "#8E6AAC",
            }}
          >
         Results Saved
          </div>
        }
        style={{
          padding: 1,
        }}
        okText={"OK"}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{
          size: "large",
          style: {
            background: "#8E6AAC",
            color: "white",
          },
        }}
        visible={saved}
        onOk={confirmSave}
      >
       
        <div style={{  fontSize: 14, fontWeight: 600 }}>
          ID : {saved ? saved["id"] : ""}
        </div>
        <div style={{  fontSize: 14, fontWeight: 600 }}>
          NAME : {saved ? saved["name"] : ""}
        </div>
        <div style={{  fontSize: 14, fontWeight: 600 }}>
          Score : {saved ? saved["score"] : ""}
        </div>
        <div style={{ fontSize: 14, fontWeight: 600 }}>
          DATE: {saved ? moment(saved["id"]).format("DD MMM YYYY hh:mm A") : ""}
        </div>
      </Modal>

      <Row gutter={16} style={{ marginTop: 20, marginBottom: 20 }}>
        <Col span={5}>
          <Statistic
            round
            style={{ backgroundColor: "white", padding: 20 }}
            valueStyle={{ color: "#8E6AAC", fontWeight: 600 }}
            title="Total Words"
            value={textArray.length}
          />
        </Col>
        <Col span={5}>
          <Statistic
            style={{ backgroundColor: "white", padding: 20 }}
            valueStyle={{ color: "#8E6AAC", fontWeight: 600 }}
            title="Correct Words"
            value={getCorrectText()}
          />
        </Col>
        <Col span={5}>
          <Statistic
            style={{ backgroundColor: "white", padding: 20 }}
            valueStyle={{ color: "#8E6AAC", fontWeight: 600 }}
            title="Incorrect Words"
            value={inputArray.length - getCorrectText()}
          />
        </Col>

        <Col span={5}>
          <Statistic
            style={{ backgroundColor: "white", padding: 20 }}
            valueStyle={{ color: "#8E6AAC", fontWeight: 600 }}
            title="Time Remaining"
            value={seconds + "s"}
          />
        </Col>
      </Row>
      <div
        style={{
          marginBottom: 20,
          fontSize: 20,
          fontWeight: 600,
          color: "white",
        }}
      >
        Try this!
      </div>
      <div style={{ marginBottom: 20 }}>
        {textArray.map((item, idx) => {
          return (
            <span
              key={idx}
              style={{ color: setColor(idx), fontSize: 16, fontWeight: 400 }}
            >
              {item}{" "}
            </span>
          );
        })}
      </div>
      <div
        style={{
          marginBottom: 20,
          fontSize: 20,
          fontWeight: 600,
          color: "white",
        }}
      >
        Type here to start time!
      </div>
      {textArray.length > 0 ? (
        <div>
          <Row gutter={16}>
            <Col span={18}>
              <Input.TextArea
                disabled={seconds === 0 || compareArray(inputArray, textArray)}
                onClick={() => setIsActive(true)}
                value={input}
                onChange={(e) => setText(e.target.value)}
                multiple
                rows={5}
              />
            </Col>
            <Col span={6}>
              <Progress
                type="circle"
                strokeColor={{
                  "0%": "white",
                  "100%": "#8E6AAC",
                }}
                percent={((inputArray.length / textArray.length) * 100).toFixed(
                  0
                )}
              />
            </Col>
          </Row>

          <div
            style={{
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              marginTop: "5vh",
              marginBottom: "5vh",
              display:
                seconds === 0 || compareArray(inputArray, textArray)
                  ? ""
                  : "none",
            }}
          >
            <Button
              size="large"
              style={{ background: "#8E6AAC", color: "white" }}
              onClick={() => setShowResults(true)}
            >
              Show Results
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TypingTest;
