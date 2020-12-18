import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import { getMonthlyForexSeriesForComparison } from '../../../actions/forex-actions'
import getSeriesData from '../../../utils/global-functions'

class MonthlyForexComparison extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exchangeOf: ["INR", "EUR", "JPY", "CNY"]
    }
  }
  componentDidMount() {
    this.props.getMonthlyForexSeriesForComparison("USD", ...this.state.exchangeOf)
  }
  render() {
    if(this.props.exchangeRatesComparison.length > 0) {
      var seriesOptions = [];
      for (let i = 0; i < this.props.exchangeRatesComparison.length; i++) {
        const exchange = this.props.exchangeRatesComparison[i];
        seriesOptions[i] = {
          name: this.state.exchangeOf[i],
          data: getSeriesData(exchange['Time Series FX (Monthly)'])
        }
      }

      const options = {
        chart: {
          type: "line"
        },
        title: {
          text: `Monthly Forex of - ${this.state.exchangeOf}`
        },
        rangeSelector: {
          selected: 6
        },
        plotOptions: {
          series: {
            compare: 'percent'
          }
        },
        series: seriesOptions
      }
      return (
        <div>
           <HighchartsReact 
            highcharts={Highcharts}
            constructorType={"stockChart"}
            options={options}
          />
        </div>
      )
    } else {
      return <h5>Loading...</h5>
    }
  }
}
MonthlyForexComparison.propTypes = {
  exchangeRatesComparison: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
  exchangeRatesComparison: state.forexReducer.exchangeRatesComparison
})
export default connect(mapStateToProps, {getMonthlyForexSeriesForComparison})(MonthlyForexComparison);