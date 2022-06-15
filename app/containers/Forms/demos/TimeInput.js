import React, { Fragment, useState } from 'react';
import { TimePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  picker: {
    margin: `${theme.spacing(3)}px 5px`,
  }
});

function TimeInput(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const { classes } = props;
  return (
    <Fragment>
      <Grid
        container
        alignItems="flex-start"
        justify="space-around"
        direction="row"
        spacing={3}
      >
        <Grid
          item
          md={6}
          className={classes.demo}
        >
          <Typography variant="button" className={classes.divider}>Basic usage</Typography>
          <Typography className={classes.divider}>
            A time picker should adjusts to a user’s preferred time setting, i.e. the 12-hour or 24-hour format.
          </Typography>
          <div className={classes.picker}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <div className="picker">
                <TimePicker
                  label="12 hours"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
            </MuiPickersUtilsProvider>
          </div>

          <div className={classes.picker}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <TimePicker
                clearable
                ampm={false}
                label="24 hours"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </div>
        </Grid>
        <Grid
          item
          md={6}
          className={classes.demo}
        >
          <Typography variant="button" className={classes.divider}>Keyboard Input</Typography>
          <div className={classes.picker}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <KeyboardDatePicker
                label="Masked timepicker"
                mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
                placeholder="08:00 AM"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </div>
          <Typography variant="button" className={classes.divider}>Custom Icon</Typography>
          <div className={classes.picker}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <TimePicker
                label="Masked timepicker"
                mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
                placeholder="08:00 AM"
                value={selectedDate}
                onChange={handleDateChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Icon>access_time</Icon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}

TimeInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimeInput);
