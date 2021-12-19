import Header from "./Header"
import Principal from "./Principal"
import { BrowserRouter, Router} from "react-router-dom"

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Header/>
                    <Principal/>
            </BrowserRouter>
        </>
    )
}

export default App;