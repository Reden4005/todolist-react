import classes from "./App.module.css";
import Header from "../src/Header/Header";
import { DashBoard } from "./Dashboard/DashBoard";
import Footer from "../src/UI/Footer/Footer";

function App() {
    return (
        <div className={classes.App}>
            <Header />
            <DashBoard />
            <Footer />
        </div>
    );
}

export default App;
