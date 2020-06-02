import React from "react";

import Table from "../table/table";

const sampleData = [
  {
    id: 1,
    catName: "sub_a",
    name: "title 1",
    creUser: "mini",
    creDate: "2020-05-01 00:00:00",
    count: 0,
  },
  {
    id: 2,
    catName: "sub_b",
    name:
      "title 2 - aaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaa bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb aaaaaaaaaaaaa",
    creUser: "mini",
    creDate: "2020-05-02 00:00:00",
    count: 0,
  },
  {
    id: 3,
    catName: "sub_b",
    name: "title 3",
    creUser: "mini",
    creDate: "2020-05-02 00:00:01",
    count: 0,
  },
  {
    id: 4,
    catName: "sub_a",
    name: "title 2",
    creUser: "mini",
    creDate: "2020-05-03 00:00:00",
    count: 0,
  },
];

const sampleColumns = [
  {
    columnName: "Index",
    propName: "id",
    align: "center",
    // width: "20%",
    // order,
    // render: (rowId, text) => <div onClick={event => onClickCell(rowId)} style={{...}}>{text}</div>
  },
  {
    columnName: "제목",
    propName: "name",
    ellipsis: true,
    // align: "center",
    // width: "200px",
    // order,
    // render: (rowId, text) => <div onClick={event => onClickCell(rowId)} style={{...}}>{text}</div>
  },
  {
    columnName: "작성자",
    propName: "creUser",
    // align: "center",
    // width,
    // order,
    render: (text) => <div style={{ color: "green" }}>{text}</div>,
  },
  {
    columnName: "작성 시간",
    propName: "creDate",
    align: "center",
    // width: "fit-content",
    // order,
    // render: (rowId, text) => <div onClick={event => onClickCell(rowId)} style={{...}}>{text}</div>
  },
  {
    columnName: "조회수",
    propName: "count",
    align: "center",
    // width,
    // order,
    // render: (rowId, text) => <div onClick={event => onClickCell(rowId)} style={{...}}>{text}</div>
  },
];

const Home = () => {
  // return <div>Home</div>;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
        height: "200px",
      }}
    >
      <Table
        columnData={sampleColumns}
        rowData={sampleData}
        // height="2rem"
        border={true}
        // header={false}
        checkbox={true}
        // fixedHeader
        headerStyleOverride={{
          // ColumnCell(th) style properties
          textAlign: "right",
          fontSize: "0.6rem",
          fontWeight: "900",
          // color:
          // padding:
          // backgroundColor: "orange",
        }}
        rowStyleOverride={
          {
            // Cell (td) style properties
            // fontSize: ,
            // fontWeight: ,
            // color: ,
            // padding: ,
            // backgroundColor: "yellow",
            // verticla-align: ,
          }
        }
        // headerHeight // default는 height 값
        // borderColor
        // rowHoverColor

        // 스타일 수정 참고 사항
        // rowStyleOverride는 전역 스타일 변경
        // 컬럼별 스타일 정의는 column props - render로 하는 것을 권장
      />
    </div>
  );
};

export default Home;
