import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'ole-columns',
  styleUrl: 'columns.sass',
  scoped: true
})
export class OleColumns {

  @Prop() size: string

  render() {
    return (
      <div class="columns">
        <slot/>
      </div>
    )
  }
}
