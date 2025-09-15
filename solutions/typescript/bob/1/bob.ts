export function hey(message: string): string {
  const trimmed = message.trim();

  const isSilence = trimmed === "";
  const isQuestion = trimmed.endsWith("?");
  const hasLetters = /[A-Za-z]/.test(trimmed);
  const isYelling = hasLetters && trimmed === trimmed.toUpperCase();

  if (isSilence) {
    return "Fine. Be that way!";
  }

  if (isQuestion && isYelling) {
    return "Calm down, I know what I'm doing!";
  }

  if (isYelling) {
    return "Whoa, chill out!";
  }

  if (isQuestion) {
    return "Sure.";
  }

  return "Whatever.";
}
