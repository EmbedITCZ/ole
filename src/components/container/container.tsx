import { Component, Prop } from "@stencil/core";
import { addStyles } from "../../helpers";

@Component({
  tag: 'ole-container',
  styleUrl: 'container.sass',
  scoped: true
})
export class OleContainer {

  @Prop() type: string

  render() {
    return (
      <div class={addStyles('container', [this.type])}>
        <slot/>
      </div>
    )
  }
}
