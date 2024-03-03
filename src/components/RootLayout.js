import HomePage from "./Home";
import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";
import classes from './RootLayout.module.css';


const RootLayout = () => {


    return <>
    {/* <h1>Root Layout</h1>  */}
    {/* now this root layout will stay  in the top of every page and navigation bar will be on the top as well */}
    <MainNavigation/>
    <main className={classes.content}>
    <Outlet/>

    </main>
    </>
}

export default RootLayout;