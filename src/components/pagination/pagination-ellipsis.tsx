import { Component } from "@stencil/core";

@Component({
  tag: 'ole-pagination-ellipsis',
  styleUrl: 'pagination.sass',
  scoped: true
})
export class OlePaginationEllipsis {
  render() {
    return (
      <span class="pagination-ellipsis">&hellip;</span>
    )
  }
}
