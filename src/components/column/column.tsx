import { Component, Prop } from "@stencil/core";

@Component({
  tag: 'ole-column',
  styleUrl: 'column.sass',
  scoped: true
})
export class OleColumn {

  @Prop() size: string

  render() {
    return (
      <div class="column">
        <slot/>
      </div>
    )
  }
}
