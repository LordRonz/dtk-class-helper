export const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// $& means the whole matched string

export default escape;
