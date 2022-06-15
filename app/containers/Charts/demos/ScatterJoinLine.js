import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import ThemePallete from 'dan-api/palette/themePalette';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  CartesianAxis,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { data8, data9 } from './sampleData';
import styles from './fluidChart-jss';

const theme = createMuiTheme(ThemePallete.blueTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
});

function ScatterJoinLine(props) {
  const { classes } = props;
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer width={800} height="100%">
        <ScatterChart
          width={800}
          height={450}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <CartesianAxis vertical={false} />
          <XAxis dataKey="x" type="number" name="stature" unit="cm" />
          <YAxis
            axisLine={false}
            tickSize={3}
            tickLine={false}
            tick={{ stroke: 'none' }}
            dataKey="y"
            type="number"
            name="weight"
            unit="kg"
          />
          <ZAxis range={[100]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={data8} fillOpacity="0.8" fill={color.primary} line shape="cross" />
          <Scatter name="B school" data={data9} fillOpacity="0.8" fill={color.secondary} line shape="diamond" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

ScatterJoinLine.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScatterJoinLine);
