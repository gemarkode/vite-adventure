import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/loading";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const Start = lazy(() => import("../pages/Start"));
const Stage = lazy(() => import("../pages/Stage"));
const OnProgress = lazy(() => import("../pages/OnProgress"));

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/start" element={<Start />} />
            <Route path="/stage/:id" element={<Stage />} />
            <Route path="/on-progress" element={<OnProgress />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
