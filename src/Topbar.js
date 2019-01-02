import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    width: '100%' ,
    height: '100px',
    background: 'transparent',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
  },
  colors:{
    color: 'white',
  }
};

class Topbar extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="Folder" value="folder" className={classes.colors} icon={<Icon>Home</Icon>} />
        <BottomNavigationAction label="Folder" value="folder" className={classes.colors} icon={<Icon>Projects</Icon>} />
        <BottomNavigationAction label="Folder" value="folder" className={classes.colors} icon={<Icon>Blog</Icon>} />
        <BottomNavigationAction label="Folder" value="folder" className={classes.colors} icon={<Icon>Extra</Icon>} />
      </BottomNavigation>
    );
  }
}

Topbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Topbar);