import React from "react"
import VisualLog from "../VisualLog"


export default class VisualErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {"error": null, "errorInfo": null}
    }

    componentDidCatch(error, errorInfo) {
        this.setState({"error": error, "errorInfo": errorInfo})
    }

    render() {
        if (this.state.error) {
            return (
                <VisualLog level={"error"}>{this.state.error.toString()}</VisualLog>
            )
        } else {
            return this.props.children
        }
    }
}
