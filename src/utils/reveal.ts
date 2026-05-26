export function revealDelayClass(index: number, offset = 0, maxDelay = 4) {
  return `reveal-delay-${Math.min(index + offset, maxDelay)}`;
}
