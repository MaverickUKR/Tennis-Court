import "./TennisBenefits.scss";
import React, { useEffect, useRef } from "react";
import StrengthIcon from "../../assets/images/TennisBenefits/strength.png";
import StaminaIcon from "../../assets/images/TennisBenefits/stamina.png";
import NostressIcon from "../../assets/images/TennisBenefits/nostress.png";
import TeamplayIcon from "../../assets/images/TennisBenefits/teamplay.png";
import BrainIcon from "../../assets/images/TennisBenefits/brain.png";
import HeartIcon from "../../assets/images/TennisBenefits/heartbeat.png";
import NoageIcon from "../../assets/images/TennisBenefits/noage.png";
import Muscles from "../../assets/images/TennisBenefits/muscles.png";

const TennisBenefits = () => {
  const benefitsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        root: null, // observing entries relative to the viewport
        rootMargin: "0px",
        threshold: 0.1, // adjust this value based on when you want the item to be revealed
      }
    );

    const { current } = benefitsRef;
    if (current) {
      const items = current.querySelectorAll(".benefits__item");
      items.forEach((item) => {
        observer.observe(item);
      });
    }
    return () => {
      if (current) {
        const items = current.querySelectorAll(".benefits__item");
        items.forEach((item) => {
          observer.unobserve(item);
        });
      }
    };
  }, []);

  return (
    <>
      <div ref={benefitsRef} className="tennisBenefits__container">
        <div id="TennisBenefits" className="tennisBenefits">
          <div className="benefits__item">
            <img
              className="benefits__icon"
              alt="tennis"
              src={StrengthIcon}
            ></img>
            <h2 className="benefits__title">Покращення фізичної форми:</h2>
            <h4 className="benefits__text">
              Теніс - це відмінний спосіб покращити загальну фізичну форму,
              включаючи силу, гнучкість та витривалість. Гра змушує тіло активно
              рухатися, сприяючи спалюванню калорій та зміцненню м'язів.
            </h4>
          </div>
          <div className="benefits__item">
            <img
              className="benefits__icon"
              alt="tennis"
              src={StaminaIcon}
            ></img>
            <h2 className="benefits__title">Підвищення координації рухів:</h2>
            <h4 className="benefits__text">
              Теніс вимагає хорошої координації ока та руки, а також здатності
              швидко реагувати на рух м'яча. Регулярна гра допомагає розвинути
              ці навички.
            </h4>
          </div>
          <div className="benefits__item">
            <img
              className="benefits__icon"
              alt="tennis"
              src={NostressIcon}
            ></img>
            <h2 className="benefits__title">Зменшення стресу:</h2>
            <h4 className="benefits__text">
              Теніс не лише фізичне, але й ментальне випробування. Гра допомагає
              зменшити стрес та анксіозність, відволікаючи від повсякденних
              проблем і концентруючись на грі.
            </h4>
          </div>
          <div className="benefits__item">
            <img
              className="benefits__icon"
              alt="tennis"
              src={TeamplayIcon}
            ></img>
            <h2 className="benefits__title">Покращення соціальних навичок:</h2>
            <h4 className="benefits__text">
              Теніс часто грається з партнером або в групах, що сприяє
              спілкуванню та встановленню нових контактів. Це також чудова
              можливість для спільних тренувань та змагань.
            </h4>
          </div>
          <div className="benefits__item">
            <img className="benefits__icon" alt="tennis" src={BrainIcon}></img>
            <h2 className="benefits__title">Підвищення когнітивних функцій:</h2>
            <h4 className="benefits__text">
              Гра в теніс вимагає стратегічного мислення та планування, що може
              покращити когнітивні функції, такі як прийняття рішень та
              розв'язання проблем.
            </h4>
          </div>
          <div className="benefits__item">
            <img className="benefits__icon" alt="tennis" src={HeartIcon}></img>
            <h2 className="benefits__title">
              Поліпшення серцево-судинної системи:
            </h2>
            <h4 className="benefits__text">
              Інтенсивність гри в теніс сприяє зміцненню серцево-судинної
              системи, покращуючи кровообіг та знижуючи ризик захворювань серця.
            </h4>
          </div>
          <div className="benefits__item">
            <img className="benefits__icon" alt="tennis" src={NoageIcon}></img>
            <h2 className="benefits__title">Версатильність та доступність:</h2>
            <h4 className="benefits__text">
              Теніс можна грати в різному віці та на різних рівнях підготовки,
              що робить його доступним і привабливим для широкого кола людей.
            </h4>
          </div>
          <div className="benefits__item">
            <img className="benefits__icon" alt="tennis" src={Muscles}></img>
            <h2 className="benefits__title">Універсальність:</h2>
            <h4 className="benefits__text">
              Під час занять великим тенісом задіяно практично всі групи м’язів.
              Це дозволяє формувати гарну гармонійно розвинену фігуру, не
              вдаючись до різних вправ та занять на кількох тренажерах для
              опрацювання різних груп м’язів.
            </h4>
          </div>
        </div>
        <div className="benefits__result">
          <h2 className="benefits__result-text">
            Враховуючи всі ці переваги, теніс є чудовим вибором для тих, хто
            шукає активне та здорове хобі, що приносить користь як тілу, так і
            розуму.
          </h2>
        </div>
      </div>
    </>
  );
};

export default TennisBenefits;
