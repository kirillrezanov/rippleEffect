If you want to add Material Ripple effect on your UI element without heavy jQuery on your Web-Site, this library for you, all you need is:
* Create variable with link to your element:
For example:
let elem = document.querySelector(".test");
* Make this construction:
new Ripple();
In parameters you need add your element and animation-duration in times.

For example:
*let element = document.querySelector("button.btn.ripple");*

*new Ripple(element, 1000);*

There 1000 is animation-duration will be 1 second because animation-duration in ms.

Also you can send in parameters array of DOM elements.
