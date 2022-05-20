import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import NavBar from "./components/views/NavBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTables } from "./redux/tablesRedux";
import TablesPage from "./components/pages/TablesPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/table/:id" element={ <TablesPage /> } />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
