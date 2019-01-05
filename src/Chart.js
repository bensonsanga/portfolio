import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './chart.css';
import 'tachyons';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  text:{
    color: "white",
  },
  lightTooltip: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.text.white,
    boxShadow: theme.shadows[1],
    fontSize: 15,
  },
});

function Chart(props) {
  const { classes } = props;
  return (
    <div className="flex flex-wrap pl5 justify-around">
        <Tooltip classes={{ tooltip: classes.lightTooltip }} title="Proficient in Autodesk Revit, Navis works, Dynamo and AutoCad " 
        aria-label="Autodedesk" placement="top"><section>
          <h2 className={classes.text}>Autodesk Suite</h2>
          <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width={200} height={200} xmlns="http://www.w3.org/2000/svg">
            <circle className="circle-chart__background" stroke="#efefef" strokeWidth={4} fill="#bfbfbf" cx="16.91549431" cy="16.91549431" r="8" />
            <circle className="circle-chart__circle" stroke="#1de954" strokeWidth={2} strokeDasharray="60,100" strokeLinecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="11" />
            <g className="circle-chart__info">
              <text className={classes.text} x="16.91549431" y="15.5" alignmentBaseline="central" textAnchor="middle" fontSize={5}>90%</text>
              <text className={classes.text} x="16.91549431" y="20.5" alignmentBaseline="central" textAnchor="middle" fontSize={2}>Pro</text>
            </g>
          </svg>
        </section></Tooltip>
        <Tooltip classes={{ tooltip: classes.lightTooltip }} title="Skilled in graphical respresentaion by using AfterEffects, Illustrator, Photoshop and Indesign Mainly." 
        aria-label="Adobe" placement="top"><section>
          <h2 className={classes.text}>Adobe Suite</h2>
          <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width={200} height={200} xmlns="http://www.w3.org/2000/svg">
            <circle className="circle-chart__background" stroke="#efefef" strokeWidth={4} fill="#bfbfbf" cx="16.91549431" cy="16.91549431" r="8" />
            <circle className="circle-chart__circle" stroke="#1de954" strokeWidth={2} strokeDasharray="45,100" strokeLinecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="11" />
            <g className="circle-chart__info">
              <text className={classes.text} x="16.91549431" y="15.5" alignmentBaseline="central" textAnchor="middle" fontSize={5}>60%</text>
              <text className={classes.text} x="16.91549431" y="20.5" alignmentBaseline="central" textAnchor="middle" fontSize={2}>Expert</text>
            </g>
          </svg>
        </section></Tooltip>
        <Tooltip classes={{ tooltip: classes.lightTooltip }} title="Problem solving by coding languages including C#, JavaScript, Python and Visual programming like Grasshopper and Espresso" 
        aria-label="Code" placement="top"><section>
          <h2 className={classes.text}>Coding</h2>
          <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width={200} height={200} xmlns="http://www.w3.org/2000/svg">
            <circle className="circle-chart__background" stroke="#efefef" strokeWidth={4} fill="#bfbfbf" cx="16.91549431" cy="16.91549431" r="8" />
            <circle className="circle-chart__circle" stroke="#1de954" strokeWidth={2} strokeDasharray="12,100" strokeLinecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="11" />
            <g className="circle-chart__info">
              <text className={classes.text} x="16.91549431" y="15.5" alignmentBaseline="central" textAnchor="middle" fontSize={5}>20%</text>
              <text className={classes.text} x="16.91549431" y="20.5" alignmentBaseline="central" textAnchor="middle" fontSize={2}>Good</text>
            </g>
          </svg>
        </section></Tooltip>
        <Tooltip classes={{ tooltip: classes.lightTooltip }} title="Reseasonabl well in technical drawing and perspective sketching. Also good at digital and traditional painting" 
        aria-label="Sketching" placement="top"><section>
          <h2 className={classes.text}>Hand Drawing</h2>
          <svg className="circle-chart" viewBox="0 0 33.83098862 33.83098862" width={200} height={200} xmlns="http://www.w3.org/2000/svg">
            <circle className="circle-chart__background" stroke="#efefef" strokeWidth={4} fill="#bfbfbf" cx="16.91549431" cy="16.91549431" r="8" />
            <circle className="circle-chart__circle" stroke="#1de954" strokeWidth={2} strokeDasharray="50,100" strokeLinecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="11" />
            <g className="circle-chart__info">
              <text className={classes.text} x="16.91549431" y="15.5" alignmentBaseline="central" textAnchor="middle" fontSize={5}>70%</text>
              <text className={classes.text} x="16.91549431" y="20.5" alignmentBaseline="central" textAnchor="middle" fontSize={2}>Good</text>
            </g>
          </svg>
        </section></Tooltip>
        
      </div>
  );
}

Chart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Chart);