import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'ole-navbar-item',
  styleUrl: 'navbar-item.scss',
  scoped: true,
  // host: {
  // theme: 'alert',
  // },
})
export class NavbarItem {
  @Prop() href: string
  render() {
    return (
      <a class="navbar-item" href={this.href}>
        <slot />
      </a>
    )
  }
}
