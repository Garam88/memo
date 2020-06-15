import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './index.scss'

class MemoWrite extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <div id="write">
        <span className="title">글쓰기</span>
        <div className="form-area">
          <div className="row">
            <TextField className="input" placeholder="제목"/>
          </div>
          <ReactQuill 
            className="text-area"
            value={this.state.text}
            onChange={this.handleChange} />
            <div className="row">
              <Button className="button save" variant="contained" disableElevation>저장</Button>
            </div>
        </div>
        
      </div>
    )
  }
}

export default MemoWrite;