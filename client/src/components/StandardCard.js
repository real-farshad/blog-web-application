import viewsIcon from "../assets/views.svg";
import commentsIcon from "../assets/comments.svg";
import "../styles/StandardCard.scss";

export default function StandardCard({ data }) {
    const { title, thumbnailURL, category, commentCount } = data;

    let viewCount = data.viewCount;
    if (viewCount >= 1000) viewCount = `${(viewCount / 1000).toFixed(1)}k`;

    return (
        <div className="standard-card">
            <div className="standard-card__image">
                <img src={thumbnailURL} alt={title} />
            </div>
            <h1 className="standard-card__title">{title}</h1>
            <div className="standard-card__details">
                <div className="details__category">{category.title}</div>
                <div className="details__views">
                    <img src={viewsIcon} alt="views" />
                    <div>{viewCount}</div>
                </div>
                <div className="details__comments">
                    <img src={commentsIcon} alt="comments" />
                    <div>{commentCount}</div>
                </div>
            </div>
        </div>
    );
}
