import Balance from "@/pages/Balance";
import Home from "@/pages/Home";
import Settings from "@/pages/Settings";

const routes = [
    { path: '*', element: Home },
    { path: '/balance', element: Balance },
    { path: '/settings', element: Settings },
];

export { routes };