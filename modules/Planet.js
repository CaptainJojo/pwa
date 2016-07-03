import React from 'react'

export default React.createClass({
  render() {
    let imgSrc = '/' +  this.props.params.name + '.png';

    return (
      <div>
        <h2>{this.props.params.name}</h2>
        <img src={imgSrc} />
      </div>
    )
  }
})
