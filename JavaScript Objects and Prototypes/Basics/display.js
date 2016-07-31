/**
 * Created by Jewel Mahanta (@lap00zza) on 30-07-2016.
 */

function displayValue(value, addMargin, addPadding) {
    "use strict";
    var div = document.createElement("div");
    div.style.fontSize = "32px";
    if (addMargin) {
        div.style.marginBottom = "30px";
    }
    if (addPadding) {
        div.style.paddingLeft = "30px";
    }
    div.textContent = value;
    document.body.appendChild(div);
}

/*function getTypeName(object) {
    "use strict";
    var results = (/function (.{1,})\(/).exec(object.constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
}*/

function get_type(thing) {
    "use strict";
    if (thing === null) {
        return "[object Null]";
    } // special case
    // window.console.log(thing.constructor.name);
    // return Object.prototype.toString.call(thing);
    return thing.constructor.name;
}

function displayObject(object) {
    "use strict";
    var propertyName;
    if (object === null) {
        displayValue("null");
    }
    displayValue(get_type(object) + " {");
    for (propertyName in object) {
        if (propertyName !== "constructor") {
            displayValue(propertyName + ": " + object[propertyName], false, true);
        }
    }
    displayValue("}", true);
}

function display() {
    "use strict";
    var i;
    for (i = 0; i < arguments.length; i += 1) {
        if (typeof arguments[i] === "object") {
            displayObject(arguments[i]);
        } else {
            displayValue(arguments[i], true);
        }
    }
}

