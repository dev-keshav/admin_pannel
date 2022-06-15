import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  ListBasic,
  ListMenu,
  PinnedList,
  ListControl,
  ListInteractive
} from './demos';

function List() {
  const title = brand.name + ' - UI Elements';
  const description = brand.desc;
  const docSrc = 'containers/UiElements/demos/List/';
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
      <PapperBlock title="List Basic" icon="ion-ios-menu-outline" desc="The divider renders as a <hr> by default. You can save rendering this DOM element by using the divider property on the ListItem component.">
        <div>
          <ListBasic />
          <SourceReader componentName={docSrc + 'ListBasic.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title="List Menu" icon="ion-ios-list" desc="Lists are made up of a continuous column of rows. Each row contains a tile. Primary actions fill the tile, and supplemental actions are represented by icons and text.">
        <div>
          <ListMenu />
          <SourceReader componentName={docSrc + 'ListMenu.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title="Pinned Subheader List" icon="ion-ios-list-box-outline" desc="Upon scrolling, subheaders remain pinned to the top of the screen until pushed off screen by the next subheader.">
        <div>
          <PinnedList />
          <SourceReader componentName={docSrc + 'PinnedList.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title="List Controls" icon="ion-ios-list-box" desc="The checkbox is the primary action and the state indicator for the list item. The comment button is a secondary action and a separate target.">
        <div>
          <ListControl />
          <SourceReader componentName={docSrc + 'ListControl.js'} />
        </div>
      </PapperBlock>
      <PapperBlock title="Interactive" icon="ion-ios-options-outline" desc="Below is an interactive demo that lets you explore the visual results of the different settings:">
        <div>
          <ListInteractive />
          <SourceReader componentName={docSrc + 'ListInteractive.js'} />
        </div>
      </PapperBlock>
    </div>
  );
}

export default List;
