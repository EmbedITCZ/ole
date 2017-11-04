import { Component } from "@stencil/core";

@Component({
  tag: 'ole-pagination-list',
  styleUrl: 'pagination.sass',
  scoped: true
})
export class OlePaginationList {
  render() {
    return (
      <nav class="pagination" role="navigation" aria-label="pagination">
        <slot/>
      </nav>
    )
  }
}
