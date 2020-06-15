import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './MenuList.scss';

export default ({onClick, menuList}) => {
  return (
    <List className="menu-list">
      { menuList.map((text) => (
        <ListItem className="menu-list-item" name={text} onClick={ (e) => onClick(e, text) } key={text} button>
          <ListItemText primary={text} />
        </ListItem>
      )) }
    </List>
  )
}