import { Header, Textarea, Box, PageLayout } from "@primer/react";

import SplitContainer from "../components/SplitContainer";

export default function CodePage({ param }) {
  return (
    <Box bg="canvas.default" width="100%" minHeight="100vh">
      <PageLayout>
        <PageLayout.Header>
          <Header
            width="100vw"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          ></Header>
          <Header.Item>
            <Textarea>Owner</Textarea>
            <Textarea>RepoName</Textarea>
            <Textarea>Branch</Textarea>
          </Header.Item>
          <Header.Item>
            <Avatar
              src="https://github.com/octocat.png"
              size={80}
              square
              alt="@octocat"
            />
          </Header.Item>
        </PageLayout.Header>
        <SplitContainer param={param} />
      </PageLayout>
    </Box>
  );
}
