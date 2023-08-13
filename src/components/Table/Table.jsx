import styled, { css } from "styled-components";
import { palette } from "../../assets/colorsPalette";
import UserVoteBox from "../common/UserVoteBox";
import TableFooter from "./TableFooter";
import useTable from "./useTable";
import { useState } from "react";
import { useEffect } from "react";

const Table = (props) => {
    const { headers, data } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [rows, setRows] = useState(5);
    const [slicedData, numOfPages] = useTable(data, currentPage, rows);

    const renderHeaders = () => {
        return (
            headers.map((header, i) => {
                return (
                    <TableHeader key={i}>{header}</TableHeader>
                )
            })
        )
    };

    const renderTableData = () => {
        return (
            slicedData.map((el, i) => {
                return (
                    <tr key={i}>
                        <TableCell>
                            <UserVoteBox />
                        </TableCell>
                        <TableCell>{el.title}</TableCell>
                        <TableCell>{el.date}</TableCell>
                    </tr>
                )
            })
        )
    };

    useEffect(() => {
        console.log(slicedData)
    }, [slicedData])

    return (
        <>
            <TableContainer>
                <thead>
                    <tr>
                        {renderHeaders()}
                    </tr>
                </thead>
                <tbody>
                    {slicedData && renderTableData()}
                </tbody>
            </TableContainer>
            <TableFooter range={numOfPages} setCurrentPage={setCurrentPage} rows={rows} setRows={setRows} />
        </>
    )
};

const Cell = css`
  padding: 1rem;
  text-align: right;
`;

const TableContainer = styled.table`
  width: 100%;
  background: #323232;
  color: white;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
    ${Cell}
    background-color: ${palette.brand};
    position: sticky;
    font-family: sans-serif;
    text-transform: uppercase;
    font-weight: 600;
`;

const TableCell = styled.td`
    ${Cell}
`;

export default Table;