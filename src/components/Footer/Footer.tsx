"use client"
import styles from "./Footer.module.css";
import React, {useEffect, useState} from "react";
import FormattedIcon from "../Icons/formattedIcon";
import PropTypes from "prop-types";

type props = React.ComponentProps<"footer">;

const Footer = ({ ...delegated }) => {
    const [githubInfo, setGitHubInfo] = useState({
        stars: null,
        forks: null,
    });


    return (
        <div className={styles.footer}>
            <a className={styles.styledgithublink}
                href="https://github.com/TEAM-DOTTEL"
                target="_blank"
                rel="nofollow noopener noreferrer">
                <div>
                    Designed &amp; Built by <strong>Kishore Kumar and Janagan</strong>
                </div>
            </a>
        </div>
    );
};

Footer.propTypes = {
    githubInfo: PropTypes.object,
};

export default Footer;
