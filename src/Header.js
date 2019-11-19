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
  pos: {
    marginBottom: 12,
  },
  head:{
    color: 'white',
    fontSize: '4em',
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <div  class="flex justify-around w-90 flex-wrap-reverse">
        <div  class="animated fadeInUp slow" >
          <h1  class="f1-m f-headline-l white pl3">Benson Sanga</h1>
        </div>
        <div class="animated fadeInUp fast">
          <Avatar />
        </div>

      </div>
      <div class="w-70 typewriter f9 f6-m f5-l pl3">
        <h1>Hello world. Amateur Architect....</h1>
      </div>
    </div>

  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);