import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'PnpSpCrudWebPartStrings';
import PnpSpCrud from './components/PnpSpCrud';
import { IPnpSpCrudProps } from './components/IPnpSpCrudProps';
import { sp } from '@pnp/sp';
import { SPComponentLoader } from '@microsoft/sp-loader';
require('../../../node_modules/react-block-ui/dist/style.css');

export interface IPnpSpCrudWebPartProps {
  description: string;
}

export default class PnpSpCrudWebPart extends BaseClientSideWebPart<IPnpSpCrudWebPartProps> {

  protected onInit(): Promise<void> {
    sp.setup({
      spfxContext: this.context
    });
    SPComponentLoader.loadCss('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
    SPComponentLoader.loadCss('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    return super.onInit();
  }

  public render(): void {
    const element: React.ReactElement<IPnpSpCrudProps> = React.createElement(
      PnpSpCrud,
      {
        description: this.properties.description
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

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
