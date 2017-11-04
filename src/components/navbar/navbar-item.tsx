import { Component } from '@stencil/core'

@Component({
  tag: 'ole-navbar-item',
  styleUrl: 'navbar-item.scss',
  scoped: true,
  // host: {
  //   theme: 'navbar-item',
  // },
})
export class NavbarItem {
  render() {
    return (
      <div class="navbar-item">
        <slot />
      </div>
    )
  }
}
