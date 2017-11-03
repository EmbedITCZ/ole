import { Component, Prop } from '@stencil/core'

import { classNames } from '../../uitls/css'

const faSizeMap = {
  large: 'lg',
  medium: 'md',
  small: 'sm',
}

@Component({
  tag: 'ole-icon',
  styleUrl: 'icon.scss',
  scoped: true,
})
export class Icon {
  @Prop() type: string
  @Prop() size: 'large' | 'small' | 'medium'
  render() {
    const iconType = `fa-${this.type}`
    const iconTypeSize = `fa-${faSizeMap[this.size]}`
    const iconSize = `is-${this.size}`

    const iconCx = classNames('icon', {
      [iconSize]: this.size,
    } as any)

    const fontCx = classNames('fa', {
      [iconType]: this.type,
      [iconTypeSize]: this.size,
    } as any)

    return (
      <span class={iconCx}>
        <i class={fontCx} />
      </span>
    )
  }
}
