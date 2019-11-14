import * as React from 'react';
import styles from './Pivot.module.scss';
import { IPivotProps } from './IPivotProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';

export default class Pivot1 extends React.Component<IPivotProps, {}> {
  public render(): React.ReactElement<IPivotProps> {
    return (
      <Pivot>
        <PivotItem
          headerText="My Files"
          headerButtonProps={{
            'data-order': 1,
            'data-title': 'My Files Title'
          }}
        >
          <Label >Pivot #1</Label>
        </PivotItem>
        <PivotItem headerText="Recent">
          <Label >Pivot #2</Label>
        </PivotItem>
        <PivotItem headerText="Shared with me">
          <Label >Pivot #3</Label>
        </PivotItem>
    </Pivot>
    );
  }
}
