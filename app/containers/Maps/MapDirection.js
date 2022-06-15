import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import { Direction } from './demos';
import Info from './Info';

function MapDirection() {
  const title = brand.name + ' - Map';
  const description = brand.desc;
  const docSrc = 'containers/Maps/demos/';
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
      <PapperBlock overflowX title="Map with Direction" icon="ion-ios-navigate-outline" desc="Rendering map with default configuration">
        <Info />
        <Direction />
        <SourceReader componentName={docSrc + 'Direction.js'} />
      </PapperBlock>
    </div>
  );
}

export default MapDirection;
