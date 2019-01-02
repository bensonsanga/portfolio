import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from './Avatar.js';
import 'tachyons';
import './header.css';
import './App.css';

const styles = {
  card: {
    color: 'black',
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  head:{
    color: 'white',
    padding: '40px',
    fontSize: '100px'
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <div className={classes.card}  class="flex justify-between">
        <div  class="animated fadeInUp slow">
          <h1 className={classes.head}>Benson Sanga</h1>
          <div class="typewriter">
            <h1>Hello world. Amature Architect here</h1>
          </div>
        </div>
        
        <div  class="animated fadeInUp fast">
          <Avatar />
        </div>
      </div>

    </div>
    
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);