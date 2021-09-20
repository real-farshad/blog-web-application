import { useEffect } from "react";
import loadingBackground from "../assets/loading-screen.jpg";
import "../styles/LoadingScreen.scss";

export default function LoadingScreen({ closeLoadingScreen, finishLoading }) {
    useEffect(() => {
        const finishLoadingTimer = setTimeout(() => {
            finishLoading();
            clearTimeout(finishLoadingTimer);
        }, 1000);
    }, []);

    return (
        <div className="loading-screen">
            <img className="loading-screen__background-image" src={loadingBackground} />
            <div className="loading-screen__shade" />
            <div className="loading-screen__loading">
                <div className="loading__text">
                    Loading <span>.</span> <span>.</span> <span>.</span>
                </div>
                <div className="loading__progress">
                    <div className="progress__background" />
                    <div className={`progress__bar ${closeLoadingScreen ? "progress__bar--finish-loading" : ""}`} />
                </div>
            </div>
        </div>
    );
}
