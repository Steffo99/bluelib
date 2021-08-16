import * as React from "react"
import * as ReactDOM from "react-dom"
import {Bluelib} from "./components/Bluelib";
import * as Colors from "./utils/Colors"

export default function Preview() {
    return <>
        <Bluelib theme={"hacker"} color={Colors.BuiltinColor.LIME} style={{minHeight: "100vh"}}>
            This should work.
        </Bluelib>
    </>
}
