import "../styles/wallpaper.scss";

export default function wallpaper({ title, image }) {
    return (
        <div className="wallpaper">
            <img src={image} className="wallpaper__image" alt={title} />
            <div className="wallpaper__shadow" />
            <div className="wallpaper__title">
                <h1>{title}</h1>
            </div>
        </div>
    );
}
