import { Routes, Route } from "react-router-dom";
import { routes } from "./app/routes.jsx";
import PageShell from "./components/layout/PageShell.jsx";
import ScrollToTop from "./components/layout/ScrollToTop.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<PageShell />}>
          {routes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Route>
      </Routes>
    </>
  );
}