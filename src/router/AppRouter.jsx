import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { AuthContext, LoginPage } from "../auth"
import { HeroesRoutes } from "../heroes"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"


export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <>
        
            <Routes>
                
                <Route path="/login/*" element={
                    <PublicRoute>
                        <Routes>
                            <Route path="/*" element={<LoginPage />}/>
                        </Routes>
                    </PublicRoute>                 
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute> 
                } />
                
            </Routes> 

        </>
    )
}
