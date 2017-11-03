export const addStyles = ( main: string, isModifiers: (string|void)[] ): string => {
  const isModifiersClass = isModifiers.filter( Boolean ).map( name => `is-${name}`).join(' ')
  return [main, isModifiersClass].filter(Boolean).join(' ')
}

export const cleanAttributes = ( attributes: any ): any=> {

  return Object.keys(attributes)
    .filter(key => attributes[key])
    .reduce((obj:any, key) => {
      obj[key] = attributes[key];
      return obj;
    }, {});

}
