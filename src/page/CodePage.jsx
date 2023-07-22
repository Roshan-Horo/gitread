import { Header, Box, PageLayout } from "@primer/react";
import SplitContainer from "../components/SplitContainer";

export default function CodePage({ param }) {
  return (
    <Box bg="canvas.default" width="100%" minHeight="100vh">
      <PageLayout></PageLayout>
      <SplitContainer param={param} />
    </Box>
  );
}
