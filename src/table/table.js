import React, { useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import { Checkbox } from "antd";

const Container = styled.div`
  width: 800px;
  height: 100%;
  overflow: auto;
`;

const TableArea = styled.table`
  /** border-collapse
    collapse: tr td border와 합쳐서 한줄로 표현
    saperate: (default) tr td가 독립적으로 border를 가짐 두줄로 나오고 막..
   */
  border-collapse: collapse;

  width: 100%;

  /** table-layout
    auto: (default) cell 내용에 따라 너비를 자동으로 잡아줌
    fixed: 셀 내부 공백을 무시하고 너비를 잡음. 너비를 별도로 지정하지 않으면 각 셀 간격을 동일하게 만듦. 
   */
  table-layout: auto;
  /* table-layout: fixed; */

  border: ${(props) => (props.border && "1px solid") || "unset"};
  border-color: #e6e6e6;
`;

const HeaderArea = styled.tr`
  height: ${(props) => props.height || "4rem"};

  border-bottom: ${(props) => props.border || "1px solid"};
  border-color: #e6e6e6;

  font-size: 1.1rem;
  font-weight: 700;
`;

const ColumnCell = styled.th`
  /** vertical-align
  middle: 문자열 수직 방향 가운데 정렬
*/
  vertical-align: middle;
  padding: 0 6px;

  border: ${(props) => (props.border && "1px solid") || "unset"};
  border-color: #e6e6e6;

  width: ${(props) =>
    props.columnWidth ? props.columnWidth : props.ellipsis ? "100%" : "unset"};
  max-width: ${(props) =>
    props.columnWidth ? props.columnWidth : props.ellipsis ? "1px" : "unset"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Row = styled.tr`
  height: ${(props) => props.height || "4rem"};

  border-bottom: ${(props) => props.border || "1px solid"};
  border-color: #e6e6e6;

  font-size: 1.1rem;

  &:last-child {
    border-bottom: ${(props) => props.header === false && "unset"};
  }

  &:hover {
    background-color: #f6f6f6;
  }
`;

const Cell = styled.td`
  vertical-align: middle;
  padding: 0 6px;

  border: ${(props) => (props.border && "1px solid") || "unset"};
  border-color: #e6e6e6;

  text-align: ${(props) => props.align || "left"};

  /** ellipsis
    table-layout이 auto일때
    - width: 100%;
    - max-width: 1px;
    - overflow: hidden / text-overlow: ellipsis / white-space: nowrap
    옵션 주면 ellipsis 옵션 넣은 컬럼 최대치로 공간 잡고 줄임표 처리됨. 
    but, width값을 다른 '%'단위로 넣으면 풀려서 스크롤 생겨버림.
  */
  width: ${(props) =>
    props.width ? props.width : props.ellipsis ? "100%" : "unset"};
  max-width: ${(props) =>
    props.width ? props.width : props.ellipsis ? "1px" : "unset"};
  overflow: hidden;
  text-overflow: ellipsis;
  /** white-space
    nowrap: 문자열에 공백이 있어도 줄바꿈하지 않음. 
  */
  white-space: nowrap;
`;

const Table = ({
  columnData,
  rowData,
  height,
  border,
  header,
  checkbox,
  fixedHeader,
  onCheckedRows,
  onClickRow,
  onClickOrder,
}) => {
  const [checkedRowIds, changeCheckedRowIds] = useState(new Set());

  const rowList = useMemo(
    () => new Map(rowData.map((row, idx) => [idx, row])),
    [rowData]
  );

  const isAllRowsChecked = useMemo(
    () => (checkedRowIds.size === rowData.length ? true : false),
    [checkedRowIds.size, rowData.length]
  );

  const isSomeRowsChecked = useMemo(
    () =>
      checkedRowIds.size > 0 && checkedRowIds.size < rowData.length
        ? true
        : false,
    [checkedRowIds.size, rowData.length]
  );

  const onCheckRow = useCallback(
    (event, { rowIdx }) => {
      changeCheckedRowIds((rowIds) => {
        rowIds = new Set(checkedRowIds);
        rowIds.has(rowIdx) ? rowIds.delete(rowIdx) : rowIds.add(rowIdx);

        return rowIds;
      });
    },
    [checkedRowIds]
  );

  const onCheckAllRows = useCallback(
    (event) =>
      isAllRowsChecked
        ? changeCheckedRowIds(new Set())
        : changeCheckedRowIds(new Set(rowList.keys())),
    [isAllRowsChecked, rowList]
  );

  return (
    <Container>
      {columnData ? (
        <TableArea border={border}>
          {header !== false && (
            <thead>
              <HeaderArea height={height} border={border === false && "unset"}>
                {checkbox && (
                  <ColumnCell border={border}>
                    <Checkbox
                      indeterminate={isSomeRowsChecked}
                      onChange={onCheckAllRows}
                      checked={isAllRowsChecked}
                    />
                  </ColumnCell>
                )}
                {columnData.map(
                  ({ columnName, width, ellipsis }, columnIdx) => (
                    <ColumnCell
                      key={columnIdx}
                      columnWidth={width}
                      ellipsis={ellipsis}
                      border={border}
                    >
                      {columnName}
                    </ColumnCell>
                  )
                )}
              </HeaderArea>
            </thead>
          )}
          <tbody>
            {rowList.size > 0 &&
              [...rowList].map(([rowIdx, row]) => (
                <Row
                  key={rowIdx}
                  height={height}
                  border={border === false && "unset"}
                  header={header}
                >
                  {checkbox && (
                    <Cell border={border} align="center">
                      <Checkbox
                        checked={checkedRowIds.has(rowIdx) ? true : false}
                        onChange={(event) => onCheckRow(event, { rowIdx })}
                      />
                    </Cell>
                  )}
                  {columnData.map(
                    (
                      { propName, align, width, order, render, ellipsis },
                      cellIdx
                    ) => (
                      <Cell
                        key={cellIdx}
                        align={align}
                        width={width}
                        ellipsis={ellipsis}
                        border={border}
                      >
                        {render ? render(row[propName]) : row[propName]}
                      </Cell>
                    )
                  )}
                </Row>
              ))}
          </tbody>
        </TableArea>
      ) : (
        <div>loading...</div>
      )}
      {rowList.size < 1 && <div>No Data</div>}
    </Container>
  );
};

export default Table;
