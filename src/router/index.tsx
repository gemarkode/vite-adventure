import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/loading";

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const Home = lazy(() => import("../pages/Home"));
const Start = lazy(() => import("../pages/Start"));
const Stage = lazy(() => import("../pages/Stage"));
const DetailStage = lazy(() => import("../pages/stages/DetailStage"));

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/start" element={<Start />} />
            <Route path="/stage" element={<Stage />}>
              <Route path=":id" element={<DetailStage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
