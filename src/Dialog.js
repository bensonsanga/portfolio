import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Stepper from './Stepper.js'; 
import { projects } from './projects.js';

const styles = theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing.unit * 2,
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing.unit,
  },
  card: {
    maxWidth: 345,
    background: "#262626",
  },
  media: {
    height: 250,
  },
  text:{
    color: 'white',
  }
});

class MaxWidthDialog extends React.Component {
  state = {
    open: false,
    fullWidth: true,
    maxWidth: 'xl',
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleMaxWidthChange = event => {
    this.setState({ maxWidth: event.target.value });
  };

  handleFullWidthChange = event => {
    this.setState({ fullWidth: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { name, cover, description, id, images} = this.props;

    return (
      <React.Fragment>
        <div class="pa2" onClick={this.handleClickOpen}>
              <Card data-aos="fade-up" className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={`${cover}`}
                    title="Project"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                      {name}
                    </Typography>
                    <Typography component="p" className={classes.text}>
                      {description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Modal />
              </Card>
            </div>
        <Dialog
          fullWidth={this.state.fullWidth}
          maxWidth={this.state.maxWidth}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">{name}</DialogTitle>
          <DialogContent>
            <Stepper images= {images}/>
            <form className={classes.form} noValidate>
              <FormControlLabel
                className={classes.formControlLabel}
                control={
                  <Switch
                    checked={this.state.fullWidth}
                    onChange={this.handleFullWidthChange}
                    value="fullWidth"
                  />
                }
                label="Full width"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

MaxWidthDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaxWidthDialog);
