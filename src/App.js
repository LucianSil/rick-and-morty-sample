import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Layout from "./components/layout/layout";

import AboutPage from "./pages/about";
import CharacterPage from "./pages/character";
import CharactersPage from "./pages/characters";
import HomePage from "./pages/home";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/characters",
        element: <CharactersPage />,
      },
      {
        path: "/characters/:id",
        loader: async (props) => {
          const {
            params: { id },
          } = props;

          const characterData = await axios.get(
            `https://rickandmortyapi.com/api/character/${id}`
          );

          return characterData.data;
        },
        element: <CharacterPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
