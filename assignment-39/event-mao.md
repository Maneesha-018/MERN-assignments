
# Event Map - Interactive Profile

| Element | Event | JavaScript Action | Result |
|---|---|---|---|
| Activate Profile Button | Click | Toggle active class | Profile becomes active |
| Activate Profile Button | Click again | Remove active class | Profile becomes inactive |
| Highlight Profile Button | Click | Toggle highlight class | Profile gets highlighted |
| Highlight Profile Button | Click again | Remove highlight class | Highlight is removed |

## Event Handling
- addEventListener() is used to handle click events.
- classList.toggle() is used to change profile states.
- setAttribute() updates the aria-pressed attribute.
- textContent updates status messages.

## Conclusion
The event map explains how user actions trigger
JavaScript functions and update the profile page.
