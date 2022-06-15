import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'dan-components';
import { Checkboxes, RadioButton } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

function DateTime() {
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
      <PapperBlock title="Checkbox" icon="ion-ios-checkbox-outline" desc="Checkboxes allow the user to select multiple options from a set. If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.">
        <div>
          <Checkboxes />
          <SourceReader componentName={docSrc + 'Checkboxes.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title="Radio Button" icon="ion-ios-radio-button-on" desc="Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side; otherwise, consider a dropdown, which uses less space than displaying all options.">
        <div>
          <RadioButton />
          <SourceReader componentName={docSrc + 'RadioButton.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

export default withStyles(styles)(DateTime);
