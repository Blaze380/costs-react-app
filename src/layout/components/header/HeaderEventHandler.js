function clickLink(event, elements) {
  Array.from(elements.links).forEach((element) => {
    elements.homeLink =element;
    setBorderIntoHomeLink(event,elements);
    if((elements.navBar[0].id !=event.target.id)){
      if (event.target.id == element.id) {
        setBorderBottomStyle(element, "2px solid var(--orange-color)");
      } else {
        setBorderBottomStyle(element, "none");
      }
  }
});
}

function setBorderIntoHomeLink(event,elements){
  console.log(elements.homeLogo[0])
  console.log(elements.navBar)
  if(event.target.id === elements.homeLogo[0].id){
    console.log(true)
    setBorderBottomStyle(elements.homeLink, "2px solid var(--orange-color)");
  }
}
// console.log(elements.homeLink)
// console.log(elements.homeLogo.id)
// console.log(event.target.id)

 function setBorderBottomStyle(element, borderBottom) {
  element.style.borderBottom = borderBottom;
}

export { clickLink };
