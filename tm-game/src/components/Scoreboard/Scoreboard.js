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
    leaderboardPos: 1,
    DirectDebitList: [],
    score: 0,
  };

  componentDidMount() {
    try {
      fetch(
        "https://q15q6mejoj.execute-api.eu-west-1.amazonaws.com/dev/score?cif=4006001186"
      )
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            DirectDebitList: data.DirectDebitList,
            lastConfirmed: data.LastConfirmed,
            isLoading: false,
            badgesArr: data.Badges,
            leaderboardPos: data.Position,
            score: data.Score,
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
        <div className="scoreboard">
          <h2>You're in postion {this.state.leaderboardPos} !</h2>
          <h3>With a score of {this.state.score}</h3>
        </div>
        <BadgeSet badgesArr={this.state.badgesArr} />
      </div>
    );
  }
}
