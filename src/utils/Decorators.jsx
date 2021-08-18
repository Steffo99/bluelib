import { Bluelib as BluelibComponent } from "../components/Bluelib"
import { Box as BoxComponent } from "../components/panels/Box"


export const Bluelib = Story => <BluelibComponent theme={"paper"} style={{backgroundColor: "transparent"}}><Story/></BluelibComponent>

export const Fill = Story => <div style={{height: "100vh"}}><Story/></div>

export const Box = Story => <BoxComponent><Story/></BoxComponent>