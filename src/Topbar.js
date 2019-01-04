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

  handleChange = (event, value) => {
    animateScrollTo({ value });
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction onClick={animateScrollTo(0)} label="Home" className={classes.colors}  value="01" icon={<HomeIcon />} />
        <BottomNavigationAction onClick={animateScrollTo(500)} label="Skills" className={classes.colors}  value="02" icon={<AssessmentIcon />} />
        <BottomNavigationAction onClick={animateScrollTo(1500)} label="Contact" className={classes.colors}  value="03" icon={<ContactMail />} />
        <BottomNavigationAction onClick={animateScrollTo(2000)} label="Projects" className={classes.colors}  value="04" icon={<Work />} />
      </BottomNavigation>
    );
  }
}

Topbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Topbar);