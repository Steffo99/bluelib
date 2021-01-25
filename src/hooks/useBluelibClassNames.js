import {useContext} from "react";
import contextBluelibSkin from "../contexts/ContextBluelibSkin";
import classNames from "classnames";

import skeleton from "../bluelib/src/skeleton/skeleton.module.css";


export default function useBluelibClassNames(cn, extra) {
    const bluelibSkin = useContext(contextBluelibSkin);

    // Split class names
    cn = cn.split(" ");

    // Get bluelib skeleton and skin class names
    cn = cn.map(c => {
        return classNames(skeleton[c], bluelibSkin ? bluelibSkin[c] : null)
    });

    // Return all the class names
    return classNames(...cn, extra);
}
