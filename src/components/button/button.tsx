import { Component } from '@stencil/core'

@Component({
  tag: 'ole-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class MdButton {
  render() {
    return (
      <button class="button">
        <slot />
      </button>
    )
  }
}
