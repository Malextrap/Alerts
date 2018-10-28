/**
 * Created by alejandrorioscalera
 * On 13/12/17
 *
 * -- SOCIAL NETWORKS --
 *
 * GitHub: https://github.com/clonalejandro or @clonalejandro
 * Website: https://clonalejandro.me/
 * Twitter: https://twitter.com/clonalejandro11/ or @clonalejandro11
 * Keybase: https://keybase.io/clonalejandro/
 *
 * -- LICENSE --
 *
 * All rights reserved for clonalejandro ©malextrap 2017 / 2018
 */

class Alert {


    /** SMALL CONSTRUCTORS **/

    constructor(){
        this.elements = document.querySelectorAll(".alert .closer");
        this.init();
    }


    /** REST **/

    init(){
        this.elements.forEach(
            e => e.addEventListener("click", () => this.fade(e.parentNode, 0))
        )
    }


    /**
     * This function fade the alert
     * @param {Number} timeout timeout
     */
    fade(element, timeout = 2500){
        setTimeout(() => {
            this.animation(element, () => {
                element.style.display = "none"
            })
        }, timeout)
    }


    /**
     * This function create a fade animation
     * @param {*} element element
     * @param {*} onEnd onEnd
     */
    animation(element, onEnd){
        element.style.opacity = '0';
        setTimeout(onEnd, 1000)
    }


}
