import React from "react";
import { BrowserRouter , Switch , Route} from "react-router-dom";
import EditProfile from "../page/editprofile/editprofile";
import Login from "../page/login/login";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/editprofile">
                <EditProfile/>
            </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
