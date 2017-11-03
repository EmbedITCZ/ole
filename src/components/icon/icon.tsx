import { Component, Prop } from '@stencil/core'

import { classNames } from '../../uitls/css'

@Component({
  tag: 'ole-icon',
  styleUrl: '../toolbar/toolbar.scss',
  styles: `
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }

  `,
  shadow: true,
})
export class Icon {
  @Prop() type: string
  @Prop() inToolbar = false
  @Prop() inButton = false
  render() {
    const cx = classNames('material-icons', {
      'mdc-toolbar__menu-icon': this.inToolbar,
      'mdc-button__icon': this.inToolbar,
    })

    return <i class={cx}>{this.type}</i>
  }
}
