import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { LimitedBadges } from '../../../../components';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
    display: 'block'
  },
  alone: {
    position: 'relative',
    margin: 20
  },
  field: {
    margin: '10px',
    position: 'relative'
  },
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: `0 ${theme.spacing(2)}px`,
  },
  autoscale: {
    '& span': {
      width: 'auto',
      padding: 2
    }
  },
  badge: {
    top: 1,
    right: -15,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
});

function CommonBadges(props) {
  const { classes } = props;
  return (
    <Fragment>
      <Grid
        container
        alignItems="flex-start"
        justify="flex-start"
        direction="row"
        spacing={2}
      >
        <Grid
          item
          md={4}
        >
          <Typography variant="button" className={classes.divider}>Icon Badges</Typography>
          <Grid
            container
            alignItems="flex-start"
            justify="flex-start"
            direction="row"
          >
            <div className={classes.field}>
              <Badge className={classes.margin} badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </div>
            <div className={classes.field}>
              <IconButton>
                <Badge badgeContent={10} color="primary">
                  <MailIcon />
                </Badge>
              </IconButton>
            </div>
            <div className={classes.field}>
              <LimitedBadges className={classes.margin} value={300} limit={99} color="secondary">
                <MailIcon />
              </LimitedBadges>
            </div>
            <div className={classNames(classes.padding, classes.autoscale)}>
              <IconButton>
                <LimitedBadges className={classes.margin} value={3000} limit={999} color="primary">
                  <MailIcon />
                </LimitedBadges>
              </IconButton>
            </div>
            <div>
              <IconButton aria-label="Cart">
                <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          md={7}
        >
          <Typography variant="button" className={classes.divider}>Tab Badges</Typography>
          <AppBar position="static">
            <Tabs value={0}>
              <Tab
                label={(
                  <Badge className={classes.padding} color="secondary" badgeContent={4}>
                    Item One
                  </Badge>
                )}
              />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
        </Grid>
      </Grid>
    </Fragment>
  );
}

CommonBadges.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommonBadges);
