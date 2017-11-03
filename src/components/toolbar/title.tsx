import { Component } from '@stencil/core'

@Component({
  tag: 'ole-toolbar-title',
  styleUrl: 'toolbar.scss',
  shadow: true,
})
export class Title {
  render() {
    return (
      <span class="mdc-toolbar__title">
        <slot />
      </span>
    )
  }
}
