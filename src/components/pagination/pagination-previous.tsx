import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'ole-pagination-previous',
  styleUrl: 'pagination.sass',
  scoped: true
})
export class OlePaginationPrevious {

  @Prop() href: string

  render() {
    return (
      <a href={this.href} class="pagination-previous"><slot/></a>
    )
  }
}
