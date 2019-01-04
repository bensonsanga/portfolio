import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div>
      <a href="https://mailchi.mp/7609e33669ef/bensonadnewsletter">
              <Fab color="white" aria-label="Add" className={classes.fab}>
                <AddIcon />
              </Fab>
              <Fab variant="extended" aria-label="Delete" className={classes.fab}>
                <NavigationIcon className={classes.extendedIcon} />
                Subscribe
              </Fab>
            </a>
      
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
