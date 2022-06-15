import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import imgApi from 'dan-api/images/photos';
import avatarApi from 'dan-api/images/avatars';
import { ProfileCard, PostCard } from 'dan-components';

const styles = theme => ({
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
});

function StandardCard(props) {
  const { classes } = props;
  return (
    <Grid
      container
      alignItems="flex-start"
      justify="center"
      direction="row"
      spacing={2}
    >
      <Grid item md={4}>
        <Typography variant="button" className={classes.divider}>Profile Card</Typography>
        <ProfileCard
          cover={imgApi[42]}
          avatar={avatarApi[6]}
          name="John Doe"
          title="UX designer"
          connection={10}
          btnText="Connect"
          isVerified
        />
      </Grid>
      <Grid item md={4}>
        <Typography variant="button" className={classes.divider}>Post Card</Typography>
        <PostCard
          liked={1}
          shared={20}
          commented={15}
          date="Sept, 25 2018"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum."
          image={imgApi[11]}
          avatar={avatarApi[10]}
          name="Jim Doe"
        />
      </Grid>
      <Grid item md={4}>
        <Typography variant="button" className={classes.divider}>Post Card (Without Image)</Typography>
        <PostCard
          liked={90}
          shared={10}
          commented={22}
          date="Sept, 15 2018"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum."
          avatar={avatarApi[2]}
          name="Jane Doe"
        />
      </Grid>
    </Grid>
  );
}

StandardCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StandardCard);
