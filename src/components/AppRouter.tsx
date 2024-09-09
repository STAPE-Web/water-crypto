import { routes } from "@/router";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route
                    path={route.path}
                    element={<route.element />}
                    key={index}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;