import React from "react";

const SearchList = () => {
  const [searchList, setSearchList] = React.useState([]);

  React.useEffect(() => {
    (function () {
      const list = JSON.parse(localStorage.getItem("Search_List"));
      setSearchList(list.list);
    })();
  }, []);

  return (
    <>
      <div>
        <table>
          <tr>
            <th style={{ border: "1px solid black" }}>Repository Name</th>
            <th style={{ border: "1px solid black" }}>
              Repository Description
            </th>
            <th style={{ border: "1px solid black" }}>Owner Login Name</th>
            <th style={{ border: "1px solid black" }}>Language</th>
            <th style={{ border: "1px solid black" }}>Created date</th>
          </tr>
          {searchList?.map((github, i) => {
            return (
              <tr key={i}>
                <td style={{ border: "1px solid black" }}>
                  {github.full_name}
                </td>
                <td style={{ border: "1px solid black" }}>
                  {github.description}
                </td>
                <td style={{ border: "1px solid black" }}>
                  {github.owner.login}
                </td>
                <td style={{ border: "1px solid black" }}>{github.language}</td>
                <td style={{ border: "1px solid black" }}>
                  {github.created_at}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default SearchList;
