import React, {Component} from 'react'
import Project from './Project';
import ProjectCollection from './ProjectCollection';

const projects = [
  {
    name: "Shareable Pomodoro Timer",
    link: "https://tomatoshare.herokuapp.com",
    source: "https://github.com/donghyun208/tomatoshare",
    description: "Webapp that allows multiple people to interact with and view a shared timer",
    footer: "JavaScript(ES6), ReactJS, Node.js, Socket.io"
  },
  {
    name : "Quantum Mechanics Visualization",
    link: "http://donghyun208.github.io/qm_wavefunctions/#/demo/box",
    source: "https://github.com/donghyun208/qm_wavefunctions",
    description: "Teaching demos for Physical Chemistry (Chem 120) at UC Berkeley (2014-2016): Website with visualizations that demonstrate various concepts in quantum mechanics – Particle-in-a-box, Harmonic Oscillator, Particle-on-a-Ring, superposition principle, time-evolution, Huckel Theory, degeneracy.",
    footer: "AngularJS 1.0, Bootstrap"
  },
  {
    name : "Resistance Game Mobile App",
    link: "https://resistancegame.herokuapp.com",
    source: "https://github.com/donghyun208/resistance",
    description: "Webapp implementation of the party game “Resistance”. Game involves hidden identities, and anonymous voting",
    footer: "MongoDB, Express, AngularJS 1.0, Node.js, Socket.io, d3.js"
  },
  {
    name : "Mafia Game Role Distributor",
    link: "https://mafia-roles.herokuapp.com",
    source: "https://github.com/donghyun208/mafia-roles",
    description: "Mobile App that faciliates the setup to a game of Mafia - pass the phone around as the website notifies each player of their randomly chosen identity (and also reveals the identity of other mafia if needed).",
    footer: "Node.js"
  }
]


class Main extends Component {
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
      <div className='col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
        <p style={{fontSize: '45px'}}>
          Projects
        </p>
        <ProjectCollection>
          <Project data={projects[0]}></Project>
          <Project data={projects[1]}></Project>
          <Project data={projects[2]}></Project>
        </ProjectCollection>
      </div>
    );
  }
};

export default Main;
