import { Component, State } from '@stencil/core'

import { classNames } from '../../uitls/css'

const ACTIVE_CLASS = 'is-active'

@Component({
  tag: 'ole-navbar',
  styleUrl: 'navbar.scss',
  scoped: true,
})
export class Navbar {
  @State() active = false

  private handleMenuToggle = () => {
    this.active = !this.active
  }

  render() {
    const cx = classNames({ [ACTIVE_CLASS]: this.active })

    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <slot />
          {NavbarHamburger({ onClick: this.handleMenuToggle, className: cx })}
        </div>
        <div class={`navbar-menu ${cx}`}>
          <div class="navbar-start">
            <slot name="navbar-start" />
          </div>
          <div class="navbar-end">
            <slot name="navbar-end" />
          </div>
        </div>
      </nav>
    )
  }
}

const NavbarHamburger = ({ onClick, className }: any) => (
  <div class={`button navbar-burger ${className}`} onClick={onClick}>
    <span />
    <span />
    <span />
  </div>
)
