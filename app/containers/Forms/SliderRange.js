import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'dan-components';
import { SliderInput, AdvanceRange } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

function SliderRange() {
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
      <PapperBlock title="Slider Input" overflowX icon="ion-ios-options-outline" desc="Sliders allow users to make selections from a range of values.">
        <div>
          <SliderInput />
          <SourceReader componentName={docSrc + 'SliderInput.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title="Advance Slider Input" overflowX icon="ion-ios-options-outline" desc="This some advanced examples using slider">
        <div>
          <AdvanceRange />
          <SourceReader componentName={docSrc + 'AdvanceRange.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

export default withStyles(styles)(SliderRange);
