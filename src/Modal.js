import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
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

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
            <div class="pa2" >
              <Card data-aos="fade-up" className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/91608064395233.5ad0a386665f4.jpg"
                    title="Project"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
                      Kindergarten
                    </Typography>
                    <Typography component="p" className={classes.text}>
                      Project uses structure to create architectural spaces and creates for chidren
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Modal />
              </Card>
            </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            
            <SimpleModalWrapped />
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
