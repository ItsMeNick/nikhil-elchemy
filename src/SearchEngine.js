import React from "react";
import { useNavigate } from "react-router-dom";

const SearchEngine = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = React.useState("");
  const [searchOutput, setSearchOutput] = React.useState([]);

  React.useEffect(() => {
    const getData = setTimeout(() => {
      if (searchInput) {
        fetch(`https://api.github.com/search/repositories?q=${searchInput}`)
          .then((response) => response.json())
          .then((response) => {
            if (response?.items?.length > 0) setSearchOutput(response?.items);
          });
      }
    }, 500);

    return () => clearTimeout(getData);
  }, [searchInput]);

  const handleKeyDown = (name) => {
    if (name) {
      fetch(`https://api.github.com/search/repositories?q=${name}`)
        .then((response) => response.json())
        .then((response) => {
          if (response?.items?.length > 0) {
            const listObject = {
              list: response?.items.slice(0, 10),
              name: name,
            };
            localStorage.setItem("Search_List", JSON.stringify(listObject));
            navigate("/list");
          }
        });
    }
  };

  const onClick = (github) => {
    if (github) {
      const myArray = github.split(" - ");
      fetch(`https://api.github.com/repos/${myArray[0]}`)
        .then((response) => response.json())
        .then((response) => {
          localStorage.setItem("Github_Details", JSON.stringify(response));
          navigate("/details");
        });
    }
  };

  return (
    <>
      <div style={{border:"1px solid white"}}>
        <b><label style={label}>Search:-  </label></b>
        <input
          type="text"
          list="github"
          style={input}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleKeyDown(e?.target?.value);
            }
          }}
          onChange={(e) => {
            if (!e?.nativeEvent.inputType) {
              onClick(e?.nativeEvent?.target.value);
            }
            setSearchInput(e?.target.value);
          }}
        />
        {searchOutput?.length > 0 && (
          <datalist id="github" onClick={() => console.log("hello")}>
            {searchOutput?.slice(0, 5).map((github, i) => (
              <div key={i}>
                <option key={i}>{github.full_name} - {github.description} - {github.name}</option>
              </div>
            ))}
          </datalist>
        )}
      </div>
    </>
  );
};
const label  = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin:"10px auto"
}

const input =  {
  width:"200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin:"0px auto"
}
export default SearchEngine;
