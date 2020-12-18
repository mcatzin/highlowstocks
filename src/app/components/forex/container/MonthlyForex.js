import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

import { getMonthlyForexTimeSeries } from '../../../actions/forex-actions'
import getSeriesData from '../../../utils/global-functions'

class MonthlyForex extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    this.props.getMonthlyForexTimeSeries("USD", "EUR");
  }

  render() {
    if (this.props.monthlyExchangeRate) {
      const exchangeSeriesData = getSeriesData(this.props.monthlyExchangeRate["Time Series FX (Monthly)"]);
      const options = {
        chart: {
          type: "line",
        },
        title: {
          text: "Monthly Forex of USD-To-EUR"
        },
        rangeSelector: {
          selected: 6
        },
        series: [
          {
            name: "EUR",
            data: exchangeSeriesData
          }
        ]
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
MonthlyForex.propTypes = {
  monthlyExchangeRate: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  monthlyExchangeRate: state.forexReducer.monthlyExchangeRate
})
export default connect(mapStateToProps, {getMonthlyForexTimeSeries})(MonthlyForex);