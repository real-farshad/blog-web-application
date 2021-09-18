import headerImage from "../assets/header.jpg";
import "../styles/wallpaper.scss";

export default function wallpaper({ title }) {
    return (
        <div className="wallpaper">
            <img src={headerImage} className="wallpaper__image" />
            <div className="wallpaper__shadow" />
            <div className="wallpaper__title">
                <h1>{title}</h1>
            </div>
        </div>
    );
}
