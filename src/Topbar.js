import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ContactMail from '@material-ui/icons/ContactMail';
import Work from '@material-ui/icons/Work';
import animateScrollTo from 'animated-scroll-to';
import 'tachyons';

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
    value: '01',
  };
  render() {
    const { classes } = this.props;

    return (
      <div className="w-60 w-100-l w-90-m">
        <BottomNavigation className={classes.root}>
          <a href="#page-wrap"><BottomNavigationAction label="Home" className={classes.colors} icon={<HomeIcon />} /></a>
          <a href="#charts"><BottomNavigationAction label="Skills" className={classes.colors} icon={<AssessmentIcon />} /></a>
          <a href="#projects"><BottomNavigationAction label="Contact" className={classes.colors} icon={<ContactMail />} /></a>
          <a href="#end"><BottomNavigationAction label="Projects" className={classes.colors} icon={<Work />} /></a>
        </BottomNavigation>
      </div>

    );
  }
}

Topbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Topbar);