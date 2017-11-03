import { Component, Prop } from "@stencil/core";
import { addStyles } from "../../helpers";

@Component({
  tag: 'ole-section',
  styleUrl: 'section.sass',
  scoped: true
})
export class OleSection {

  @Prop() size: string

  render() {
    return (
      <section class={addStyles('section', [this.size])}>
        <slot/>
      </section>
    )
  }
}
