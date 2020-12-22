import React, { Component } from "react";
import Loading from "../Loading/Loading";
import Alert from "../Alert/Alert";
import BadgeSet from "../Badge/BadgeSet";
import "./Scoreboard.css";

export default class Scoreboard extends Component {
  state = {
    ScoreboardRecords: {},
    isLoading: true,
    hasError: false,
    badgesArr: [],
  };

  componentDidMount() {
    try {
      fetch(
        "https://q15q6mejoj.execute-api.eu-west-1.amazonaws.com/dev/score?cif=4006001200"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            DirectDebitList: data.DirectDebitList,
            lastConfirmed: data.LastConfirmed,
            isLoading: false,
            badgesArr: data.Badges,
          });
        });
    } catch {
      this.setState({ isLoading: false, hasError: true });
    }
  }

  render() {
    const { ScoreboardRecords, isLoading, hasError } = this.state;

    if (isLoading) return <Loading />;

    if (hasError) return <Alert children="Error loading" variant="error" />;

    return (
      <div>
        <div className="scoreboard">Scoreboard</div>
        <BadgeSet badgesArr={this.state.badgesArr} />
      </div>
    );
  }
}
