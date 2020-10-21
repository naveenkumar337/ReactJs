import React from 'react'

function Fragment() {
    return (
        <div>
            <h1>Text Fragment Demo</h1>
            <Table1></Table1>
        </div> 
    )
}

export default Fragment


function Table1() {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                    <Columns></Columns>
                    <EmptyFragment></EmptyFragment>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


function Columns() {
    return (
        //normal Method
        // <div>
        //     <td>
        //         Name
        //     </td>
        //     <td>Address</td>
        // </div>

        <React.Fragment>
            <td>
                Name
            </td>
            <td>Address</td>
        </React.Fragment>

      
    )
}


function EmptyFragment() {
    return (
        <>
        <td>
            Empty Fragment Name
        </td>
        <td>Empty Fragment Address</td>
    </>
    )
}
