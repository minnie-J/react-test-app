import React from "react";

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
    name: "title 2",
    creUser: "mini",
    creDate: "2020-05-02 00:00:00",
    count: 0,
  },
  {
    id: 3,
    catName: "sub_b",
    name:
      "title 1111111111111111111111111111111111111111111111111111111111111111111111111111",
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
    columnName: "No.",
    propName: "id",
    // width,
    // align,
    // order,
    // render: (rowId, text) => <div onClick={event => onClickCell(rowId)} style={{...}}>{text}</div>
  },
];

const Home = () => {
  return <div>Home</div>;
};

export default Home;
