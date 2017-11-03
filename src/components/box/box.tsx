import { Component } from "@stencil/core";

@Component({
  tag: 'ole-box',
  styleUrl: 'box.sass',
  shadow: true
})
export class OleBox {
  render() {
    return (
      <div class="box">
        <article class="media">
          <div class="media-left">
            <slot name="left"/>
          </div>
          <div class="media-content">
            <div class="content">
              <slot/>
            </div>
          </div>
        </article>
      </div>
    )
  }
}
