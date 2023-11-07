import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ColorModeContext, useMode} from "./Theme/theme";
import {ThemeProvider, CssBaseline} from "@mui/material";

import Login from "./LoginForm/Login";

function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={useMode()}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login1" element={<Login/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
