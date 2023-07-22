import { Box } from "@primer/react";
import SplitContainer from "../components/SplitContainer";
import "./CodePage.css";
import { Button, Header, IconButton, Textarea } from "@primer/react";
import { SidebarCollapseIcon, SidebarExpandIcon } from "@primer/octicons-react";
import { useState } from "react";

export default function CodePage({ param, setShowEditor }) {
  // state for managing files collapse or expand
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <Box bg="canvas.default" width="100%" minHeight="100vh">
      <div className="headerFlex">
        <Header
          sx={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-between",
          }}
        >
          <Header.Item>
            <div className="repoNameDiv">{`${param.owner} / ${param.name}`}</div>
            <div>{`Branch`}</div>
          </Header.Item>
          <Header.Item
            sx={{
              justifyContent: "flex-end",
            }}
          >
            <div className="closeBtnDiv">
              <Button variant="danger" onClick={() => setShowEditor(false)}>
                Close
              </Button>
            </div>
            <div className="repoInfoDiv">
              <div>
                {isSidebarCollapsed ? (
                  <IconButton
                    onClick={() => setIsSidebarCollapsed(false)}
                    aria-label="expand"
                    icon={SidebarExpandIcon}
                    sx={{ ml: 2 }}
                  />
                ) : (
                  <IconButton
                    onClick={() => setIsSidebarCollapsed(true)}
                    aria-label="collapse"
                    icon={SidebarCollapseIcon}
                    sx={{ ml: 2 }}
                  />
                )}
              </div>
            </div>
          </Header.Item>
        </Header>
      </div>
      <SplitContainer param={param} isSidebarCollapsed={isSidebarCollapsed} />
    </Box>
  );
}
