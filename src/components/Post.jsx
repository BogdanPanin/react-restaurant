import React from "react";
import heart from "../assets/images/heart.png";
import heartBlack from "../assets/images/heart-black.jpg";

function Post({ author, header, text, folowing, img }) {
  let liter = author.charAt(0);
  let [like, setLike] = React.useState(0);
  let [visible, setVisible] = React.useState(false);
  let countLike = (like) => {
    if (visible === false) {
      setLike(like + 1);
      setVisible(true);
    } else {
      setLike(like - 1);
      setVisible(false);
    }
  };
  return (
    <div className="blog col-12 col-sm-12 col-xs-12 col-md-12 col-lg-12">
      <img className="blog-img" src={img} alt="img"></img>
      <div className="blog-content">
        <div className="blog-cirlce">{liter}</div>
        <div className="profil">
          <h4 className="profil-title">{author}</h4>
          <h4 className="profil-title-sub">4 дней назад · 1 мин. чтения</h4>
        </div>
        <h2 className="blog-title">{header}</h2>
        <p className="blog-text">{text}</p>
        <div className="blog-footer">
          <div className="blog-footer-info">
            <h4 className="blog-footer-info-text one ">
              Просмотров: {folowing}
            </h4>
            <h4 className="blog-footer-info-text two">Комментировать</h4>
          </div>
          <div className="blog-footer-heart">
            <span className="heart-number">{like}</span>
            <div
              className="blog-footer-heart-img"
              onClick={() => countLike(like)}
            >
              {visible === true ? (
                <img src={heart} alt="" className="heart" />
              ) : (
                <img src={heartBlack} alt="" className="heart" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
