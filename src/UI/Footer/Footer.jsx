import React from "react";
import classes from "../Footer/Footer.module.css";

const footer = () => (
    <div className={classes.Footer}>
        <p className={classes.FooterName}>®2021 Made by Alex </p>
        <a className={classes.FooterLink} href="https://pixabay.com/">Images from PIXABAY</a>
    </div>
);

export default footer;
