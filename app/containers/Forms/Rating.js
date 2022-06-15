import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'dan-components';
import { RatingNormal, RatingCustom } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

function Rating() {
  const title = brand.name + ' - Form';
  const description = brand.desc;
  const docSrc = 'containers/Forms/demos/';
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
      <PapperBlock title="Ratting" icon="ion-ios-star-outline" desc="Basic React component for star (or any other icon based) rating elements">
        <div>
          <RatingNormal />
          <SourceReader componentName={docSrc + 'RatingNormal.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title="Ratting Custom" icon="ion-ios-thumbs-up-outline" desc="">
        <div>
          <RatingCustom />
          <SourceReader componentName={docSrc + 'RatingNormal.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

export default withStyles(styles)(Rating);
