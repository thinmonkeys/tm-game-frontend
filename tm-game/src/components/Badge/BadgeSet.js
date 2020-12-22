import React, { Component } from "react";
import Badge from "./Badge";
import Alert from "../Alert/Alert";
import "./Badge.css";

export default class BadgeSet extends Component {
  state = {
    showInfo: false,
    infoKey: "",
    dd: { Level: 0 },
    so: { Level: 0 },
    income: { Level: 0 },
    contact: { Level: 0 },
    isLoading: true,
  };

  handleInfoClick(infoKey) {
    this.setState({ showInfo: !this.state.showInfo, infoKey: infoKey });
  }

  componentDidMount() {
    this.props.badgesArr.forEach((x) => {
      if (x.Code.includes("DD")) {
        if (
          !this.state.dd.hasOwnProperty("Code") ||
          this.state.dd.Level < x.Level
        )
          this.setState({ dd: x });
      } else if (x.Code.includes("SO")) {
        if (
          !this.state.so.hasOwnProperty("Code") ||
          this.state.so.Level < x.Level
        )
          this.setState({ so: x });
      } else if (x.Code.includes("IN")) {
        if (
          !this.state.income.hasOwnProperty("Code") ||
          this.state.income.Level < x.Level
        )
          this.setState({ income: x });
      } else if (x.Code.includes("CD")) {
        if (
          !this.state.contact.hasOwnProperty("Code") ||
          this.state.contact.Level < x.Level
        )
          this.setState({ contact: x });
      }
    });
  }

  render() {
    const { showInfo, infoKey } = this.state;
    const info = {
      dd: {},
      so: {},
      income: {},
      contact: {},
    };

    console.log(this.props.badgesArr);

    return (
      <div>
        <div className="badge-set-column">
          <Badge
            handleInfoClick={() => this.handleInfoClick("dd")}
            name="Direct Debit"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            level={this.state.dd.Level}
          />
          <Badge
            handleInfoClick={() => this.handleInfoClick("incomes")}
            name="Incomes"
            description="quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            level={this.state.income.Level}
          />
          <Badge
            handleInfoClick={() => this.handleInfoClick("so")}
            name="Standing Orders"
            description="Excepteur sint occaecat cupidatat non proident."
            level={this.state.so.Level}
          />
          <Badge
            handleInfoClick={() => this.handleInfoClick("contact")}
            name="Contact"
            description="tempor incididunt ut labore et dolore magna aliqua."
            level={this.state.contact.Level}
          />
        </div>

        {this.state.showInfo ? <Alert children={info[infoKey]} /> : <div></div>}
      </div>
    );
  }
}
