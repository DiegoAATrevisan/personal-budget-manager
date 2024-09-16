import { useState } from "react"
import Home from "../../pages/home"
import Dashboard from "../../pages/dashborad"
import Sobre from "../../pages/sobre"

enum RouterPages {
    'home' = 'home',
    'dashboard' = 'dashboard',
    'sobre' = 'sobre'
}

const Router = () => {
    const [getActualPage, setActualPage] = useState<RouterPages>(RouterPages.home)

    const renderButtons = () => {
        <div>
            <nav>
                <ul>
                    <li><button onClick={() => setActualPage(RouterPages.home)}>Home</button></li>
                    <li><button onClick={() => setActualPage(RouterPages.dashboard)}>Dashboard</button></li>
                    <li><button onClick={() => setActualPage(RouterPages.sobre)}>Sobre</button></li>
                </ul>
            </nav>
        </div>
    }

    const renderContent = () => {
        switch (getActualPage) {
            case RouterPages.home:
                return <Home></Home>
            case RouterPages.dashboard:
                return <Dashboard></Dashboard>
            case RouterPages.sobre:
                return <Sobre></Sobre>
            default:
                return <Home></Home>
        }
    }

    return (
        <>
            {renderButtons()}
            {renderContent()}
        </>
    )
}

export default Router;