export const getInitialLetters = (text?: string): string => {
  if (!text) return '';

  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase())
    .join('');
};
