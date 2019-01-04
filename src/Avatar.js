import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
  avatar: {
    margin: 10,
    padding: "2em",
  },
  bigAvatar: {
    margin: "1em",
    width: "12em",
    height:"12em",
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="flex-end" alignItems="center">
      <Avatar alt="Remy Sharp" src={require('./Avatar.jpg')} className={classes.bigAvatar} />
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);