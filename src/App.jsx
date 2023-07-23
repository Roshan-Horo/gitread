import { useState } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Import Pages
import LandingPage from "./page/LandingPage";
import CodePage from "./page/CodePage";
import { useLocalStorageState } from "./hooks/useLocalStorage";

const queryClient = new QueryClient();

function App() {
  const [param, setParam] = useState({
    owner: "",
    name: "",
    branch: "",
  });
  const [showEditor, setShowEditor] = useState(false);

  // load the localstorage variables
  const [local, setLocal] = useLocalStorageState('repos')

  console.log('local : ', local)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {showEditor ? (
          <CodePage param={param} setShowEditor={setShowEditor} />
        ) : (
          <LandingPage
            param={param}
            setParam={setParam}
            setShowEditor={setShowEditor}
            setLocal={setLocal}
          />
        )}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
