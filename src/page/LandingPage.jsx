import {
  Box,
  PageLayout,
  Header,
  Avatar,
  FormControl,
  TextInput,
  Text,
  Button,

} from "@primer/react";
import GithubGraphQL from '../assets/github-graphql.jpg';
import GithubPrimer from '../assets/github-primer.jpg';
import Monaco from '../assets/monaco-logo.png';
import ReactQuery from '../assets/react-query-logo.png';


import { useEffect, useState } from "react";
import { fetchRepoData, checkRepoData } from "../utils/requestHandler";

function SearchRepo({ param, setParam, setShowEditor }) {
  const [isSearchHappened, setIsSearchHappened] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("submit");

    // make query parameters
    const formData = new FormData(event.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());
    const searchQuery = fieldValues["github_link"];
    const owner = searchQuery.split("/")[3];
    const name = searchQuery.split("/")[4];
    const queryVar = {
      owner,
      name,
      branch: "HEAD:",
    };

    // check for repo
    const response = await checkRepoData(queryVar);
    console.log("res : ", response);
    if (
      response.repository.object.entries &&
      response.repository.object.entries.length > 0
    ) {
      // set flags
      setParam(queryVar);
      setIsSearchHappened(true);
      setShowEditor(true);
    }
  }

  return (
    <Box>
      {isSearchHappened ? (
        <div>
          <div>Searched, Loading...</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormControl.Label>Enter Github Repo Link</FormControl.Label>
            <TextInput
              monospace
              size="large"
              block
              aria-label="github link"
              name="github_link"
              placeholder="e.g. https://github.com/facebook/react"
              autoComplete="github link"
            />
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </FormControl>
        </form>
      )}
    </Box>
  );
}

export default function LandingPage({ param, setParam, setShowEditor }) {
  return (
    <>
      <Box bg="canvas.default" width="100%" minHeight="100vh">
        <PageLayout width="100%">
          <PageLayout.Header>
            <Header>
              <Header.Item>
                <Header.Link href="#" fontSize={2}>
                  {/* <Octicon icon={MarkGithubIcon} size={32} sx={{mr: 2}} /> */}
                  <span>GitRead</span>
                </Header.Link>
              </Header.Item>
              <Header.Item full>Menu</Header.Item>
              <Header.Item sx={{ mr: 0 }}>
                <Avatar
                  src="https://github.com/octocat.png"
                  size={20}
                  square
                  alt="@octocat"
                />
              </Header.Item>
            </Header>
          </PageLayout.Header>
          <PageLayout.Content>
            <Box bg="canvas.default" width="100%" p={5}>
              <SearchRepo
                param={param}
                setParam={setParam}
                setShowEditor={setShowEditor}
              />
            </Box>
          </PageLayout.Content>

          <PageLayout.Footer>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                "& > *": {
                  margin: "30px", /* Add margin between the Avatar components */
                },
              }}
            >
              <Avatar square size="50" src={GithubGraphQL} />
              <Avatar square size="50" src={GithubPrimer} />
              <Avatar square size="50" src={Monaco} />
              <Avatar square size="50" src={ReactQuery} />
            </Box>
          </PageLayout.Footer>
        </PageLayout>
      </Box>
    </>
  );
}
