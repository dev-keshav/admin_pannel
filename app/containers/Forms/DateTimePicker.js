import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'dan-components';
import { DateInput, TimeInput, DateTimeInput } from './demos';

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
      <PapperBlock title="Date Picker" icon="ion-ios-calendar-outline" desc="Date pickers use a dialog window to select a single date. The selected day is indicated by a filled circle. The current day is indicated by a different color and type weight.">
        <div>
          <DateInput />
          <SourceReader componentName={docSrc + 'DateInput.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title="Time Picker" icon="ion-ios-time-outline" desc="Time pickers use a dialog to select a single time (in the hours:minutes format). The selected time is indicated by the filled circle at the end of the clock hand.">
        <div>
          <TimeInput />
          <SourceReader componentName={docSrc + 'TimeInput.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title="Date &amp; Time Picker" icon="ion-ios-calendar-outline" desc="Its a combination of date & time picker and allows that uses the modal to select both date and time with one control.">
        <div>
          <DateTimeInput />
          <SourceReader componentName={docSrc + 'DateTimeInput.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

export default withStyles(styles)(DateTime);
