# Accessible Conference Schedule

## Narrow Screen Layout Strategy
On viewports narrower than 768px (down to 320px), a multi-column track view causes severe horizontal compression and forces horizontal scrolling. To solve this, parallel tracks collapse into a single-column stacked vertical layout.

Each session card displays its track label clearly via a visual badge and accessible text. DOM elements remain structured in a natural time and track reading sequence, ensuring that screen reader navigation and keyboard `Tab` traversal follow the exact visual flow from top to bottom.

## Accessibility Features
- Native HTML5 `<dialog>` component provides native modal behavior, keyboard `Escape` dismissal, focus trapping, and background content obscuring (`inert`).
- Focus return is preserved: closing the dialog restores focus to the trigger button.
- Day navigation implements the WAI-ARIA tab pattern with arrow key switching.
- Prominent `:focus-visible` styling guarantees 3px high-contrast visual focus across all interactive elements.
