import React from "react";

const GithubDetails = () => {
  const [githubDetails, setGithubDetails] = React.useState(null);

  React.useEffect(() => {
    (function () {
      const details = JSON.parse(localStorage.getItem("Github_Details"));
      console.log(details);
      setGithubDetails(details);
    })();
  }, []);

  return (
    <>
      <div>
        {githubDetails && (
          <>
            <p>
              <strong>Repository Name:- </strong>
              {githubDetails["full_name"] && githubDetails["full_name"]}
            </p>
            <p>
              <strong>Repository Description:- </strong>
              {githubDetails["description"] && githubDetails["description"]}
            </p>
            <p>
              <strong>Owner Login Name:- </strong>
              {githubDetails["owner"] && githubDetails["owner"]["login"]}
            </p>
            <p>
              <strong>Language:- </strong>
              {githubDetails["language"] && githubDetails["language"]}
            </p>
            <p>
              <strong>License:- </strong>
              {githubDetails["license"] && JSON.stringify(githubDetails["license"])}
            </p>
            <p>
              <strong>Forks:- </strong>
              {githubDetails["forks"] && githubDetails["forks"]}
            </p>
            <p>
              <strong>Watchers:- </strong>
              {githubDetails["watchers"] && githubDetails["watchers"]}
            </p>
              <p>
                <strong>Organization URL:- </strong>
                {githubDetails["organization"] && githubDetails["organization"]["organizations_url"]}
              </p>
            <p>
              <strong>Created date:-</strong>
              {githubDetails["created_at"] && githubDetails["created_at"]}
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default GithubDetails;
