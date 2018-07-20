class Ripple {
    constructor(elem, duration) {
        this.elem = elem;
        this.duration = duration;
        this.ripple(this.elem, this.duration);
    }

    ripple(elem, dur) {
       if(elem.toString() != "[object NodeList]") {
            elem.onclick = function(e) {
                let rippleElem = document.createElement("div");
                rippleElem.classList.add("ripple");

                let fromLeft = this.getBoundingClientRect().left;
                let fromTop = this.getBoundingClientRect().top;
                let coordX = e.pageX - fromLeft;
                let coordY = e.pageY - fromTop;
                rippleElem.style.left = coordX+"px";
                rippleElem.style.top = coordY+"px";
                rippleElem.style.animationDuration = dur+"ms";
                elem.appendChild(rippleElem);
                setTimeout(() => {
                    elem.removeChild(rippleElem);
                }, dur);
            }
       } else {
            for(let i = 0; i < elem.length; i++) {
                elem[i].onclick = function(e) {
                    let rippleElem = document.createElement("div");
                    rippleElem.classList.add("ripple");

                    let fromLeft = this.getBoundingClientRect().left;
                    let fromTop = this.getBoundingClientRect().top;
                    let coordX = e.pageX - fromLeft;
                    let coordY = e.pageY - fromTop;
                    rippleElem.style.left = coordX+"px";
                    rippleElem.style.top = coordY+"px";
                    rippleElem.style.animationDuration = dur+"ms";
                    elem[i].appendChild(rippleElem);
                    setTimeout(() => {
                        elem[i].removeChild(rippleElem);
                    }, dur);
                }
            }  
       }
    }
}
