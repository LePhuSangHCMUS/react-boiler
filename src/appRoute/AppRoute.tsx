import React from "react"
import routes from "@Configs/routes/index"
import {Switch} from "react-router"
import RouterWithLayout from "./RouteWithLayout"
const AppRouter = ()=>{
    return <Switch>
    {
     routes.map(({page,layout,path,isPrivate,...rest},index)=>{
        return  <RouterWithLayout key={index} component ={page} layout={layout} path={path} isPrivate={isPrivate} {...rest} />
      }  
    )
}
    </Switch>
}
export default AppRouter;