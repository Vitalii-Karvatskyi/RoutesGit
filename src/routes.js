import AuthProfile from "./components/AuthProfile"
import Home from "./components/Home"
import Login from "./components/Login"
import RepoDetails from "./components/RepoDetails"
import Search from "./components/Search"
import UserProfile from "./components/UserProfile"
import Users from "./components/Users"

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