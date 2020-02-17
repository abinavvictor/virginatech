import React, { Component, lazy } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

// Widgets
const Widget02 = lazy(() => import("../../views/Widgets/Widget02"));
const Widget04 = lazy(() => import("../../views/Widgets/Widget04"));

// Pie Chart
const pie = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

class UniversityView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      isLoaded: false,
      error: ""
    };

    this.bar = {
      labels: [
        "$0 to $30000",
        "$30001 to $48000",
        "$48001to $75000",
        "$75001 to $110000",
        "110001+"
      ],
      datasets: [
        {
          label: "Average Annual Cost ($) by family income group",
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [100, 100, 10, 100, 10] // default
        }
      ]
    };

    this.enthinicityPie = {
      labels: [
        "White",
        "Black",
        "Hispanic",
        "Asian",
        "American Indian",
        "Hawaiian",
        "Two Or More",
        "NRAlien",
        "Unknown"
      ],
      datasets: [
        {
          data: [10, 20, 30, 40, 40,60,70,80,90], // default
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#6f42c1",
            "#e83e8c",
            "#f86c6b",
            "#FFA07A",
            "#4dbd74",
            "#17a2b8"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#6f42c1",
            "#e83e8c",
            "#f86c6b",
            "#FFA07A",
            "#4dbd74",
            "#17a2b8",

          ]
        }
      ]
    };


    this.pecentdegreeForProg = {
      labels: [
        "Agri AgriOperations and RS",
        "NatRes & Conser",
        "Architect & RelatedS",
        "Commu Journ & RP",
        "Comp & IS & SS",
        "Engineering",
        "Fore Lang & Litt & Ling",
        "Family Consumr & Human Sci ",
        "Pyschology",
        "Public admin & SS",
          "SocialSciences",
          "VisualPerforming Arts",
          "busin mgmt mrkt & RSS"
      ],
      datasets: [
        {
          data: [10, 20, 30, 40, 50,60,70,80,90,100, 110, 120, 130], // default
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#6f42c1",
            "#e83e8c",
            "#f86c6b",
            "#FFA07A",
            "#4dbd74",
            "#17a2b8",
            "#1f77b4",
            "#ff7f0e",
            "#2ca02c",
            "#d62728"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#6f42c1",
            "#e83e8c",
            "#f86c6b",
            "#FFA07A",
            "#4dbd74",
            "#17a2b8",
            "#1f77b4",
            "#ff7f0e",
            "#2ca02c",
            "#d62728"
          ]
        }
      ]
    };


    this.fullPartPie = {
      labels: [
        "FullTime",
        "PartTime",

      ],
      datasets: [
        {
          data: [10, 50,], // default
          backgroundColor: [
            "#FF6384",
            "#36A2EB",

          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",

          ]
        }
      ]
    };

    this.socioEconomicPie = {
      labels: ["% recieving pell grant", "% not recieving pell grant"],
      datasets: [
        {
          data: [10, 90], // default
          backgroundColor: ["#f86c6b", "#17a2b8"],
          hoverBackgroundColor: ["#f86c6b", "#17a2b8"]
        }
      ]
    };


    this.studentPayingDebts = {
      labels: ["% Students Paying Debts", "% Not paying Debts"],
      datasets: [
        {
          data: [10, 90], // default
          backgroundColor: ["#f86c6b", "#17a2b8"],
          hoverBackgroundColor: ["#f86c6b", "#17a2b8"]
        }
      ]
    };

    this.gradRate = {
      labels: ["% graduated", "% Not graduation"],
      datasets: [
        {
          data: [10, 90], // default
          backgroundColor: ["#f86c6b", "#17a2b8"],
          hoverBackgroundColor: ["#f86c6b", "#17a2b8"]
        }
      ]
    };
    this.stuRecFedLoans = {
      labels: ["% Students RecFedLoans", "% Not receieving"],
      datasets: [
        {
          data: [10, 90], // default
          backgroundColor: ["#f86c6b", "#17a2b8"],
          hoverBackgroundColor: ["#f86c6b", "#17a2b8"]
        }
      ]
    };

    this.fulltimeRetention = {
      labels: ["% retained", "% Not retained"],
      datasets: [
        {
          data: [10, 90], // default
          backgroundColor: ["#f86c6b", "#17a2b8"],
          hoverBackgroundColor: ["#f86c6b", "#17a2b8"]
        }
      ]
    };

    this.parttimeRetention = {
      labels: ["% retained", "% Not retained"],
      datasets: [
        {
          data: [10, 90], // default
          backgroundColor: ["#f86c6b", "#17a2b8"],
          hoverBackgroundColor: ["#f86c6b", "#17a2b8"]
        }
      ]
    };

    this.Earnings = {
      labels: ["% Earnings", "% without Earnings"],
      datasets: [
        {
          data: [10, 90], // default
          backgroundColor: ["#f86c6b", "#17a2b8"],
          hoverBackgroundColor: ["#f86c6b", "#17a2b8"]
        }
      ]
    };
    this.satScoresBar = {
      labels: ["Critical Reading", "Math", "Writing"],
      datasets: [
        {
          label: "Dataset 1",
          backgroundColor: "#f86c6b",
          borderColor: "#FFCE56",
          borderWidth: 1,
          data: [10, 20, 30]
        },
        {
          label: "Dataset 2",
          backgroundColor: "#17a2b8",
          borderColor: "#4dbd74",
          borderWidth: 1,
          data: [20, 30, 40]
        }
      ]
    };

    // React Ref's for charts (bar, pie)
    this.chartReference = React.createRef();
    this.ethnicityReference = React.createRef();
    this.socioEconomicPieReference = React.createRef();
    this.satScoresBarReference = React.createRef();
    this.studentPayingDebtsReference = React.createRef();
    this.stuRecFedLoansReference = React.createRef();
    this.gradRateReference = React.createRef();
    this.fulltimeRetentionReference = React.createRef();
    this.parttimeRetentionReference = React.createRef();
    this.EarningsReference = React.createRef();
    this.fullPartPieReference = React.createRef();
    this.pecentdegreeForProgReference = React.createRef();
  }

  componentDidMount() {
    fetch("/api/getAllData")
      .then(res => res.json())
      .then(
        result => {
          const id = Number(
            window.location.href.split("#")[1].replace("/", "")
          );

          const filteredResult = result.find(
            each => each["Institution Id"] === id
          );

          console.log("Filtered Result", filteredResult);
          this.setState({
            isLoaded: true,
            data: filteredResult
          });

          window.chartReference = this.chartReference;

          // All Updates
          this.updateBarCost(filteredResult);
          this.updateEthnicityPie(filteredResult);
          this.updateSocioEconomicPie(filteredResult);
          this.updatesatScoresBar(filteredResult);
          this.updateStudentPayingDebt(filteredResult);
          this.updateStuRecFedLoans(filteredResult)
          this.updategradRate(filteredResult);
          this.updatefulltimeRetention(filteredResult);
          this.updateparttimeRetention(filteredResult);
          this.updateEarnings(filteredResult);
          this.updatefullPartPie(filteredResult);
          this.updatepecentdegreeForProg(filteredResult);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  updateBarCost = filteredResult => {
    //Push
    this.chartReference.current.props.data.datasets[0].data = [
      filteredResult[
        "Average Annual Cost ($) by family income group - $0 to $30000"
      ],
      filteredResult[
        "Average Annual Cost ($) by family income group - $30001 to $48000"
      ],
      filteredResult[
        "Average Annual Cost ($) by family income group - $48001to $75000"
      ],
      filteredResult[
        "Average Annual Cost ($) by family income group - $75001 to $110000"
      ],
      filteredResult["Average Annual Cost ($) by family income group - 110001+"]
    ];
    // Update chart ref
    this.chartReference.current.chartInstance.update();
  };

  updatesatScoresBar = filteredResult => {
    this.satScoresBarReference.current.props.data.datasets[0].data = [
      filteredResult[
        "25th percentile of SAT scores at the institution (critical reading)"
      ],
      filteredResult["25th percentile of SAT scores at the institution (math)"],
      filteredResult[
        "25th percentile of SAT scores at the institution (writing)"
      ]
    ];

    this.satScoresBarReference.current.props.data.datasets[1].data = [
      filteredResult[
        "75th percentile of SAT scores at the institution (critical reading)"
      ],
      filteredResult["75th percentile of SAT scores at the institution (math)"],
      filteredResult[
        "75th percentile of SAT scores at the institution (writing)"
      ]
    ];

    // Update chart ref
    this.satScoresBarReference.current.chartInstance.update();
  };

  updateEthnicityPie = filteredResult => {
    this.ethnicityReference.current.props.data.datasets[0].data = [
      filteredResult["% White"],
      filteredResult["% Black"],
      filteredResult["% Hispanic"],
      filteredResult["% Asian"],
      filteredResult["% American Indian/Alaska Native"],
      filteredResult["% Native Hawaiian/Pcific Islander"],
      filteredResult["% Two or More races"],
      filteredResult["% Non Resident Alien"],
      filteredResult["% Unknown"]
    ];

    // Update chart ref
    this.ethnicityReference.current.chartInstance.update();
  };

  updatepecentdegreeForProg = filteredResult => {
    this.pecentdegreeForProgReference.current.props.data.datasets[0].data = [
      filteredResult["Percentage of degrees awarded in Agriculture, Agriculture Operations, And Related Sciences"],
      filteredResult["Percentage of degrees awarded in Natural Resources And Conservation"],
      filteredResult["Percentage of degrees awarded in Architecture And Related Services"],
      filteredResult["Percentage of degrees awarded in Communication, Journalism, And Related Programs"],
      filteredResult["Percentage of degrees awarded in Computer And Information Sciences And Support Services"],
      filteredResult["Percentage of degrees awarded in Engineering"],
      filteredResult["Percentage of degrees awarded in Foreign Languages, Literatures, And Linguistics"],
      filteredResult["Percentage of degrees awarded in Family And Consumer Sciences/Human Sciences"],
      filteredResult["Percentage of degrees awarded in Psychology"],
      filteredResult["Percentage of degrees awarded in Public Administration And Social Service Professions"],
      filteredResult["Percentage of degrees awarded in Social Sciences"],
      filteredResult["Percentage of degrees awarded in Visual And Performing Arts"],
      filteredResult["Percentage of degrees awarded in Business, Management, Marketing, And Related Support Services"]




    ];

    // Update chart ref
    this.pecentdegreeForProgReference.current.chartInstance.update();
  };
  updatefullPartPie = filteredResult => {
    this.fullPartPieReference.current.props.data.datasets[0].data = [
      filteredResult["Percent Full Time Students"],
      filteredResult["% share of part-time students"]


    ];

    // Update chart ref
    this.fullPartPieReference.current.chartInstance.update();
  };

  updateSocioEconomicPie = filteredResult => {
  const getsGrantValue1 = Number(
      filteredResult[
          "Socia Economic Diversity (% of Student Receiving Pell Grant)"
          ]
  );
  const doesNotGetGrant = 1 - getsGrantValue1; // Example:  1 - 0.0002

  this.socioEconomicPieReference.current.props.data.datasets[0].data = [
    getsGrantValue1,
    doesNotGetGrant
  ];

  // Update chart ref
  this.socioEconomicPieReference.current.chartInstance.update();
};

  updateStudentPayingDebt = filteredResult => {
  const debtPaid = Number(
      filteredResult[
          "Students Paying Down Their Debt (%)"
          ]
  );
  const debtNotPaid  = 1 - debtPaid; // Example:  1 - 0.0002

  this.studentPayingDebtsReference.current.props.data.datasets[0].data = [
    debtPaid,
    debtNotPaid
  ];
  // Update chart ref
  this.studentPayingDebtsReference.current.chartInstance.update();
};
  updateStuRecFedLoans = filteredResult => {
    const recFed = Number(
        filteredResult[
            "% Student Receiving Federal Loans"
            ]
    );
    const notRecFed  = 1 - recFed; // Example:  1 - 0.0002

    this.stuRecFedLoansReference.current.props.data.datasets[0].data = [
      recFed,
      notRecFed
    ];
    // Update chart ref
    this.stuRecFedLoansReference.current.chartInstance.update();
  };
  updategradRate = filteredResult => {
    const grad = Number(
        filteredResult[
            "National Average - Graduation rate (%)"
            ]
    );
    const notGrad  = 1 - grad; // Example:  1 - 0.0002
    this.gradRateReference.current.props.data.datasets[0].data = [
      grad,
      notGrad
    ];
    // Update chart ref
    this.gradRateReference.current.chartInstance.update();
  };

  updatefulltimeRetention = filteredResult => {
    const fullreten = Number(
        filteredResult[
            "First-time, full-time student retention rate at four-year institutions (%)"
            ]
    );
    const notfullreten  = 1 - fullreten; // Example:  1 - 0.0002
    this.fulltimeRetentionReference.current.props.data.datasets[0].data = [
      fullreten,
      notfullreten
    ];
    // Update chart ref
    this.fulltimeRetentionReference.current.chartInstance.update();
  };

  updateparttimeRetention = filteredResult => {
    const parttime = Number(
        filteredResult[
            "First-time, part-time student retention rate at four-year institutions (%)"
            ]
    );
    const notparttime  = 1 - parttime; // Example:  1 - 0.0002
    this.parttimeRetentionReference.current.props.data.datasets[0].data = [
      parttime,
        notparttime
    ];
    // Update chart ref;
    this.parttimeRetentionReference.current.chartInstance.update();
  };

  updateEarnings = filteredResult => {
    const earnings = Number(
        filteredResult[
            "% Earning above High School Grad"
            ]
    );
    const notearnings  = 1 - earnings; // Example:  1 - 0.0002
    this.EarningsReference .current.props.data.datasets[0].data = [
      earnings,
        notearnings
    ];
    // Update chart ref;
    this.EarningsReference .current.chartInstance.update();
  };
  render() {
    if (!this.state.isLoaded) {
      return <div className="animated fadeIn pt-3 text-center">Loading...</div>;
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> University Profile{" "}
              </CardHeader>
              <CardBody>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Widget02
              header={this.state.data["Institution"]}
              mainText="Name"
              icon="fa fa-cogs"
              color="primary"
            />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02
              header={this.state.data["City"]}
              mainText="Location"
              icon="fa fa-laptop"
              color="info"
            />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02
              header={this.state.data["Type of Institution"]}
              mainText="Type of Institution"
              icon="fa fa-moon-o"
              color="info"
            />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget02
              header={this.state.data["Salary After Attending ($)"]}
              mainText="Salary After Attending"
              icon="fa fa-bell"
              color="info"
            />
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget04
              icon="icon-people"
              color="info" header={this.state.data["Undergraduate Students"]}
              value="25"
              invert
            >
              Total UG Students
            </Widget04>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget04
              icon="icon-people"
              color="info"
              header={this.state.data["Locale"]}
              value="0"
            >
              Locale
            </Widget04>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <Widget04
              icon="icon-people"
              color="info"
              header={this.state.data["Institute URL"]}
              value="0"
            >
              Website URL
            </Widget04>
          </Col>

        </Row>

              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xl="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Cost{" "}
              </CardHeader>
              <CardBody>

        {/* Stuff for displaying Bar charts etc */}
        <Row>
          <Col xs="12" sm="6" lg="4">
            <Card>
              <CardHeader>Average Annual Cost by family income group</CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Bar
                    redraw="true"
                    ref={this.chartReference}
                    data={this.bar}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Widget04
                icon="icon-people"
                color="info"
                header={this.state.data["Average Annual Cost"]}
                value="0"
            >
              Average Annual cost
            </Widget04>
          </Col>

        </Row>

      </CardBody>
      </Card>
      </Col>
      </Row>

        {/* Financial Aid/ Debt */}
        <Row>
          <Col xl="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Financial Aid/Debt{" "}
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="6" lg="4">
                    <Card>
                      <CardHeader>
                        Students Paying Down Their debts
                      </CardHeader>
                      <CardBody>
                        <div className="chart-wrapper">
                          <Pie
                              redraw="true"
                              ref={this.studentPayingDebtsReference}
                              data={this.studentPayingDebts}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="12" sm="6" lg="3">
                    <Widget04
                        icon="icon-people"
                        color="info"
                        header={this.state.data["Average Annual Cost"]}
                        value="0"
                    >
                      Average Annual cost
                    </Widget04>
                  </Col>
                  <Col xs="12" sm="6" lg="3">
                    <Widget04
                        icon="icon-people"
                        color="info"
                        header={this.state.data["Typical Total Debt ($)"]}
                        value="0"
                    >Typical total debt
                    </Widget04>
                  </Col>
                  <Col xs="12" sm="6" lg="3">
                    <Widget04
                        icon="icon-people"
                        color="info"
                        header={this.state.data["Typical Monthly Loan Payment ($/month)"]}
                        value="0"
                    >Typical Monthly loan Payment
                    </Widget04>
                  </Col>
                  <Col xs="12" sm="6" lg="4">
                    <Card>
                      <CardHeader>
                        Students receiving federal loans
                      </CardHeader>
                      <CardBody>
                        <div className="chart-wrapper">
                          <Pie
                              redraw="true"
                              ref={this.stuRecFedLoansReference}
                              data={this.stuRecFedLoans}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* Graduation and Retention*/}
        <Row>
          <Col xl="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Graduation rate{" "}
              </CardHeader>
              <CardBody>
                <Row>

                  <Col xs="12" sm="6" lg="4">
                    <Card>
                      <CardHeader>
                        %Earning
                      </CardHeader>
                      <CardBody>
                        <div className="chart-wrapper">
                          <Pie
                              redraw="true"
                              ref={this.gradRateReference}
                              data={this.gradRate}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col xs="12" sm="6" lg="4">
                    <Card>
                      <CardHeader>
                        First-time, FULL TIME student retention
                      </CardHeader>
                      <CardBody>
                        <div className="chart-wrapper">
                          <Pie
                              redraw="true"
                              ref={this.fulltimeRetentionReference}
                              data={this.fulltimeRetention}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col xs="12" sm="6" lg="4">
                    <Card>
                      <CardHeader>
                        First-time, PART TIME student retention
                      </CardHeader>
                      <CardBody>
                        <div className="chart-wrapper">
                          <Pie
                              redraw="true"
                              ref={this.parttimeRetentionReference}
                              data={this.parttimeRetention}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* Earnings After School */}
        <Row>
          <Col xl="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Earnings After School{" "}
              </CardHeader>
              <CardBody>
                <Row>

                  <Col xs="12" sm="6" lg="4">
                    <Card>
                      <CardHeader>
                        % earnings above High School Grad
                      </CardHeader>
                      <CardBody>
                        <div className="chart-wrapper">
                          <Pie
                              redraw="true"
                              ref={this.EarningsReference }
                              data={this.Earnings}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col xs="12" sm="6" lg="3">
                    <Widget04
                        icon="icon-people"
                        color="info"
                        header={this.state.data["﻿National Average - Salary After Attending"]}
                        value="0"
                    >
                      Salary after attending
                    </Widget04>
                  </Col>

                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* Student Profile */}
        <Row>
          <Col xl="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Student Profile{" "}
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="6" lg="4">
                    <Card>
                      <CardHeader>
                        Fulltime/Part time
                      </CardHeader>
                      <CardBody>
                        <div className="chart-wrapper">
                          <Pie
                              redraw="true"
                              ref={this.fullPartPieReference}
                              data={this.fullPartPie}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col xs="12" sm="6" lg="16">
                    <Card>
                      <CardHeader>
                        Enrollment % distribution – Race/Ethnicity
                      </CardHeader>
                      <CardBody>
                        <div className="chart-wrapper">
                          <Pie
                            redraw="true"
                            ref={this.ethnicityReference}
                            data={this.enthinicityPie}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="12" sm="6" lg="4">
                    <Card>
                      <CardHeader>
                        Socia Economic Diversity (% of Student Receiving Pell
                        Grant)
                      </CardHeader>
                      <CardBody>
                        <div className="chart-wrapper">
                          <Pie
                            data={this.socioEconomicPie}
                            redraw="true"
                            ref={this.socioEconomicPieReference}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col xs="12" sm="6" lg="4">
                    <Card>
                      <CardHeader>SAT Scores</CardHeader>
                      <CardBody>
                        <div className="chart-wrapper">
                          <Bar
                            redraw="true"
                            ref={this.satScoresBarReference}
                            data={this.satScoresBar}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xl="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Graduation Academic Program{" "}
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12" sm="24" lg="40">
                    <Card>
                      <CardHeader>
                        Percent Degrees Awarded By Programs
                      </CardHeader>
                      <CardBody>
                        <div className="chart-wrapper">
                          <Pie
                              redraw="true"
                              ref={this.pecentdegreeForProgReference}
                              data={this.pecentdegreeForProg}
                          />
                        </div>
                      </CardBody>
                    </Card>
                  </Col>




                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UniversityView;
