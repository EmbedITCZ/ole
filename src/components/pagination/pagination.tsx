import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'ole-pagination',
  styleUrl: 'pagination.sass',
  scoped: true
})
export class OlePagination {

  @Prop() size: string

  render() {
    return (
      <nav class="pagination" role="navigation" aria-label="pagination">
        <slot/>
      </nav>
    )
  }
}
