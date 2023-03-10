import { Outlet, createBrowserRouter, RouterProvider} from "react-router-dom";
import "./App.css";
import Portfolio from './components/Portfolio'
import Home from './components/Home'
import Contact from './components/Contact'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Quiz from './components/examples/QuizApp/QuizApp';
import Pokemon from "./components/examples/Pokemon/Pokemon";
import ToDo from "./components/examples/To-Do/ToDo";
import LocalStorage from "./components/examples/LocalStorage/LocalStorage";
import Interval from "./components/examples/Inteval/Interval";
import ShoppingList from "./components/examples/ShoppingList/ShoppingList";
import Slots from "./components/examples/Slots/Slots";
import TicTacToe from "./components/examples/TicTacToe/TicTacToe";
import ColorPicker from "./components/examples/ColorPicker/ColorPicker";
import DogImage from "./api/DogImage/DogImage";
import Api from "./components/Api";
import DadJokes from "./api/Dadjoke/DadJokes";
import BlogPage from "./components/BlogPage";
import About from "./components/About";


const Root = () => {
    const theme = createTheme();

    return (

        <div className="container">
            <div className="nav">
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <ResponsiveAppBar />
                </ThemeProvider>
            </div>
            <div className="content">
                <Outlet />
            </div>
            <div className="footer">

            </div>
        </div>
    );
}


const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            children: [
                {
                    path: "",
                    element: <Home />
                },
                {
                    path: "Portfolio",
                    element: <Portfolio />
                },
                {
                    path: "Contact",
                    element: <Contact />
                },
                {
                    path: "Api",
                    element: <Api/>
                },
                {
                    path: "Quiz",
                    element: <Quiz />
                },
                {
                    path: "Pokemon",
                    element: <Pokemon />
                },
                {
                    path: "ToDo",
                    element: <ToDo />
                },
                {
                    path: "LocalStorage",
                    element: <LocalStorage />
                },
                {
                    path: "Interval",
                    element: <Interval />
                },
                {
                    path: "ShoppingList",
                    element: <ShoppingList />
                },
                {
                    path: "Slots",
                    element: <Slots/>
                },
                {
                    path: "TicTacToe",
                    element: <TicTacToe/>
                },
                {
                    path: "ColorPicker",
                    element: <ColorPicker/>
                },
                {
                    path: "DogImage",
                    element: <DogImage/>
                },
                {
                    path: "DadJokes",
                    element: <DadJokes/>
                },
                {
                    path: "Blog",
                    element: <BlogPage/>
                },
                {
                    path: "About",
                    element: <About/>
                }
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App; 