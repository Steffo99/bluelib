import * as React from "react"
import * as ReactDOM from "react-dom"
import * as Decorators from "../../utils/Decorators"
import { Table } from "./Table"
import { TableCaption } from "./TableCaption"
import { TableHeader } from "./TableHeader"
import { TableBody } from "./TableBody"
import { TableFooter } from "./TableFooter"
import { TableRow } from "./TableRow"
import { TableCell } from "./TableCell"


export default {
    component: Table,
    subcomponents: {TableCaption, TableHeader, TableBody, TableFooter, TableRow, TableCell},
    title: "Tables/Table",
    decorators: [Decorators.Bluelib],
}


export const Brothers = props => (
    <Table {...props}>
        <Table.Caption position={"top"}>
            What do the brothers think of the following elements?
        </Table.Caption>
        <Table.Header>
            <Table.Row>
                <Table.Cell head={true}>

                </Table.Cell>
                <Table.Cell head={true}>
                    Mario
                </Table.Cell>
                <Table.Cell head={true}>
                    Luigi
                </Table.Cell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            <Table.Row>
                <Table.Cell head={true}>
                    Tables
                </Table.Cell>
                <Table.Cell>
                    They're cool and allow you to do cool stuff
                </Table.Cell>
                <Table.Cell>
                    They need chairs to be useful
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell head={true}>
                    Flexboxes
                </Table.Cell>
                <Table.Cell>
                    They're very versatile
                </Table.Cell>
                <Table.Cell>
                    Not flexible enough for me
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell head={true}>
                    Grids
                </Table.Cell>
                <Table.Cell>
                    They are useful to make layouts
                </Table.Cell>
                <Table.Cell>
                    Is this Matrix?
                </Table.Cell>
            </Table.Row>
        </Table.Body>
        <Table.Footer>
            <Table.Row>
                <Table.Cell head={true}>
                    Overall
                </Table.Cell>
                <Table.Cell>
                    10/10 would display again
                </Table.Cell>
                <Table.Cell>
                    -1/10 pls uninstall dota
                </Table.Cell>
            </Table.Row>
        </Table.Footer>
    </Table>
)
Brothers.args = {
    disabled: false,
}


export const TicTacToe = props => (
    <Table {...props}>
        <Table.Caption position={"top"}>
            A game of tic-tac-toe.
        </Table.Caption>
        <Table.Body>
            <Table.Row>
                <Table.Cell>
                    O
                </Table.Cell>
                <Table.Cell>

                </Table.Cell>
                <Table.Cell mark={true}>
                    X
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    X
                </Table.Cell>
                <Table.Cell mark={true}>
                    X
                </Table.Cell>
                <Table.Cell>
                    O
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell mark={true}>
                    X
                </Table.Cell>
                <Table.Cell>
                    O
                </Table.Cell>
                <Table.Cell>

                </Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
)
TicTacToe.args = {
    disabled: false,
}


export const TierList = props => (
    <Table {...props}>
        <Table.Caption position={"bottom"}>
            HTML elements tier list
        </Table.Caption>
        <Table.Body>
            <Table.Row>
                <Table.Cell head={true}>
                    S
                </Table.Cell>
                <Table.Cell>
                    &lt;span&gt;
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell head={true}>
                    A
                </Table.Cell>
                <Table.Cell>
                    &lt;a&gt;
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell head={true}>
                    B
                </Table.Cell>
                <Table.Cell>
                    &lt;body&gt;
                </Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell head={true}>
                    C
                </Table.Cell>
                <Table.Cell>
                    &lt;caption&gt;
                </Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
)
TierList.args = {
    disabled: false,
}


