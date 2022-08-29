const breakpoints = [576, 768, 992, 1200];

export const mqMinWidth = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);

export const mqMaxWidth = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);
