import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'ole-pagination-next',
  styleUrl: 'pagination.sass',
  scoped: true
})
export class OlePaginationNext {

  @Prop() href: string

  render() {
    return (
      <a href={this.href} class="pagination-next"><slot/></a>
    )
  }
}
