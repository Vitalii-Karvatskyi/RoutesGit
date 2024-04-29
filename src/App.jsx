import { Suspense, useEffect, useState } from "react";
import {
  Outlet,
  Link,
  Route,
  Routes,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { appRoutes } from "./routes";

function App() {
  const [userName, setUserName] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();

  return (
    <SwitchTransition component={null}>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <Suspense fallback={() => <h1>Loading...</h1>}>
          <Routes location={location}>
            {appRoutes.map((route) => {
              if (route.requireAuth && !isLogged) {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<Navigate replace to="/login" />}
                  />
                );
              } else {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={
                      <route.component
                        setIsLogged={setIsLogged}
                        setUserName={setUserName}
                        userName={userName}
                      />
                    }
                  />
                );
              }
            })}
          </Routes>
        </Suspense>
      </CSSTransition>
    </SwitchTransition>
  );
}

export default App;
