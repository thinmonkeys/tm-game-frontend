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
    ddInfo: "Check your Direct Debits to earn your first badge",
    soInfo: "Check your Standing Orders to earn your first badge",
    incomeInfo: "Check your Incomes to earn your first badge",
    contactInfo: "Check your Contact Details to earn your first badge",
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
          this.setState({
            dd: x,
            ddInfo: "Check your Direct Debits again next month to level up",
          });
      } else if (x.Code.includes("SO")) {
        if (
          !this.state.so.hasOwnProperty("Code") ||
          this.state.so.Level < x.Level
        )
          this.setState({
            so: x,
            soInfo: "Check your Standing Orders again next month to level up",
          });
      } else if (x.Code.includes("IN")) {
        if (
          !this.state.income.hasOwnProperty("Code") ||
          this.state.income.Level < x.Level
        )
          this.setState({
            income: x,
            incomeInfo: "Check your Incomes again next month to level up",
          });
      } else if (x.Code.includes("CD")) {
        if (
          !this.state.contact.hasOwnProperty("Code") ||
          this.state.contact.Level < x.Level
        )
          this.setState({
            contact: x,
            contactInfo:
              "Check your ContactDetails again next month to level up",
          });
      }
    });
  }

  render() {
    const { showInfo, infoKey } = this.state;
    const info = {
      dd: this.state.ddInfo,
      so: this.state.soInfo,
      income: this.state.incomeInfo,
      contact: this.state.contactInfo,
    };

    return (
      <div>
        <div className="badge-set-column">
          <Badge
            handleInfoClick={() => this.handleInfoClick("dd")}
            name="Direct Debit"
            description="For keeping your Direct Debits up to date"
            level={this.state.dd.Level}
          />
          <Badge
            handleInfoClick={() => this.handleInfoClick("income")}
            name="Incomes"
            description="For keeping your incomes up to date"
            level={this.state.income.Level}
          />
          <Badge
            handleInfoClick={() => this.handleInfoClick("so")}
            name="Standing Orders"
            description="For keeping your Standing Orders up to date"
            level={this.state.so.Level}
          />
          <Badge
            handleInfoClick={() => this.handleInfoClick("contact")}
            name="Contact"
            description="For keeping your Contact Details up to date"
            level={this.state.contact.Level}
          />
        </div>

        {this.state.showInfo ? <Alert children={info[infoKey]} /> : <div></div>}
      </div>
    );
  }
}
