import classes from "./App.module.css";
import Header from "../src/Header/Header";
import { AddNewList } from "../src/AddNewList/AddNewList";
import Footer from "../src/UI/Footer/Footer";

function App() {
    return (
        <div className={classes.App}>
            <Header />
            <AddNewList />
            <Footer />
        </div>
    );
}

export default App;
