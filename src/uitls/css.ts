import { Maybe } from '../types'

export interface ICssMapping {
  [className: string]: boolean
}

export type ICssInput = Maybe<string | ICssMapping>

export function classNames(...args: ICssInput[]): string {
  const classes = []

  for (const arg of args) {
    if (arg) {
      if (typeof arg === 'string') {
        classes.push(arg)
      } else {
        for (const key in arg) {
          if (arg[key]) {
            classes.push(key)
          }
        }
      }
    }
  }

  return classes.join(' ')
}
