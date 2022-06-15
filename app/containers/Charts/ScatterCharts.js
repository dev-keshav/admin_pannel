import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  ScatterSimple,
  ScatterJoinLine,
  ScatterMultiple,
  ScatterCustom,
} from './demos';

function ScatterCharts() {
  const title = brand.name + ' - Chart';
  const description = brand.desc;
  const docSrc = 'containers/Charts/demos/';
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
      <PapperBlock title="Scatter Simple Chart" icon="ion-ios-analytics-outline" desc="" overflowX>
        <div>
          <ScatterSimple />
          <SourceReader componentName={docSrc + 'ScatterSimple.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title="Scatter Join Line Chart" icon="ion-ios-analytics-outline" desc="" overflowX>
        <div>
          <ScatterJoinLine />
          <SourceReader componentName={docSrc + 'ScatterJoinLine.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title="Scatter Multiple Chart" icon="ion-ios-analytics-outline" desc="" overflowX>
        <div>
          <ScatterMultiple />
          <SourceReader componentName={docSrc + 'ScatterMultiple.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title="Scatter Custom Icon Chart" icon="ion-ios-analytics-outline" desc="" overflowX>
        <div>
          <ScatterCustom />
          <SourceReader componentName={docSrc + 'ScatterCustom.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

export default ScatterCharts;
