import {
  Outlet,
  RouterProvider,
  ReactRouter,
  Route,
  RootRoute,
} from "@tanstack/react-router";

import { HomePage } from "./pages/home";
import { PlayerVsPlayerPage } from "./pages/game/PlayerVsPlayerPage";
import { PlayerVsBotPage } from "./pages/game/PlayerVsBotPage";

const rootRoute = new RootRoute({
  component: () => <Outlet />,
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const gameRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/player-vs-player",
  component: PlayerVsPlayerPage,
});

const botGameRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/player-vs-bot",
  component: PlayerVsBotPage,
});

const routeTree = rootRoute.addChildren([homeRoute, gameRoute, botGameRoute]);

const router = new ReactRouter({ routeTree });

export function AppRouter() {
  return <RouterProvider router={router} />;
}
