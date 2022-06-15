import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ContactWidget } from 'dan-components';

const styles = {
  miniWrap: {
    margin: '0 auto',
    maxWidth: 480
  }
};

function ContactsMini(props) {
  const { classes } = props;
  return (
    <div className={classes.miniWrap}>
      <ContactWidget />
    </div>
  );
}

ContactsMini.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactsMini);
