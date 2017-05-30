import React, {Component} from 'react'

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTime: '25',
      totTime: 1500000,
      time: 1500000,
      started: false,
      paused: false,
      numConnected: 1
    }

    // this.timerChange = this.timerChange.bind(this)
  }

  // componentDidMount() {
  // }

  render() {
    return (
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h5 className="display-4">{this.props.data.name}</h5>
            &nbsp;
            {this.props.data.link && (
              <a href={this.props.data.link}>
                <i className="fa fa-external-link fa-2x" aria-hidden="true"></i>
              </a>
            )}
            &nbsp;
            &nbsp;
            {this.props.data.source && (
              <a href={this.props.data.source}>
                <i className="fa fa-github fa-2x" aria-hidden="true"></i>
              </a>
            )}
          <br/>
          <br/>
          {this.props.data.description && (
            <p className="lead"> {this.props.data.description} </p>
          )}
          {this.props.data.footer && (
            <p> {this.props.data.footer} </p>
          )}
        </div>
      </div>
    );
  }
};

export default Project;
