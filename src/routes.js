import { lazy } from "react"
import Home from "./components/Home"
const AuthProfile = lazy(() => import("./components/AuthProfile"))
const Login = lazy(() => import("./components/Login"))
const RepoDetails = lazy(() => import("./components/RepoDetails"))
const Search = lazy(() => import("./components/Search"))
const UserProfile = lazy(() => import("./components/UserProfile"))
const Users = lazy(() => import("./components/Users"))

export const appRoutes = [
    {
        path:"/",
        component: Home,
        requireAuth: false
    },
    {
        path:"/repo-detail/:name/:username",
        component:RepoDetails,
        requireAuth:false
    },
    {
        path:"/users",
        component:Users,
        requireAuth:false
    },
    {
        path:"/users/:username",
        component:UserProfile,
        requireAuth:false
    },
    {
        path:"/search",
        component:Search,
        requireAuth:false
    },
    {
        path:"/auth",
        component:AuthProfile,
        requireAuth:true 
    },
    {
        path:"/login",
        component:Login,
        requireAuth:false 
    }

]