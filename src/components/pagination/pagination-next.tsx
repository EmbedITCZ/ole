import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'ole-pagination-next',
  styleUrl: 'pagination.scss',
  scoped: true,
})
export class OlePaginationNext {
  @Prop() href: string

  render() {
    return (
      <a href={this.href} class="pagination-next">
        <slot />
      </a>
    )
  }
}
