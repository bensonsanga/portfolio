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
    height: "12em",
    width: "12em",
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <Grid container justify="flex-end" alignItems="center">
      <div class="f3 f-subheadline-m f-headline-l white pl5">
        <Avatar alt="Benson" src={require('./Avatar.jpg')} className={classes.bigAvatar} />
      </div>
      
    </Grid>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);