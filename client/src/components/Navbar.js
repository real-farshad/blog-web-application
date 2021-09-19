import { useState } from "react";
import "../styles/Navbar.scss";

export default function Navbar() {
    const [navIsOpen, setNavIsOpen] = useState(false);

    // Step by step animation state:
    // Animations are handled by classNames and transitions
    const [animationStep, setAnimationStep] = useState({
        darkBackground: false,
        lightBackground: false,
        closeIcon: false,
        navLinks: {
            first: false,
            second: false,
            third: false,
            fourth: false,
        },
    });

    function openNav() {
        if (navIsOpen) return;

        setNavIsOpen(true);
        animationTimer("darkBackground", true);
        animationTimer("lightBackground", true, 100);
        animationTimer("closeIcon", true, 150);

        let delay = 250;
        for (let key in animationStep.navLinks) {
            animationTimer(key, true, delay);
            delay += 50;
        }
    }

    function closeNav() {
        if (!animationStep.navLinks.first) return;

        let delay = 0;
        const navLinksKeys = Object.keys(animationStep.navLinks);
        for (let key of navLinksKeys.reverse()) {
            animationTimer(key, false, delay);
            delay += 50;
        }

        animationTimer("closeIcon", false);
        animationTimer("lightBackground", false, 200);
        animationTimer("darkBackground", false, 250);

        const closeNavbar = setTimeout(() => {
            setNavIsOpen(false);
            clearTimeout(closeNavbar);
        }, 550);
    }

    function animationTimer(key, value, delay) {
        const timer = setTimeout(() => {
            // Updating the animation state without mutating it
            setAnimationStep((prevState) => {
                console.log("navLinks" in prevState);
                if (key in prevState) {
                    return { ...prevState, [key]: value };
                }

                if (key in prevState.navLinks) {
                    return {
                        ...prevState,
                        navLinks: {
                            ...prevState.navLinks,
                            [key]: value,
                        },
                    };
                }

                return prevState;
            });
            clearTimeout(timer);
        }, delay);
    }

    return (
        <nav className="standard-navbar standard-navbar--absolute-top">
            <a className="standard-navbar__brand" href="#">
                <span>Game R</span>epo
            </a>

            <ul className={`standard-navbar__navigation ${navIsOpen ? "standard-navbar__navigation--active" : ""}`}>
                <li
                    className={`navigation__link navigation__link--active ${
                        animationStep.navLinks.first ? "navigation__link--fade-in" : ""
                    }`}
                >
                    <a href="#">Blog</a>
                </li>
                <li className={`navigation__link ${animationStep.navLinks.second ? "navigation__link--fade-in" : ""}`}>
                    <a href="#">Community</a>
                </li>
                <li className={`navigation__link ${animationStep.navLinks.third ? "navigation__link--fade-in" : ""}`}>
                    <a href="#">Contact</a>
                </li>
                <li className={`navigation__link ${animationStep.navLinks.fourth ? "navigation__link--fade-in" : ""}`}>
                    <a href="#">About</a>
                </li>
            </ul>

            <div className="standard-navbar__menu-icon" onClick={openNav}>
                <div className="menu-icon__line" />
                <div className="menu-icon__line" />
                <div className="menu-icon__line" />
            </div>

            {/* Backgrounds for small screen menu and navigation links are separated */}
            {/* to have more controll over the elements and the animations */}
            <div className={`standard-navbar__menu-background ${navIsOpen ? "standard-navbar__menu-background--active" : ""}`}>
                <div className={`menu-background__dark ${animationStep.darkBackground ? "menu-background__dark--fade-in" : ""}`} />
                <div className={`menu-background__light ${animationStep.lightBackground ? "menu-background__light--slide-in" : ""}`} />
                <div
                    className={`menu-background__close-icon ${animationStep.closeIcon ? "menu-background__close-icon--fade-in" : ""}`}
                    onClick={closeNav}
                >
                    <div className="close-icon__line" />
                    <div className="close-icon__line" />
                    <div className="close-icon__line" />
                </div>
            </div>
        </nav>
    );
}
