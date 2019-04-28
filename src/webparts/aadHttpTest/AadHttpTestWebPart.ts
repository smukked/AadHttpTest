import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import AadHttpTest from './components/AadHttpTest';
import { IAadHttpTestProps } from './components/IAadHttpTestProps';

export interface IAadHttpTestWebPartProps {
  description: string;
}

export default class AadHttpTestWebPart extends BaseClientSideWebPart<IAadHttpTestWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IAadHttpTestProps > = React.createElement(
      AadHttpTest,
      {
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }
}
