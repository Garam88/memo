import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import MenuList from './components/MenuList'
import MemoWrite from './components/MemoWrite'
import MemoList from './components/MemoList'
import MemoDetail from './components/MemoDetail'


import './App.scss';

class App extends Component{

  constructor (props) {
    super(props);

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = {
      menuOpen: false
    }
  }

  menuList = ['All mail', 'Trash', 'Spam']

  showMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  onClickMenu = (event, item) => {
    console.log(item);
  }

  render () {
    return (
      <div id="app">
        <MenuIcon className="nav-icon" onClick={this.showMenu}/>
        <Drawer anchor="right" open={this.state.menuOpen} onClose={this.closeMenu}>
          <MenuList menuList={this.menuList} onClick={this.onClickMenu}/>
        </Drawer>
        <div id="content">
          <div>
              <Route exact path="/" component={MemoList}/>
              <Route exact path="/memo" component={MemoList}/>
              <Route exact path="/memo/:key" component={MemoDetail}/>
              <Route path="/write" component={MemoWrite}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
