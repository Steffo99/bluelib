import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Anchor as AnchorComponent } from "./Anchor"


export default {
    component: AnchorComponent,
    title: "Common/Anchor",
    decorators: [Decorators.Bluelib],
    argTypes: {
        href: {
            type: "string",
        }
    }
}


const AnchorTemplate = props => (
    <AnchorComponent {...props}>This is a link.</AnchorComponent>
)


export const Broken = AnchorTemplate.bind({})
Broken.args = {
    href: undefined,
}


export const Link = AnchorTemplate.bind({})
Link.args = {
    href: "https://example.org/",
}


export const Download = AnchorTemplate.bind({})
Download.args = {
    href: "magnet:?xt=urn:btih:377852690518c09acdcdd970068a5eaa47dd0a9d&dn=gimp-2.10.24-setup-3.exe&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969%2fannounce&tr=https%3a%2f%2fashrise.com%3a443%2fphoenix%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&ws=https%3a%2f%2fartfiles.org%2fgimp.org%2fpub%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fdownload.gimp.org%2fpub%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fftp.acc.umu.se%2fpub%2fgimp%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fftp.cc.uoc.gr%2fmirrors%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fftp.fau.de%2fgimp%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fftp.gwdg.de%2fpub%2fmisc%2fgrafik%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fftp.icm.edu.pl%2fpub%2fgraphics%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fftp.lysator.liu.se%2fpub%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fftp.snt.utwente.nl%2fpub%2fsoftware%2fgimp%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fgimp.ip-connect.info%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fmirror.jaleco.com%2fgimp%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fmirror.klaus-uwe.me%2fgimp%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fmirror.umd.edu%2fgimp%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fmirrors.dotsrc.org%2fgimp%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fmirrors.syringanetworks.net%2fgimp%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fmirrors.ukfast.co.uk%2fsites%2fgimp.org%2fpub%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fmirrors.xmission.com%2fgimp%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fwww.mirrorservice.org%2fsites%2fftp.gimp.org%2fpub%2fgimp%2fv2.10%2fwindows%2f&ws=https%3a%2f%2fwww.nic.funet.fi%2fpub%2fmirrors%2fftp.gimp.org%2fv2.10%2fwindows%2f",
}
