/**
 * Decreases Opacity of a element
 * @param {*} element DOM element Object
 * @param {*} delayTimeInMilliSeconds the delay time to  the animation "NULLPOINTER e"
 * @param {*} displayType type of display after decrease the opacity...put 'null' if you don't want any display type
 */
function decreaseOpacity(element, delayTimeInMilliSeconds, displayType) {
  element.style.animation = `decrease_opacity  ${delayTimeInMilliSeconds}ms ease`;
  setTimeout(() => {
    element.style.opacity = "0";
    element.style.animation = "";
  }, delayTimeInMilliSeconds - 2);
  toggleDisplay(element, displayType);
}

//Deprecated
function decreaseBorderBottomOpacity(element, delayTimeInMilliSeconds) {
  element.style.animation = `decrease_borderbottom_opacity  ${delayTimeInMilliSeconds}ms ease`;
  setTimeout(() => {
    element.style.borderBottomColor = "none";
    element.style.animation = "";
  }, delayTimeInMilliSeconds - 2);
}

//Deprecated
function increaseBorderBottomOpacity(element, delayTimeInMilliSeconds) {
  element.style.borderBottomColor = "transparent";
  element.style.animation = `increase_borderbottom_opacity  ${delayTimeInMilliSeconds}ms ease`;
  setTimeout(() => {
    element.style.borderBottom = "2px solid var(--orange-color)";
    element.style.animation = "";
  }, delayTimeInMilliSeconds - 2);
}

/**
 * Increase Opacity of a element
 * @param {*} element DOM element Object
 * @param {*} delayTimeInMilliSeconds the delay time to  the animation "NULLPOINTER e"
 * @param {*} displayType type of display before it increase the opacity...put 'null' if you don't want any display type
 */
function increaseOpacity(element, delayTimeInMilliSeconds, displayType) {
  toggleDisplay(element, displayType);
  setTimeout(() => {
    element.style.animation = `increase_opacity  ${delayTimeInMilliSeconds}ms ease`;
    setTimeout(() => {
      element.style.opacity = "1";
      element.style.animation = "";
    }, delayTimeInMilliSeconds - 20);
  }, 6);
}

/**
 *  Allows you set a Display type of a element
 * @param {*} element DOM element Object
 * @param {*} displayType type of display in a String
 */
function toggleDisplay(element, displayType) {
  if (displayType !== null || displayType !== undefined) {
    element.style.display = displayType;
  }
}

export {
  increaseOpacity,
  decreaseOpacity,
  decreaseBorderBottomOpacity,
  increaseBorderBottomOpacity,
};
