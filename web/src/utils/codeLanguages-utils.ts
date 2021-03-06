const CodeLanguages = new Map([
  ['html', 'HTML'],
  ['css', 'CSS'],
  ['javascript', 'JavaScript'],
  ['typescript', 'TypeScript'],
  ['json', 'JSON'],
  ['markdown', 'Markdown'],
  ['jsx', 'JSX'],
  ['sass', 'SASS'],
  ['php', 'PHP'],
  ['python', 'Python'],
]);

export const mapCodeLanguages = (language) => {
  return CodeLanguages.has(language) ? CodeLanguages.get(language) : language;
};
