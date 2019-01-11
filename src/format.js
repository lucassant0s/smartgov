/* @flow */
/* simple fomtatters without number overflow checks etc */

const timeSym = '  :  ';

export const timeFormatSym = (str: string) => {
  const clean = str.replace(/[^\d]+/gi, '');
  const chars = clean.split('');
  const r = chars.reduce(
    (r, v, index) => (index === 2 ? `${r}:${v}` : `${r}${v}`).substr(0, 5),
    ''
  );

  if (r.length === 0) return r;

  return `${r}${timeSym.substr(r.length)}`;
};
