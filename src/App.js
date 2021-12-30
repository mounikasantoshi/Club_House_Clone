import "./App.css";
import PlanLayOut from "./pages/LayOut/PlanLayOut";
import AllowNotifications from "./pages/AllowNotifications";
import Welcome from "./pages/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Route
        exact
        path={["/", "/invite", "/code_confirm", "/allow_notifications"]}
        element={<Welcome />}
      > */}
      <PlanLayOut>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/invite" element={<PhoneConfirmation />} />
          <Route exact path="/code_confirm" element={<CodeConfirm />} />
          <Route
            exact
            path="/allow_notifications"
            element={<AllowNotifications />}
          />
        </Routes>
      </PlanLayOut>
      {/* </Route> */}
    </BrowserRouter>
  );
}

export default App;
