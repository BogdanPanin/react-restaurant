import React from "react";
import Post from "./Post";
import blogImg1 from "../assets/images/blogImg1.png";
import blogImg2 from "../assets/images/blogImg2.png";
import blogImg3 from "../assets/images/blogImg3.png";
import blogImg4 from "../assets/images/blogImg4.png";
import post1 from "../assets/images/gerl.webp";
import post2 from "../assets/images/book.webp";
function Section() {
  return (
    <div className="page-section">
      <div className="grid">
        <Post
          author="Bogdan Panin"
          header="О хлебе насущном"
          text="Создайте подзаголовок поста: одно-два предложения, которые кратко
              передают содержание поста и побуждают продолжить чтение Это текст
              поста. Поделитесь с..."
          folowing="10"
          img={blogImg1}
        ></Post>
        <Post
          author="Bogdan Panin"
          header="Глаза накормить: искусство сервировки"
          text="Создайте подзаголовок поста: одно-два предложения, которые кратко передают содержание поста и побуждают продолжить..."
          folowing="5"
          img={blogImg2}
        ></Post>
        <Post
          author="Bogdan Panin"
          header="Италия на вашем столе"
          text="Создайте подзаголовок поста: одно-два предложения, которые кратко
              передают содержание поста и побуждают продолжить чтение Это текст
              поста. Поделитесь с..."
          folowing="420"
          img={blogImg3}
        ></Post>
        <Post
          author="Bogdan Panin"
          header="Спаржа с травами в духовке"
          text="Создайте подзаголовок поста: одно-два предложения, которые кратко
              передают содержание поста и побуждают продолжить..."
          folowing="40"
          img={blogImg4}
        ></Post>
      </div>
      <button className="btn">Кнопка</button>
      <div className="foto-flex">
        <div className="foto">
          <div className="foto-div">
            <img src={post1} alt="img" className="foto-div-img"></img>
          </div>
          <div className="media-querry-foto">
            <div className="foto-text">
              ОТ СОфИИ
              <br />С ЛЮБОВЬЮ
            </div>
            <div className="line foto-line"></div>
            <a href="/" className="foto-link">
              Обо мне
            </a>
          </div>
        </div>
        <div className="foto two">
          <div className="foto-div">
            <img src={post2} alt="img" className="foto-div-img"></img>
          </div>
          <div className="media-querry-foto two">
            <div className="foto-text">МОИ РЕЦЕПТЫ</div>
            <div className="line foto-line"></div>
            <span className="foto-link main">Где купить:</span>
            <span className="foto-link two">Москва</span>
            <span className="foto-link sree">Дом книги</span>
            <span className="foto-link foo">Чук и Гек</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
