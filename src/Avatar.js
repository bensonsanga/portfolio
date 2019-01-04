import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import 'tachyons';

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
    <Grid class="br-100 h5 w5 dib ba b--black-05 pa2" container justify="flex-end" alignItems="center">
      <Avatar alt="Benson" src={require('./Avatar.jpg')} className={classes.bigAvatar} />
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);