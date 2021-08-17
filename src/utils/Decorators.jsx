import { Bluelib as BluelibComponent } from "../components/Bluelib"


export const Bluelib = Story => <BluelibComponent theme={"paper"} style={{backgroundColor: "transparent"}}><Story/></BluelibComponent>

export const Fill = Story => <div style={{height: "100vh"}}><Story/></div>
