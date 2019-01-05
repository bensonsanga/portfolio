import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import 'tachyons';

const styles = {
  bigAvatar: {
    height: "12em",
    width: "12em",
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div className="avatarSize">
      <Grid container justify="flex-end" alignItems="center">
        <div class="pl3">
          <Avatar alt="Benson" src={require('./Avatar.jpg')} className={classes.bigAvatar} />
        </div>
      </Grid>
    </div>
    
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);