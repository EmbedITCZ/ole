import { Component } from '@stencil/core'
// import { MDCToolbar, MDCToolbarFoundation } from '@material/toolbar'

@Component({
  tag: 'ole-toolbar',
  styleUrl: 'toolbar.scss',
  shadow: true,
})
export class Toolbar {
  render() {
    return (
      <header class="mdc-toolbar">
        <div class="mdc-toolbar__row">
          <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
            <slot name="start" />
          </section>
          <section class="mdc-toolbar__section">
            <slot name="center" />
          </section>
          <section class="mdc-toolbar__section mdc-toolbar__section--align-end">
            <slot name="end" />
          </section>
        </div>
      </header>
    )
  }

  componentDidLoad() {}
}
