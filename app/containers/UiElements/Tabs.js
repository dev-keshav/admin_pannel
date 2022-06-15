import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  SimpleTabs,
  LongTextTabs,
  FixedTabs,
  CenteredTabs,
  IconTabs,
  ScrollTabs,
  ScrollIconTabs,
  DisabledTab,
  CustomTabs,
  BottomNav
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

function Tabs(props) {
  const title = brand.name + ' - UI Elements';
  const description = brand.desc;
  const { classes } = props;
  const docSrc = 'containers/UiElements/demos/Tabs/';
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
      <div className={classes.root}>
        <PapperBlock title="Simple Tabs" icon="ion-md-folder-open" desc="A simple example with no frills.">
          <div>
            <SimpleTabs />
            <SourceReader componentName={docSrc + 'SimpleTabs.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Wrapped Labels" icon="ion-md-folder-open" desc="Long labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow and the text will not be visible.">
          <div>
            <LongTextTabs />
            <SourceReader componentName={docSrc + 'LongTextTabs.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Fixed Tabs" icon="ion-ios-folder-open-outline" desc="Fixed tabs should be used with a limited number of tabs and when consistent placement will aid muscle memory.">
          <div>
            <FixedTabs />
            <SourceReader componentName={docSrc + 'FixedTabs.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Centered" icon="ion-ios-folder-open-outline" desc="The centered property should be used for larger views.">
          <div>
            <CenteredTabs />
            <SourceReader componentName={docSrc + 'CenteredTabs.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Icon Tabs" icon="ion-ios-folder-open-outline" desc="Tab labels may be either all icons or all text.">
          <div>
            <IconTabs />
            <SourceReader componentName={docSrc + 'IconTabs.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Scrollable Tabs" icon="ion-ios-folder-open-outline" desc="Left and right scroll buttons will automatically be presented on desktop and hidden on mobile. (based on viewport width)">
          <div>
            <ScrollTabs />
            <SourceReader componentName={docSrc + 'ScrollTabs.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Scrollable Icon Tabs" icon="ion-ios-folder-open-outline" desc="">
          <div>
            <ScrollIconTabs />
            <SourceReader componentName={docSrc + 'ScrollIconTabs.js'} />
          </div>
        </PapperBlock>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <PapperBlock title="Disabled Tab" icon="ion-ios-folder-open-outline" desc="Tab may be disabled by setting disabled property.">
              <div>
                <DisabledTab />
                <SourceReader componentName={docSrc + 'DisabledTab.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6}>
            <PapperBlock title="Customized Tabs" icon="ion-ios-folder-open" desc="If you have been reading the overrides documentation page but you are not confident jumping in, here's an example of how you can change the main color of the Tabs.">
              <div>
                <CustomTabs />
                <SourceReader componentName={docSrc + 'CustomTabs.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
        <PapperBlock title="Bottom Navigation" desc="Bottom navigation bars make it easy to explore and switch between top-level views in a single tap.">
          <div>
            <BottomNav />
            <SourceReader componentName={docSrc + 'BottomNav.js'} />
          </div>
        </PapperBlock>
      </div>
    </div>
  );
}

Tabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tabs);
