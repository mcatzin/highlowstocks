import React from "react";
import img1 from "../../../../images/daily-stocks.png";
import img2 from "../../../../images/monthly-stocks-comparison.png";
import img3 from "../../../../images/forex-comparison.png";
import img4 from "../../../../images/weekly-exchange-rates.png";

function DashboardHome() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              alt="Daily Stocks"
              height="300"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              alt="Monthly Stock Comparison"
              height="300"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              alt="Forex Comparison"
              height="300"
            />
          </div>
          <div className="carousel-item">
            <img
              src={img4}
              className="d-block w-100"
              alt="Weekly Exchange Rate"
              height="300"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <hr />
      <div className="container-fluid row" style={{ textAlign: "center" }}>
        <div className="col-md-4">
          <div className="card text-white bg-dark mb-3">
            <div className="card-header">Highstocks</div>
            <div className="card-body">
              <h4 className="card-title">Daily Stocks</h4>
              <p className="card-text">
                A demo of fetching the Daily stocks data which is displayed
                using highstock chart.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-dark mb-3">
            <div className="card-header">Highstocks</div>
            <div className="card-body">
              <h4 className="card-title">Monthly Stocks</h4>
              <p className="card-text">
                A demo of fetching the Monthly stocks data which is displayed
                using highstock chart.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-dark mb-3">
            <div className="card-header">Highstocks</div>
            <div className="card-body">
              <h4 className="card-title">Monthly Stocks Comparison</h4>
              <p className="card-text">
                A demo of fetching the Monthly stocks for different companies
                and compare them.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-dark mb-3">
            <div className="card-header">Highstocks</div>
            <div className="card-body">
              <h4 className="card-title">Weekly Stocks</h4>
              <p className="card-text">
                A demo of fetching the Weekly stocks data which is displayed
                using Highcharts highstock chart.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-dark mb-3">
            <div className="card-header">Forex</div>
            <div className="card-body">
              <h4 className="card-title">Current Exchange Value</h4>
              <p className="card-text">
                A demo of fetching the Daily and Weekly forex data which is
                displayed using Highcharts chart.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-dark mb-3">
            <div className="card-header">Forex</div>
            <div className="card-body">
              <h4 className="card-title">Monthly Forex Comparison</h4>
              <p className="card-text">
                A demo of fetching the Monthly Forex for different companies and
                compare them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardHome;
