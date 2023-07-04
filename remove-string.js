// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  let removed;
  if (s.includes("!")) {
    removed = s.replace(/!/g, "");
  }
  return removed;
}
