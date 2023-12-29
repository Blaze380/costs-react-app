function clickLink(event, elements) {
  Array.from(elements).forEach((element) => {
    if (event.target.id == element.id) {
      setBorderBottomStyle(element, "2px solid var(--orange-color)");
    } else {
      setBorderBottomStyle(element, "none");
      //an.decreaseBorderBottomOpacity(element, 500);
    }
  });
}

export function setBorderBottomStyle(element, borderBottom) {
  element.style.borderBottom = borderBottom;
}

export { clickLink };
