import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'; 
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
  {
    label: 'ATrial 2',
    imgPath:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0d1bbf74238911.5c27b97c0d846.png',
  },
  {
    label: 'Another one',
    imgPath:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19a46574238911.5c27b97c0d2c1.png',
  },
  {
    label: 'Third one',
    imgPath:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/13007a74238911.5c27b97c0d0b9.png',
  },
  {
    label: 'Fourth one',
    imgPath:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/55a08c74238911.5c27b97c0dffb.png',
  },
  {
    label: 'Fifth one',
    imgPath:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/75fcbf74238911.5c27b97c0ca4a.png',
  },
];

const styles = theme => ({
  root: {
    maxWidth: "100%",
    background: 'white',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: "100%",
    paddingLeft: theme.spacing.unit * 4,
    background: 'white)',
  },
  img: {
    height: "auto",
    maxWidth: "100%",
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
  mobileStepper: {
    background: 'white',
  },
});

class TextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        <img
          className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}
        />
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

TextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TextMobileStepper);
