import React from 'react';

import './index.scss'

class MemoDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <div id="detail">
      </div>
    )
  }
}

export default MemoDetail;