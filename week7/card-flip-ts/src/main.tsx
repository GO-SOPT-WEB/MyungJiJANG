import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import { GlobalStyles } from "./styles/globalStyles.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    <>
      <GlobalStyles />
      <App />
    </>
  </RecoilRoot>
);
