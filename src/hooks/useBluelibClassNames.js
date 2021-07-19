import {useContext} from "react";
import contextBluelibSkin from "../contexts/ContextBluelibSkin";
import classNames from "classnames";


export default function useBluelibClassNames(cn, extra) {
    const bluelibSkin = useContext(contextBluelibSkin);

    // Split class names
    if(typeof(cn) === "string") {
        cn = cn.split(" ");
    }

    // Get bluelib skeleton and skin class names
    cn = cn.map(c => {
        if(!c) {
            return null;
        }

        if(!bluelibSkin) {
            console.warn("bluelibSkin is invalid: ", bluelibSkin)
            return null
        }

        return classNames(bluelibSkin[c])
    });

    // Return all the class names
    return classNames(...cn, extra);
}
