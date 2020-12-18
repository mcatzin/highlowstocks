import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import { getWeeklyForexTimeSeries } from "../../../actions/forex-actions";
import getSeriesData from "../../../utils/global-functions";

class WeeklyForex extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getWeeklyForexTimeSeries("USD", "EUR");
  }

  render() {
    if (this.props.weeklyExchangeRate) {
      const exchangeSeriesData = getSeriesData(
        this.props.weeklyExchangeRate["Time Series FX (Weekly)"]
      );
      const options = {
        chart: {
          type: "line",
        },
        title: {
          text: "Weekly Forex of USD-To-EUR",
        },
        rangeSelector: {
          selected: 6,
        },
        series: [
          {
            name: "EUR",
            data: exchangeSeriesData,
          },
        ],
      };
      return (
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={"stockChart"}
            options={options}
          />
        </div>
      );
    } else {
      return <h5>Loading...</h5>;
    }
  }
}
WeeklyForex.propTypes = {
  weeklyExchangeRate: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  weeklyExchangeRate: state.forexReducer.weeklyExchangeRate,
});
export default connect(mapStateToProps, { getWeeklyForexTimeSeries })(
  WeeklyForex
);
