import { Box, CssBaseline, styled } from "@mui/material";
import React, { lazy } from "react";
import { Outlet, RouteObject } from "react-router-dom";
import ContainerAnimation from "../components/ContainerAnimation";
import Loader from "../components/variants/Loader";
//TODO -----  ROUTER
const Nav = lazy(() => import("../components/nav"));
const NavSuport = lazy(() => import("../components/NavSuport"));
const Login = lazy(() => import("../page/auth/Login"));
const Home = lazy(() => import("../page/Home"));
const Introduction = lazy(() => import("../page/Introduction"));
const Dashboard = lazy(() => import("../components/_layout/Dashboard"));
const NavDragAndDrop = lazy(() => import("../components/NavDragAndDrop"));
const Tabmain = lazy(() => import("../components/Tabmain"));



//TODO -----  ROUTER
const SuspenseElementParent: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <React.Suspense fallback={<Loader />}>
      {props.children}
    </React.Suspense>
  );
};

const AnimationBox = styled('div')(({ theme }) => ({
  width: 200,
  height: 200,
  backgroundColor: "yellow"
}));

export const NotAuth: RouteObject = {
  path: "/",
  element: (
    <SuspenseElementParent>
      <Box sx={{
        flexGrow: 1, backgroundColor: 'primary.bg', flex: "1 100%", minHeight: "100vh"
      }}>
        <Nav >
        </Nav>
        <Box sx={{
          flexGrow: 1, flex: "1 100%", alignItems: "center", display: "flex", justifyContent: "center"
        }}>
          <ContainerAnimation />
        </Box>
        <Outlet />
      </Box >
    </SuspenseElementParent >
  ),
  children: [
    { index: true, element: <Introduction /> },
    { path: "/about", element: <Introduction /> },
    { path: "/me", element: "Me" },
    { path: "*", element: "Can not Page" },
  ],
};


export const Auth: RouteObject = {
  path: "/dashboard",
  element: (
    <SuspenseElementParent>
      <Box sx={{
        display: 'flex', flexGrow: 1, backgroundColor: 'primary.bg', flex: "1 100%", minHeight: "100vh"
      }}>
        <CssBaseline />
        <NavDragAndDrop > <Tabmain /> </NavDragAndDrop>
      </Box >
    </SuspenseElementParent >
  ),
  children: [
    { index: true, element: <Introduction /> },
  ],
};

