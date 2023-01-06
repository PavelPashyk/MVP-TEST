import { Route, Routes } from "react-router-dom";
import { Details } from "../pages/Details";
import { Main } from "../pages/Main";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/details/:eventId" element={<Details />} />
    </Routes>
  );
};
