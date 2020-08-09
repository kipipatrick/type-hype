import React from "react";
import { Row, Col, Button, Rate } from "antd";

import { getScores } from "./gameActions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import TypingTest from "./typeTest";
import moment from "moment";
import { useHistory } from "react-router";
import { logout } from "../login/loginActions";

let Game = () => {
  let user = JSON.parse(sessionStorage.getItem("CURRENT_USER"));
  let scores = useSelector(
    (state) => (state.game.scores ? state.game.scores : []),
    shallowEqual
  );

  let history = useHistory();
  const [showTest, setShowTest] = React.useState(false);
  let dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getScores());
  }, []);
  if (!user) {
    history.push("/");
  }

  function returnStar(value) {
    console.log(value);
    if (value >= 40) {
      return 5;
    } else if (value < 40 && value > 23) {
      return 3;
    } else if (value <= 23) {
      return 1;
    }
  }

  return (
    <Row
      gutter={16}
      style={{ backgroundColor: `#8E6AAC`, padding: 20, overflow: "hidden" }}
    >
      <Col style={{ padding: 20, height: "100vh" }} span={6}>
        <div style={{ color: "white", fontSize: 50, fontWeight: "600" }}>
          Type+Hype
        </div>
        <div
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: 600,
            marginTop: "5vh",
          }}
        >
          Your Last 5 Records
        </div>
        <div
          style={{
            color: "white",
            fontSize: 14,
            marginTop: 10,
            marginBottom: 10,
            minHeight: "30vh",
          }}
        >
          {scores.length === 0 ? (
            <div style={{ fontWeight: 300 }}> No game recorded. </div>
          ) : (
            ""
          )}

          {scores
            .sort((a, b) => b.score - a.score)
            .slice(0, 5)
            .map((item, key) => {
              return (
                <div
                  key={key}
                  style={{ fontSize: 12, fontWeight: 600, marginBottom: 20 }}
                >
                  {parseFloat(item["score"]).toFixed(0) + " WPM"}
                  <span style={{ fontWeight: 300 }}>
                    {" "}
                    ({moment(item["id"]).format("DD MMMM YYYY hh:mm ")})
                  </span>{" "}
                  <div>
                    <Rate value={returnStar(item["score"])} />
                  </div>
                </div>
              );
            })}
        </div>

        <div style={{ color: "white", fontSize: 20, fontWeight: 600 }}>
          About Type+Hype
        </div>
        <div style={{ color: "white", fontSize: 14 }}>
          React.js based application that will allow user to improve his/her
          typing skills, by measuring current progress and reviewing history of
          previous games.
        </div>
      </Col>
      <Col
        style={{
          backgroundColor: "#8E6AAC",
          height: "100vh",
          padding: 20,
          overflow: "hidden",
        }}
        span={18}
      >
        <div style={{ fontSize: 30, color: "white", marginTop: 20 }}>
          {" "}
          Welcome! <span style={{ fontWeight: 600 }}>{user["name"]}</span>
          <Button
            size="large"
            onClick={() => dispatch(logout(history))}
            style={{ float: "right", background: "#8E6AAC", color: "white" }}
          >
            Logout
          </Button>
        </div>
        {!showTest ? (
          <div
            style={{
              fontSize: 14,
              color: "white",
              marginTop: "5vh",
              fontWeight: 600,
              width: "50%",
            }}
          >
            Tests the your typing speed and accuracy. Try it now to see how many
            correct words you can type in a minute. Get a free assessment after
            your type test--are you all hype or can you really type?
          </div>
        ) : (
          ""
        )}

        <div
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            marginTop: "5vh",
            marginBottom: "5vh",
            display: showTest ? "none" : "",
          }}
        >
          <Button
            size="large"
            style={{ background: "#8E6AAC", color: "white" }}
            onClick={() => setShowTest(true)}
          >
            Start Typing Test
          </Button>
        </div>

        {showTest ? <TypingTest /> : ""}
      </Col>
    </Row>
  );
};

export default Game;
