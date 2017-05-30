import React, {Component} from 'react'

class ProjectCollection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className=''>
        {this.props.children.map((child, i) => {
          return (
            <div key={i}>
              {child}
              {(i !== this.props.children.length - 1) && (<hr className="my-4"></hr>)}
            </div>
          )
        })}
      </div>
    );
  }
};

export default ProjectCollection;
