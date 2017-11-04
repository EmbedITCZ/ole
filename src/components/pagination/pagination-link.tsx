import { Component, Prop } from '@stencil/core'
import { addStyles, cleanAttributes } from '../../helpers'

@Component({
  tag: 'ole-pagination-link',
  styleUrl: 'pagination.scss',
  scoped: true,
})
export class OlePaginationLink {
  @Prop() href: string
  @Prop() label: string
  @Prop() current: boolean

  render() {
    const modifiers = [this.current ? 'current' : undefined]

    const linkAttributes = cleanAttributes({
      href: this.href,
      'aria-label': this.label,
    })

    return (
      <a class={addStyles('pagination-link', modifiers)} {...linkAttributes}>
        <slot />
      </a>
    )
  }
}
