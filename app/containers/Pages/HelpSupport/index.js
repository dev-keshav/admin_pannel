import React, { useState, useCallback } from 'react';
import { PropTypes } from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './helpSupport-jss';
import Qna from './Qna';
import ContactForm from './ContactForm';

function Settings(props) {
  const title = brand.name;
  const description = brand.desc;
  const { width } = props;
  const [valueForm, setValueForm] = useState([]);

  const showResult = useCallback((values) => {
    setTimeout(() => {
      setValueForm(values);
      alert(`You submitted:\n\n${valueForm}`);
    }, 500); // simulate server latency
  }, [valueForm]);

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <Grid container spacing={2} direction={isWidthUp('md', width) ? 'row' : 'column-reverse'}>
        <Grid item md={6} xs={12}>
          <Qna />
        </Grid>
        <Grid item md={6} xs={12}>
          <ContactForm onSubmit={(values) => showResult(values)} />
        </Grid>
      </Grid>
    </div>
  );
}

Settings.propTypes = {
  width: PropTypes.string.isRequired,
};

export default withStyles(styles)(withWidth()(Settings));
