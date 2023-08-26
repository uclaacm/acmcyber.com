export const styler = (styles: Record<string, string>) => (strings: string[], ...keys: Array<string | boolean>) => {
  const allparts = keys.map((_, i) => [strings[i], keys[i]]);
  allparts.push(strings[strings.length - 1]);
  return allparts
    .flat()
    .filter(Boolean)
    .join('')
    .split(' ')
    .map(klass => styles[klass] ?? klass)
    .join(' ');
};
