import { Component } from '@stencil/core'

@Component({
  tag: 'ole-pagination-ellipsis',
  styleUrl: 'pagination.scss',
  scoped: true,
})
export class OlePaginationEllipsis {
  render() {
    return <span class="pagination-ellipsis">&hellip;</span>
  }
}
