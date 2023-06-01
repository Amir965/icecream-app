/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from "react";
import Header from "../assets/svg/headerx.svg";
import TM from "../assets/svg/tm.svg";
import WhiteArrowLeft from "../assets/svg/white-arrow-left.svg";
import BobaHash from "../assets/svg/bobaHash.svg";
import CircleStar from "../assets/svg/circleStar.svg";
import Logo from "../assets/svg/logo.svg";
import Rotate from "../assets/svg/rotate-deco.svg";
import "./content.css";
import "../../src/index.css";

const Home = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [count, setCount] = useState(1);
    const target = 6;
    const images = [
      "https://images.ctfassets.net/j8k8klriwj2h/01MWGFwgHjGFGI8nElbR9Y/7afe1d857f61eab7bb57b91edf7f4522/Salted_Ube_Smores.png?h=358&w=312&q=80&fit=fill&&fm=webp&q=80",
      "https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=358&w=312&q=80&fit=fill&&fm=webp&q=80",
      "https://images.ctfassets.net/j8k8klriwj2h/6kpjysvBK78pLbaVnrGl6x/968158796de59dea868a24a82aa6fe28/Mango_Chamoy.png?h=358&w=312&q=80&fit=fill&&fm=webp&q=80",
      "https://images.ctfassets.net/j8k8klriwj2h/qOTblA0deFa4Me5CR3RXX/523f1dfc70a5ba0aea6b2136777bdf28/Double_Espresso.png?h=358&w=312&q=80&fit=fill&&fm=webp&q=80",
      "https://images.ctfassets.net/j8k8klriwj2h/2WVude1IMt8nuLJdKfeyOz/be712e51800cf96583597e8f9cc7deb6/Strawberry_Shortcake.png?h=358&w=312&q=80&fit=fill&&fm=webp&q=80",
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, []);


    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= document.documentElement.scrollHeight - window.innerHeight) {
        setCount(1);
      }
    };

const interval = setInterval(() => {
  setCount((prevCount) => {
    if (prevCount === target) {
      clearInterval(interval);
      return prevCount;
    } else {
      return prevCount + 1;
    }
  });
}, 1000);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   arrows: true,
  // };
 

  window.addEventListener("load", function () {
    const logoElement = document.querySelector(".headerX");
    logoElement.classList.add("rotate");
  });

  window.addEventListener("load", function () {
    const logoElement = document.querySelector(".boba-title-h1", ".boba-text");
    logoElement.classList.add("animate");
  });

  function handleScroll() {
    const textElements = document.querySelectorAll(".name-a-more");

    textElements.forEach((textElement) => {
      const elementPosition = textElement.getBoundingClientRect().top;
      const scrollPosition = window.innerHeight;

      if (elementPosition < scrollPosition) {
        textElement.classList.add("animate");
      }
    });

    // Remove the scroll event listener if all text elements have been animated
    const animatedTextElements = document.querySelectorAll(
      ".name-a-more.animate"
    );
    if (animatedTextElements.length === textElements.length) {
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
  const styles1 = {
    "--66144870": "rotate(40deg)",
    "--c9557f00": "rotate(-40deg)",
    "--5b4e9b9e": "#fdcdd4",
  };
  const styles2 = {
    "--66144870": "rotate(24deg)",
    "--c9557f00": "rotate(-24deg)",
    "--5b4e9b9e": "#dc2132",
  };
  const styles3 = {
    "--66144870": "rotate(8deg)",
    "--c9557f00": "rotate(-8deg)",
    "--5b4e9b9e": "#f9db00",
  };
  const styles4 = {
    "--66144870": "rotate(-8deg)",
    "--c9557f00": "rotate(8deg)",
    "--5b4e9b9e": "#c09a7f",
  };
  const styles5 = {
    "--66144870": "rotate(-24deg)",
    "--c9557f00": "rotate(24deg)",
    "--5b4e9b9e": "#9f4c87",
  };
  const styles6 = {
    "--66144870": "rotate(-40deg)",
    "--c9557f00": "rotate(40deg)",
    "--5b4e9b9e": "#ae233a",
  };
  const stylesF1 = {
    "--align": "center",
    "--alignMobile": "center",
    "--xs": "66.66666666666666%",
    "--sm": "66.66666666666666%",
    "--md": "66.66666666666666%",
    "--lg": "66.66666666666666%",
    "--xl": "66.66666666666666%",
    "--xxl": "66.66666666666666%",
  };
  const stylesF2 = {
    "--align": "center",
    "--alignMobile": "center",
    "--xs": "66.66666666666666%",
    "--sm": "66.66666666666666%",
    "--md": "66.66666666666666%",
    "--lg": "66.66666666666666%",
    "--xl": "66.66666666666666%",
    "--xxl": "66.66666666666666%",
  };
  const stylesF3 = {
    align: "center",
    alignMobile: "center",
    xs: "66.66666666666666%",
    sm: "66.66666666666666%",
    md: "66.66666666666666%",
    lg: "66.66666666666666%",
    xl: "66.66666666666666%",
    xxl: "66.66666666666666%",
  };
  const stylesF4 = {
    "--align": "center",
    "--alignMobile": "center",
    "--xs": "66.66666666666666%",
    "--sm": "66.66666666666666%",
    "--md": "66.66666666666666%",
    "--lg": "66.66666666666666%",
    "--xl": "66.66666666666666%",
    "--xxl": "66.66666666666666%",
  };
  const stylesF5 = {
    "--align": "center",
    "--alignMobile": "center",
    "--xs": "66.66666666666666%",
    "--sm": "66.66666666666666%",
    "--md": "66.66666666666666%",
    "--lg": "66.66666666666666%",
    "--xl": "66.66666666666666%",
    "--xxl": "66.66666666666666%",
  };
  const stylesF6 = {
    "--align": "center",
    "--alignMobile": "center",
    "--xs": "66.66666666666666%",
    "--sm": "66.66666666666666%",
    "--md": "66.66666666666666%",
    "--lg": "66.66666666666666%",
    "--xl": "66.66666666666666%",
    "--xxl": "66.66666666666666%",
  };
  const stylesF7 = {
    "--align": "center",
    "--align-mobile": "center",
    "--xs": "100%",
    "--sm": "100%",
    "--md": "100%",
    "--lg": "100%",
    "--xl": "100%",
    "--xxl": "100%",
  };
  const stylesE1 = {
    "--align": "center",
    "--align-mobile": "center",
    "--xs": "113.99999999999999%",
    "--sm": "113.99999999999999%",
    "--md": "113.99999999999999%",
    "--lg": "113.99999999999999%",
    "--xl": "113.99999999999999%",
    "--xxl": "113.99999999999999%",
  };
  const stylesE2 = {
    "--5f8288ba": "170.9422011084719vw",
  };
  const stylesE3 = {
    "--097bfce4": "#f4b9c8",
    "--694d7035": "#ef1525",
    "--316e7b7c": "#ea1b0e",
  };
  const stylesE4 = {
    "--097bfce4": "#f4b9c8",
    "--694d7035": "#ef1525",
    "--316e7b7c": "#ea1b0e",
  };
  const stylesE5 = {
    "--align": "center",
    "--align-mobile": "center",
    "--xs": "0%",
    "--sm": "0%",
    "--md": "0%",
    "--lg": "0%",
    "--xl": "0%",
    "--xxl": "0%",
  };
  const stylesE6 = {
    "--097bfce4": "#fdee9a",
    "--694d7035": "#ffc106",
    "--316e7b7c": "#ef1525",
  };
  const stylesE7 = {
    "--align": "center",
    "--align-mobile": "center",
    "--xs": "54%",
    "--sm": "48.43%",
    "--md": "48.43%",
    "--lg": "48.43%",
    "--xl": "43.5%",
    "--xxl": "43.5%",
  };
  const stylesE8 = {
    "--097bfce4": "#d4b6d4",
    "--694d7035": "#b595bf",
    "--316e7b7c": "#90629d",
  };
  const stylesE9 = {
    "--097bfce4": "#ffd249",
    "--694d7035": "#ea1b0e",
    "--316e7b7c": "#ef1525",
  };
  const stylesE10 = {
    "--097bfce4": "#e27391",
    "--694d7035": "#bf4c6b",
    "--316e7b7c": "#bf4c6b",
  };
  const stylesE11 = {
    "--097bfce4": "#b09675",
    "--694d7035": "#604442",
    "--316e7b7c": "#604442",
  };
  return (
    <div>
      <div>
        <main>
          <div
            data-id="waypoint-10"
            className="synchronized-waypoint navigation px-0-875 px-sm-1-75 px-xl-2 py-0-75 py-lg-1-25 position-absolute t-0 l-0 w-100 on-top white"
            data-v-582e57fe
          >
            <div
              data-preset="opacity,y"
              data-fromy={-100}
              data-delay=".1"
              className="should-animate row align-items-center justify-content-between boba-text"
              data-v-582e57fe
              style={{ opacity: 1 }}
            >
              <a
                href="/"
                className="f5 f10-sm f10-2-1-xl router-link-exact-active router-link-active"
                data-v-582e57fe
                aria-current="page"
              >
                <svg
                  viewBox="0 0 172 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="white logo"
                  data-v-582e57fe=""
                >
                  <path
                    d="M8.25962 11.8689C9.67925 11.2236 10.7117 9.933 10.7117 7.22281V6.83564C10.7117 2.06055 9.29208 0.382812 4.25887 0.382812H0V24.6455H4.38792C9.55019 24.6455 11.2279 22.9677 11.2279 18.3217V17.0311C11.2279 14.0628 9.93736 12.6432 8.25962 11.8689ZM4.00075 4.51262H4.38792C6.45283 4.51262 6.84 4.89979 6.84 6.83564V7.73904C6.84 9.80394 6.32377 10.0621 4.38792 10.0621H4.00075V4.51262ZM7.09811 18.1926C7.09811 20.2575 6.45283 20.7738 4.38792 20.7738H4.00075V14.1919H4.38792C6.45283 14.1919 7.09811 14.7081 7.09811 16.773V18.1926Z"
                    data-v-582e57fe=""
                  ></path>
                  <path
                    d="M23.2307 6.95719V18.1851C23.2307 23.0893 21.2949 25.0251 17.6813 25.0251C14.0677 25.0251 12.1318 23.0893 12.1318 18.1851V6.95719C12.1318 2.05304 14.0677 0.117188 17.6813 0.117188C21.2949 0.117188 23.2307 2.05304 23.2307 6.95719ZM19.1009 7.2153C19.1009 4.89228 18.8428 4.11794 17.5522 4.11794C16.2616 4.11794 16.0035 4.89228 16.0035 7.2153V17.927C16.0035 20.25 16.2616 21.0244 17.5522 21.0244C18.8428 21.0244 19.1009 20.25 19.1009 17.927V7.2153Z"
                    data-v-582e57fe=""
                  ></path>
                  <path
                    d="M35.2318 17.1602V18.4507C35.2318 22.9677 33.5541 24.6455 28.3918 24.7745H24.0039V0.382812H28.3918C33.425 0.382812 34.8447 2.06055 34.8447 6.83564V7.22281C34.8447 9.933 33.8122 11.2236 32.3926 11.8689C33.9413 12.6432 35.2318 14.0628 35.2318 17.1602ZM30.8439 6.83564C30.8439 4.77074 30.4567 4.51262 28.3918 4.51262H28.0047V10.1911H28.3918C30.1986 10.1911 30.8439 9.80394 30.8439 7.8681V6.83564ZM28.1337 14.0628V20.6447H28.5209C30.7148 20.6447 31.2311 20.2575 31.2311 18.0636V16.5149C31.2311 14.45 30.4567 13.9338 28.5209 13.9338H28.1337V14.0628Z"
                    data-v-582e57fe=""
                  ></path>
                  <path
                    d="M43.3629 24.6455L42.9758 20.2575H40.0075L39.4912 24.6455H35.4905L38.7169 0.382812H44.2663L47.3637 24.6455H43.3629ZM40.3946 16.2568H42.5886L41.5561 4.77074L40.3946 16.2568Z"
                    data-v-582e57fe=""
                  ></path>
                  <path
                    d="M71.755 24.6455V0.382812H75.7558V24.6455H71.755Z"
                    data-v-582e57fe=""
                  ></path>
                  <path
                    d="M87.759 10.3127H83.7583V7.2153C83.7583 4.89228 83.5002 4.11794 82.2096 4.11794C80.919 4.11794 80.6609 4.89228 80.6609 7.2153V17.927C80.6609 20.25 80.919 21.0244 82.2096 21.0244C83.5002 21.0244 83.7583 20.25 83.7583 17.927V14.8296H87.759V18.1851C87.759 23.0893 85.8232 25.0251 82.2096 25.0251C78.596 25.0251 76.6602 23.0893 76.6602 18.1851V6.95719C76.6602 2.05304 78.596 0.117188 82.2096 0.117188C85.8232 0.117188 87.759 2.05304 87.759 6.95719V10.3127Z"
                    data-v-582e57fe=""
                  ></path>
                  <path
                    d="M97.0496 0.382812V4.38357H92.7907V10.4492H97.0496V14.579H92.7907V20.6447H97.0496V24.6455H88.6609V0.382812H97.0496Z"
                    data-v-582e57fe=""
                  ></path>
                  <path
                    d="M113.7 10.3127H109.699V7.2153C109.699 4.89228 109.441 4.11794 108.15 4.11794C106.86 4.11794 106.601 4.89228 106.601 7.2153V17.927C106.601 20.25 106.86 21.0244 108.15 21.0244C109.441 21.0244 109.699 20.25 109.699 17.927V14.8296H113.7V18.1851C113.7 23.0893 111.764 25.0251 108.15 25.0251C104.537 25.0251 102.601 23.0893 102.601 18.1851V6.95719C102.472 2.05304 104.537 0.117188 108.021 0.117188C111.506 0.117188 113.57 2.05304 113.57 6.95719V10.3127H113.7Z"
                    data-v-582e57fe=""
                  ></path>
                  <path
                    d="M125.702 22.5805C125.702 23.4839 125.702 24.3873 126.089 24.7745H122.089C121.83 24.3873 121.701 23.4839 121.701 22.5805V17.9345C121.701 15.7405 120.669 15.4824 118.991 15.4824H118.604V24.6455H114.603V0.382812H118.862C124.153 0.382812 125.702 2.18961 125.702 6.9647V8.77149C125.702 11.4817 124.928 13.2885 123.25 14.3209C124.799 14.9662 125.702 16.2568 125.702 18.7088V22.5805ZM121.701 7.09376C121.701 5.02885 121.056 4.51262 118.862 4.51262H118.604V11.4817H118.862C121.056 11.4817 121.701 10.8364 121.701 8.90055V7.09376Z"
                    data-v-582e57fe=""
                  ></path>
                  <path
                    d="M134.993 0.382812V4.38357H130.734V10.4492H134.993V14.579H130.734V20.6447H134.993V24.6455H126.604V0.382812H134.993Z"
                    data-v-582e57fe=""
                  ></path>
                  <path
                    d="M143.641 24.6455L143.254 20.2575H140.286L139.898 24.6455H135.898L138.995 0.382812H144.544L147.642 24.6455H143.641ZM140.673 16.2568H142.867L141.834 4.77074L140.673 16.2568Z"
                    data-v-582e57fe=""
                  ></path>
                  <path
                    d="M155.643 15.7405L158.998 0.511869H162.999V24.6455H158.998V13.0304L156.675 24.7745H154.61L152.287 13.0304V24.6455H148.286V0.382812H152.287L155.643 15.7405Z"
                    data-v-582e57fe=""
                  ></path>
                  <path
                    d="M166.74 0.891226V2.56896H166.095V0.891226H165.192V0.375H167.515V0.891226H166.74ZM168.418 2.56896H167.902V0.375H168.805L169.321 1.40745C169.321 1.53651 169.45 1.66557 169.579 1.92368L169.838 1.40745L170.354 0.375H171.128V2.56896H170.354V1.40745C170.354 1.40745 170.354 1.14934 170.354 0.76217V1.14934L170.225 1.53651L169.709 2.69802H169.321L168.805 1.53651L168.547 0.891226C168.547 1.2784 168.547 1.40745 168.547 1.53651V2.56896H168.418Z"
                    data-v-582e57fe=""
                  ></path>
                  <path
                    d="M62.3345 12.6444L66.0772 16.387L63.496 18.9682L59.7534 15.2255L55.8817 19.0972L53.1715 16.387L57.0432 12.5153L53.3006 8.77269L55.8817 6.19156L59.6243 9.9342L63.496 6.0625L66.2062 8.77269L62.3345 12.6444Z"
                    data-v-582e57fe=""
                  ></path>
                </svg>
                <span className="indented" data-v-582e57fe>
                  Boba Ice Cream Home Page
                </span>
              </a>
              <div
                className="f5 f10-sm f10-2-1-xl d-flex col justify-content-end align-items-center gutter pp-bold"
                data-v-582e57fe
              >
                <a
                  href="/our-story"
                  className="text-uppercase link mx-0-75 no-wrap"
                  data-v-582e57fe
                >
                  Our Story
                </a>
              </div>
            </div>
          </div>
          <div
            className="popup-button f5 f10-1-sm f10-1-xl shrinked"
            data-v-4c4f7eb1=""
          >
            <a
              href="https://shop.bobaicecream.com/collections/frontpage/products/ice-cream-package"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center cursor-pointer follow-circle d-inline-block"
              data-v-4c4f7eb1
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate(0px, 0px)",
                opacity: 1,
              }}
            >
              <svg
                viewBox="0 0 291 305"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-100 h-100"
                data-v-4c4f7eb1
              >
                <defs data-v-4c4f7eb1>
                  <filter id="blur-filter" x={0} y={0} data-v-4c4f7eb1>
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation={20}
                      data-v-4c4f7eb1
                    />
                  </filter>{" "}
                  <clipPath id="ball-mask" data-v-4c4f7eb1>
                    <path
                      id="Vector"
                      d="M47.38 118.122C45.8855 118.122 44.1774 117.701 42.8964 117.069C38.4127 114.541 36.7046 108.852 39.0532 104.428C53.7853 77.6719 79.1929 57.4469 108.871 49.0198C113.781 47.5451 119.119 50.4945 120.614 55.3401C122.108 60.1857 119.119 65.4527 114.208 66.9274C89.4413 74.0904 68.0904 90.9446 55.7069 113.487C53.9988 116.226 50.7962 118.122 47.38 118.122Z"
                      fill="#FFF193"
                      data-v-4c4f7eb1
                    />{" "}
                    <path
                      id="Vector_2"
                      d="M37 141.945C31.4681 141.945 27 137.51 27 132.019C27 126.528 31.4681 122.093 37 122.093C42.5319 122.093 47 126.528 47 132.019C47 137.51 42.5319 141.945 37 141.945Z"
                      fill="#FFF193"
                      data-v-4c4f7eb1
                    />{" "}
                    <path
                      id="Vector_3"
                      d="M8.37169 119.372C7.55171 121.25 7.00505 123.128 6.4584 125.006V125.274V125.542C5.91174 127.42 5.36509 129.298 4.81843 131.175C4.81843 131.444 4.81843 131.444 4.81843 131.712C4.27178 133.858 3.72513 135.736 3.4518 137.614C3.4518 137.882 3.4518 137.882 3.4518 138.15C2.63182 139.491 2.08516 141.369 1.81184 143.783V144.052C1.53851 145.929 1.26518 147.807 0.991856 150.221C0.718529 152.367 0.445202 154.513 0.445202 156.659V157.464C0.445202 158.805 0.171875 159.878 0.171875 161.22C0.171875 162.829 0.171875 164.439 0.171875 165.78C0.171875 202.799 14.9315 237.672 41.7176 263.96C68.5036 290.249 104.036 304.735 141.755 304.735C179.474 304.735 215.007 290.249 241.793 263.96C268.579 237.672 283.339 202.799 283.339 165.78C283.339 141.369 276.779 117.495 264.479 96.5709C262.839 93.6201 260.926 90.6693 259.013 87.9868C256.826 85.036 254.639 82.0853 252.453 79.1345C255.733 77.525 259.013 75.9155 262.566 75.1107C269.399 73.5012 290.172 71.3552 290.172 71.3552C290.172 71.3552 269.126 69.7457 262.293 68.1361C257.646 66.7949 252.999 64.6489 248.9 62.2346C244.526 59.2838 240.426 55.7965 237.146 51.5045C233.593 46.4077 230.86 41.0426 229.493 35.1411C227.58 26.557 225.667 0 225.667 0C225.667 0 223.753 26.557 221.84 35.1411C220.747 39.9696 218.834 44.2617 216.1 48.5537C193.961 34.8728 167.995 27.3618 141.482 27.3618H139.842C139.295 27.3618 138.749 27.3618 138.475 27.3618H137.655C137.109 27.3618 136.562 27.3618 136.015 27.3618C135.742 27.3618 135.469 27.3618 134.922 27.3618C89.2765 29.5078 47.4575 53.3823 22.5847 90.9376V91.2059C21.4914 92.8154 20.6714 94.4249 19.5781 96.0344C19.5781 96.0344 19.5781 96.3027 19.3048 96.3027C18.2115 97.9122 17.3915 99.5217 16.2982 101.399L16.0248 101.668C15.2049 103.277 14.3849 105.155 13.2916 107.033C13.2916 107.033 13.2916 107.301 13.0182 107.301C12.1983 109.179 11.3783 110.788 10.5583 112.666C10.5583 112.934 10.285 112.934 10.285 113.203C9.465 115.08 8.91834 116.69 8.09836 118.568L8.37169 119.372ZM132.462 279.519C99.9363 279.519 69.3236 267.179 46.0908 245.183C22.5847 222.918 9.19167 193.41 8.09836 161.756C8.09836 160.683 8.09836 159.342 8.37169 158.269V157.464C8.64501 155.318 8.64501 153.44 8.91834 151.294C9.19167 149.148 9.465 147.271 9.73832 145.393C9.73832 145.125 9.73832 145.125 9.73832 144.856C10.0116 142.71 10.5583 140.833 10.8316 139.223C10.8316 139.223 10.8316 139.223 10.8316 138.955C11.105 137.345 11.6516 135.468 12.1983 133.322V133.053C12.7449 131.175 13.2916 129.298 13.8382 127.688V127.42V127.152C14.3849 125.542 14.9315 123.664 15.7515 121.787L16.0248 121.518C16.8448 119.641 17.3915 118.031 18.2115 116.153V115.885C19.0314 114.544 19.8514 112.666 20.6714 111.057C20.6714 111.057 20.6714 111.057 20.6714 110.788C20.6714 110.788 20.6714 110.788 20.6714 110.52C21.4914 108.642 22.3114 107.033 23.1313 105.423C23.1313 105.423 23.1313 105.155 23.4047 105.155C24.498 103.277 25.318 101.668 26.1379 100.326C26.1379 100.326 26.1379 100.326 26.1379 100.058C27.2313 98.4487 28.0512 96.8392 29.1445 95.2296C29.1445 95.2296 29.1445 94.9614 29.4179 94.9614C52.924 59.5521 92.2831 37.2871 135.195 35.4093C135.469 35.4093 136.015 35.4093 136.289 35.4093C136.562 35.4093 137.109 35.4093 137.382 35.4093H137.929C163.895 35.9458 187.674 44.5299 206.807 58.7473C205.167 60.0886 203.801 61.1616 202.161 62.2346C198.061 64.9171 193.414 66.7949 188.768 68.1361C181.934 69.7457 161.162 71.8917 161.162 71.8917C161.162 71.8917 181.934 74.0377 188.768 75.6472C193.414 76.9885 198.061 79.1345 202.161 81.5488C206.534 84.4995 210.634 87.9868 213.914 92.2789C217.467 97.3757 220.2 102.741 221.567 108.642C223.48 117.226 225.393 143.783 225.393 143.783C225.393 143.783 227.307 117.226 229.22 108.642C230.86 102.741 233.32 97.1074 236.873 92.2789C237.146 92.0106 237.42 91.7424 237.42 91.4741C249.446 110.52 256.279 133.053 256.279 157.196C256.826 224.796 201.067 279.519 132.462 279.519Z"
                      fill="#FFF193"
                      data-v-4c4f7eb1
                    />
                  </clipPath>
                </defs>{" "}
                <circle
                  id="Ellipse 639"
                  cx="137.5"
                  cy="163.734"
                  r="129.5"
                  fill="#FFD249"
                  data-v-4c4f7eb1
                />{" "}
                <g id="ball" data-v-4c4f7eb1>
                  <path
                    id="Vector"
                    d="M47.38 118.122C45.8855 118.122 44.1774 117.701 42.8964 117.069C38.4127 114.541 36.7046 108.852 39.0532 104.428C53.7853 77.6719 79.1929 57.4469 108.871 49.0198C113.781 47.5451 119.119 50.4945 120.614 55.3401C122.108 60.1857 119.119 65.4527 114.208 66.9274C89.4413 74.0904 68.0904 90.9446 55.7069 113.487C53.9988 116.226 50.7962 118.122 47.38 118.122Z"
                    fill="#FFF193"
                    data-v-4c4f7eb1
                  />{" "}
                  <path
                    id="Vector_2"
                    d="M37 141.945C31.4681 141.945 27 137.51 27 132.019C27 126.528 31.4681 122.093 37 122.093C42.5319 122.093 47 126.528 47 132.019C47 137.51 42.5319 141.945 37 141.945Z"
                    fill="#FFF193"
                    data-v-4c4f7eb1
                  />{" "}
                  <path
                    id="Vector_3"
                    d="M8.37169 119.372C7.55171 121.25 7.00505 123.128 6.4584 125.006V125.274V125.542C5.91174 127.42 5.36509 129.298 4.81843 131.175C4.81843 131.444 4.81843 131.444 4.81843 131.712C4.27178 133.858 3.72513 135.736 3.4518 137.614C3.4518 137.882 3.4518 137.882 3.4518 138.15C2.63182 139.491 2.08516 141.369 1.81184 143.783V144.052C1.53851 145.929 1.26518 147.807 0.991856 150.221C0.718529 152.367 0.445202 154.513 0.445202 156.659V157.464C0.445202 158.805 0.171875 159.878 0.171875 161.22C0.171875 162.829 0.171875 164.439 0.171875 165.78C0.171875 202.799 14.9315 237.672 41.7176 263.96C68.5036 290.249 104.036 304.735 141.755 304.735C179.474 304.735 215.007 290.249 241.793 263.96C268.579 237.672 283.339 202.799 283.339 165.78C283.339 141.369 276.779 117.495 264.479 96.5709C262.839 93.6201 260.926 90.6693 259.013 87.9868C256.826 85.036 254.639 82.0853 252.453 79.1345C255.733 77.525 259.013 75.9155 262.566 75.1107C269.399 73.5012 290.172 71.3552 290.172 71.3552C290.172 71.3552 269.126 69.7457 262.293 68.1361C257.646 66.7949 252.999 64.6489 248.9 62.2346C244.526 59.2838 240.426 55.7965 237.146 51.5045C233.593 46.4077 230.86 41.0426 229.493 35.1411C227.58 26.557 225.667 0 225.667 0C225.667 0 223.753 26.557 221.84 35.1411C220.747 39.9696 218.834 44.2617 216.1 48.5537C193.961 34.8728 167.995 27.3618 141.482 27.3618H139.842C139.295 27.3618 138.749 27.3618 138.475 27.3618H137.655C137.109 27.3618 136.562 27.3618 136.015 27.3618C135.742 27.3618 135.469 27.3618 134.922 27.3618C89.2765 29.5078 47.4575 53.3823 22.5847 90.9376V91.2059C21.4914 92.8154 20.6714 94.4249 19.5781 96.0344C19.5781 96.0344 19.5781 96.3027 19.3048 96.3027C18.2115 97.9122 17.3915 99.5217 16.2982 101.399L16.0248 101.668C15.2049 103.277 14.3849 105.155 13.2916 107.033C13.2916 107.033 13.2916 107.301 13.0182 107.301C12.1983 109.179 11.3783 110.788 10.5583 112.666C10.5583 112.934 10.285 112.934 10.285 113.203C9.465 115.08 8.91834 116.69 8.09836 118.568L8.37169 119.372ZM132.462 279.519C99.9363 279.519 69.3236 267.179 46.0908 245.183C22.5847 222.918 9.19167 193.41 8.09836 161.756C8.09836 160.683 8.09836 159.342 8.37169 158.269V157.464C8.64501 155.318 8.64501 153.44 8.91834 151.294C9.19167 149.148 9.465 147.271 9.73832 145.393C9.73832 145.125 9.73832 145.125 9.73832 144.856C10.0116 142.71 10.5583 140.833 10.8316 139.223C10.8316 139.223 10.8316 139.223 10.8316 138.955C11.105 137.345 11.6516 135.468 12.1983 133.322V133.053C12.7449 131.175 13.2916 129.298 13.8382 127.688V127.42V127.152C14.3849 125.542 14.9315 123.664 15.7515 121.787L16.0248 121.518C16.8448 119.641 17.3915 118.031 18.2115 116.153V115.885C19.0314 114.544 19.8514 112.666 20.6714 111.057C20.6714 111.057 20.6714 111.057 20.6714 110.788C20.6714 110.788 20.6714 110.788 20.6714 110.52C21.4914 108.642 22.3114 107.033 23.1313 105.423C23.1313 105.423 23.1313 105.155 23.4047 105.155C24.498 103.277 25.318 101.668 26.1379 100.326C26.1379 100.326 26.1379 100.326 26.1379 100.058C27.2313 98.4487 28.0512 96.8392 29.1445 95.2296C29.1445 95.2296 29.1445 94.9614 29.4179 94.9614C52.924 59.5521 92.2831 37.2871 135.195 35.4093C135.469 35.4093 136.015 35.4093 136.289 35.4093C136.562 35.4093 137.109 35.4093 137.382 35.4093H137.929C163.895 35.9458 187.674 44.5299 206.807 58.7473C205.167 60.0886 203.801 61.1616 202.161 62.2346C198.061 64.9171 193.414 66.7949 188.768 68.1361C181.934 69.7457 161.162 71.8917 161.162 71.8917C161.162 71.8917 181.934 74.0377 188.768 75.6472C193.414 76.9885 198.061 79.1345 202.161 81.5488C206.534 84.4995 210.634 87.9868 213.914 92.2789C217.467 97.3757 220.2 102.741 221.567 108.642C223.48 117.226 225.393 143.783 225.393 143.783C225.393 143.783 227.307 117.226 229.22 108.642C230.86 102.741 233.32 97.1074 236.873 92.2789C237.146 92.0106 237.42 91.7424 237.42 91.4741C249.446 110.52 256.279 133.053 256.279 157.196C256.826 224.796 201.067 279.519 132.462 279.519Z"
                    fill="#FFF193"
                    data-v-4c4f7eb1
                  />
                </g>{" "}
                <g clipPath="url(#ball-mask)" data-v-4c4f7eb1>
                  <rect
                    transform="rotate(-20 0 0)"
                    filter="url(#blur-filter)"
                    x={-200}
                    y={-10}
                    fill="white"
                    width={100}
                    height={370}
                    data-v-4c4f7eb1
                  />
                </g>
              </svg>
              <div className="text-wrapper" data-v-4c4f7eb1>
                <h6
                  className="f7 f10-1-sm f10-1-xl color-red4 d-none d-md-block mb-0-25 no-wrap"
                  data-v-4c4f7eb1
                >
                  ORDER
                  <br />
                  BOBA ICE CREAM
                </h6>
                <h6
                  className="f7 f10-1-sm color-red4 d-md-none mb-0-25"
                  data-v-4c4f7eb1
                >
                  ORDER
                </h6>
                <h6
                  className="f7 f10-1-sm f10-1-xl color-red d-none d-md-block text-uppercase"
                  data-v-4c4f7eb1
                >
                  set of 6
                </h6>
                <h6
                  className="f7 f10-1-sm color-red d-md-none text-uppercase no-wrap"
                  data-v-4c4f7eb1
                >
                  the set
                </h6>
              </div>
            </a>
          </div>

          <div
            className="lenis-scroll desktop-version lenis lenis-smooth"
            delay={0.15}
          >
            <div className="scroller overflow-hidden">
              {/* working on basic div */}
              <div className="basic-page">
                <div
                  data-id="waypoint-24"
                  className="synchronized-waypoint hero position-relative color-whitev2"
                  style={{ opacity: 1 }}
                  data-v-1971ac8c=" "
                >
                  <div
                    className="hero-slider position-absolute w-100 h-100 t-0 l-0 z-4 "
                    data-v-a772eacc=" "
                    data-v-1971ac8c=" "
                  >
                    <div className="full-absolute z-4 " data-v-a772eacc=" ">
                      <div
                        className="hero-slide position-absolute hero-slide full-absolute "
                        style={{
                          backgroundColor: "rgb(253, 205, 212)",
                          zIndex: 16,
                        }}
                        data-v-8218c6fe=" "
                        data-v-a772eacc=" "
                        transitioning="true "
                      >
                        <div
                          data-preset="opacity,scale "
                          data-fromscale=".8 "
                          data-delay=".1 "
                          className="hero-slide-image-wrapper position-absolute b-0 d-inline-block should-animate "
                          data-v-8218c6fe=" "
                          style={{
                            opacity: 1,
                            transform:
                              "translate(-50%, 0%) translate3d(0px, 0px, 0px) scale(0.9996, 0.999577)",
                          }}
                        >
                          <div
                            className="d-inline-block w-100 hero-slide-image-inner-wrapper "
                            data-v-8218c6fe=" "
                          >
                            <figure
                              className="spd overflow-hidden circles-svg d-block hero-slide-image position-relative "
                              style={stylesF1}
                              data-v-23b40a86=" "
                              data-v-8218c6fe=" "
                            >
                              <div data-v-23b40a86=" " className=" ">
                                <picture data-v-23b40a86=" ">
                                  <source
                                    media="(min-width:1920px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/7CBhnYrVhy99PUjfY3peZ2/ad1f3746bfc654b19f6f27fac14238af/Boba_x_Ice_Cream_Strawberry.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80
    1x, https://images.ctfassets.net/j8k8klriwj2h/7CBhnYrVhy99PUjfY3peZ2/ad1f3746bfc654b19f6f27fac14238af/Boba_x_Ice_Cream_Strawberry.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:1200px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/7CBhnYrVhy99PUjfY3peZ2/ad1f3746bfc654b19f6f27fac14238af/Boba_x_Ice_Cream_Strawberry.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80
    1x, https://images.ctfassets.net/j8k8klriwj2h/7CBhnYrVhy99PUjfY3peZ2/ad1f3746bfc654b19f6f27fac14238af/Boba_x_Ice_Cream_Strawberry.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:768px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/7CBhnYrVhy99PUjfY3peZ2/ad1f3746bfc654b19f6f27fac14238af/Boba_x_Ice_Cream_Strawberry.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80
    1x, https://images.ctfassets.net/j8k8klriwj2h/7CBhnYrVhy99PUjfY3peZ2/ad1f3746bfc654b19f6f27fac14238af/Boba_x_Ice_Cream_Strawberry.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:420px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/7CBhnYrVhy99PUjfY3peZ2/ad1f3746bfc654b19f6f27fac14238af/Boba_x_Ice_Cream_Strawberry.png?w=768&amp;q=80&amp;&amp;fm=webp&amp;q=80
    1x, https://images.ctfassets.net/j8k8klriwj2h/7CBhnYrVhy99PUjfY3peZ2/ad1f3746bfc654b19f6f27fac14238af/Boba_x_Ice_Cream_Strawberry.png?w=998&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:0px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/7CBhnYrVhy99PUjfY3peZ2/ad1f3746bfc654b19f6f27fac14238af/Boba_x_Ice_Cream_Strawberry.png?w=420&amp;q=80&amp;&amp;fm=webp&amp;q=80
    1x, https://images.ctfassets.net/j8k8klriwj2h/7CBhnYrVhy99PUjfY3peZ2/ad1f3746bfc654b19f6f27fac14238af/Boba_x_Ice_Cream_Strawberry.png?w=546&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <img
                                    draggable="false "
                                    loading="eager "
                                    alt="Strawberry Shortcake – Karaoke Night hero "
                                    className="w-100 h-100 position-absolute t-0 l-0 picture contain bg-center "
                                    data-v-23b40a86=" "
                                  />
                                </picture>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hero-slide position-absolute hero-slide full-absolute "
                        style={{
                          backgroundColor: "rgb(220, 33, 50)",
                          zIndex: 11,
                        }}
                        data-v-8218c6fe=" "
                        data-v-a772eacc=" "
                        transitioning="true "
                      >
                        <div
                          data-preset="opacity,scale "
                          data-fromscale=".8 "
                          data-delay=".1 "
                          className="hero-slide-image-wrapper position-absolute b-0 d-inline-block should-animate "
                          data-v-8218c6fe=" "
                          style={{
                            opacity: 1,
                            transform: "translate(-50%, 0%)",
                          }}
                        >
                          <div
                            className="d-inline-block w-100 hero-slide-image-inner-wrapper "
                            data-v-8218c6fe=" "
                          >
                            <figure
                              className="spd overflow-hidden circles-svg d-block hero-slide-image position-relative "
                              style={stylesF2}
                              data-v-23b40a86=" "
                              data-v-8218c6fe=" "
                            >
                              <div data-v-23b40a86=" " className=" ">
                                <picture data-v-23b40a86=" ">
                                  <source
                                    media="(min-width:1920px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/5Lso8VjH7uRCu9bv3kLjK9/376520c0a570d33422a7ae59d2d24a55/Boba_x_Ice_Cream_Mango.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
    https://images.ctfassets.net/j8k8klriwj2h/5Lso8VjH7uRCu9bv3kLjK9/376520c0a570d33422a7ae59d2d24a55/Boba_x_Ice_Cream_Mango.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:1200px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/5Lso8VjH7uRCu9bv3kLjK9/376520c0a570d33422a7ae59d2d24a55/Boba_x_Ice_Cream_Mango.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
    https://images.ctfassets.net/j8k8klriwj2h/5Lso8VjH7uRCu9bv3kLjK9/376520c0a570d33422a7ae59d2d24a55/Boba_x_Ice_Cream_Mango.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:768px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/5Lso8VjH7uRCu9bv3kLjK9/376520c0a570d33422a7ae59d2d24a55/Boba_x_Ice_Cream_Mango.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
    https://images.ctfassets.net/j8k8klriwj2h/5Lso8VjH7uRCu9bv3kLjK9/376520c0a570d33422a7ae59d2d24a55/Boba_x_Ice_Cream_Mango.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:420px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/5Lso8VjH7uRCu9bv3kLjK9/376520c0a570d33422a7ae59d2d24a55/Boba_x_Ice_Cream_Mango.png?w=768&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
    https://images.ctfassets.net/j8k8klriwj2h/5Lso8VjH7uRCu9bv3kLjK9/376520c0a570d33422a7ae59d2d24a55/Boba_x_Ice_Cream_Mango.png?w=998&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:0px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/5Lso8VjH7uRCu9bv3kLjK9/376520c0a570d33422a7ae59d2d24a55/Boba_x_Ice_Cream_Mango.png?w=420&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/5Lso8VjH7uRCu9bv3kLjK9/376520c0a570d33422a7ae59d2d24a55/Boba_x_Ice_Cream_Mango.png?w=546&amp;q=80&amp;&amp;fm=webp&amp;q=80
    2x "
                                    data-v-23b40a86=" "
                                  />
                                  <img
                                    draggable="false "
                                    loading="eager "
                                    alt="Mango Chamoy hero "
                                    className="w-100 h-100 position-absolute t-0 l-0 picture contain bg-center "
                                    data-v-23b40a86=" "
                                  />
                                </picture>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hero-slide position-absolute hero-slide full-absolute "
                        style={{
                          backgroundColor: "rgb(249, 219, 0)",
                          zIndex: 12,
                        }}
                        data-v-8218c6fe=" "
                        data-v-a772eacc=" "
                        transitioning="true "
                      >
                        <div
                          data-preset="opacity,scale "
                          data-fromscale=".8 "
                          data-delay=".1 "
                          className="hero-slide-image-wrapper position-absolute b-0 d-inline-block should-animate "
                          data-v-8218c6fe=" "
                          style={{
                            opacity: 1,
                            transform: "translate(-50%, 0%)",
                          }}
                        >
                          <div
                            className="d-inline-block w-100 hero-slide-image-inner-wrapper "
                            data-v-8218c6fe=" "
                          >
                            <figure
                              className="spd overflow-hidden circles-svg d-block hero-slide-image position-relative "
                              style={stylesF3}
                              data-v-23b40a86=" "
                              data-v-8218c6fe=" "
                            >
                              <div data-v-23b40a86=" " className=" ">
                                <picture data-v-23b40a86=" ">
                                  <source
                                    media="(min-width:1920px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/3W5W2yk2jbULRv1yTamjli/77e529d150811ed9ce12997c9c14c9b9/Boba_x_Ice_Cream_Banana.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80
    1x, https://images.ctfassets.net/j8k8klriwj2h/3W5W2yk2jbULRv1yTamjli/77e529d150811ed9ce12997c9c14c9b9/Boba_x_Ice_Cream_Banana.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:1200px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/3W5W2yk2jbULRv1yTamjli/77e529d150811ed9ce12997c9c14c9b9/Boba_x_Ice_Cream_Banana.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80
    1x, https://images.ctfassets.net/j8k8klriwj2h/3W5W2yk2jbULRv1yTamjli/77e529d150811ed9ce12997c9c14c9b9/Boba_x_Ice_Cream_Banana.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:768px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/3W5W2yk2jbULRv1yTamjli/77e529d150811ed9ce12997c9c14c9b9/Boba_x_Ice_Cream_Banana.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
    https://images.ctfassets.net/j8k8klriwj2h/3W5W2yk2jbULRv1yTamjli/77e529d150811ed9ce12997c9c14c9b9/Boba_x_Ice_Cream_Banana.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:420px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/3W5W2yk2jbULRv1yTamjli/77e529d150811ed9ce12997c9c14c9b9/Boba_x_Ice_Cream_Banana.png?w=768&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
    https://images.ctfassets.net/j8k8klriwj2h/3W5W2yk2jbULRv1yTamjli/77e529d150811ed9ce12997c9c14c9b9/Boba_x_Ice_Cream_Banana.png?w=998&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:0px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/3W5W2yk2jbULRv1yTamjli/77e529d150811ed9ce12997c9c14c9b9/Boba_x_Ice_Cream_Banana.png?w=420&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
    https://images.ctfassets.net/j8k8klriwj2h/3W5W2yk2jbULRv1yTamjli/77e529d150811ed9ce12997c9c14c9b9/Boba_x_Ice_Cream_Banana.png?w=546&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <img
                                    draggable="false "
                                    loading="eager "
                                    alt="Gooey Fried Banana hero "
                                    className="w-100 h-100 position-absolute t-0 l-0 picture contain bg-center "
                                    data-v-23b40a86=" "
                                  />
                                </picture>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hero-slide position-absolute hero-slide full-absolute "
                        style={{
                          backgroundColor: "rgb(192, 154, 127)",
                          zIndex: 13,
                        }}
                        data-v-8218c6fe=" "
                        data-v-a772eacc=" "
                        transitioning="true "
                      >
                        <div
                          data-preset="opacity,scale "
                          data-fromscale=".8 "
                          data-delay=".1 "
                          className="hero-slide-image-wrapper position-absolute b-0 d-inline-block should-animate "
                          data-v-8218c6fe=" "
                          style={{
                            opacity: 1,
                            transform: "translate(-50%, 0%)",
                          }}
                        >
                          <div
                            className="d-inline-block w-100 hero-slide-image-inner-wrapper "
                            data-v-8218c6fe=" "
                          >
                            <figure
                              className="spd overflow-hidden circles-svg d-block hero-slide-image position-relative "
                              style={stylesF4}
                              data-v-23b40a86=" "
                              data-v-8218c6fe=" "
                            >
                              <div data-v-23b40a86=" " className=" ">
                                <picture data-v-23b40a86=" ">
                                  <source
                                    media="(min-width:1920px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/2Zl30O4YWEJChOS2MIgMN8/52572654d3fe4ba241a80bfa75a67dd8/Boba_x_Ice_Cream_Muracoffee.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80
    1x, https://images.ctfassets.net/j8k8klriwj2h/2Zl30O4YWEJChOS2MIgMN8/52572654d3fe4ba241a80bfa75a67dd8/Boba_x_Ice_Cream_Muracoffee.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:1200px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/2Zl30O4YWEJChOS2MIgMN8/52572654d3fe4ba241a80bfa75a67dd8/Boba_x_Ice_Cream_Muracoffee.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80
    1x, https://images.ctfassets.net/j8k8klriwj2h/2Zl30O4YWEJChOS2MIgMN8/52572654d3fe4ba241a80bfa75a67dd8/Boba_x_Ice_Cream_Muracoffee.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:768px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/2Zl30O4YWEJChOS2MIgMN8/52572654d3fe4ba241a80bfa75a67dd8/Boba_x_Ice_Cream_Muracoffee.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80
    1x, https://images.ctfassets.net/j8k8klriwj2h/2Zl30O4YWEJChOS2MIgMN8/52572654d3fe4ba241a80bfa75a67dd8/Boba_x_Ice_Cream_Muracoffee.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:420px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/2Zl30O4YWEJChOS2MIgMN8/52572654d3fe4ba241a80bfa75a67dd8/Boba_x_Ice_Cream_Muracoffee.png?w=768&amp;q=80&amp;&amp;fm=webp&amp;q=80
    1x, https://images.ctfassets.net/j8k8klriwj2h/2Zl30O4YWEJChOS2MIgMN8/52572654d3fe4ba241a80bfa75a67dd8/Boba_x_Ice_Cream_Muracoffee.png?w=998&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:0px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/2Zl30O4YWEJChOS2MIgMN8/52572654d3fe4ba241a80bfa75a67dd8/Boba_x_Ice_Cream_Muracoffee.png?w=420&amp;q=80&amp;&amp;fm=webp&amp;q=80
    1x, https://images.ctfassets.net/j8k8klriwj2h/2Zl30O4YWEJChOS2MIgMN8/52572654d3fe4ba241a80bfa75a67dd8/Boba_x_Ice_Cream_Muracoffee.png?w=546&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <img
                                    draggable="false "
                                    loading="eager "
                                    alt="Double Espresso hero "
                                    className="w-100 h-100 position-absolute t-0 l-0 picture contain bg-center "
                                    data-v-23b40a86=" "
                                  />
                                </picture>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hero-slide position-absolute hero-slide full-absolute "
                        style={{
                          backgroundColor: "rgb(159, 76, 135)",
                          zIndex: 14,
                        }}
                        data-v-8218c6fe=" "
                        data-v-a772eacc=" "
                        transitioning="true "
                      >
                        <div
                          data-preset="opacity,scale "
                          data-fromscale=".8 "
                          data-delay=".1 "
                          className="hero-slide-image-wrapper position-absolute b-0 d-inline-block should-animate "
                          data-v-8218c6fe=" "
                          style={{
                            opacity: 1,
                            transform: "translate(-50%, 0%)",
                          }}
                        >
                          <div
                            className="d-inline-block w-100 hero-slide-image-inner-wrapper "
                            data-v-8218c6fe=" "
                          >
                            <figure
                              className="spd overflow-hidden circles-svg d-block hero-slide-image position-relative "
                              style={stylesF5}
                              data-v-23b40a86=" "
                              data-v-8218c6fe=" "
                            >
                              <div data-v-23b40a86=" " className=" ">
                                <picture data-v-23b40a86=" ">
                                  <source
                                    media="(min-width:1920px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/1OjxEwoD5tTfRWuEMzPKyt/e7b2f8dc1ce2a88eb170ed5c2bb43aba/Boba_x_Ice_Cream_UBE.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
    https://images.ctfassets.net/j8k8klriwj2h/1OjxEwoD5tTfRWuEMzPKyt/e7b2f8dc1ce2a88eb170ed5c2bb43aba/Boba_x_Ice_Cream_UBE.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:1200px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/1OjxEwoD5tTfRWuEMzPKyt/e7b2f8dc1ce2a88eb170ed5c2bb43aba/Boba_x_Ice_Cream_UBE.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
    https://images.ctfassets.net/j8k8klriwj2h/1OjxEwoD5tTfRWuEMzPKyt/e7b2f8dc1ce2a88eb170ed5c2bb43aba/Boba_x_Ice_Cream_UBE.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:768px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/1OjxEwoD5tTfRWuEMzPKyt/e7b2f8dc1ce2a88eb170ed5c2bb43aba/Boba_x_Ice_Cream_UBE.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
    https://images.ctfassets.net/j8k8klriwj2h/1OjxEwoD5tTfRWuEMzPKyt/e7b2f8dc1ce2a88eb170ed5c2bb43aba/Boba_x_Ice_Cream_UBE.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:420px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/1OjxEwoD5tTfRWuEMzPKyt/e7b2f8dc1ce2a88eb170ed5c2bb43aba/Boba_x_Ice_Cream_UBE.png?w=768&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/1OjxEwoD5tTfRWuEMzPKyt/e7b2f8dc1ce2a88eb170ed5c2bb43aba/Boba_x_Ice_Cream_UBE.png?w=998&amp;q=80&amp;&amp;fm=webp&amp;q=80
    2x "
                                    data-v-23b40a86=" "
                                  />
                                  <source
                                    media="(min-width:0px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/1OjxEwoD5tTfRWuEMzPKyt/e7b2f8dc1ce2a88eb170ed5c2bb43aba/Boba_x_Ice_Cream_UBE.png?w=420&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/1OjxEwoD5tTfRWuEMzPKyt/e7b2f8dc1ce2a88eb170ed5c2bb43aba/Boba_x_Ice_Cream_UBE.png?w=546&amp;q=80&amp;&amp;fm=webp&amp;q=80
    2x "
                                    data-v-23b40a86=" "
                                  />
                                  <img
                                    draggable="false "
                                    loading="eager "
                                    alt="Salted Ube &amp; S 'mores hero"
                                    className="w-100 h-100 position-absolute t-0 l-0 picture contain bg-center"
                                    data-v-23b40a86=""
                                  />
                                </picture>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                      <div
                        className="hero-slide position-absolute hero-slide full-absolute"
                        style={{
                          backgroundColor: "rgb(174, 35, 58) ",
                          zIndex: 15,
                        }}
                        data-v-8218c6fe=""
                        data-v-a772eacc=""
                        transitioning="true"
                      >
                        <div
                          data-preset="opacity,scale"
                          data-fromscale=".8"
                          data-delay=".1"
                          className="hero-slide-image-wrapper position-absolute b-0 d-inline-block should-animate"
                          data-v-8218c6fe=""
                          style={{
                            opacity: 1,
                            transform: "translate(-50%, 0%) ",
                          }}
                        >
                          <div
                            className="d-inline-block w-100 hero-slide-image-inner-wrapper"
                            data-v-8218c6fe=""
                          >
                            <figure
                              className="spd overflow-hidden circles-svg d-block hero-slide-image position-relative"
                              style={stylesF6}
                              data-v-23b40a86=""
                              data-v-8218c6fe=""
                            >
                              <div data-v-23b40a86="" className="">
                                <picture data-v-23b40a86="">
                                  <source
                                    media="(min-width:1920px)"
                                    srcset="
                      https://images.ctfassets.net/j8k8klriwj2h/3R4DGEkjMI6ORb3ieGZeov/529982783301b739116f5f88fea2cde2/Boba_x_Ice_Cream_PikaChurro.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                      https://images.ctfassets.net/j8k8klriwj2h/3R4DGEkjMI6ORb3ieGZeov/529982783301b739116f5f88fea2cde2/Boba_x_Ice_Cream_PikaChurro.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                    "
                                    data-v-23b40a86=""
                                  />
                                  <source
                                    media="(min-width:1200px)"
                                    srcset="
                      https://images.ctfassets.net/j8k8klriwj2h/3R4DGEkjMI6ORb3ieGZeov/529982783301b739116f5f88fea2cde2/Boba_x_Ice_Cream_PikaChurro.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                      https://images.ctfassets.net/j8k8klriwj2h/3R4DGEkjMI6ORb3ieGZeov/529982783301b739116f5f88fea2cde2/Boba_x_Ice_Cream_PikaChurro.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                    "
                                    data-v-23b40a86=""
                                  />
                                  <source
                                    media="(min-width:768px)"
                                    srcset="
                      https://images.ctfassets.net/j8k8klriwj2h/3R4DGEkjMI6ORb3ieGZeov/529982783301b739116f5f88fea2cde2/Boba_x_Ice_Cream_PikaChurro.png?w=1200&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                      https://images.ctfassets.net/j8k8klriwj2h/3R4DGEkjMI6ORb3ieGZeov/529982783301b739116f5f88fea2cde2/Boba_x_Ice_Cream_PikaChurro.png?w=1560&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                    "
                                    data-v-23b40a86=""
                                  />
                                  <source
                                    media="(min-width:420px)"
                                    srcset="
                      https://images.ctfassets.net/j8k8klriwj2h/3R4DGEkjMI6ORb3ieGZeov/529982783301b739116f5f88fea2cde2/Boba_x_Ice_Cream_PikaChurro.png?w=768&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                      https://images.ctfassets.net/j8k8klriwj2h/3R4DGEkjMI6ORb3ieGZeov/529982783301b739116f5f88fea2cde2/Boba_x_Ice_Cream_PikaChurro.png?w=998&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                    "
                                    data-v-23b40a86=""
                                  />
                                  <source
                                    media="(min-width:0px)"
                                    srcset="
                      https://images.ctfassets.net/j8k8klriwj2h/3R4DGEkjMI6ORb3ieGZeov/529982783301b739116f5f88fea2cde2/Boba_x_Ice_Cream_PikaChurro.png?w=420&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                      https://images.ctfassets.net/j8k8klriwj2h/3R4DGEkjMI6ORb3ieGZeov/529982783301b739116f5f88fea2cde2/Boba_x_Ice_Cream_PikaChurro.png?w=546&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                    "
                                    data-v-23b40a86=""
                                  />
                                  <img
                                    draggable="false"
                                    loading="eager"
                                    alt="Churro hero"
                                    className="w-100 h-100 position-absolute t-0 l-0 picture contain bg-center"
                                    data-v-23b40a86=""
                                  />
                                </picture>
                              </div>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      bulletbounds="[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]"
                      className="circle-nav-outer-wrapper"
                      data-v-d5c0bea0=""
                      data-v-a772eacc=""
                    >
                      <div
                        className="position-absolute circle-nav-item-wrapper disabled"
                        data-v-e5bc1bb2=""
                        data-v-d5c0bea0=""
                        style={styles1}
                      >
                        <div
                          data-preset="rotate,opacity"
                          data-fromrotate="-45"
                          data-delay="0.475"
                          data-torotate="0"
                          data-dur="1.5"
                          className="should-animate full-absolute"
                          data-v-e5bc1bb2=""
                          style={{ opacity: 1 }}
                        >
                          <button
                            aria-label=" Strawberry Shortcake – Karaoke Night "
                            className="circle-nav-item d-flex flex-center enabled circle-nav-item--active
                    "
                            style={{
                              transform: "rotate(40deg) ",
                              backgroundColor: "rgb(253, 205, 212) ",
                            }}
                            data-v-e5bc1bb2=" "
                          >
                            <img
                              alt="Strawberry Shortcake – Karaoke Night "
                              loading="eager "
                              src="https://images.ctfassets.net/j8k8klriwj2h/1WtN1Zwmv00sDFElkxRSsc/604ab3ebafbc05f930c5304f648cccc7/Boba_x_Ice_Cream_r1_1L0A6292_Portrait.png?w=160&amp;fm=webp&amp;q=90 "
                              data-v-e5bc1bb2=" "
                            />
                          </button>
                        </div>
                      </div>
                      <div
                        className="position-absolute circle-nav-item-wrapper disabled "
                        data-v-e5bc1bb2=" "
                        data-v-d5c0bea0=" "
                        style={styles2}
                      >
                        <div
                          data-preset="rotate,opacity "
                          data-fromrotate="-45 "
                          data-delay="0.4 "
                          data-torotate="0 "
                          data-dur="1.5 "
                          className="should-animate full-absolute "
                          data-v-e5bc1bb2=" "
                          style={{ opacity: 1 }}
                        >
                          <button
                            aria-label="Mango Chamoy "
                            className="circle-nav-item d-flex flex-center enabled "
                            style={{
                              transform: "rotate(24deg) ",
                              backgroundColor: "rgb(220, 33, 50) ",
                            }}
                            data-v-e5bc1bb2=" "
                          >
                            <img
                              alt="Mango Chamoy "
                              loading="eager "
                              src="https://images.ctfassets.net/j8k8klriwj2h/4J1DjypXpwe0SESjjVx3Ra/9902c6adfb8edd71dc90484d57d712e9/Boba_x_Ice_Cream_r1_1L0A6353_portrait.png?w=160&amp;fm=webp&amp;q=90 "
                              data-v-e5bc1bb2=" "
                            />
                          </button>
                        </div>
                      </div>
                      <div
                        className="position-absolute circle-nav-item-wrapper disabled "
                        data-v-e5bc1bb2=" "
                        data-v-d5c0bea0=" "
                        style={styles3}
                      >
                        <div
                          data-preset="rotate,opacity "
                          data-fromrotate="-45 "
                          data-delay="0.325 "
                          data-torotate="0 "
                          data-dur="1.5 "
                          className="should-animate full-absolute "
                          data-v-e5bc1bb2=" "
                          style={{ opacity: 1 }}
                        >
                          <button
                            aria-label="Gooey Fried Banana "
                            className="circle-nav-item d-flex flex-center enabled "
                            style={{
                              transform: "rotate(8deg) ",
                              backgroundColor: "rgb(249, 219, 0) ",
                            }}
                            data-v-e5bc1bb2=" "
                          >
                            <img
                              alt="Gooey Fried Banana "
                              loading="eager "
                              src="https://images.ctfassets.net/j8k8klriwj2h/1qyfmZ4lq2uyvO46LQ8KaA/094134281099f506f15d10cc7d367a7b/Boba_x_Ice_Cream_r1_1L0A6291_Portrait.png?w=160&amp;fm=webp&amp;q=90 "
                              data-v-e5bc1bb2=" "
                            />
                          </button>
                        </div>
                      </div>
                      <div
                        className="position-absolute circle-nav-item-wrapper disabled "
                        data-v-e5bc1bb2=" "
                        data-v-d5c0bea0=" "
                        style={styles4}
                      >
                        <div
                          data-preset="rotate,opacity "
                          data-fromrotate="-45 "
                          data-delay="0.25 "
                          data-torotate="0 "
                          data-dur="1.5 "
                          className="should-animate full-absolute "
                          data-v-e5bc1bb2=" "
                          style={{ opacity: 1 }}
                        >
                          <button
                            aria-label="Double Espresso "
                            className="circle-nav-item d-flex flex-center enabled "
                            style={{
                              transform: "rotate(-8deg) ",
                              backgroundColor: "rgb(192, 154, 127) ",
                            }}
                            data-v-e5bc1bb2=" "
                          >
                            <img
                              alt="Double Espresso "
                              loading="eager "
                              src="https://images.ctfassets.net/j8k8klriwj2h/2Fzu7JvbIKfTtuyu8a4aTX/d012d41ac9502313696799eac6640963/Boba_x_Ice_Cream_r1_1L0A6324_portrait.png?w=160&amp;fm=webp&amp;q=90 "
                              data-v-e5bc1bb2=" "
                            />
                          </button>
                        </div>
                      </div>
                      <div
                        className="position-absolute circle-nav-item-wrapper disabled "
                        data-v-e5bc1bb2=" "
                        data-v-d5c0bea0=" "
                        style={styles5}
                      >
                        <div
                          data-preset="rotate,opacity "
                          data-fromrotate="-45 "
                          data-delay="0.17500000000000002 "
                          data-torotate="0 "
                          data-dur="1.5 "
                          className="should-animate full-absolute "
                          data-v-e5bc1bb2=" "
                          style={{ opacity: 1 }}
                        >
                          <button
                            aria-label=" Salted Ube &amp; S 'mores "
                            className="circle-nav-item d-flex flex-center enabled "
                            style={{
                              transform: "rotate(-24deg) ",
                              backgroundColor: "rgb(159, 76, 135) ",
                            }}
                            data-v-e5bc1bb2=" "
                          >
                            <img
                              alt="Salted Ube &amp; S 'mores "
                              loading="eager "
                              src="https://images.ctfassets.net/j8k8klriwj2h/4LMgkNbJ5NaPNfI9z6gsXA/95bbb503ad8d6e22c020df95298b7fef/Boba_x_Ice_Cream_r1_1L0A6389_Portrait.png?w=160&amp;fm=webp&amp;q=90 "
                              data-v-e5bc1bb2=" "
                            />
                          </button>
                        </div>
                      </div>
                      <div
                        className="position-absolute circle-nav-item-wrapper disabled "
                        data-v-e5bc1bb2=" "
                        data-v-d5c0bea0=" "
                        style={styles6}
                      >
                        <div
                          data-preset="rotate,opacity "
                          data-fromrotate="-45 "
                          data-delay="0.1 "
                          data-torotate="0 "
                          data-dur="1.5 "
                          className="should-animate full-absolute "
                          data-v-e5bc1bb2=" "
                          style={{ opacity: 1 }}
                        >
                          <button
                            aria-label="Churro Raspberry "
                            className="circle-nav-item d-flex flex-center enabled "
                            style={{
                              transform: "rotate(-40deg) ",
                              backgroundColor: "rgb(174, 35, 58) ",
                            }}
                            data-v-e5bc1bb2=" "
                          >
                            <img
                              alt="Churro Raspberry "
                              loading="eager "
                              src="https://images.ctfassets.net/j8k8klriwj2h/7dBwwGphzhY7t1ZV7N6y0p/f5ccdbda2ea75398a061ff8f15d0045c/Boba_x_Ice_Cream_r1_1L0A6413_Portrait.png?w=160&amp;fm=webp&amp;q=90 "
                              data-v-e5bc1bb2=" "
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="z-20 position-relative disabled px-0-625 px-sm-1-5 pt-2 pt-md-3 pt-xl-2 pb-5 pb-md-0 "
                    data-v-1971ac8c=" "
                  >
                    <div
                      data-preset="opacity,y "
                      data-delay=".1 "
                      className="row align-items-center justify-content-center justify-content-md-between pt-0-625 pt-md-0 pt-xl-1-5 mb-0-5 mb-sm-0-75 mb-lg-0-625 z-20 position-relative headline text-uppercase should-animate
                    "
                      data-v-1971ac8c=" "
                      style={{ opacity: 1 }}
                    >
                      <h1
                        className="d-inline-flex flex-column flex-sm-row align-items-center position-relative justify-content-center text-center title color-whitev2 boba-title-h1"
                        data-v-1971ac8c=" "
                      >
                        <div
                          className="position-relative d-inline-flex align-items-center "
                          data-v-1971ac8c=" "
                        >
                          <span
                            className="pp-bold d-inline-flex position-relative z-20 "
                            data-v-1971ac8c=" "
                          >
                            B
                          </span>
                          <div
                            className="d-inline-flex overflow-hidden "
                            data-v-1971ac8c=" "
                          >
                            <span
                              className="pr-0-5 pp-bold position-relative z-20 "
                              data-v-1971ac8c=" "
                            >
                              oba
                            </span>
                          </div>
                          <img
                            data-preset="rotate "
                            data-fromrotate="-300 "
                            data-torotate="0 "
                            data-dur="1.5 "
                            src={Header}
                            alt="X Symbol "
                            className="x mx-1-25 position-relative z-20 should-animate headerX"
                            data-v-1971ac8c=" "
                            style={{ opacity: 1 }}
                          />
                        </div>
                        <div
                          className="position-relative d-inline-flex "
                          data-v-1971ac8c=" "
                        >
                          <span
                            className="position-relative pp-bold d-inline-flex "
                            data-v-1971ac8c=" "
                          >
                            I
                          </span>
                          <div
                            className="d-inline-flex overflow-hidden no-wrap "
                            data-v-1971ac8c=" "
                          >
                            <span
                              className="position-relative pp-bold "
                              data-v-1971ac8c=" "
                            >
                              ce Cream
                            </span>
                          </div>
                          <img
                            src={TM}
                            alt="Boba Ice creams "
                            className="tm title "
                            data-v-1971ac8c=" "
                          />
                        </div>
                      </h1>
                    </div>
                    <h2
                      data-preset="opacity,y "
                      data-delay=".2 "
                      className="d-flex justify-content-between px-0-25 pl-xl-0-5 pr-xl-0-625 z-2 position-relative should-animate boba-title-h1"
                      data-v-1971ac8c=" "
                      style={{ opacity: 1 }}
                    >
                      <span
                        className="f6 f10-sm f9-xl z-20 pp-bold col d-flex"
                        data-v-1971ac8c=" "
                      >
                        A MAGICAL DUO
                      </span>
                      <span
                        className="f6 f10-sm f9-xl z-20 pp-bold "
                        data-v-1971ac8c=" "
                      >
                        OF BOBA
                      </span>
                      <span
                        className="f6 f10-sm f9-xl z-20 pp-bold col text-right "
                        data-v-1971ac8c=" "
                      >
                        AND ICE CREAM
                      </span>
                    </h2>
                  </div>
                </div>
                <div
                  className="bubbles position-relative z-2 disabled ctf-bubbles position-relative z-2"
                  data-v-8390fb7c=""
                  style={{ opacity: 1 }}
                >
                  <div
                    className="disabled svg-wrapper d-md-none "
                    data-v-8390fb7c=" "
                  >
                    <svg
                      viewBox="0 0 498 654"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="small-bubbles svg svg-1"
                      data-v-8390fb7c=""
                    >
                      <g id="Group 316124769" data-v-8390fb7c="">
                        <g
                          id="pink-bubble"
                          data-v-8390fb7c=""
                          data-svg-origin="170 196.69700622558594"
                          transform="matrix(1,0,0,1,0,0)"
                          class="common-svg-css"
                        >
                          <ellipse
                            id="Ellipse 617"
                            cx="170"
                            cy="196.697"
                            rx="170"
                            ry="170.697"
                            fill="#FDEEF2"
                            data-v-8390fb7c=""
                          ></ellipse>
                          <ellipse
                            id="Ellipse 614"
                            cx="170.175"
                            cy="196.873"
                            rx="165.637"
                            ry="166.335"
                            fill="#FDDDE5"
                            data-v-8390fb7c=""
                          ></ellipse>
                          <ellipse
                            id="Ellipse 613"
                            cx="169.999"
                            cy="196.697"
                            rx="159.179"
                            ry="159.877"
                            fill="#F4B9C8"
                            data-v-8390fb7c=""
                          ></ellipse>
                        </g>
                        <g
                          id="black-bubble"
                          data-v-8390fb7c=""
                          data-svg-origin="16.65820026397705 316.52500915527344"
                          transform="matrix(1,0,0,1,0,0)"
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 222"
                            cx="16.6582"
                            cy="316.525"
                            r="10.748"
                            fill="#473D36"
                            data-v-8390fb7c=""
                          ></circle>
                          <path
                            id="Vector 579"
                            d="M16.8286 313.392C20.7525 313.392 20.7525 311.213 20.7525 309.189C20.7525 311.213 20.7525 313.392 24.6764 313.392C20.7525 313.392 20.7525 316.193 20.7525 318.061C20.7525 316.193 20.7525 313.392 16.8286 313.392Z"
                            fill="#F3EFE6"
                            data-v-8390fb7c=""
                          ></path>
                        </g>
                        <g
                          id="black-bubble"
                          class="black-bubble1"
                          data-v-8390fb7c=""
                          data-svg-origin="72.10759735107422 58.10759735107422"
                          transform="matrix(1,0,0,1,0,0)"
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 595"
                            cx="72.1076"
                            cy="58.1076"
                            r="19.1076"
                            fill="#473D36"
                            data-v-8390fb7c=""
                          ></circle>
                          <path
                            id="Vector 566"
                            d="M73.1313 51.6426C81.4909 51.6426 81.4909 47.0333 81.4909 42.7533C81.4909 47.0333 81.4909 51.6426 89.8505 51.6426C81.4909 51.6426 81.4909 57.5689 81.4909 61.5197C81.4909 57.5689 81.4909 51.6426 73.1313 51.6426Z"
                            fill="#F3EFE6"
                            data-v-8390fb7c=""
                          ></path>
                        </g>
                        <g
                          id="pink-bubble"
                          data-v-8390fb7c=""
                          data-svg-origin="362 85.5"
                          transform="matrix(1,0,0,1,0,0)"
                          class="common-svg-css"
                        >
                          <ellipse
                            id="Ellipse 644"
                            cx="362"
                            cy="85.5"
                            rx="85"
                            ry="85.5"
                            fill="#FDDDE5"
                            data-v-8390fb7c=""
                          ></ellipse>
                          <circle
                            id="Ellipse 648"
                            cx="362.5"
                            cy="85.5"
                            r="74.5"
                            fill="#F4B9C8"
                            data-v-8390fb7c=""
                          ></circle>
                        </g>
                        <g
                          id="pink-bubble"
                          data-v-8390fb7c=""
                          data-svg-origin="397.5 212.5"
                          transform="matrix(1,0,0,1,0,0)"
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 646"
                            cx="397.5"
                            cy="212.5"
                            r="47.5"
                            fill="#FDDDE5"
                            data-v-8390fb7c=""
                          ></circle>
                          <ellipse
                            id="Ellipse 647"
                            cx="397.5"
                            cy="212.245"
                            rx="39.8387"
                            ry="40.0941"
                            fill="#F4B9C8"
                            data-v-8390fb7c=""
                          ></ellipse>
                        </g>
                        <g
                          id="pink-bubble"
                          data-v-8390fb7c=""
                          data-svg-origin="356 512"
                          transform="matrix(1,0,0,1,0,0)"
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 649"
                            cx="356"
                            cy="512"
                            r="142"
                            fill="#FDEEF2"
                            data-v-8390fb7c=""
                          ></circle>
                          <circle
                            id="Ellipse 206"
                            cx="356"
                            cy="512.001"
                            r="133.875"
                            fill="#FDDDE5"
                            data-v-8390fb7c=""
                          ></circle>
                          <circle
                            id="Ellipse 620"
                            cx="356"
                            cy="512.002"
                            r="125.749"
                            fill="#F4B9C8"
                            data-v-8390fb7c=""
                          ></circle>
                        </g>
                        <g
                          id="black-bubble"
                          data-v-8390fb7c=""
                          data-svg-origin="397.12303161621094 444.12303161621094"
                          transform="matrix(1,0,0,1,0,0)"
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 217"
                            cx="397.123"
                            cy="444.123"
                            r="14.1226"
                            fill="#473D36"
                            data-v-8390fb7c=""
                          ></circle>
                          <path
                            id="Vector 577"
                            d="M396.542 439.508C402.539 439.508 402.539 436.182 402.539 433.094C402.539 436.182 402.539 439.508 408.537 439.508C402.539 439.508 402.539 443.785 402.539 446.636C402.539 443.785 402.539 439.508 396.542 439.508Z"
                            fill="#F3EFE6"
                            data-v-8390fb7c=""
                          ></path>
                        </g>
                        <ellipse
                          id="pink-bubble"
                          cx="235"
                          cy="384"
                          rx="93"
                          ry="90"
                          fill="#F4B9C8"
                          data-v-8390fb7c=""
                          data-svg-origin="235 384"
                          transform="matrix(1,0,0,1,0,0)"
                          class="common-svg-css"
                        ></ellipse>
                        <g
                          id="pink-bubble"
                          data-v-8390fb7c=""
                          data-svg-origin="155 519.5"
                          transform="matrix(1,0,0,1,0,0)"
                          class="common-svg-css"
                        >
                          <ellipse
                            id="Ellipse 610"
                            cx="155"
                            cy="519.5"
                            rx="67"
                            ry="68.5"
                            fill="#FDEEF2"
                            data-v-8390fb7c=""
                          ></ellipse>
                          <ellipse
                            id="Ellipse 624"
                            cx="155"
                            cy="519.5"
                            rx="63"
                            ry="63.5"
                            fill="#FDDDE5"
                            data-v-8390fb7c=""
                          ></ellipse>
                          <ellipse
                            id="Ellipse 625"
                            cx="155"
                            cy="519.5"
                            rx="59"
                            ry="58.5"
                            fill="#F4B9C8"
                            data-v-8390fb7c=""
                          ></ellipse>
                        </g>
                        <g
                          id="pink-bubble"
                          data-v-8390fb7c=""
                          data-svg-origin="105.5 396.5"
                          transform="matrix(1,0,0,1,0,0)"
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 815"
                            cx="105.5"
                            cy="396.5"
                            r="36.5"
                            fill="#FDDDE5"
                            data-v-8390fb7c=""
                          ></circle>
                          <circle
                            id="Ellipse 816"
                            cx="105.5"
                            cy="396.5"
                            r="33.5"
                            fill="#F4B9C8"
                            data-v-8390fb7c=""
                          ></circle>
                        </g>
                        <g
                          id="black-bubble"
                          data-v-8390fb7c=""
                          data-svg-origin="354.5 308.5"
                          transform="matrix(1,0,0,1,0,0)"
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 222_2"
                            cx="354.5"
                            cy="308.5"
                            r="19.5"
                            fill="#473D36"
                            data-v-8390fb7c=""
                          ></circle>
                          <path
                            id="Vector 579_2"
                            d="M354.81 302.814C361.929 302.814 361.929 298.861 361.929 295.19C361.929 298.861 361.929 302.814 369.048 302.814C361.929 302.814 361.929 307.897 361.929 311.286C361.929 307.897 361.929 302.814 354.81 302.814Z"
                            fill="#F3EFE6"
                            data-v-8390fb7c=""
                          ></path>
                        </g>
                        <g id="Group 316124190" data-v-8390fb7c="">
                          <g
                            id="pink-bubble"
                            data-v-8390fb7c=""
                            data-svg-origin="69 556"
                            transform="matrix(1,0,0,1,0,0)"
                            class="common-svg-css"
                          >
                            <circle
                              id="Ellipse 692"
                              cx="69"
                              cy="556"
                              r="32"
                              fill="#FDEEF2"
                              data-v-8390fb7c=""
                            ></circle>
                            <circle
                              id="Ellipse 631"
                              cx="68.9999"
                              cy="556"
                              r="28.2353"
                              fill="#FDDDE5"
                              data-v-8390fb7c=""
                            ></circle>
                            <circle
                              id="Ellipse 225"
                              cx="69"
                              cy="556.004"
                              r="24.2017"
                              fill="#F4B9C8"
                              data-v-8390fb7c=""
                            ></circle>
                          </g>
                          <g
                            id="pink-bubble"
                            data-v-8390fb7c=""
                            data-svg-origin="88 480"
                            transform="matrix(1,0,0,1,0,0)"
                            class="common-svg-css"
                          >
                            <circle
                              id="Ellipse 687"
                              cx="88"
                              cy="480"
                              r="16"
                              fill="#FDDDE5"
                              data-v-8390fb7c=""
                            ></circle>
                            <circle
                              id="Ellipse 688"
                              cx="88"
                              cy="480"
                              r="13"
                              fill="#F4B9C8"
                              data-v-8390fb7c=""
                            ></circle>
                          </g>
                        </g>
                        <g
                          id="pink-bubble"
                          data-v-8390fb7c=""
                          data-svg-origin="200 602"
                          transform="matrix(1,0,0,1,0,0)"
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 691"
                            cx="200"
                            cy="602"
                            r="28"
                            fill="#FDEEF2"
                            data-v-8390fb7c=""
                          ></circle>
                          <circle
                            id="Ellipse 689"
                            cx="200"
                            cy="602"
                            r="24"
                            fill="#FDDDE5"
                            data-v-8390fb7c=""
                          ></circle>
                          <circle
                            id="Ellipse 690"
                            cx="200"
                            cy="602.004"
                            r="18.6704"
                            fill="#F4B9C8"
                            data-v-8390fb7c=""
                          ></circle>
                        </g>
                        <g
                          id="black-bubble"
                          data-v-8390fb7c=""
                          data-svg-origin="386.5 12.5"
                          transform="matrix(1,0,0,1,0,0)"
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 216"
                            cx="386.5"
                            cy="12.5"
                            r="5.5"
                            fill="#473D36"
                            data-v-8390fb7c=""
                          ></circle>
                          <path
                            id="Vector 576"
                            d="M385.941 10.9187C388.412 10.9187 388.412 9.5482 388.412 8.27563C388.412 9.5482 388.412 10.9187 390.883 10.9187C388.412 10.9187 388.412 12.6807 388.412 13.8553C388.412 12.6807 388.412 10.9187 385.941 10.9187Z"
                            fill="#F3EFE6"
                            data-v-8390fb7c=""
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <svg
                      viewBox="0 0 546 672 "
                      fill="none "
                      xmlns="http://www.w3.org/2000/svg "
                      className="svg svg-2 "
                      data-v-8390fb7c=" "
                    >
                      <g id="bubbles-2 " data-v-8390fb7c=" ">
                        <g id="Group 316124306 " data-v-8390fb7c=" ">
                          <circle
                            id="Ellipse 215 "
                            cx="421.605 "
                            cy="579.334 "
                            r="22.248 "
                            fill="#E27391 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <path
                            id="Vector 575 "
                            d="M424.507 573.336C431.085 573.336 431.085 569.725 431.085 566.371C431.085 569.725 431.085 573.336 437.663 573.336C431.085 573.336 431.085 577.979 431.085 581.074C431.085 577.979 431.085 573.336 424.507 573.336Z "
                            fill="#F3EFE6 "
                            data-v-8390fb7c=" "
                          ></path>
                        </g>
                        <g id="Group 316124308 " data-v-8390fb7c=" ">
                          <circle
                            id="Ellipse 595_2 "
                            cx="203 "
                            cy="288 "
                            r="25 "
                            fill="#E27391 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <path
                            id="Vector 566_2 "
                            d="M204.339 279.542C215.277 279.542 215.277 273.511 215.277 267.912C215.277 273.511 215.277 279.542 226.214 279.542C215.277 279.542 215.277 287.296 215.277 292.465C215.277 287.296 215.277 279.542 204.339 279.542Z "
                            fill="#F3EFE6 "
                            data-v-8390fb7c=" "
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div
                    className="disabled svg-wrapper d-none d-md-block d-lg-none "
                    data-v-8390fb7c=" "
                  >
                    <svg
                      viewBox="0 0 1070 1049 "
                      fill="none "
                      xmlns="http://www.w3.org/2000/svg "
                      className="medium-bubbles svg svg-1 "
                      data-v-8390fb7c=" "
                    >
                      <g id="Group 316124768 " data-v-8390fb7c=" ">
                        <g
                          id="pink-bubble "
                          data-v-8390fb7c=" "
                          data-svg-origin="299.6770324707031 421.8380126953125 "
                          transform="matrix(1,0,0,1,0,0) "
                          class="common-svg-css"
                        >
                          <ellipse
                            id="Ellipse 617 "
                            cx="299.677 "
                            cy="421.838 "
                            rx="299.415 "
                            ry="300.643 "
                            fill="#FDEEF2 "
                            data-v-8390fb7c=" "
                          ></ellipse>
                          <ellipse
                            id="Ellipse 614 "
                            cx="299.983 "
                            cy="422.148 "
                            rx="291.73 "
                            ry="292.96 "
                            fill="#FDDDE5 "
                            data-v-8390fb7c=" "
                          ></ellipse>
                          <ellipse
                            id="Ellipse 613 "
                            cx="299.678 "
                            cy="421.839 "
                            rx="280.356 "
                            ry="281.586 "
                            fill="#F4B9C8 "
                            data-v-8390fb7c=" "
                          ></ellipse>
                        </g>
                        <g
                          id="pink-bubble "
                          data-v-8390fb7c=" "
                          data-svg-origin="897.4909362792969 174.40501403808594 "
                          transform="matrix(1,0,0,1,0,0) "
                          class="common-svg-css"
                        >
                          <ellipse
                            id="Ellipse 619 "
                            cx="897.491 "
                            cy="174.405 "
                            rx="172.491 "
                            ry="174.405 "
                            fill="#FDDDE5 "
                            data-v-8390fb7c=" "
                          ></ellipse>
                          <ellipse
                            id="Ellipse 674 "
                            cx="897.493 "
                            cy="174.407 "
                            rx="161.486 "
                            ry="163.4 "
                            fill="#F4B9C8 "
                            data-v-8390fb7c=" "
                          ></ellipse>
                        </g>
                        <g
                          id="pink-bubble "
                          data-v-8390fb7c=" "
                          data-svg-origin="765.7880249023438 703.5380249023438 "
                          transform="matrix(1,0,0,1,0,0) "
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 649 "
                            cx="765.788 "
                            cy="703.538 "
                            r="213.163 "
                            fill="#FDEEF2 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <circle
                            id="Ellipse 206 "
                            cx="765.788 "
                            cy="703.538 "
                            r="200.965 "
                            fill="#FDDDE5 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <circle
                            id="Ellipse 620 "
                            cx="765.788 "
                            cy="703.538 "
                            r="188.768 "
                            fill="#F4B9C8 "
                            data-v-8390fb7c=" "
                          ></circle>
                        </g>
                        <g
                          id="pink-bubble "
                          data-v-8390fb7c=" "
                          data-svg-origin="678.2550048828125 313.8360137939453 "
                          transform="matrix(1,0,0,1,0,0) "
                          class="common-svg-css"
                        >
                          <ellipse
                            id="Ellipse 644 "
                            cx="678.255 "
                            cy="313.836 "
                            rx="95.2553 "
                            ry="95.8361 "
                            fill="#FDDDE5 "
                            data-v-8390fb7c=" "
                          ></ellipse>
                          <ellipse
                            id="Ellipse 648 "
                            cx="678.836 "
                            cy="313.836 "
                            rx="83.058 "
                            ry="83.6388 "
                            fill="#F4B9C8 "
                            data-v-8390fb7c=" "
                          ></ellipse>
                        </g>
                        <g
                          id="pink-bubble "
                          data-v-8390fb7c=" "
                          data-svg-origin="988.8269958496094 848.7490539550781 "
                          transform="matrix(1,0,0,1,0,0) "
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 218 "
                            cx="988.827 "
                            cy="848.749 "
                            r="56.9208 "
                            fill="#FDEEF2 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <circle
                            id="Ellipse 622 "
                            cx="988.827 "
                            cy="848.749 "
                            r="51.1126 "
                            fill="#FDDDE5 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <circle
                            id="Ellipse 623 "
                            cx="988.827 "
                            cy="848.749 "
                            r="43.5619 "
                            fill="#F4B9C8 "
                            data-v-8390fb7c=" "
                          ></circle>
                        </g>
                        <g
                          id="pink-bubble "
                          data-v-8390fb7c=" "
                          data-svg-origin="819 312 "
                          transform="matrix(1,0,0,1,0,0) "
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 646 "
                            cx="819 "
                            cy="312 "
                            r="52 "
                            fill="#FDDDE5 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <ellipse
                            id="Ellipse 647 "
                            cx="819 "
                            cy="311.72 "
                            rx="43.6129 "
                            ry="43.8925 "
                            fill="#F4B9C8 "
                            data-v-8390fb7c=" "
                          ></ellipse>
                        </g>
                        <g
                          id="pink-bubble "
                          data-v-8390fb7c=" "
                          data-svg-origin="576.5 985.5 "
                          transform="matrix(1,0,0,1,0,0) "
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 637 "
                            cx="576.5 "
                            cy="985.5 "
                            r="63.5 "
                            fill="#FDEEF2 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <circle
                            id="Ellipse 635 "
                            cx="576.21 "
                            cy="985.209 "
                            r="59.1507 "
                            fill="#FDDDE5 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <ellipse
                            id="Ellipse 636 "
                            cx="576.5 "
                            cy="985.21 "
                            rx="49.0023 "
                            ry="49.2922 "
                            fill="#F4B9C8 "
                            data-v-8390fb7c=" "
                          ></ellipse>
                        </g>
                        <g id="Group 316124246 " data-v-8390fb7c=" ">
                          <g
                            id="pink-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="281.1000061035156 849.1000671386719 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="Ellipse 637_2 "
                              cx="281.1 "
                              cy="849.1 "
                              r="73.1003 "
                              fill="#FDEEF2 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <circle
                              id="Ellipse 635_2 "
                              cx="280.767 "
                              cy="848.765 "
                              r="68.0935 "
                              fill="#FDDDE5 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <ellipse
                              id="Ellipse 636_2 "
                              cx="281.1 "
                              cy="848.768 "
                              rx="56.4108 "
                              ry="56.7445 "
                              fill="#F4B9C8 "
                              data-v-8390fb7c=" "
                            ></ellipse>
                          </g>
                          <g
                            id="pink-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="317.5 722.5 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="Ellipse 639 "
                              cx="317.5 "
                              cy="722.5 "
                              r="37.5 "
                              fill="#FDDDE5 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <circle
                              id="Ellipse 638 "
                              cx="317.5 "
                              cy="722.5 "
                              r="31.5 "
                              fill="#F4B9C8 "
                              data-v-8390fb7c=" "
                            ></circle>
                          </g>
                        </g>
                        <g
                          id="pink-bubble "
                          data-v-8390fb7c=" "
                          data-svg-origin="460.1379852294922 827.6229858398438 "
                          transform="matrix(1,0,0,1,0,0) "
                          class="common-svg-css"
                        >
                          <ellipse
                            id="Ellipse 610 "
                            cx="460.138 "
                            cy="827.623 "
                            rx="132.138 "
                            ry="135.623 "
                            fill="#FDEEF2 "
                            data-v-8390fb7c=" "
                          ></ellipse>
                          <circle
                            id="Ellipse 624 "
                            cx="460.138 "
                            cy="827.62 "
                            r="125.749 "
                            fill="#FDDDE5 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <circle
                            id="Ellipse 625 "
                            cx="460.138 "
                            cy="827.623 "
                            r="116.455 "
                            fill="#F4B9C8 "
                            data-v-8390fb7c=" "
                          ></circle>
                        </g>
                        <g
                          id="pink-bubble "
                          data-v-8390fb7c=" "
                          data-svg-origin="540.1370239257812 620.1920166015625 "
                          transform="matrix(1,0,0,1,0,0) "
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 813 "
                            cx="540.137 "
                            cy="620.192 "
                            r="136.203 "
                            fill="#F4B9C8 "
                            data-v-8390fb7c=" "
                          ></circle>
                        </g>
                        <g
                          id="black-bubble "
                          data-v-8390fb7c=" "
                          data-svg-origin="892.39697265625 494.3970184326172 "
                          transform="matrix(1,0,0,1,0,0) "
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 215 "
                            cx="892.397 "
                            cy="494.397 "
                            r="33.3974 "
                            fill="#473D36 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <path
                            id="Vector 575 "
                            d="M896.754 485.395C906.628 485.395 906.628 479.974 906.628 474.94C906.628 479.974 906.628 485.395 916.502 485.395C906.628 485.395 906.628 492.364 906.628 497.011C906.628 492.364 906.628 485.395 896.754 485.395Z "
                            fill="#F3EFE6 "
                            data-v-8390fb7c=" "
                          ></path>
                        </g>
                        <g
                          id="black-bubble "
                          data-v-8390fb7c=" "
                          data-svg-origin="888.0520324707031 884.4700012207031 "
                          transform="matrix(1,0,0,1,0,0) "
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 217 "
                            cx="888.052 "
                            cy="884.47 "
                            r="21.2001 "
                            fill="#473D36 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <path
                            id="Vector 577 "
                            d="M887.18 877.546C896.183 877.546 896.183 872.553 896.183 867.916C896.183 872.553 896.183 877.546 905.186 877.546C896.183 877.546 896.183 883.965 896.183 888.245C896.183 883.965 896.183 877.546 887.18 877.546Z "
                            fill="#F3EFE6 "
                            data-v-8390fb7c=" "
                          ></path>
                        </g>
                        <g
                          id="black-bubble "
                          data-v-8390fb7c=" "
                          data-svg-origin="335.29600524902344 620.2959289550781 "
                          transform="matrix(1,0,0,1,0,0) "
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 222 "
                            cx="335.296 "
                            cy="620.296 "
                            r="18.296 "
                            fill="#473D36 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <path
                            id="Vector 579 "
                            d="M335.586 614.962C342.266 614.962 342.266 611.252 342.266 607.808C342.266 611.252 342.266 614.962 348.945 614.962C342.266 614.962 342.266 619.73 342.266 622.91C342.266 619.73 342.266 614.962 335.586 614.962Z "
                            fill="#F3EFE6 "
                            data-v-8390fb7c=" "
                          ></path>
                        </g>
                        <g
                          id="black-bubble "
                          data-v-8390fb7c=" "
                          data-svg-origin="324.3620147705078 249.91698455810547 "
                          transform="matrix(1,0,0,1,0,0) "
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 595 "
                            cx="324.362 "
                            cy="249.917 "
                            r="32.5262 "
                            fill="#473D36 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <path
                            id="Vector 566 "
                            d="M326.104 238.912C340.335 238.912 340.335 231.066 340.335 223.78C340.335 231.066 340.335 238.912 354.565 238.912C340.335 238.912 340.335 249 340.335 255.725C340.335 249 340.335 238.912 326.104 238.912Z "
                            fill="#F3EFE6 "
                            data-v-8390fb7c=" "
                          ></path>
                        </g>
                        <g
                          id="black-bubble "
                          data-v-8390fb7c=" "
                          data-svg-origin="892.197021484375 351.1969909667969 "
                          transform="matrix(1,0,0,1,0,0) "
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 595_2 "
                            cx="892.197 "
                            cy="351.197 "
                            r="8.19727 "
                            fill="#473D36 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <path
                            id="Vector 566_2 "
                            d="M892.635 348.424C896.222 348.424 896.222 346.447 896.222 344.611C896.222 346.447 896.222 348.424 899.808 348.424C896.222 348.424 896.222 350.967 896.222 352.661C896.222 350.967 896.222 348.424 892.635 348.424Z "
                            fill="#F3EFE6 "
                            data-v-8390fb7c=" "
                          ></path>
                        </g>
                        <g
                          id="black-bubble "
                          data-v-8390fb7c=" "
                          data-svg-origin="724.4311218261719 244.45389556884766 "
                          transform="matrix(1,0,0,1,0,0) "
                          class="common-svg-css"
                        >
                          <circle
                            id="Ellipse 591 "
                            cx="15.3919 "
                            cy="15.3919 "
                            r="15.3919 "
                            transform="matrix(-1 0 0 1 739.823 229.062) "
                            fill="#473D36 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <path
                            id="Vector 570 "
                            d="M721.817 240.526C729.077 240.526 729.077 236.389 729.077 232.547C729.077 236.389 729.077 240.526 736.338 240.526C729.077 240.526 729.077 245.845 729.077 249.391C729.077 245.845 729.077 240.526 721.817 240.526Z "
                            fill="#F3EFE6 "
                            data-v-8390fb7c=" "
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <svg
                      viewBox="0 0 1077 1008 "
                      fill="none "
                      xmlns="http://www.w3.org/2000/svg "
                      className="svg svg-2 "
                      data-v-8390fb7c=" "
                    >
                      <rect
                        width="1077 "
                        height="1008 "
                        data-v-8390fb7c=" "
                      ></rect>
                      <g id="bubbles2 " data-v-8390fb7c=" ">
                        <g id="Group 316123987 " data-v-8390fb7c=" ">
                          <circle
                            id="Ellipse 595_3 "
                            cx="471.31 "
                            cy="413.948 "
                            r="32.5262 "
                            fill="#E27391 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <path
                            id="Vector 566_3 "
                            d="M473.052 402.943C487.282 402.943 487.282 395.097 487.282 387.811C487.282 395.097 487.282 402.943 501.513 402.943C487.282 402.943 487.282 413.031 487.282 419.756C487.282 413.031 487.282 402.943 473.052 402.943Z "
                            fill="#F3EFE6 "
                            data-v-8390fb7c=" "
                          ></path>
                        </g>
                        <g id="Group 316123986 " data-v-8390fb7c=" ">
                          <circle
                            id="Ellipse 215_2 "
                            cx="792.216 "
                            cy="736.597 "
                            r="33.3974 "
                            fill="#E27391 "
                            data-v-8390fb7c=" "
                          ></circle>
                          <path
                            id="Vector 575_2 "
                            d="M796.572 727.594C806.446 727.594 806.446 722.173 806.446 717.139C806.446 722.173 806.446 727.594 816.32 727.594C806.446 727.594 806.446 734.564 806.446 739.21C806.446 734.564 806.446 727.594 796.572 727.594Z "
                            fill="#F3EFE6 "
                            data-v-8390fb7c=" "
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div
                    className="disabled svg-wrapper d-none d-lg-block "
                    data-v-8390fb7c=" "
                  >
                    <svg
                      viewBox="0 0 2286 1777 "
                      fill="none "
                      xmlns="http://www.w3.org/2000/svg "
                      className="svg svg-1 "
                      data-v-8390fb7c=" "
                    >
                      <g id="Group 316124770 " data-v-8390fb7c=" ">
                        <g id="Group 316124737 " data-v-8390fb7c=" ">
                          <g id="Group 316124612 " data-v-8390fb7c=" ">
                            <g id="Group 316124611 " data-v-8390fb7c=" ">
                              <path
                                id="[Copy] We believe food has the power to unite "
                                d="M851.823 905.685L853.693 904.453L859.829 912.137L860.067 912.44L860.08 912.431L859.895 912.093L855.443 903.3L857.715 901.803L864.024 909.373L864.275 909.667L864.289 909.658L864.104 909.32L859.452 900.659L861.322 899.427L866.988 911.022L864.45
    912.694L858.565 905.478L858.296 905.157L858.484 905.531L862.793 913.786L860.241 915.467L851.823 905.685Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_2 "
                                d="M862.574 898.724L866.801 896.19L867.763 897.795L865.471 899.169L867.322 902.257L869.491 900.957L870.445 902.549L868.277 903.849L870.128 906.936L872.42 905.563L873.382 907.168L869.155 909.702L862.574 898.724Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_3 "
                                d="M877.726 904.694L880.395 903.271C882.526 902.134 882.633 900.735 881.504 898.618L881.323 898.279C880.57 896.867 879.629 896.462 878.551 896.584C879.197 895.822 879.424 894.922 878.761 893.679L878.573 893.326C877.677 891.646 876.377
    890.907 874.315 892.006L871.703 893.399L877.726 904.694ZM878.836 901.98L877.037 898.606L877.46 898.38C878.223 897.974 878.657 898.141 879.093 898.96L879.703 900.104C880.177 900.993 880.107 901.303 879.26 901.754L878.836 901.98ZM876.156 896.954L874.575
    893.989L874.984 893.771C875.676 893.402 876.013 893.422 876.457 894.255L876.969 895.215C877.406 896.034 877.172 896.412 876.551 896.743L876.156 896.954Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_4 "
                                d="M884.631 901.07L889.057 898.904L888.234 897.222L885.834 898.397L884.251 895.164L886.522 894.052L885.706 892.385L883.435 893.497L881.852 890.263L884.252 889.089L883.429 887.407L879.003 889.574L884.631 901.07Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_5 "
                                d="M890.362 898.294L894.896 896.244L894.125 894.538L891.647 895.659L887.145 885.701L885.089 886.63L890.362 898.294Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_6 "
                                d="M895.813 895.86L897.89 894.978L892.886 883.196L890.81 884.078L895.813 895.86Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_7 "
                                d="M899.092 894.471L903.67 892.649L902.978 890.91L900.496 891.898L899.165 888.553L901.514 887.618L900.828 885.893L898.479 886.828L897.148 883.483L899.63 882.495L898.938 880.756L894.36 882.578L899.092 894.471Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_8 "
                                d="M906.301 891.68L909.252 890.621L906.527 878L904.373 878.773L907.011 888.875L907.105 889.232L906.936 888.902L902.551 879.426L900.382 880.204L906.301 891.68Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_9 "
                                d="M911.517 889.839L916.204 888.317L915.625 886.536L913.084 887.361L911.972 883.938L914.376 883.157L913.803 881.391L911.399 882.172L910.287 878.748L912.828 877.923L912.25 876.143L907.563 877.665L911.517 889.839Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_10 "
                                d="M921.193 886.839L923.371 886.248L922.105 881.585L924.638 880.897L924.152 879.106L921.619 879.793L920.509 875.701L923.088 875.002L922.598 873.195L917.842 874.485L921.193 886.839Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_11 "
                                d="M935.728 890.572C937.769 890.092 938.483 888.658 937.915 886.244L936.61 880.699C936.042 878.285 934.763 877.32 932.723 877.801C930.683 878.281 929.968 879.714 930.536 882.129L931.841 887.673C932.409 890.087 933.688 891.052 935.728
    890.572ZM934.256 887.877L932.61 880.884C932.412 880.043 932.611 879.701 933.141 879.576C933.67 879.451 934.005 879.685 934.203 880.526L935.845 887.503C936.039 888.329 935.84 888.672 935.31 888.796C934.781 888.921 934.45 888.703 934.256 887.877Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_12 "
                                d="M943.153 889.125C945.21 888.721 945.978 887.315 945.5 884.882L944.404 879.292C943.926 876.858 942.684 875.847 940.628 876.25C938.571 876.654 937.803 878.06 938.28 880.493L939.377 886.083C939.854 888.516 941.096 889.528 943.153 889.125ZM941.783
    886.377L940.4 879.328C940.233 878.48 940.445 878.145 940.979 878.04C941.512 877.935 941.838 878.181 942.004 879.029L943.384 886.063C943.547 886.895 943.336 887.23 942.802 887.335C942.268 887.44 941.946 887.209 941.783 886.377Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_13 "
                                d="M947.592 888.282L950.279 887.859C952.823 887.457 953.584 886.527 953.172 883.92L952.25 878.072C951.834 875.433 950.829 874.813 948.284 875.215L945.598 875.639L947.592 888.282ZM949.556 886.256L948.09 876.962L948.549 876.89C949.418
    876.753 949.735 876.914 949.902 877.973L950.969 884.737C951.133 885.78 950.9 886.044 950.046 886.178L949.556 886.256Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_14 "
                                d="M958.432 879.91L960.677 879.691L959.436 866.951L957.19 867.17L957.721 872.616L956.113 872.773L955.582 867.327L953.337 867.546L954.578 880.286L956.824 880.067L956.293 874.621L957.901 874.464L958.432 879.91Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_15 "
                                d="M961.912 879.592L964.212 879.454L964.27 877.238L965.82 877.145L966.144 879.337L968.428 879.199L965.964 866.525L962.834 866.714L961.912 879.592ZM964.333 875.359L964.511 869.017L964.521 868.647L964.591 869.012L965.531 875.287L964.333
    875.359Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_16 "
                                d="M972.12 879.251C974.247 879.193 975.206 877.966 975.144 875.663C975.09 873.68 974.317 872.916 973.221 872.082L971.898 871.078C971.375 870.692 971.077 870.316 971.053 869.468L971.04 868.988C971.019 868.22 971.252 867.958 971.796 867.943C972.308
    867.929 972.602 868.145 972.627 869.073L972.66 870.289L974.948 870.226L974.921 869.267C974.864 867.171 973.73 866.082 971.779 866.135C969.684 866.192 968.71 867.467 968.765 869.482C968.809 871.114 969.506 872.007 970.618 872.857L971.958 873.877C972.513
    874.278 972.812 874.67 972.837 875.598L972.857 876.317C972.879 877.133 972.663 877.427 972.087 877.443C971.511 877.458 971.248 877.194 971.224 876.314L971.179 874.682L968.876 874.745L968.9 875.625C968.967 878.088 970.009 879.308 972.12 879.251Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_17 "
                                d="M981.852 879.057L984.107 879.111L984.37 868.186L986.193 868.23L986.238 866.359L980.32 866.216L980.275 868.088L982.115 868.132L981.852 879.057Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_18 "
                                d="M991.306 879.452L993.558 879.588L994.332 866.811L992.08 866.675L991.749 872.137L990.136 872.039L990.467 866.577L988.215 866.441L987.441 879.217L989.693 879.354L990.024 873.892L991.637 873.99L991.306 879.452Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_19 "
                                d="M997.398 886.977L1002.3 887.437L1002.48 885.573L999.819 885.324L1000.15 881.739L1002.67 881.975L1002.84 880.127L1000.33 879.891L1000.66 876.307L1003.32 876.556L1003.5 874.692L998.591 874.233L997.398 886.977Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_20 "
                                d="M1004.97 880.778L1007.2 881.102L1007.82 876.843L1008.2 876.898C1010.84 877.282 1011.9 876.352 1012.32 873.439L1012.4 872.948C1012.83 869.987 1012.07 868.874 1009.42 868.49L1006.81 868.111L1004.97 880.778ZM1008.06 875.165L1008.8 870.114L1009.49
    870.215C1010.21 870.318 1010.39 870.749 1010.25 871.683L1009.91 874.042C1009.77 874.976 1009.47 875.369 1008.76 875.266L1008.06 875.165Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_21 "
                                d="M1015.05 882.54C1017.12 882.909 1018.34 881.877 1018.78 879.435L1019.78 873.828C1020.22 871.387 1019.42 869.994 1017.36 869.625C1015.3 869.256 1014.07 870.289 1013.64 872.73L1012.63 878.337C1012.2 880.778 1012.99 882.171 1015.05 882.54ZM1014.77
    879.483L1016.03 872.411C1016.19 871.56 1016.51 871.325 1017.04 871.42C1017.58 871.516 1017.79 871.863 1017.64 872.714L1016.38 879.77C1016.23 880.605 1015.91 880.84 1015.37 880.745C1014.84 880.649 1014.62 880.317 1014.77 879.483Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_22 "
                                d="M1021.11 883.527L1024.09 884.217L1027.1 875.406L1027.24 875.011L1027.19 875.427L1026.02 884.665L1028.98 885.352L1033.48 873.255L1031.29 872.749L1028.22 882.089L1028.11 882.456L1028.09 882.452L1028.13 882.067L1029.27 872.279L1026.62
    871.665L1023.31 880.951L1023.2 881.318L1023.18 881.314L1023.24 880.933L1024.58 871.191L1022.39 870.685L1021.11 883.527Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_23 "
                                d="M1031.32 885.992L1036.07 887.296L1036.57 885.491L1033.99 884.784L1034.95 881.312L1037.38 881.981L1037.87 880.191L1035.44 879.522L1036.39 876.05L1038.97 876.757L1039.46 874.952L1034.71 873.648L1031.32 885.992Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_24 "
                                d="M1041.27 888.89L1043.47 889.572C1043.41 889.25 1043.51 888.878 1043.64 888.435L1044.37 886.081C1044.7 885.027 1044.63 884.016 1043.57 883.219C1044.85 883.131 1045.47 882.551 1046.06 880.625L1046.13 880.427C1046.88 877.982 1046.26
    877.033 1043.93 876.313L1041.2 875.465L1037.41 887.691L1039.56 888.359L1041.09 883.423L1041.69 883.608C1042.16 883.755 1042.56 884.146 1042.28 885.048L1041.44 887.753C1041.3 888.211 1041.18 888.659 1041.27 888.89ZM1041.59 881.803L1042.85 877.753L1043.45
    877.938C1044.18 878.165 1044.31 878.491 1044.04 879.378L1043.51 881.09C1043.3 881.747 1043 882.239 1042.19 881.988L1041.59 881.803Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_25 "
                                d="M1050.1 891.926L1052.21 892.711L1056.02 882.466L1057.73 883.1L1058.38 881.345L1052.83 879.286L1052.18 881.041L1053.9 881.681L1050.1 891.926Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_26 "
                                d="M1058.07 895.225C1060 896.025 1061.42 895.278 1062.37 892.986L1064.54 887.722C1065.49 885.43 1065.01 883.9 1063.08 883.1C1061.14 882.299 1059.72 883.047 1058.78 885.339L1056.6 890.603C1055.65 892.895 1056.13 894.424 1058.07 895.225ZM1058.44
    892.178L1061.19 885.538C1061.52 884.74 1061.88 884.578 1062.38 884.785C1062.88 884.993 1063.02 885.378 1062.69 886.176L1059.95 892.801C1059.63 893.585 1059.26 893.747 1058.76 893.539C1058.26 893.331 1058.12 892.961 1058.44 892.178Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_27 "
                                d="M1069.01 900.147C1070.9 901.06 1072.3 900.477 1073.38 898.244L1077.45 889.833L1075.39 888.837L1071.04 897.838C1070.67 898.602 1070.29 898.757 1069.8 898.52C1069.3 898.276 1069.2 897.891 1069.57 897.127L1073.92 888.126L1071.85 887.122L1067.78
    895.533C1066.7 897.766 1067.13 899.234 1069.01 900.147Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_28 "
                                d="M1073.41 902.145L1075.19 903.09L1078.65 896.573L1077.13 904.117L1078.91 905.061L1084.91 893.753L1083.13 892.809L1079.68 899.311L1081.19 891.782L1079.41 890.837L1073.41 902.145Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_29 "
                                d="M1080.43 905.946L1082.39 907.062L1088.72 895.936L1086.76 894.821L1080.43 905.946Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_30 "
                                d="M1085.18 908.703L1087.11 909.869L1092.76 900.514L1094.32 901.457L1095.29 899.854L1090.22 896.794L1089.25 898.397L1090.83 899.348L1085.18 908.703Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                              <path
                                id="[Copy] We believe food has the power to unite_31 "
                                d="M1089.62 911.431L1093.76 914.103L1094.77 912.53L1092.53 911.082L1094.48 908.057L1096.6 909.427L1097.61 907.868L1095.49 906.497L1097.44 903.472L1099.68 904.921L1100.7 903.348L1096.56 900.676L1089.62 911.431Z "
                                fill="#BF4C6B "
                                data-v-8390fb7c=" "
                              ></path>
                            </g>
                            <g
                              id="pink-bubble "
                              data-v-8390fb7c=" "
                              data-svg-origin="753.5 899.9130249023438 "
                              transform="matrix(1,0,0,1,0,0) "
                              class="common-svg-css"
                            >
                              <ellipse
                                id="Ellipse 610_2 "
                                cx="753.5 "
                                cy="899.913 "
                                rx="91.5 "
                                ry="93.9132 "
                                fill="#FDEEF2 "
                                data-v-8390fb7c=" "
                              ></ellipse>
                              <circle
                                id="Ellipse 624_2 "
                                cx="753.498 "
                                cy="899.916 "
                                r="87.0758 "
                                fill="#FDDDE5 "
                                data-v-8390fb7c=" "
                              ></circle>
                              <circle
                                id="Ellipse 625_2 "
                                cx="753.499 "
                                cy="899.917 "
                                r="80.6407 "
                                fill="#F4B9C8 "
                                data-v-8390fb7c=" "
                              ></circle>
                            </g>
                            <g
                              id="pink-bubble "
                              data-v-8390fb7c=" "
                              data-svg-origin="863.5 806.0690002441406 "
                              transform="matrix(1,0,0,1,0,0) "
                              class="common-svg-css"
                            >
                              <ellipse
                                id="Ellipse 610_3 "
                                cx="863.5 "
                                cy="806.069 "
                                rx="59.5 "
                                ry="61.0692 "
                                fill="#FDEEF2 "
                                data-v-8390fb7c=" "
                              ></ellipse>
                              <circle
                                id="Ellipse 624_3 "
                                cx="863.499 "
                                cy="806.071 "
                                r="56.6231 "
                                fill="#FDDDE5 "
                                data-v-8390fb7c=" "
                              ></circle>
                              <circle
                                id="Ellipse 625_3 "
                                cx="863.5 "
                                cy="806.071 "
                                r="52.4385 "
                                fill="#F4B9C8 "
                                data-v-8390fb7c=" "
                              ></circle>
                            </g>
                            <g
                              id="black-bubble "
                              data-v-8390fb7c=" "
                              data-svg-origin="832 756 "
                              transform="matrix(1,0,0,1,0,0) "
                              class="common-svg-css"
                            >
                              <circle
                                id="Ellipse 217_2 "
                                cx="832 "
                                cy="756 "
                                r="9 "
                                fill="#473D36 "
                                data-v-8390fb7c=" "
                              ></circle>
                              <path
                                id="Vector 577_2 "
                                d="M831.631 753.057C835.453 753.057 835.453 750.937 835.453 748.969C835.453 750.937 835.453 753.057 839.275 753.057C835.453 753.057 835.453 755.782 835.453 757.599C835.453 755.782 835.453 753.057 831.631 753.057Z "
                                fill="#F3EFE6 "
                                data-v-8390fb7c=" "
                              ></path>
                            </g>
                            <g
                              id="black-bubble "
                              data-v-8390fb7c=" "
                              data-svg-origin="913 845 "
                              transform="matrix(1,0,0,1,0,0) "
                              class="common-svg-css"
                            >
                              <circle
                                id="Ellipse 215 "
                                cx="913 "
                                cy="845 "
                                r="21 "
                                fill="#E27391 "
                                data-v-8390fb7c=" "
                              ></circle>
                              <path
                                id="Vector 575 "
                                d="M915.737 839.34C921.945 839.34 921.945 835.931 921.945 832.766C921.945 835.931 921.945 839.34 928.154 839.34C921.945 839.34 921.945 843.722 921.945 846.644C921.945 843.722 921.945 839.34 915.737 839.34Z "
                                fill="#F3EFE6 "
                                data-v-8390fb7c=" "
                              ></path>
                            </g>
                          </g>
                          <g
                            id="pink-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="229.5 1386.5 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="Ellipse 611 "
                              cx="229.5 "
                              cy="1386.5 "
                              r="92.5 "
                              fill="#FDDDE5 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <circle
                              id="Ellipse 626 "
                              cx="229.5 "
                              cy="1386.5 "
                              r="77.5 "
                              fill="#F4B9C8 "
                              data-v-8390fb7c=" "
                            ></circle>
                          </g>
                          <g
                            id="pink-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="535.5 695.614013671875 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <ellipse
                              id="Ellipse 617 "
                              cx="535.5 "
                              cy="695.614 "
                              rx="515.5 "
                              ry="517.614 "
                              fill="#FDEEF2 "
                              data-v-8390fb7c=" "
                            ></ellipse>
                            <ellipse
                              id="Ellipse 614 "
                              cx="536.028 "
                              cy="696.149 "
                              rx="502.268 "
                              ry="504.386 "
                              fill="#FDDDE5 "
                              data-v-8390fb7c=" "
                            ></ellipse>
                            <ellipse
                              id="Ellipse 613 "
                              cx="535.502 "
                              cy="695.615 "
                              rx="482.686 "
                              ry="484.803 "
                              fill="#F4B9C8 "
                              data-v-8390fb7c=" "
                            ></ellipse>
                          </g>
                          <g
                            id="pink-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="1925.5 364.5 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <ellipse
                              id="Ellipse 619 "
                              cx="1925.5 "
                              cy="364.5 "
                              rx="360.5 "
                              ry="364.5 "
                              fill="#FDDDE5 "
                              data-v-8390fb7c=" "
                            ></ellipse>
                            <ellipse
                              id="Ellipse 674 "
                              cx="1925.5 "
                              cy="364.5 "
                              rx="337.5 "
                              ry="341.5 "
                              fill="#F4B9C8 "
                              data-v-8390fb7c=" "
                            ></ellipse>
                          </g>
                          <ellipse
                            id="Ellipse 610_4 "
                            cx="843.5 "
                            cy="1401.5 "
                            rx="227.5 "
                            ry="233.5 "
                            fill="#FDEEF2 "
                            data-v-8390fb7c=" "
                          ></ellipse>
                          <g
                            id="pink-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="1357 1182 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="Ellipse 649 "
                              cx="1357 "
                              cy="1182 "
                              r="367 "
                              fill="#FDEEF2 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <circle
                              id="Ellipse 206 "
                              cx="1357 "
                              cy="1182 "
                              r="346 "
                              fill="#FDDDE5 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <circle
                              id="Ellipse 620 "
                              cx="1357 "
                              cy="1182 "
                              r="325 "
                              fill="#F4B9C8 "
                              data-v-8390fb7c=" "
                            ></circle>
                          </g>
                          <g
                            id="pink-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="1109.77001953125 427.5 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <ellipse
                              id="Ellipse 644 "
                              cx="1109.77 "
                              cy="427.5 "
                              rx="119.77 "
                              ry="120.5 "
                              fill="#FDEEF2 "
                              data-v-8390fb7c=" "
                            ></ellipse>
                            <ellipse
                              id="Ellipse 649_2 "
                              cx="1109.77 "
                              cy="427.5 "
                              rx="113.23 "
                              ry="113.921 "
                              fill="#FDDDE5 "
                              data-v-8390fb7c=" "
                            ></ellipse>
                            <ellipse
                              id="Ellipse 648 "
                              cx="1110.5 "
                              cy="427.5 "
                              rx="104.433 "
                              ry="105.164 "
                              fill="#F4B9C8 "
                              data-v-8390fb7c=" "
                            ></ellipse>
                          </g>
                          <g
                            id="pink-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="1741 1432 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="Ellipse 218 "
                              cx="1741 "
                              cy="1432 "
                              r="98 "
                              fill="#FDEEF2 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <circle
                              id="Ellipse 622 "
                              cx="1741 "
                              cy="1432 "
                              r="88 "
                              fill="#FDDDE5 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <circle
                              id="Ellipse 623 "
                              cx="1741 "
                              cy="1432 "
                              r="75 "
                              fill="#F4B9C8 "
                              data-v-8390fb7c=" "
                            ></circle>
                          </g>
                          <g
                            id="pink-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="1733.5 782.5 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="Ellipse 646 "
                              cx="1733.5 "
                              cy="782.5 "
                              r="109.5 "
                              fill="#FDDDE5 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <ellipse
                              id="Ellipse 647 "
                              cx="1733.5 "
                              cy="781.911 "
                              rx="91.8387 "
                              ry="92.4274 "
                              fill="#F4B9C8 "
                              data-v-8390fb7c=" "
                            ></ellipse>
                          </g>
                          <g
                            id="pink-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="1014.5 1667.5 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="Ellipse 637 "
                              cx="1014.5 "
                              cy="1667.5 "
                              r="109.5 "
                              fill="#FDEEF2 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <circle
                              id="Ellipse 635 "
                              cx="1014 "
                              cy="1667 "
                              r="102 "
                              fill="#FDDDE5 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <ellipse
                              id="Ellipse 636 "
                              cx="1014.5 "
                              cy="1667 "
                              rx="84.5 "
                              ry="85 "
                              fill="#F4B9C8 "
                              data-v-8390fb7c=" "
                            ></ellipse>
                          </g>
                          <g
                            id="pink-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="499 1331 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="pink-bubble "
                              cx="499 "
                              cy="1331 "
                              r="139 "
                              fill="#FDDDE5 "
                              data-v-8390fb7c=" "
                              data-svg-origin="499 1331 "
                              transform="matrix(1,0,0,1,0,0) "
                              class="common-svg-css"
                            ></circle>
                          </g>
                          <g
                            id="pink-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="843.5 1401.5 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="groiup "
                              cx="843.5 "
                              cy="1401.5 "
                              r="216.5 "
                              fill="#FDDDE5 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <circle
                              id="griup "
                              cx="843.5 "
                              cy="1401.5 "
                              r="200.5 "
                              fill="#F4B9C8 "
                              data-v-8390fb7c=" "
                            ></circle>
                          </g>
                          <circle
                            id="pink-bubble "
                            cx="968.5 "
                            cy="1038.5 "
                            r="234.5 "
                            fill="#F4B9C8 "
                            data-v-8390fb7c=" "
                            data-svg-origin="968.5 1038.5 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          ></circle>
                          <ellipse
                            id="pink-bubble "
                            cx="499 "
                            cy="1331.5 "
                            rx="127 "
                            ry="127.5 "
                            fill="#F4B9C8 "
                            data-v-8390fb7c=" "
                            data-svg-origin="499 1331.5 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          ></ellipse>
                          <g
                            id="pink-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="351 1418 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="group12344 "
                              cx="351 "
                              cy="1418 "
                              r="40 "
                              fill="#FDDDE5 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <circle
                              id="group2134123 "
                              cx="351 "
                              cy="1418 "
                              r="29 "
                              fill="#F4B9C8 "
                              data-v-8390fb7c=" "
                            ></circle>
                          </g>
                          <g
                            id="pink-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="76 1026 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="pink-bubble "
                              cx="76 "
                              cy="1026 "
                              r="76 "
                              fill="#FDDDE5 "
                              data-v-8390fb7c=" "
                              data-svg-origin="76 1026 "
                              transform="matrix(1,0,0,1,0,0) "
                              class="common-svg-css"
                            ></circle>
                            <circle
                              id="Ellipse 224 "
                              cx="76 "
                              cy="1026 "
                              r="59 "
                              fill="#F4B9C8 "
                              data-v-8390fb7c=" "
                            ></circle>
                          </g>
                          <g
                            id="black-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="1800.5 931.5 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="Ellipse 215_2 "
                              cx="1800.5 "
                              cy="931.5 "
                              r="57.5 "
                              fill="#473D36 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <path
                              id="Vector 575_2 "
                              d="M1808 916C1825 916 1825 906.667 1825 898C1825 906.667 1825 916 1842 916C1825 916 1825 928 1825 936C1825 928 1825 916 1808 916Z "
                              fill="#F3EFE6 "
                              data-v-8390fb7c=" "
                            ></path>
                          </g>
                          <g
                            id="black-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="1567.5 1493.5 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="Ellipse 217_3 "
                              cx="1567.5 "
                              cy="1493.5 "
                              r="36.5 "
                              fill="#473D36 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <path
                              id="Vector 577_3 "
                              d="M1566 1481.58C1581.5 1481.58 1581.5 1472.98 1581.5 1465C1581.5 1472.98 1581.5 1481.58 1597 1481.58C1581.5 1481.58 1581.5 1492.63 1581.5 1500C1581.5 1492.63 1581.5 1481.58 1566 1481.58Z "
                              fill="#F3EFE6 "
                              data-v-8390fb7c=" "
                            ></path>
                          </g>
                          <g
                            id="black-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="368 1249 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <g id="Group 316123870 " data-v-8390fb7c=" ">
                              <circle
                                id="Ellipse 219 "
                                cx="368 "
                                cy="1249 "
                                r="45 "
                                fill="#473D36 "
                                data-v-8390fb7c=" "
                              ></circle>
                            </g>
                            <path
                              id="Vector 578 "
                              d="M360 1232.58C375.5 1232.58 375.5 1223.98 375.5 1216C375.5 1223.98 375.5 1232.58 391 1232.58C375.5 1232.58 375.5 1243.63 375.5 1251C375.5 1243.63 375.5 1232.58 360 1232.58Z "
                              fill="#F3EFE6 "
                              data-v-8390fb7c=" "
                            ></path>
                          </g>
                          <g
                            id="black-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="228.5 1045.5 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="Ellipse 222 "
                              cx="228.5 "
                              cy="1045.5 "
                              r="31.5 "
                              fill="#473D36 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <path
                              id="Vector 579 "
                              d="M229 1036.32C240.5 1036.32 240.5 1029.93 240.5 1024C240.5 1029.93 240.5 1036.32 252 1036.32C240.5 1036.32 240.5 1044.53 240.5 1050C240.5 1044.53 240.5 1036.32 229 1036.32Z "
                              fill="#F3EFE6 "
                              data-v-8390fb7c=" "
                            ></path>
                          </g>
                          <g
                            id="black-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="578 399.6169738769531 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="Ellipse 595 "
                              cx="578 "
                              cy="399.617 "
                              r="56 "
                              fill="#473D36 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <path
                              id="Vector 566 "
                              d="M581 380.67C605.5 380.67 605.5 367.161 605.5 354.617C605.5 367.161 605.5 380.67 630 380.67C605.5 380.67 605.5 398.038 605.5 409.617C605.5 398.038 605.5 380.67 581 380.67Z "
                              fill="#F3EFE6 "
                              data-v-8390fb7c=" "
                            ></path>
                          </g>
                          <g
                            id="black-bubble "
                            data-v-8390fb7c=" "
                            data-svg-origin="814.5 256.11700439453125 "
                            transform="matrix(1,0,0,1,0,0) "
                            class="common-svg-css"
                          >
                            <circle
                              id="Ellipse 216 "
                              cx="814.5 "
                              cy="256.117 "
                              r="16.5 "
                              fill="#473D36 "
                              data-v-8390fb7c=" "
                            ></circle>
                            <path
                              id="Vector 576 "
                              d="M812.826 251.372C820.239 251.372 820.239 247.261 820.239 243.443C820.239 247.261 820.239 251.372 827.652 251.372C820.239 251.372 820.239 256.658 820.239 260.182C820.239 256.658 820.239 251.372 812.826 251.372Z "
                              fill="#F3EFE6 "
                              data-v-8390fb7c=" "
                            ></path>
                          </g>
                          <g id="Group 316123963 " data-v-8390fb7c=" ">
                            <g
                              id="pink-bubble "
                              data-v-8390fb7c=" "
                              data-svg-origin="1382.5 515 "
                              transform="matrix(1,0,0,1,0,0) "
                              class="common-svg-css"
                            >
                              <circle
                                id="Ellipse 648_2 "
                                cx="1382.5 "
                                cy="515 "
                                r="168.5 "
                                fill="#FDEEF2 "
                                data-v-8390fb7c=" "
                              ></circle>
                              <circle
                                id="Ellipse 646_2 "
                                cx="1382.5 "
                                cy="515 "
                                r="161.219 "
                                fill="#FDDDE5 "
                                data-v-8390fb7c=" "
                              ></circle>
                              <ellipse
                                id="Ellipse 647_2 "
                                cx="1383.02 "
                                cy="514.48 "
                                rx="148.218 "
                                ry="149.258 "
                                fill="#F4B9C8 "
                                data-v-8390fb7c=" "
                              ></ellipse>
                            </g>
                            <g
                              id="black-bubble "
                              transform="matrix(1,0,0,1,16,45.5) "
                              data-v-8390fb7c=" "
                              data-svg-origin="1535.5 390.5 "
                              class="common-svg-css"
                            >
                              <circle
                                id="Ellipse 595_2 "
                                cx="1535.5 "
                                cy="390.5 "
                                r="37.5 "
                                fill="#473D36 "
                                data-v-8390fb7c=" "
                              ></circle>
                              <path
                                id="Vector 566_2 "
                                d="M1537.51 377.812C1553.92 377.812 1553.92 368.766 1553.92 360.366C1553.92 368.766 1553.92 377.812 1570.32 377.812C1553.92 377.812 1553.92 389.443 1553.92 397.196C1553.92 389.443 1553.92 377.812 1537.51 377.812Z "
                                fill="#F3EFE6 "
                                data-v-8390fb7c=" "
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <svg
                      viewBox="0 0 2302 1808 "
                      fill="none "
                      xmlns="http://www.w3.org/2000/svg "
                      className="svg svg-2 "
                      data-v-8390fb7c=" "
                    >
                      <g id="Group 316123987 " data-v-8390fb7c=" ">
                        <circle
                          id="Ellipse 595_3 "
                          cx="836 "
                          cy="785 "
                          r="56 "
                          fill="#E27391 "
                          data-v-8390fb7c=" "
                        ></circle>
                        <path
                          id="Vector 566_3 "
                          d="M839 766.053C863.5 766.053 863.5 752.544 863.5 740C863.5 752.544 863.5 766.053 888 766.053C863.5 766.053 863.5 783.421 863.5 795C863.5 783.421 863.5 766.053 839 766.053Z "
                          fill="#F3EFE6 "
                          data-v-8390fb7c=" "
                        ></path>
                      </g>
                      <g id="Group 316123986 " data-v-8390fb7c=" ">
                        <circle
                          id="Ellipse 215_2 "
                          cx="1388.5 "
                          cy="1340.5 "
                          r="57.5 "
                          fill="#E27391 "
                          data-v-8390fb7c=" "
                        ></circle>
                        <path
                          id="Vector 575_2 "
                          d="M1396 1325C1413 1325 1413 1315.67 1413 1307C1413 1315.67 1413 1325 1430 1325C1413 1325 1413 1337 1413 1345C1413 1337 1413 1325 1396 1325Z "
                          fill="#F3EFE6 "
                          data-v-8390fb7c=" "
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div
                    data-id="waypoint-47 "
                    className="synchronized-waypoint headline position-absolute w-100 on-top "
                    data-v-8390fb7c=" "
                  >
                    <h2
                      data-preset="opacity,y "
                      data-delay=".1 "
                      className="f1-custom f2-sm f1-4-xl color-red d-flex flex-column text-center w-100 pp-bold should-animate name-a-more"
                      data-v-8390fb7c=" "
                      style={{ opacity: 1 }}
                    >
                      <span data-v-8390fb7c=" ">NAME</span>
                      <span data-v-8390fb7c=" ">A MORE</span>
                      <span data-v-8390fb7c=" ">ICONIC DUO</span>
                    </h2>
                  </div>
                </div>
                <div className="ctf-rays-component">
                  <div
                    className="rays-component overflow-hidden position-relative"
                    data-v-7743ff1f=""
                  >
                    <div
                      data-id="waypoint-50"
                      className="synchronized-waypoint animation-marker2"
                      data-v-7743ff1f=""
                    ></div>
                    <div data-v-7743ff1f="">
                      <svg
                        viewBox="0 0 2713 3360"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="arc-svg position-absolute center-x"
                        data-v-7743ff1f=""
                      >
                        <path
                          id="Ellipse 684"
                          d="M2547.46 1159.03C2547.46 1037.77 2519.55 682.099 2459.39 570.061C2399.23 458.023 2311.06 356.223 2199.91 270.472C2088.75 184.722 1956.8 116.701 1811.57 70.2935C1666.34 23.8857 1510.68 -5.30085e-06 1353.48 0C1196.29 5.30085e-06 1040.63 23.8858 895.403 70.2935C750.174 116.701 618.215 184.722 507.061 270.472C395.907 356.223 307.735 458.023 247.579 570.061C187.423 682.1 156.461 1126.73 156.461 1248L1353.48 923.45L2547.46 1159.03Z"
                          fill="#FDDDE5"
                          data-v-7743ff1f=""
                        ></path>
                        <path
                          id="Ellipse 685"
                          d="M2547.46 1196.89C2547.46 1074.07 2519.55 713.844 2459.39 600.37C2399.23 486.895 2311.06 383.79 2199.91 296.94C2088.75 210.09 1956.8 141.197 1811.57 94.1947C1666.34 47.192 1510.68 23 1353.48 23C1196.29 23 1040.63 47.192 895.403 94.1947C750.174 141.197 618.215 210.09 507.061 296.94C395.907 383.79 307.735 486.895 247.579 600.37C187.423 713.844 156.461 1164.18 156.461 1287L1353.48 958.29L2547.46 1196.89Z"
                          fill="#FFD864"
                          data-v-7743ff1f=""
                        ></path>
                        <rect
                          id="Rectangle 2107"
                          x="394.461"
                          y="414"
                          width="1926"
                          height="2861"
                          fill="#FFD864"
                          data-v-7743ff1f=""
                        ></rect>
                      </svg>
                    </div>
                    <div data-v-7743ff1f="">
                      <svg
                        viewBox="0 0 2713 3360"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="rays-svg position-relative"
                        data-v-0487c446=""
                        data-v-7743ff1f=""
                      >
                        <defs data-v-0487c446="">
                          <path
                            id="top-path"
                            d="M113,825C113,1242.8 626.306,1581.5 1259.5,1581.5C1892.69,1581.5 2406,1242.8 2406,825"
                            stroke="black"
                            data-v-0487c446=""
                          ></path>
                          <path
                            id="bottom-path"
                            d="M110,924C110,1341.8 623.306,1680.5 1256.5,1680.5C1889.69,1680.5 2403,1341.8 2403,924"
                            stroke="black"
                            data-v-0487c446=""
                          ></path>
                          <path
                            id="magic-path"
                            d="M1842.5,1578L1842.5,1578C1842.5,1355.79 1624.33,1175.5 1355,1175.5C1085.67,1175.5 867.5,1355.79 867.5,1578C867.5,1800.21 1085.67,1980.5 1355,1980.5C1624.33,1980.5 1842.5,1800.21 1842.5,1578"
                            stroke="black"
                            data-v-0487c446=""
                          ></path>
                          <path
                            id="transform-path"
                            d="M243,1580.2C302.275,1476.11 389.157,1381.52 498.683,1301.85C608.21,1222.18 738.237,1158.98 881.341,1115.86C1024.44,1072.74 1177.82,1050.55 1332.72,1050.55C1487.61,1050.55 1640.99,1072.74 1784.09,1115.86C1927.19,1158.98 2057.22,1222.18 2166.75,1301.85C2276.28,1381.52 2363.16,1476.11 2422.43,1580.2"
                            stroke="black"
                            data-v-0487c446=""
                          ></path>
                        </defs>
                        <g id="rays" data-v-0487c446="">
                          <path
                            id="Vector 656"
                            opacity="0.4"
                            d="M383.461 2274L1052.96 1651.5L1073.46 1709L383.461 2779.5V2274Z"
                            fill="#FFB800"
                            class="ray"
                            data-v-0487c446=""
                          ></path>
                          <path
                            id="Vector 658"
                            opacity="0.4"
                            d="M2338.46 2263L1668.96 1625.5L1638.61 1684.5L2328.61 2755L2338.46 2263Z"
                            fill="#FFB800"
                            class="ray"
                            data-v-0487c446=""
                          ></path>
                          <path
                            id="Vector 657"
                            opacity="0.4"
                            d="M307.461 2965.5L1075.68 1724.05L1200.77 1783.58L1003.46 3021.5L398.458 3348L307.461 2965.5Z"
                            fill="#FFB800"
                            class="ray"
                            data-v-0487c446=""
                          ></path>
                          <path
                            id="Vector 660"
                            opacity="0.4"
                            d="M1097.96 2684.5L1221.96 1716.5L1500.46 1742L1622.46 2825L699.919 3359L1097.96 2684.5Z"
                            fill="#FFB800"
                            class="ray"
                            data-v-0487c446=""
                          ></path>
                          <path
                            id="Vector 659"
                            opacity="0.4"
                            d="M2391.96 2924.5L1636.39 1699.55L1511.3 1759.08L1708.61 2997L2313.61 3323.5L2391.96 2924.5Z"
                            fill="#FFB800"
                            class="ray"
                            data-v-0487c446=""
                          ></path>
                        </g>
                        <g
                          id="overlay"
                          data-v-0487c446=""
                          data-svg-origin="0 1657"
                          transform="matrix(1,0,0,1,0,1703)"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                          }}
                        >
                          <path
                            id="overlay"
                            d="M2713 1657H0V3360H2713V1657Z"
                            fill="#FFD864"
                            data-v-0487c446=""
                          ></path>
                        </g>
                        <g id="arrow" data-v-0487c446="">
                          <path
                            id="Rectangle 330"
                            d="M1358.46 2068L1358.46 2087.13C1358.46 2087.68 1358.01 2088.13 1357.46 2088.13L1350.22 2088.13C1349.66 2088.13 1349.22 2087.68 1349.22 2087.13L1349.22 2068C1349.22 2067.45 1349.66 2067 1350.22 2067L1357.46 2067C1358.01 2067 1358.46 2067.45 1358.46 2068Z"
                            fill="#F7B100"
                            data-v-0487c446=""
                          ></path>
                          <path
                            id="Polygon 1"
                            d="M1352.87 2106.43C1353.25 2107.1 1354.22 2107.1 1354.6 2106.43L1369.59 2080.46C1370.11 2079.58 1369.11 2078.59 1368.23 2079.1L1354.24 2087.18C1353.93 2087.36 1353.55 2087.36 1353.24 2087.18L1339.24 2079.1C1338.36 2078.59 1337.36 2079.58 1337.88 2080.46L1352.87 2106.43Z"
                            fill="#F7B100"
                            data-v-0487c446=""
                          ></path>
                        </g>
                        <g
                          id="headline"
                          class="rays-headline"
                          data-v-0487c446=""
                        >
                          <g
                            id="second-headline"
                            data-v-0487c446=""
                            data-svg-origin="461.0348815917969 750.5256958007812"
                            transform="matrix(1,0,0,1,0,0)"
                            style={{
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transformOrigin: "0px 0px",
                            }}
                          >
                            <text fill="#FFB800" data-v-0487c446="">
                              <textPath
                                startOffset="50%"
                                text-anchor="middle"
                                xlinkHref="#transform-path"
                                class="pp-bold transformFont"
                                data-v-0487c446=""
                              >
                                TRANSFORMED
                              </textPath>
                            </text>
                          </g>
                          <path
                            id="We've"
                            d="M1020.49 492H1068.09L1087.13 700.08L1087.81 708.24H1088.15L1088.83 700.08L1112.63 492H1170.43L1193.89 700.08L1194.91 708.24H1195.25L1195.93 700.08L1214.63 492H1262.23L1227.21 764H1162.61L1142.55 567.14L1141.53 558.3L1140.51 567.14L1120.45 764H1055.51L1020.49 492ZM1275.38 492H1380.1V531.78H1323.32V608.28H1377.04V647.72H1323.32V724.22H1380.1V764H1275.38V492ZM1420.32 492V577H1395.84V492H1420.32ZM1430.54 492H1479.5L1499.22 713L1500.24 720.82L1500.92 713L1520.64 492H1569.26L1533.22 764H1466.58L1430.54 492ZM1582.51 492H1687.23V531.78H1630.45V608.28H1684.17V647.72H1630.45V724.22H1687.23V764H1582.51V492Z"
                            fill="#FFB800"
                            data-v-0487c446=""
                          ></path>
                        </g>
                        <g
                          id="ball"
                          data-v-0487c446=""
                          data-svg-origin="924.9600219726562 1012"
                          transform="matrix(1,0,0,1,0,0)"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                          }}
                        >
                          <path
                            id="Ellipse 215"
                            d="M1352.46 1867C1588.56 1867 1779.96 1675.6 1779.96 1439.5C1779.96 1203.4 1588.56 1012 1352.46 1012C1116.36 1012 924.96 1203.4 924.96 1439.5C924.96 1675.6 1116.36 1867 1352.46 1867Z"
                            fill="#3F3834"
                            stroke="#A28C7F"
                            stroke-width="20"
                            data-v-0487c446=""
                          ></path>
                          <path
                            id="ball-star"
                            d="M1448.96 1250.32C1564.96 1250.32 1564.96 1178.6 1564.96 1112C1564.96 1178.6 1564.96 1250.32 1680.96 1250.32C1564.96 1250.32 1564.96 1342.53 1564.96 1404C1564.96 1342.53 1564.96 1250.32 1448.96 1250.32Z"
                            fill="#F3EFE6"
                            data-v-0487c446=""
                            data-svg-origin="1564.9599609375 1258"
                            transform="matrix(1,0,0,1,0,0)"
                            style={{
                              transformOrigin: "0px 0px",
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                            }}
                          ></path>
                        </g>
                        <g
                          id="ribbon"
                          data-v-0487c446=""
                          data-svg-origin="132.40199279785156 1074.8699951171875"
                          transform="matrix(1,0,0,1,0,0)"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                          }}
                        >
                          <g id="ribbon-sides" data-v-0487c446="">
                            <path
                              id="Vector 637"
                              d="M132.402 1228.07C203.772 1300.99 428.548 1373.65 532.014 1400.87C579.272 1428.55 746.37 1203.39 724.76 1162.19C705.068 1124.65 584.811 1107.44 527.785 1096.28C478.487 1086.62 241.511 1095.79 190.537 1099.07C222.842 1130.08 349.391 1191.13 386.133 1223.56C345.185 1214.38 188.291 1212.66 132.402 1228.07Z"
                              fill="#F0B1C1"
                              data-v-0487c446=""
                            ></path>
                            <path
                              id="Vector 640"
                              d="M2560.76 1253.75C2536.21 1276.09 2261.04 1371.52 2126.52 1416.44C2071.3 1435.1 1974.71 1263.05 1933.32 1174.69C1982.46 1160.67 2101.21 1127.6 2183.04 1107.49C2285.32 1082.36 2401.56 1085.67 2509.71 1074.87C2467.48 1121.35 2429.41 1155.16 2332.96 1217C2430.35 1187.39 2506.82 1249.19 2560.76 1253.75Z"
                              fill="#F0B1C1"
                              data-v-0487c446=""
                            ></path>
                          </g>
                          <g id="ribbon-middle" data-v-0487c446="">
                            <path
                              id="Vector 638"
                              d="M725.773 1170.08L737.133 1348.49C653.406 1338.01 514.247 1197.3 531.269 1182.6C543.825 1171.76 718.125 1190.98 725.773 1170.08Z"
                              fill="#BF4C6B"
                              data-v-0487c446=""
                            ></path>
                            <path
                              id="Vector 639"
                              d="M1926.05 1178.97L1938.47 1374.01C2013.1 1351.86 2121.43 1181.27 2104.12 1167.51C2091.34 1157.36 1949.83 1163.59 1926.05 1178.97Z"
                              fill="#BF4C6B"
                              data-v-0487c446=""
                            ></path>
                            <path
                              id="Vector 636"
                              d="M1836.96 1649C1990.72 1597.05 2136.66 1510.41 2147.95 1494.5C2169.96 1463.5 2147.96 1378.5 2147.96 1378.5C2147.96 1378.5 2130.49 1238.61 2121.59 1203.91C2110.98 1162.56 2103.7 1163.85 2094.34 1171.06C2004.21 1240.54 1786.64 1391.56 1374.72 1432.94C919.815 1478.64 685.54 1323.69 605.842 1266.85C567.279 1239.34 538.522 1211.68 529.461 1185C514.466 1257.85 496.585 1376.56 491.085 1444.35C485.596 1511.98 521.294 1542.36 544.797 1562.36L544.955 1562.5C568.455 1576.5 612.433 1625.67 850.455 1688C1209.45 1782 1637.55 1716.36 1836.96 1649Z"
                              fill="#F4B9C8"
                              data-v-0487c446=""
                            ></path>
                          </g>
                          <g
                            id="ribbon-text"
                            class="ribbon-text"
                            data-v-0487c446=""
                            style={{ opacity: 1 }}
                          >
                            <g id="Group 316124050" data-v-0487c446="">
                              <g id="top-ribbon-text" data-v-0487c446="">
                                <text fill="#BD3257" data-v-0487c446="">
                                  <textPath
                                    startOffset="52%"
                                    text-anchor="middle"
                                    xlinkHref="#top-path"
                                    class="pp-bold ribbonFont"
                                    data-v-0487c446=""
                                  >
                                    THE ALL⁃AMERICAN TREAT WITH INVENTIVE,
                                  </textPath>
                                </text>
                              </g>
                              <g
                                id="bottom-ribbon-text"
                                class="ribbon-text"
                                data-v-0487c446=""
                              >
                                <text fill="#BD3257" data-v-0487c446="">
                                  <textPath
                                    startOffset="52%"
                                    text-anchor="middle"
                                    xlinkHref="#bottom-path"
                                    class="pp-bold ribbonFont"
                                    data-v-0487c446=""
                                  >
                                    CRAVEWORTHY ASIAN⁃INSPIRED FLAVORS
                                  </textPath>
                                </text>
                              </g>
                            </g>
                          </g>
                        </g>
                        <g
                          id="caption"
                          data-v-0487c446=""
                          data-svg-origin="965.5609741210938 1785.300048828125"
                          transform="matrix(1,0,0,1,0,0)"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                            opacity: 1,
                          }}
                        >
                          <text fill="#BF4C6B" data-v-0487c446="">
                            <textPath
                              startOffset="75%"
                              text-anchor="middle"
                              xlinkHref="#magic-path"
                              class="pp-bold magicFont"
                              data-v-0487c446=""
                            >
                              THE CHEWY MAGIC OF BOBA
                            </textPath>
                          </text>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="ctf-scoop-component">
                  <div
                    className="scoop-component position-relative pb-2 pb-md-0"
                    data-v-3bdf0771=""
                  >
                    <div
                      data-id="waypoint-54"
                      className="synchronized-waypoint marker marker marker--0"
                      data-v-3bdf0771=""
                    ></div>
                    <div
                      data-id="waypoint-55"
                      className="synchronized-waypoint marker marker marker--1"
                      data-v-3bdf0771=""
                    ></div>
                    <div
                      data-id="waypoint-56"
                      className="synchronized-waypoint marker marker marker--2"
                      data-v-3bdf0771=""
                    ></div>
                    <svg
                      viewBox="0 0 2316 1919"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="scoop-svg"
                      data-v-83cef27e=""
                      data-v-3bdf0771=""
                    >
                      <defs data-v-83cef27e="">
                        <path
                          id="textpath1"
                          d="M65,930.652C65,830.322 92.2884,730.975 145.307,638.282C198.326,545.589 276.036,461.367 374.002,390.423C471.968,319.479 588.27,263.203 716.269,224.808C844.267,186.414 981.455,166.652 1120,166.652C1258.54,166.652 1395.73,186.414 1523.73,224.808C1651.73,263.203 1768.03,319.479 1866,390.423C1963.96,461.367 2041.67,545.589 2094.69,638.282C2147.71,730.975 2175,830.322 2175,930.652"
                          stroke="black"
                          data-v-83cef27e=""
                        ></path>
                        <path
                          id="textpath2"
                          d="M132,1126.66C132,1024.49 157.504,923.32 207.055,828.929C256.606,734.537 329.234,648.771 420.793,576.527C512.351,504.283 621.047,446.976 740.674,407.878C860.301,368.78 988.517,348.656 1118,348.656C1247.48,348.656 1375.7,368.78 1495.33,407.878C1614.95,446.976 1723.65,504.283 1815.21,576.527C1906.77,648.771 1979.39,734.537 2028.95,828.928C2078.5,923.32 2104,1024.49 2104,1126.66"
                          stroke="black"
                          data-v-83cef27e=""
                        ></path>
                        <path
                          id="textpath3"
                          d="M1798.5 1521C1798.5 1828.81 1495.49 2078.5 1121.5 2078.5C747.508 2078.5 444.5 1828.81 444.5 1521C444.5 1213.19 747.508 963.5 1121.5 963.5C1495.49 963.5 1798.5 1213.19 1798.5 1521Z"
                          stroke="black"
                          data-v-83cef27e=""
                        ></path>
                        <path
                          id="textpath4"
                          d="M1798.5,1022L1798.5,1022C1798.5,714.188 1495.49,464.5 1121.5,464.5C747.508,464.5 444.5,714.188 444.5,1022C444.5,1329.81 747.508,1579.5 1121.5,1579.5C1495.49,1579.5 1798.5,1329.81 1798.5,1022"
                          stroke="black"
                          data-v-83cef27e=""
                        ></path>
                      </defs>
                      <g
                        id="scoop-md"
                        clip-path="url(#clip0_2_129)"
                        data-v-83cef27e=""
                      >
                        <g id="purple-scoop" data-v-83cef27e="">
                          <path
                            id="Ellipse 643"
                            d="M2109.46 1138C2109.46 1035.44 2083.85 933.88 2034.1 839.124C1984.35 744.369 1911.43 658.272 1819.5 585.75C1727.57 513.227 1618.43 455.699 1498.32 416.45C1378.21 377.201 1249.47 357 1119.46 357C989.452 357 860.717 377.201 740.604 416.45C620.492 455.699 511.355 513.227 419.425 585.75C327.495 658.272 254.572 744.369 204.82 839.124C155.068 933.88 129.461 1035.44 129.461 1138H1119.46H2109.46Z"
                            fill="#FFB4C6"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Ellipse 642"
                            d="M2082.46 1140C2082.46 1040.33 2057.55 941.629 2009.16 849.543C1960.76 757.457 1889.83 673.786 1800.4 603.306C1710.98 532.826 1604.82 476.919 1487.99 438.775C1371.15 400.632 1245.92 381 1119.46 381C992.998 381 867.773 400.632 750.937 438.775C634.1 476.919 527.94 532.826 438.517 603.306C349.094 673.786 278.16 757.457 229.765 849.543C181.37 941.629 156.461 1040.33 156.461 1140H1119.46H2082.46Z"
                            fill="#BF4C6B"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Vector 33"
                            d="M0.460938 1321.18C0.460938 1321.18 34.0872 1308.57 69.1988 1297.73C82.7869 1266.34 97.7042 1216.41 113.296 1138.97L2173.98 1094C2182.17 1130.52 2315.46 1394.04 2315.46 1506.17C2208.55 1474.16 2129.94 1486.46 2041.47 1495.11C1952.99 1503.76 1773.96 1628.5 1592.46 1495.11C1526.09 1446.33 1518.78 1330.32 1434.14 1281.33C1288.46 1197 1130.47 1313.27 1028.72 1321.18C979.252 1325.03 904.473 1308.95 844.262 1313.27C784.051 1317.6 687.961 1388.28 549.961 1358.5C462.961 1339.73 425.961 1260.5 352.461 1247.5C250.461 1229.46 165.276 1276.87 123.497 1283.79C108.594 1286.26 88.6681 1291.72 69.1988 1297.73C29.019 1390.54 0.460938 1321.18 0.460938 1321.18Z"
                            fill="#BF4C6B"
                            data-v-83cef27e=""
                          ></path>
                        </g>
                        <g id="small-bubble" data-v-83cef27e="">
                          <path
                            id="Ellipse 616"
                            d="M1856.96 1709.98C1857.79 1709.98 1858.46 1709.31 1858.46 1708.49C1858.46 1707.67 1857.79 1707 1856.96 1707C1856.13 1707 1855.46 1707.67 1855.46 1708.49C1855.46 1709.31 1856.13 1709.98 1856.96 1709.98Z"
                            fill="#F3EFE6"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Ellipse 605"
                            d="M939.961 1439.84C932.505 1439.84 926.461 1433.83 926.461 1426.42C926.461 1419.01 932.505 1413 939.961 1413C947.417 1413 953.461 1419.01 953.461 1426.42C953.461 1433.83 947.417 1439.84 939.961 1439.84Z"
                            fill="#473D36"
                            data-v-83cef27e=""
                          ></path>
                        </g>
                        <g
                          id="big-bubble"
                          data-v-83cef27e=""
                          data-svg-origin="1808.4599609375 1523"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                            opacity: 0,
                          }}
                          transform="matrix(0.7,0,0,0.7,542.53799,406.9)"
                        >
                          <path
                            id="Ellipse 597"
                            d="M1833.46 1572.7C1847.27 1572.7 1858.46 1561.58 1858.46 1547.85C1858.46 1534.12 1847.27 1523 1833.46 1523C1819.65 1523 1808.46 1534.12 1808.46 1547.85C1808.46 1561.58 1819.65 1572.7 1833.46 1572.7Z"
                            fill="#473D36"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Ellipse 598"
                            d="M1841.46 1540.89C1844.22 1540.89 1846.46 1538.67 1846.46 1535.92C1846.46 1533.17 1844.22 1530.95 1841.46 1530.95C1838.7 1530.95 1836.46 1533.17 1836.46 1535.92C1836.46 1538.67 1838.7 1540.89 1841.46 1540.89Z"
                            fill="#F3EFE6"
                            data-v-83cef27e=""
                          ></path>
                        </g>
                        <g id="big-bubble_2" data-v-83cef27e="">
                          <path
                            id="Ellipse 596_3"
                            d="M1216.96 1842.6C1236.01 1842.6 1251.46 1827.24 1251.46 1808.3C1251.46 1789.36 1236.01 1774 1216.96 1774C1197.91 1774 1182.46 1789.36 1182.46 1808.3C1182.46 1827.24 1197.91 1842.6 1216.96 1842.6Z"
                            fill="#473D36"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Vector 565_3"
                            d="M1211.44 1795.27C1228.69 1795.27 1228.69 1785.67 1228.69 1776.75C1228.69 1785.67 1228.69 1795.27 1245.94 1795.27C1228.69 1795.27 1228.69 1807.61 1228.69 1815.85C1228.69 1807.61 1228.69 1795.27 1211.44 1795.27Z"
                            fill="#F3EFE6"
                            data-v-83cef27e=""
                          ></path>
                        </g>
                        <g
                          id="big-bubble_3"
                          data-v-83cef27e=""
                          data-svg-origin="1920.4599609375 759"
                          transform="matrix(0.7,0,0,0.7,576.13799,-122.3)"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                            opacity: 1,
                          }}
                        >
                          <path
                            id="Ellipse 596_4"
                            d="M1954.96 827.592C1974.01 827.592 1989.46 812.237 1989.46 793.296C1989.46 774.355 1974.01 759 1954.96 759C1935.91 759 1920.46 774.355 1920.46 793.296C1920.46 812.237 1935.91 827.592 1954.96 827.592Z"
                            fill="#473D36"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Vector 565_4"
                            d="M1949.44 780.268C1966.69 780.268 1966.69 770.665 1966.69 761.748C1966.69 770.665 1966.69 780.268 1983.94 780.268C1966.69 780.268 1966.69 792.614 1966.69 800.845C1966.69 792.614 1966.69 780.268 1949.44 780.268Z"
                            fill="#F3EFE6"
                            data-v-83cef27e=""
                          ></path>
                        </g>
                        <g
                          id="big-bubble_4"
                          data-v-83cef27e=""
                          data-svg-origin="940.4609985351562 500"
                          transform="matrix(0.7,0,0,0.7,282.1383,100)"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                            opacity: 1,
                          }}
                        >
                          <path
                            id="Ellipse 596_5"
                            d="M962.961 544.734C975.387 544.734 985.461 534.72 985.461 522.367C985.461 510.014 975.387 500 962.961 500C950.535 500 940.461 510.014 940.461 522.367C940.461 534.72 950.535 544.734 962.961 544.734Z"
                            fill="#473D36"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Vector 565_5"
                            d="M959.361 513.866C970.611 513.866 970.611 507.604 970.611 501.788C970.611 507.604 970.611 513.866 981.861 513.866C970.611 513.866 970.611 521.918 970.611 527.286C970.611 521.918 970.611 513.866 959.361 513.866Z"
                            fill="#F3EFE6"
                            data-v-83cef27e=""
                          ></path>
                        </g>
                        <g
                          id="big-bubble_5"
                          data-v-83cef27e=""
                          data-svg-origin="1709.4599609375 1476.6099853515625"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                            opacity: 0,
                          }}
                          transform="matrix(0.7,0,0,0.7,512.83799,392.983)"
                        >
                          <path
                            id="Ellipse 590"
                            d="M1722.96 1503.45C1715.5 1503.45 1709.46 1497.44 1709.46 1490.03C1709.46 1482.62 1715.5 1476.61 1722.96 1476.61C1730.42 1476.61 1736.46 1482.62 1736.46 1490.03C1736.46 1497.44 1730.42 1503.45 1722.96 1503.45Z"
                            fill="#473D36"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Vector 570"
                            d="M1720.46 1487.65C1726.96 1487.65 1726.96 1483.99 1726.96 1480.59C1726.96 1483.99 1726.96 1487.65 1733.46 1487.65C1726.96 1487.65 1726.96 1492.36 1726.96 1495.5C1726.96 1492.36 1726.96 1487.65 1720.46 1487.65Z"
                            fill="#F3EFE6"
                            data-v-83cef27e=""
                          ></path>
                        </g>
                        <g id="big-bubble_6" data-v-83cef27e="">
                          <path
                            id="Vector 574"
                            d="M1017.46 1642.08C1024.46 1642.08 1024.46 1638.66 1024.46 1635.48C1024.46 1638.66 1024.46 1642.08 1031.46 1642.08C1024.46 1642.08 1024.46 1646.47 1024.46 1649.4C1024.46 1646.47 1024.46 1642.08 1017.46 1642.08Z"
                            fill="#F3EFE6"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Ellipse 603"
                            d="M311.461 1497.82C320.298 1497.82 327.461 1490.69 327.461 1481.91C327.461 1473.13 320.298 1466 311.461 1466C302.624 1466 295.461 1473.13 295.461 1481.91C295.461 1490.69 302.624 1497.82 311.461 1497.82Z"
                            fill="#473D36"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Vector 573"
                            d="M308.461 1477.46C316.961 1477.46 316.961 1473.07 316.961 1468.99C316.961 1473.07 316.961 1477.46 325.461 1477.46C316.961 1477.46 316.961 1483.11 316.961 1486.88C316.961 1483.11 316.961 1477.46 308.461 1477.46Z"
                            fill="#F3EFE6"
                            data-v-83cef27e=""
                          ></path>
                        </g>
                        <g class="three-scoops-wrapper" data-v-83cef27e="">
                          <g
                            id="three-scoops"
                            class="three-scoops"
                            data-v-83cef27e=""
                            style={{ opacity: 1 }}
                          >
                            <g
                              class="single-scoop"
                              data-v-83cef27e=""
                              data-svg-origin="1153.114990234375 1172.094970703125"
                              transform="matrix(1,0,0,1,0,200)"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transformOrigin: "0px 0px",
                              }}
                            >
                              <path
                                id="Ellipse 601"
                                d="M1152.46 1304.19C1218.18 1304.19 1271.46 1251.22 1271.46 1185.89C1271.46 1120.56 1218.18 1067.59 1152.46 1067.59C1086.74 1067.59 1033.46 1120.56 1033.46 1185.89C1033.46 1251.22 1086.74 1304.19 1152.46 1304.19Z"
                                fill="#FFC106"
                                data-v-83cef27e=""
                              ></path>
                              <path
                                id="Vector 571"
                                d="M1174.46 1093.6C1223.61 1093.6 1223.61 1065.81 1223.61 1040C1223.61 1065.81 1223.61 1093.6 1272.77 1093.6C1223.61 1093.6 1223.61 1129.33 1223.61 1153.15C1223.61 1129.33 1223.61 1093.6 1174.46 1093.6Z"
                                fill="#F3EFE6"
                                data-v-83cef27e=""
                              ></path>
                              <path
                                id="Ellipse 601_2"
                                d="M1070.18 1133C1090.46 1133 1106.9 1116.66 1106.9 1096.5C1106.9 1076.34 1090.46 1060 1070.18 1060C1049.9 1060 1033.46 1076.34 1033.46 1096.5C1033.46 1116.66 1049.9 1133 1070.18 1133Z"
                                fill="#473D36"
                                data-v-83cef27e=""
                              ></path>
                              <path
                                id="Vector 571_2"
                                d="M1067.78 1083.68C1082.95 1083.68 1082.95 1075.1 1082.95 1067.14C1082.95 1075.1 1082.95 1083.68 1098.12 1083.68C1082.95 1083.68 1082.95 1094.7 1082.95 1102.05C1082.95 1094.7 1082.95 1083.68 1067.78 1083.68Z"
                                fill="#F3EFE6"
                                data-v-83cef27e=""
                              ></path>
                              <path
                                id="Vector 623"
                                d="M1091.46 1169.31C1096.29 1177.14 1107.27 1174.09 1109.46 1168"
                                stroke="#EE4545"
                                stroke-width="3"
                                stroke-linecap="round"
                                data-v-83cef27e=""
                              ></path>
                              <path
                                id="Vector 624"
                                d="M1165.95 1157.24C1169.96 1160.5 1184.46 1161.06 1184.46 1149"
                                stroke="#EE4545"
                                stroke-width="3"
                                stroke-linecap="round"
                                data-v-83cef27e=""
                              ></path>
                            </g>
                            <g
                              class="single-scoop"
                              data-v-83cef27e=""
                              data-svg-origin="1018.5614929199219 1303.7949829101562"
                              transform="matrix(1,0,0,1,0,200)"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transformOrigin: "0px 0px",
                              }}
                            >
                              <path
                                id="Ellipse 601_3"
                                d="M1018.56 1448.59C1088.64 1448.59 1145.46 1392.12 1145.46 1322.45C1145.46 1252.78 1088.64 1196.31 1018.56 1196.31C948.477 1196.31 891.663 1252.78 891.663 1322.45C891.663 1392.12 948.477 1448.59 1018.56 1448.59Z"
                                fill="#D4B6D4"
                                data-v-83cef27e=""
                              ></path>
                              <path
                                id="Vector 571_3"
                                d="M933.457 1204.95C975.957 1204.95 975.957 1181.12 975.957 1159C975.957 1181.12 975.957 1204.95 1018.46 1204.95C975.957 1204.95 975.957 1235.58 975.957 1256C975.957 1235.58 975.957 1204.95 933.457 1204.95Z"
                                fill="#F3EFE6"
                                data-v-83cef27e=""
                              ></path>
                              <path
                                id="Vector 629"
                                d="M1009.37 1336.14C1006.16 1332.1 994.767 1329.63 989.527 1340.21"
                                stroke="#805B80"
                                stroke-width="3"
                                stroke-linecap="round"
                                data-v-83cef27e=""
                              ></path>
                              <path
                                id="Vector 630"
                                d="M937.322 1360.52C937.482 1355.35 944.26 1346.68 955.666 1351.92"
                                stroke="#805B80"
                                stroke-width="3"
                                stroke-linecap="round"
                                data-v-83cef27e=""
                              ></path>
                              <path
                                id="Ellipse 669"
                                d="M982.102 1372.18C984.133 1371.31 985.339 1369.58 984.795 1368.31C984.252 1367.04 982.165 1366.71 980.134 1367.58C978.103 1368.45 976.897 1370.18 977.441 1371.45C977.984 1372.72 980.071 1373.05 982.102 1372.18Z"
                                fill="#805B80"
                                data-v-83cef27e=""
                              ></path>
                            </g>
                            <g
                              class="single-scoop"
                              data-v-83cef27e=""
                              data-svg-origin="1243.4599609375 1352.5"
                              transform="matrix(1,0,0,1,0,200)"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transformOrigin: "0px 0px",
                              }}
                            >
                              <path
                                id="Ellipse 602_2"
                                d="M1243.46 1497C1323.54 1497 1388.46 1432.31 1388.46 1352.5C1388.46 1272.69 1323.54 1208 1243.46 1208C1163.38 1208 1098.46 1272.69 1098.46 1352.5C1098.46 1432.31 1163.38 1497 1243.46 1497Z"
                                fill="#E07390"
                                data-v-83cef27e=""
                              ></path>
                              <path
                                id="Vector 628"
                                d="M1286.34 1370.2C1287.63 1379.31 1298.91 1380.91 1303.36 1376.2"
                                stroke="#473D36"
                                stroke-width="3"
                                stroke-linecap="round"
                                data-v-83cef27e=""
                              ></path>
                              <path
                                id="Ellipse 612"
                                d="M1317.46 1360C1319.67 1360 1321.46 1358.21 1321.46 1356C1321.46 1353.79 1319.67 1352 1317.46 1352C1315.25 1352 1313.46 1353.79 1313.46 1356C1313.46 1358.21 1315.25 1360 1317.46 1360Z"
                                fill="#473D36"
                                data-v-83cef27e=""
                              ></path>
                              <path
                                id="Ellipse 607"
                                d="M1286.46 1348C1288.67 1348 1290.46 1346.21 1290.46 1344C1290.46 1341.79 1288.67 1340 1286.46 1340C1284.25 1340 1282.46 1341.79 1282.46 1344C1282.46 1346.21 1284.25 1348 1286.46 1348Z"
                                fill="#473D36"
                                data-v-83cef27e=""
                              ></path>
                              <path
                                id="Vector 571_4"
                                d="M1230.46 1274.79C1258.46 1274.79 1258.46 1258.82 1258.46 1244C1258.46 1258.82 1258.46 1274.79 1286.46 1274.79C1258.46 1274.79 1258.46 1295.32 1258.46 1309C1258.46 1295.32 1258.46 1274.79 1230.46 1274.79Z"
                                fill="#F3EFE6"
                                data-v-83cef27e=""
                              ></path>
                            </g>
                          </g>
                        </g>
                        <g id="small-bubbles" data-v-83cef27e="">
                          <g id="small-bubbles-top" data-v-83cef27e="">
                            <path
                              id="Ellipse 692"
                              d="M430.461 717.917C434.327 717.917 437.461 714.801 437.461 710.958C437.461 707.115 434.327 703.999 430.461 703.999C426.595 703.999 423.461 707.115 423.461 710.958C423.461 714.801 426.595 717.917 430.461 717.917Z"
                              fill="#473D36"
                              class="small-bubble"
                              data-v-83cef27e=""
                              data-svg-origin="430.46099853515625 710.9580078125"
                              transform="matrix(0.7,0,0,0.7,129.1383,183.2874)"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transformOrigin: "0px 0px",
                                opacity: 0,
                              }}
                            ></path>
                            <path
                              id="Ellipse 691"
                              d="M781.461 731.917C785.327 731.917 788.461 728.801 788.461 724.958C788.461 721.115 785.327 717.999 781.461 717.999C777.595 717.999 774.461 721.115 774.461 724.958C774.461 728.801 777.595 731.917 781.461 731.917Z"
                              fill="#473D36"
                              class="small-bubble"
                              data-v-83cef27e=""
                              data-svg-origin="781.4609985351562 724.9580078125"
                              transform="matrix(0.7,0,0,0.7,234.4383,187.4874)"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transformOrigin: "0px 0px",
                                opacity: 0,
                              }}
                            ></path>
                            <path
                              id="Ellipse 693"
                              d="M1253.46 553.917C1257.33 553.917 1260.46 550.801 1260.46 546.958C1260.46 543.115 1257.33 539.999 1253.46 539.999C1249.59 539.999 1246.46 543.115 1246.46 546.958C1246.46 550.801 1249.59 553.917 1253.46 553.917Z"
                              fill="#473D36"
                              class="small-bubble"
                              data-v-83cef27e=""
                              data-svg-origin="1253.4599609375 546.9580078125"
                              transform="matrix(0.7,0,0,0.7,376.03799,134.0874)"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transformOrigin: "0px 0px",
                                opacity: 0,
                              }}
                            ></path>
                            <path
                              id="Ellipse 694"
                              d="M1654.46 631.917C1658.33 631.917 1661.46 628.801 1661.46 624.958C1661.46 621.115 1658.33 617.999 1654.46 617.999C1650.59 617.999 1647.46 621.115 1647.46 624.958C1647.46 628.801 1650.59 631.917 1654.46 631.917Z"
                              fill="#473D36"
                              class="small-bubble"
                              data-v-83cef27e=""
                              data-svg-origin="1654.4599609375 624.9580078125"
                              transform="matrix(0.7,0,0,0.7,496.33799,157.4874)"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transformOrigin: "0px 0px",
                                opacity: 0,
                              }}
                            ></path>
                            <path
                              id="Ellipse 695"
                              d="M1479.46 712.917C1483.33 712.917 1486.46 709.801 1486.46 705.958C1486.46 702.115 1483.33 698.999 1479.46 698.999C1475.59 698.999 1472.46 702.115 1472.46 705.958C1472.46 709.801 1475.59 712.917 1479.46 712.917Z"
                              fill="#473D36"
                              class="small-bubble"
                              data-v-83cef27e=""
                              data-svg-origin="1479.4599609375 705.9580078125"
                              transform="matrix(0.7,0,0,0.7,443.83799,181.7874)"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transformOrigin: "0px 0px",
                                opacity: 0,
                              }}
                            ></path>
                            <path
                              id="Ellipse 696"
                              d="M1879.46 922.917C1883.33 922.917 1886.46 919.801 1886.46 915.958C1886.46 912.115 1883.33 908.999 1879.46 908.999C1875.59 908.999 1872.46 912.115 1872.46 915.958C1872.46 919.801 1875.59 922.917 1879.46 922.917Z"
                              fill="#473D36"
                              class="small-bubble"
                              data-v-83cef27e=""
                              data-svg-origin="1879.4599609375 915.9580078125"
                              transform="matrix(0.7,0,0,0.7,563.83799,244.7874)"
                              style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transformOrigin: "0px 0px",
                                opacity: 0,
                              }}
                            ></path>
                          </g>
                          <path
                            id="Ellipse 671"
                            d="M803.461 1187.92C807.327 1187.92 810.461 1184.8 810.461 1180.96C810.461 1177.12 807.327 1174 803.461 1174C799.595 1174 796.461 1177.12 796.461 1180.96C796.461 1184.8 799.595 1187.92 803.461 1187.92Z"
                            fill="#473D36"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Ellipse 666"
                            d="M1421.46 1303.92C1425.33 1303.92 1428.46 1300.8 1428.46 1296.96C1428.46 1293.12 1425.33 1290 1421.46 1290C1417.59 1290 1414.46 1293.12 1414.46 1296.96C1414.46 1300.8 1417.59 1303.92 1421.46 1303.92Z"
                            fill="#473D36"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Ellipse 679"
                            d="M310.461 1156.92C314.327 1156.92 317.461 1153.8 317.461 1149.96C317.461 1146.12 314.327 1143 310.461 1143C306.595 1143 303.461 1146.12 303.461 1149.96C303.461 1153.8 306.595 1156.92 310.461 1156.92Z"
                            fill="#473D36"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Ellipse 667"
                            d="M1428.46 1401.92C1432.33 1401.92 1435.46 1398.8 1435.46 1394.96C1435.46 1391.12 1432.33 1388 1428.46 1388C1424.59 1388 1421.46 1391.12 1421.46 1394.96C1421.46 1398.8 1424.59 1401.92 1428.46 1401.92Z"
                            fill="#473D36"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Ellipse 668"
                            d="M1519.96 1297C1526.31 1297 1531.46 1291.85 1531.46 1285.5C1531.46 1279.15 1526.31 1274 1519.96 1274C1513.61 1274 1508.46 1279.15 1508.46 1285.5C1508.46 1291.85 1513.61 1297 1519.96 1297Z"
                            fill="#473D36"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Ellipse 608"
                            d="M1954.46 1409.92C1958.33 1409.92 1961.46 1406.8 1961.46 1402.96C1961.46 1399.12 1958.33 1396 1954.46 1396C1950.59 1396 1947.46 1399.12 1947.46 1402.96C1947.46 1406.8 1950.59 1409.92 1954.46 1409.92Z"
                            fill="#473D36"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Ellipse 602"
                            d="M740.461 1812.78C744.327 1812.78 747.461 1809.66 747.461 1805.82C747.461 1801.98 744.327 1798.86 740.461 1798.86C736.595 1798.86 733.461 1801.98 733.461 1805.82C733.461 1809.66 736.595 1812.78 740.461 1812.78Z"
                            fill="#E07390"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Ellipse 600"
                            d="M356.461 1774.92C360.327 1774.92 363.461 1771.8 363.461 1767.96C363.461 1764.12 360.327 1761 356.461 1761C352.595 1761 349.461 1764.12 349.461 1767.96C349.461 1771.8 352.595 1774.92 356.461 1774.92Z"
                            fill="#E07390"
                            data-v-83cef27e=""
                          ></path>
                          <path
                            id="Ellipse 672"
                            d="M1613.46 1680.92C1617.33 1680.92 1620.46 1677.8 1620.46 1673.96C1620.46 1670.12 1617.33 1667 1613.46 1667C1609.59 1667 1606.46 1670.12 1606.46 1673.96C1606.46 1677.8 1609.59 1680.92 1613.46 1680.92Z"
                            fill="#E07390"
                            data-v-83cef27e=""
                          ></path>
                        </g>
                        <g id="top-headline" data-v-83cef27e="">
                          <text fill="#000" data-v-83cef27e="">
                            <textPath
                              startOffset="50%"
                              text-anchor="middle"
                              xlinkHref="#textpath1"
                              class="pp-bold red-text text1 scoopFont"
                              data-v-83cef27e=""
                              style={{ opacity: 1 }}
                            >
                              SMALL⁃BATCH
                            </textPath>
                          </text>
                        </g>
                        <g id="arrow-group" data-v-83cef27e="">
                          <g
                            id="right-arrow"
                            data-v-83cef27e=""
                            data-svg-origin="1623.2498779296875 163.95449829101562"
                            transform="matrix(1,0,0,1,50,30)"
                            style={{
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transformOrigin: "0px 0px",
                              opacity: 1,
                            }}
                          >
                            <rect
                              id="Rectangle 331"
                              x="1641.76"
                              y="170.691"
                              width="21.1276"
                              height="9.24331"
                              rx="1"
                              transform="rotate(33.0047 1641.76 170.691)"
                              fill="#3F3834"
                              data-v-83cef27e=""
                            ></rect>
                            <path
                              id="Polygon 2"
                              d="M1623.36 165.408C1623.01 164.722 1623.54 163.915 1624.31 163.956L1654.25 165.527C1655.27 165.581 1655.56 166.953 1654.65 167.417L1640.25 174.751C1639.94 174.914 1639.73 175.233 1639.71 175.59L1638.86 191.726C1638.81 192.747 1637.44 193.039 1636.97 192.127L1623.36 165.408Z"
                              fill="#3F3834"
                              data-v-83cef27e=""
                            ></path>
                          </g>
                          <g
                            id="left-arrow"
                            data-v-83cef27e=""
                            data-svg-origin="577.9998779296875 163.95449829101562"
                            transform="matrix(1,0,0,1,-50,30)"
                            style={{
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transformOrigin: "0px 0px",
                              opacity: 1,
                            }}
                          >
                            <rect
                              id="Rectangle 330"
                              width="21.1276"
                              height="9.24331"
                              rx="1"
                              transform="matrix(-0.838626 0.544708 0.544708 0.838626 595.718 170.691)"
                              fill="#3F3834"
                              data-v-83cef27e=""
                            ></rect>
                            <path
                              id="Polygon 1"
                              d="M614.117 165.408C614.466 164.722 613.942 163.915 613.173 163.956L583.228 165.527C582.207 165.581 581.915 166.953 582.827 167.417L597.224 174.751C597.543 174.914 597.75 175.233 597.769 175.59L598.616 191.726C598.67 192.747 600.041 193.039 600.506 192.127L614.117 165.408Z"
                              fill="#3F3834"
                              data-v-83cef27e=""
                            ></path>
                          </g>
                        </g>
                        <g id="bottom-headline" data-v-83cef27e="">
                          <text fill="#000" data-v-83cef27e="">
                            <textPath
                              startOffset="50%"
                              text-anchor="middle"
                              xlinkHref="#textpath2"
                              class="pp-bold red-text text2 scoopFont"
                              data-v-83cef27e=""
                              style={{ opacity: 1 }}
                            >
                              ONE⁃OF⁃A⁃KIND ICE CREAMS
                            </textPath>
                          </text>
                        </g>
                        <g
                          id="sweet-headline"
                          class="sweet-headline"
                          data-v-83cef27e=""
                        >
                          <text fill="#000" data-v-83cef27e="">
                            <textPath
                              startOffset="75%"
                              text-anchor="middle"
                              xlinkHref="#textpath3"
                              class="pp-bold yellow-text text3 sweetFont"
                              data-v-83cef27e=""
                              style={{ opacity: 1 }}
                            >
                              MADE WITH SWEET
                            </textPath>
                          </text>
                        </g>
                        <g class="tapioca-pearls" data-v-83cef27e="">
                          <g id="tapioca" data-v-83cef27e="">
                            <text fill="#000" data-v-83cef27e="">
                              <textPath
                                startOffset="68%"
                                text-anchor="middle"
                                xlinkHref="#textpath4"
                                class="pp-bold yellow-text tapioca tapiocaFont scroll-animation"
                                data-v-83cef27e=""
                                style={{ opacity: 1 }}
                              >
                                TAPIOCA&nbsp;
                              </textPath>
                            </text>
                          </g>
                          <g id="pearls" data-v-83cef27e="">
                            <text fill="#000" data-v-83cef27e="">
                              <textPath
                                startOffset="83.5%"
                                text-anchor="middle"
                                xlinkHref="#textpath4"
                                class="pp-bold yellow-text pearls tapiocaFont"
                                data-v-83cef27e=""
                                style={{ opacity: 1 }}
                              >
                                &nbsp;PEARLS
                              </textPath>
                            </text>
                          </g>
                        </g>
                      </g>
                      <defs data-v-83cef27e="">
                        <clipPath id="clip0_2_129" data-v-83cef27e="">
                          <rect
                            width="2316"
                            height="1919"
                            fill="white"
                            data-v-83cef27e=""
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div
                  data-id="waypoint-60"
                  className="synchronized-waypoint headline-in-circle position-relative"
                  data-v-3479b4ac=""
                >
                  <svg
                    viewBox="0 0 2004 3096"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="bg position-absolute disabled"
                    data-v-3479b4ac=""
                  >
                    <g id="Bg" data-v-3479b4ac="">
                      <rect
                        id="Rectangle 2040"
                        x="42"
                        y="1158.12"
                        width="1920"
                        height="1937"
                        fill="#E4C3EE"
                        data-v-3479b4ac=""
                      ></rect>
                      <ellipse
                        id="Ellipse 745"
                        cx="1002"
                        cy="1228.5"
                        rx="1002"
                        ry="1004.5"
                        fill="#E4C3EE"
                        data-v-3479b4ac=""
                      ></ellipse>
                      <ellipse
                        id="Ellipse 746"
                        cx="1002"
                        cy="1067"
                        rx="799"
                        ry="802"
                        fill="#D4B1DF"
                        class="purple-circle"
                        data-v-3479b4ac=""
                        data-svg-origin="1002 265"
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                          opacity: "0.5",
                        }}
                        transform="matrix(0.7,0,0,0.7,300.6,79.5)"
                      ></ellipse>
                      <ellipse
                        id="Ellipse 747"
                        cx="1002"
                        cy="847"
                        rx="525"
                        ry="528"
                        fill="#CDA8D8"
                        class="purple-circle"
                        data-v-3479b4ac=""
                        data-svg-origin="1002 319"
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                          opacity: "0.5",
                        }}
                        transform="matrix(0.7,0,0,0.7,300.6,95.7)"
                      ></ellipse>
                    </g>
                  </svg>
                  <div
                    data-id="waypoint-61"
                    className="synchronized-waypoint animation-marker3"
                    data-v-3479b4ac=""
                  ></div>
                  <svg
                    viewBox="0 0 2004 3096"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="balls position-relative z-1 disabled"
                    data-v-3479b4ac=""
                  >
                    <g id="Balls" data-v-3479b4ac="">
                      <g id="Group 316124343" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 596"
                          cx="1649.63"
                          cy="460.41"
                          rx="37.6335"
                          ry="37.4104"
                          fill="#473D36"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 565"
                          d="M1642.11 449.188C1660.92 449.188 1660.92 438.713 1660.92 428.986C1660.92 438.713 1660.92 449.188 1679.74 449.188C1660.92 449.188 1660.92 462.655 1660.92 471.634C1660.92 462.655 1660.92 449.188 1642.11 449.188Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124344" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 597"
                          cx="1545"
                          cy="289.852"
                          rx="25"
                          ry="24.8519"
                          fill="#B595BF"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 566"
                          d="M1539 281.481C1554.5 281.481 1554.5 272.935 1554.5 265C1554.5 272.935 1554.5 281.481 1570 281.481C1554.5 281.481 1554.5 292.468 1554.5 299.793C1554.5 292.468 1554.5 281.481 1539 281.481Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124345" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 597_2"
                          cx="1845"
                          cy="1843.85"
                          rx="25"
                          ry="24.8519"
                          fill="#B88AC6"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 566_2"
                          d="M1839 1835.48C1854.5 1835.48 1854.5 1826.94 1854.5 1819C1854.5 1826.94 1854.5 1835.48 1870 1835.48C1854.5 1835.48 1854.5 1846.47 1854.5 1853.79C1854.5 1846.47 1854.5 1835.48 1839 1835.48Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124346" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 597_3"
                          cx="368"
                          cy="1534.85"
                          rx="25"
                          ry="24.8519"
                          fill="#473D36"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 566_3"
                          d="M362 1526.48C377.5 1526.48 377.5 1517.94 377.5 1510C377.5 1517.94 377.5 1526.48 393 1526.48C377.5 1526.48 377.5 1537.47 377.5 1544.79C377.5 1537.47 377.5 1526.48 362 1526.48Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124347" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 597_4"
                          cx="236.5"
                          cy="1763.3"
                          rx="33.5"
                          ry="33.3015"
                          fill="#A380AE"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 566_4"
                          d="M228.46 1752.08C249.23 1752.08 249.23 1740.63 249.23 1730C249.23 1740.63 249.23 1752.08 270 1752.08C249.23 1752.08 249.23 1766.81 249.23 1776.62C249.23 1766.81 249.23 1752.08 228.46 1752.08Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124348" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 592"
                          cx="553"
                          cy="326.905"
                          rx="16"
                          ry="15.9052"
                          fill="#473D36"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 565_2"
                          d="M550 321.466C557.5 321.466 557.5 317.071 557.5 312.99C557.5 317.071 557.5 321.466 565 321.466C557.5 321.466 557.5 327.116 557.5 330.883C557.5 327.116 557.5 321.466 550 321.466Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124349" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 593"
                          cx="1371"
                          cy="800.076"
                          rx="7"
                          ry="6.95852"
                          fill="#473D36"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 568"
                          d="M1369 798.35C1373 798.35 1373 796.153 1373 794.112C1373 796.153 1373 798.35 1377 798.35C1373 798.35 1373 801.175 1373 803.059C1373 801.175 1373 798.35 1369 798.35Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124350" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 593_2"
                          cx="274"
                          cy="743.076"
                          rx="7"
                          ry="6.95852"
                          fill="#473D36"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 568_2"
                          d="M272 741.35C276 741.35 276 739.153 276 737.112C276 739.153 276 741.35 280 741.35C276 741.35 276 744.175 276 746.059C276 744.175 276 741.35 272 741.35Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124351" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 599"
                          cx="197"
                          cy="314.905"
                          rx="16"
                          ry="15.9052"
                          fill="#B595BF"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 567"
                          d="M195 311.039C201.5 311.039 201.5 307.376 201.5 303.975C201.5 307.376 201.5 311.039 208 311.039C201.5 311.039 201.5 315.747 201.5 318.886C201.5 315.747 201.5 311.039 195 311.039Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124352" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 599_2"
                          cx="626"
                          cy="627.905"
                          rx="16"
                          ry="15.9052"
                          fill="#B595BF"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 567_2"
                          d="M624 624.038C630.5 624.038 630.5 620.376 630.5 616.975C630.5 620.376 630.5 624.038 637 624.038C630.5 624.038 630.5 628.747 630.5 631.886C630.5 628.747 630.5 624.038 624 624.038Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124355" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 596_2"
                          cx="370.5"
                          cy="73.5924"
                          rx="34.5"
                          ry="34.2956"
                          fill="#473D36"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 565_3"
                          d="M364.98 60.5606C382.23 60.5606 382.23 50.9579 382.23 42.041C382.23 50.9579 382.23 60.5606 399.48 60.5606C382.23 60.5606 382.23 72.907 382.23 81.138C382.23 72.907 382.23 60.5606 364.98 60.5606Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124356" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 592_2"
                          cx="754"
                          cy="100.905"
                          rx="16"
                          ry="15.9052"
                          fill="#473D36"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 565_4"
                          d="M751 95.4659C758.5 95.4659 758.5 91.071 758.5 86.9901C758.5 91.071 758.5 95.4659 766 95.4659C758.5 95.4659 758.5 101.116 758.5 104.883C758.5 101.116 758.5 95.4659 751 95.4659Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124357" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 516"
                          cx="1002"
                          cy="145.5"
                          rx="19"
                          ry="19.5"
                          fill="#E07390"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 566_5"
                          d="M997 139.368C1007.5 139.368 1007.5 133.474 1007.5 128C1007.5 133.474 1007.5 139.368 1018 139.368C1007.5 139.368 1007.5 146.947 1007.5 152C1007.5 146.947 1007.5 139.368 997 139.368Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124358" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 591"
                          rx="13.5"
                          ry="13.42"
                          transform="matrix(-1 0 0 1 1764.5 71.2091)"
                          fill="#E07390"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 570"
                          d="M1762 67.8375C1768.5 67.8375 1768.5 64.1751 1768.5 60.7743C1768.5 64.1751 1768.5 67.8375 1775 67.8375C1768.5 67.8375 1768.5 72.5462 1768.5 75.6854C1768.5 72.5462 1768.5 67.8375 1762 67.8375Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124359" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 591_2"
                          rx="13.5"
                          ry="13.42"
                          transform="matrix(-1 0 0 1 1743.5 1598.42)"
                          fill="#E07390"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 570_2"
                          d="M1741 1595.05C1747.5 1595.05 1747.5 1591.39 1747.5 1587.99C1747.5 1591.39 1747.5 1595.05 1754 1595.05C1747.5 1595.05 1747.5 1599.76 1747.5 1602.9C1747.5 1599.76 1747.5 1595.05 1741 1595.05Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124360" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 591_3"
                          rx="13.5"
                          ry="13.42"
                          transform="matrix(-1 0 0 1 178.5 1537.42)"
                          fill="#E07390"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 570_3"
                          d="M176 1534.05C182.5 1534.05 182.5 1530.39 182.5 1526.99C182.5 1530.39 182.5 1534.05 189 1534.05C182.5 1534.05 182.5 1538.76 182.5 1541.9C182.5 1538.76 182.5 1534.05 176 1534.05Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124361" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 601"
                          cx="1308.5"
                          cy="82.0881"
                          rx="69.5"
                          ry="69.0881"
                          fill="#473D36"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 571"
                          d="M1303.97 57.8242C1332.67 57.8242 1332.67 41.593 1332.67 26.5211C1332.67 41.593 1332.67 57.8242 1361.38 57.8242C1332.67 57.8242 1332.67 78.6929 1332.67 92.6054C1332.67 78.6929 1332.67 57.8242 1303.97 57.8242Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124362" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 606"
                          rx="13.5"
                          ry="13.42"
                          transform="matrix(-1 0 0 1 1583.5 13.42)"
                          fill="#473D36"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 572"
                          d="M1582 10.0938C1588 10.0938 1588 6.91975 1588 3.97241C1588 6.91975 1588 10.0938 1594 10.0938C1588 10.0938 1588 14.1748 1588 16.8954C1588 14.1748 1588 10.0938 1582 10.0938Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124363" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 606_2"
                          rx="13.5"
                          ry="13.42"
                          transform="matrix(-1 0 0 1 1883.5 1337.42)"
                          fill="#473D36"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 572_2"
                          d="M1882 1334.09C1888 1334.09 1888 1330.92 1888 1327.97C1888 1330.92 1888 1334.09 1894 1334.09C1888 1334.09 1888 1338.17 1888 1340.9C1888 1338.17 1888 1334.09 1882 1334.09Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="Group 316124364" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 606_3"
                          rx="13.5"
                          ry="13.42"
                          transform="matrix(-1 0 0 1 160.5 1224.42)"
                          fill="#473D36"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <path
                          id="Vector 572_3"
                          d="M159 1221.09C165 1221.09 165 1217.92 165 1214.97C165 1217.92 165 1221.09 171 1221.09C165 1221.09 165 1225.17 165 1227.9C165 1225.17 165 1221.09 159 1221.09Z"
                          fill="#F3EFE6"
                          data-v-3479b4ac=""
                        ></path>
                      </g>
                      <g id="small-balls" data-v-3479b4ac="">
                        <ellipse
                          id="Ellipse 751"
                          cx="1744"
                          cy="905.958"
                          rx="7"
                          ry="6.95852"
                          fill="#B595BF"
                          data-v-3479b4ac=""
                        ></ellipse>
                        <ellipse
                          id="Ellipse 752"
                          cx="1331"
                          cy="524.958"
                          rx="7"
                          ry="6.95852"
                          fill="#B595BF"
                          data-v-3479b4ac=""
                        ></ellipse>
                      </g>
                    </g>
                  </svg>
                  <div
                    className="content-wrapper color-purple d-flex flex-column flex-center center-x position-absolute z-2"
                    data-v-3479b4ac=""
                    style={{ color: "#A380AE" }}
                  >
                    <h2
                      className="f2 f3-sm f3-xl pp-bold top-headline stagger-animation pb-0-75"
                      data-v-3479b4ac=""
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 100px)",
                        opacity: 1,
                      }}
                    >
                      AFTER
                    </h2>
                    <div
                      data-id="waypoint-62"
                      className="synchronized-waypoint position-relative image-wrapper stagger-animation"
                      data-v-3479b4ac=""
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 100px)",
                        opacity: 1,
                      }}
                    >
                      {/* <figure
                        className="spd overflow-hidden position-relative"
                        style={stylesE1}
                        data-v-23b40a86=""
                        data-v-3479b4ac=""
                      >
                        <div
                          className="position-absolute w-100 h-100 t-0 l-0"
                          data-v-23b40a86=""
                        >
                          <picture data-v-23b40a86="">
                            <source
                              media="(min-width:1920px)"
                              srcset="
                https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=370&amp;w=320&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x,
                https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=481&amp;w=416&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x
              "
                              data-v-23b40a86=""
                            />
                            <source
                              media="(min-width:1200px)"
                              srcset="
                https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=275&amp;w=240&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x,
                https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=358&amp;w=312&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x
              "
                              data-v-23b40a86=""
                            />
                            <source
                              media="(min-width:768px)"
                              srcset="
                https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=340&amp;w=300&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x,
                https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=442&amp;w=390&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x
              "
                              data-v-23b40a86=""
                            />
                            <source
                              media="(min-width:0px)"
                              srcset="
                https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=309&amp;w=270&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x,
                https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=402&amp;w=351&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x
              "
                              data-v-23b40a86=""
                            />
                            <img
                              draggable="false"
                              loading="eager"
                              alt="Churro Raspberry-min"
                              className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                              data-v-23b40a86=""
                              src={images[imageIndex]}
                            />
                          </picture>
                        </div>
                      </figure> */}
                      <img
                        src={images[imageIndex]}
                        draggable="false"
                        loading="eager"
                        alt="Churro Raspberry-min"
                        className="w-100 h-100  t-0 l-0 picture cover bg-center"
                        data-v-23b40a86=""
                      />
                    </div>
                    <div
                      className="no-wrap f2 f3-sm f3-xl pp-bold bottom-headline stagger-animation"
                      data-v-3479b4ac=""
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 100px)",
                        opacity: 1,
                      }}
                    >
                      <span className="mr-negative" data-v-3479b4ac="">
                        ONE
                      </span>
                      <span className="ml-negative" data-v-3479b4ac="">
                        BITE,
                      </span>
                    </div>
                    <h3
                      className="f4 f8-sm f5-xl pp-bold text-uppercase text-center"
                      data-v-3479b4ac=""
                    >
                      <span
                        className="stagger-animation d-block"
                        data-v-3479b4ac=""
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate(0px, 100px)",
                          opacity: 1,
                        }}
                      >
                        You'll never
                      </span>
                      <span
                        className="stagger-animation d-block"
                        data-v-3479b4ac=""
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate(0px, 100px)",
                          opacity: 1,
                        }}
                      >
                        go back to basic
                      </span>
                      <span
                        className="stagger-animation d-block"
                        data-v-3479b4ac=""
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate(0px, 100px)",
                          opacity: 1,
                        }}
                      >
                        ice cream
                      </span>
                    </h3>
                    <img
                      src={WhiteArrowLeft}
                      alt="Boba Ice cream"
                      className="mt-0-75 mt-md-1-5 mt-xl-3-5 arrow stagger-animation"
                      data-v-3479b4ac=""
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 100px) rotate(-90deg)",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div
                  className="ctf-slider-component position-relative"
                  style={stylesE2}
                >
                  <div
                    className="slider-top position-relative"
                    data-v-6a543bc5=""
                  >
                    <div
                      data-id="waypoint-66"
                      className="synchronized-waypoint animation-marker4"
                      data-v-6a543bc5=""
                    ></div>
                    <div
                      data-id="waypoint-67"
                      className="synchronized-waypoint number lh-1 z-2 pp-bold position-absolute color-gray center-x"
                      data-v-6a543bc5=""
                    >
                      <span
                        className="counter d-inline-block transition-color"
                        style={{
                          color: "rgb(243, 239, 230)",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate(0px, 0px)",
                        }}
                        data-v-6a543bc5=""
                      >
                        {count}
                      </span>
                    </div>
                    <svg
                      viewBox="0 0 1980 2183"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="position-absolute slider-top-svg z-4 disabled"
                      data-v-5dbcf202=""
                      data-v-6a543bc5=""
                    >
                      <defs data-v-5dbcf202="">
                        <path
                          id="top-caption-path"
                          d="M1444.5,667.5L1444.5,667.5C1444.5,584.467 1393.04,509.229 1309.7,454.726C1226.37,400.225 1111.22,366.5 984,366.5C856.781,366.5 741.63,400.225 658.297,454.726C574.961,509.229 523.5,584.467 523.5,667.5C523.5,750.533 574.961,825.771 658.297,880.274C741.63,934.775 856.781,968.5 984,968.5C1111.22,968.5 1226.37,934.775 1309.7,880.274C1393.04,825.771 1444.5,750.533 1444.5,667.5"
                          stroke="black"
                          data-v-5dbcf202=""
                        ></path>
                        <path
                          id="bottom-caption-path"
                          d="M1405.5,816.5L1405.5,816.5C1405.5,747.851 1358.43,685.611 1282.14,640.507C1205.87,595.41 1100.46,567.5 984,567.5C867.542,567.5 762.133,595.41 685.855,640.507C609.567,685.611 562.5,747.851 562.5,816.5C562.5,885.149 609.567,947.388 685.855,992.493C762.133,1037.59 867.542,1065.5 984,1065.5C1100.46,1065.5 1205.87,1037.59 1282.14,992.493C1358.43,947.388 1405.5,885.149 1405.5,816.5"
                          stroke="black"
                          data-v-5dbcf202=""
                        ></path>
                        <path
                          id="bottom-path-slider-top"
                          d="M312,469.203C401.237,379.733 507.177,308.763 623.771,260.342C740.365,211.922 865.329,187 991.53,187C1117.73,187 1242.69,211.922 1359.29,260.342C1475.88,308.762 1581.82,379.733 1671.06,469.203"
                          stroke="black"
                          data-v-5dbcf202=""
                        ></path>
                        <path
                          id="top-path-slider-top"
                          d="M312.001,366.203C492.223,185.511 736.658,84 991.531,84C1246.4,84 1490.84,185.511 1671.06,366.203"
                          stroke="black"
                          data-v-5dbcf202=""
                        ></path>
                      </defs>
                      <g
                        id="slider-bubble"
                        class="slider-bubble"
                        data-v-5dbcf202=""
                        data-svg-origin="1379 723.1170043945312"
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                          opacity: 1,
                        }}
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <path
                          id="Ellipse 217"
                          d="M1415.5 796.117C1435.66 796.117 1452 779.775 1452 759.617C1452 739.459 1435.66 723.117 1415.5 723.117C1395.34 723.117 1379 739.459 1379 759.617C1379 779.775 1395.34 796.117 1415.5 796.117Z"
                          fill="#E27391"
                          class="transition-fill"
                          data-v-5dbcf202=""
                        ></path>
                        <path
                          id="Vector 577"
                          d="M1414 747.696C1429.5 747.696 1429.5 739.1 1429.5 731.117C1429.5 739.1 1429.5 747.696 1445 747.696C1429.5 747.696 1429.5 758.749 1429.5 766.117C1429.5 758.749 1429.5 747.696 1414 747.696Z"
                          fill="#F3EFE6"
                          data-v-5dbcf202=""
                        ></path>
                      </g>
                      <g
                        id="slider-bubble"
                        class="slider-bubble"
                        data-v-5dbcf202=""
                        data-svg-origin="525 729.1170043945312"
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                          opacity: 1,
                        }}
                        transform="matrix(1,0,0,1,0,0)"
                      >
                        <path
                          id="Ellipse 217_2"
                          d="M561.5 802.117C581.658 802.117 598 785.775 598 765.617C598 745.459 581.658 729.117 561.5 729.117C541.342 729.117 525 745.459 525 765.617C525 785.775 541.342 802.117 561.5 802.117Z"
                          fill="#E27391"
                          class="transition-fill"
                          data-v-5dbcf202=""
                        ></path>
                        <path
                          id="Vector 577_2"
                          d="M560 753.696C575.5 753.696 575.5 745.1 575.5 737.117C575.5 745.1 575.5 753.696 591 753.696C575.5 753.696 575.5 764.749 575.5 772.117C575.5 764.749 575.5 753.696 560 753.696Z"
                          fill="#F3EFE6"
                          class="transition-fill"
                          data-v-5dbcf202=""
                        ></path>
                      </g>
                      <g id="Group 316124380" data-v-5dbcf202="">
                        <path
                          id="Rectangle 330"
                          d="M985.003 1143.12V1162.12C985.003 1162.67 985.451 1163.12 986.003 1163.12H993.003C993.555 1163.12 994.003 1162.67 994.003 1162.12V1143.12C994.003 1142.57 993.555 1142.12 993.003 1142.12H986.003C985.451 1142.12 985.003 1142.57 985.003 1143.12Z"
                          fill="#E27391"
                          class="transition-fill"
                          data-v-5dbcf202=""
                        ></path>
                        <path
                          id="Polygon 1"
                          d="M990.371 1181.57C989.988 1182.25 989.012 1182.25 988.629 1181.57L973.835 1155.37C973.332 1154.48 974.333 1153.49 975.214 1154.02L988.992 1162.15C989.305 1162.34 989.695 1162.34 990.008 1162.15L1003.79 1154.02C1004.67 1153.49 1005.67 1154.48 1005.16 1155.37L990.371 1181.57Z"
                          fill="#E27391"
                          class="transition-fill"
                          data-v-5dbcf202=""
                        ></path>
                      </g>
                      <g id="top-caption" data-v-5dbcf202="">
                        <text
                          fill="#F3EFE6"
                          class="transition-fill"
                          data-v-5dbcf202=""
                        >
                          <textPath
                            startOffset="75.2%"
                            text-anchor="middle"
                            href="#top-caption-path"
                            class="pp-bold sliderTopFont2"
                            data-v-5dbcf202=""
                          >
                            PHENOMENAL SIGNATURE
                          </textPath>
                        </text>
                      </g>
                      <g id="bottom-caption" data-v-5dbcf202="">
                        <text
                          fill="#F3EFE6"
                          class="transition-fill"
                          data-v-5dbcf202=""
                        >
                          <textPath
                            startOffset="75.2%"
                            text-anchor="middle"
                            href="#bottom-caption-path"
                            class="pp-bold sliderTopFont2"
                            data-v-5dbcf202=""
                          >
                            FLAVORS
                          </textPath>
                        </text>
                      </g>
                      <g id="bottom-headline" data-v-5dbcf202="">
                        <text fill="#F3EFE6" data-v-5dbcf202="">
                          <textPath
                            startOffset="50%"
                            text-anchor="middle"
                            href="#bottom-path-slider-top"
                            class="pp-bold sliderTopFont"
                            data-v-5dbcf202=""
                          >
                            GET INTO SOME BUBBLE
                          </textPath>
                        </text>
                      </g>
                      <g id="top-headline" data-v-5dbcf202="">
                        <text fill="#F3EFE6" data-v-5dbcf202="">
                          <textPath
                            startOffset="50%"
                            text-anchor="middle"
                            href="#top-path-slider-top"
                            class="pp-bold sliderTopFont"
                            data-v-5dbcf202=""
                          >
                            SO, GO AHEAD,
                          </textPath>
                        </text>
                      </g>
                    </svg>
                    <svg
                      viewBox="0 0 1980 2183"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="slider-top-svg"
                      data-v-6a543bc5=""
                    >
                      <g class="slider-top-svg" data-v-6a543bc5="">
                        <ellipse
                          id="Ellipse 747"
                          cx="990"
                          cy="1182.62"
                          rx="990"
                          ry="963.5"
                          fill="#FDDDE5"
                          data-v-6a543bc5=""
                        ></ellipse>
                        <ellipse
                          id="Ellipse 748"
                          cx="990"
                          cy="1200.62"
                          rx="976"
                          ry="963.5"
                          fill="#FBCCD7"
                          data-v-6a543bc5=""
                        ></ellipse>
                      </g>
                    </svg>
                  </div>

                  <div
                    currentindex="0"
                    className="slider-component bg-pink222"
                    data-v-791a2ac4=""
                  >
                    <div className="swiper" data-v-791a2ac4="">
                      <div
                        className="swiper-container position-relative swiper-container-initialized swiper-container-horizontal"
                        style={{ cursor: "grab" }}
                      >
                        <div
                          className="swiper-wrapper"
                          style={{
                            transitionDuration: "0ms",
                            transform: "translate3d(290.401px, 0px, 0px)",
                          }}
                        >
                          <div
                            className="swiper-slide swiper-slide--active swiper-slide-active"
                            data-v-791a2ac4=""
                          >
                            <div
                              data-id="waypoint-72"
                              className="synchronized-waypoint slide text-center text-uppercase pb-xl-2-75 d-flex flex-column align-items-center mb-0 mb-lg-0 slide--active"
                              data-v-ba35f45e=""
                              data-v-791a2ac4=""
                              style={stylesE3}
                            >
                              <div
                                data-preset="y"
                                data-delay=".1"
                                data-fromy="50"
                                data-dur="3"
                                className="should-animate2"
                                data-v-ba35f45e=""
                              >
                                <div
                                  className="content-wrapper d-flex flex-column align-items-center"
                                  data-v-ba35f45e=""
                                >
                                  <h3
                                    className="f4 f8-sm f8-lg f8-xl pp mb-2 mb-sm-4 mb-lg-1-5 mb-xl-2-75 pt-1 no-wrap"
                                    data-v-ba35f45e=""
                                  >
                                    Strawberry Shortcake – Karaoke Night
                                  </h3>
                                  <div
                                    className="founders-bold f7 f11-sm f11-lg f11-xl mb-0-5"
                                    data-v-ba35f45e=""
                                  >
                                    The Next K-Pop Star is Here…
                                  </div>
                                  <div
                                    className="f8 f12-sm f11-lg f11-xl lh-1 mx-auto mb-1-5 mb-lg-1 mb-xl-1-5 description px-1 px-sm-0"
                                    data-v-ba35f45e=""
                                  >
                                    New York cheesecakes collaborate to create
                                    the perfect tune. This velvety ice cream
                                    comes alive with a melody of ruby-red
                                    strawberry jam, panko bits, and brown sugar
                                    boba.
                                  </div>
                                  <h4
                                    className="f1 f1-sm f1-xl ls-none no-wrap headline"
                                    data-v-ba35f45e=""
                                  >
                                    Karaoke
                                  </h4>
                                </div>
                              </div>
                              <div
                                className="mx-auto px-xl-2-75 bg-image z-2 position-relative"
                                data-v-ba35f45e=""
                              >
                                <div
                                  data-preset="y"
                                  data-delay=".1"
                                  data-fromy="200"
                                  data-dur="3"
                                  className="should-animate2"
                                  data-v-ba35f45e=""
                                >
                                  <figure
                                    className="spd overflow-hidden bg position-relative"
                                    style={stylesE4}
                                    data-v-23b40a86=""
                                    data-v-ba35f45e=""
                                  >
                                    <div
                                      className="position-absolute w-100 h-100 t-0 l-0"
                                      data-v-23b40a86=""
                                    >
                                      <picture data-v-23b40a86="">
                                        <source
                                          media="(min-width:1920px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/3o3i4rPpiQPeimYk7ZkuRs/7e002577ba41dea3d3a59e702ce3d313/Strawberry_Shortcake.jpeg?h=370&amp;w=900&amp;q=80&amp;&amp;fm=webp&amp;q=80  1x,
                            https://images.ctfassets.net/j8k8klriwj2h/3o3i4rPpiQPeimYk7ZkuRs/7e002577ba41dea3d3a59e702ce3d313/Strawberry_Shortcake.jpeg?h=481&amp;w=1170&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:1200px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/3o3i4rPpiQPeimYk7ZkuRs/7e002577ba41dea3d3a59e702ce3d313/Strawberry_Shortcake.jpeg?h=370&amp;w=470&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/3o3i4rPpiQPeimYk7ZkuRs/7e002577ba41dea3d3a59e702ce3d313/Strawberry_Shortcake.jpeg?h=481&amp;w=611&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:768px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/3o3i4rPpiQPeimYk7ZkuRs/7e002577ba41dea3d3a59e702ce3d313/Strawberry_Shortcake.jpeg?h=370&amp;w=470&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/3o3i4rPpiQPeimYk7ZkuRs/7e002577ba41dea3d3a59e702ce3d313/Strawberry_Shortcake.jpeg?h=481&amp;w=611&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:0px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/3o3i4rPpiQPeimYk7ZkuRs/7e002577ba41dea3d3a59e702ce3d313/Strawberry_Shortcake.jpeg?h=309&amp;w=375&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/3o3i4rPpiQPeimYk7ZkuRs/7e002577ba41dea3d3a59e702ce3d313/Strawberry_Shortcake.jpeg?h=402&amp;w=488&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <img
                                          draggable="false"
                                          loading="eager"
                                          alt="Strawberry Shortcake"
                                          className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                                          data-v-23b40a86=""
                                        />
                                      </picture>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                              <div
                                className="image position-absolute"
                                data-v-ba35f45e=""
                              >
                                <div
                                  data-preset="y"
                                  data-delay=".1"
                                  className="w-100 h-100 should-animate2"
                                  data-v-ba35f45e=""
                                >
                                  <figure
                                    className="spd overflow-hidden w-100 h-100 position-relative"
                                    style={stylesE5}
                                    data-v-23b40a86=""
                                    data-v-ba35f45e=""
                                  >
                                    <div data-v-23b40a86="">
                                      <picture data-v-23b40a86="">
                                        <source
                                          media="(min-width:1920px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/2WVude1IMt8nuLJdKfeyOz/be712e51800cf96583597e8f9cc7deb6/Strawberry_Shortcake.png?h=330&amp;w=300&amp;q=100&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/2WVude1IMt8nuLJdKfeyOz/be712e51800cf96583597e8f9cc7deb6/Strawberry_Shortcake.png?h=429&amp;w=390&amp;q=100&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:1200px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/2WVude1IMt8nuLJdKfeyOz/be712e51800cf96583597e8f9cc7deb6/Strawberry_Shortcake.png?h=300&amp;w=270&amp;q=100&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/2WVude1IMt8nuLJdKfeyOz/be712e51800cf96583597e8f9cc7deb6/Strawberry_Shortcake.png?h=390&amp;w=351&amp;q=100&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:768px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/2WVude1IMt8nuLJdKfeyOz/be712e51800cf96583597e8f9cc7deb6/Strawberry_Shortcake.png?h=220&amp;w=370&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/2WVude1IMt8nuLJdKfeyOz/be712e51800cf96583597e8f9cc7deb6/Strawberry_Shortcake.png?h=286&amp;w=481&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:0px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/2WVude1IMt8nuLJdKfeyOz/be712e51800cf96583597e8f9cc7deb6/Strawberry_Shortcake.png?h=309&amp;w=370&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/2WVude1IMt8nuLJdKfeyOz/be712e51800cf96583597e8f9cc7deb6/Strawberry_Shortcake.png?h=402&amp;w=481&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <img
                                          draggable="false"
                                          loading="eager"
                                          alt="Strawberry Shortcake-min"
                                          className="w-100 h-100 position-absolute t-0 l-0 picture contain bg-center"
                                          data-v-23b40a86=""
                                        />
                                      </picture>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                              <div
                                data-preset="y"
                                data-delay=".1"
                                data-fromy="50"
                                data-dur="3"
                                className="should-animate2"
                                data-v-ba35f45e=""
                              >
                                <div
                                  className="content-wrapper"
                                  data-v-ba35f45e=""
                                >
                                  <h4
                                    className="f1 f1-sm f1-xl ls-none headline2 mb-1 mb-lg-0 no-wrap headline"
                                    data-v-ba35f45e=""
                                  >
                                    Night
                                  </h4>
                                  <div
                                    className="text mx-auto lh-1 f8 f12-sm f11-lg f11-xl text"
                                    data-v-ba35f45e=""
                                  >
                                    It’s the type of dessert that’ll make you
                                    want
                                    <br className="d-none d-sm-block d-lg-none" />
                                    to&nbsp;get on
                                    <br className="d-none d-lg-block" />
                                    stage and sing your heart out.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="swiper-slide swiper-slide--prev swiper-slide-next"
                            data-v-791a2ac4=""
                          >
                            <div
                              data-id="waypoint-76"
                              className="synchronized-waypoint slide text-center text-uppercase pb-xl-2-75 d-flex flex-column align-items-center mb-0 mb-lg-0 slide--prev"
                              data-v-ba35f45e=""
                              data-v-791a2ac4=""
                              style={stylesE6}
                            >
                              <div
                                data-preset="y"
                                data-delay=".1"
                                data-fromy="50"
                                data-dur="3"
                                data-v-ba35f45e=""
                              >
                                <div
                                  className="content-wrapper d-flex flex-column align-items-center"
                                  data-v-ba35f45e=""
                                >
                                  <h3
                                    className="f4 f8-sm f8-lg f8-xl pp mb-2 mb-sm-4 mb-lg-1-5 mb-xl-2-75 pt-1 no-wrap"
                                    data-v-ba35f45e=""
                                  >
                                    Gooey Fried Banana
                                  </h3>
                                  <div
                                    className="founders-bold f7 f11-sm f11-lg f11-xl mb-0-5"
                                    data-v-ba35f45e=""
                                  >
                                    There’s Rich. Then there’s Banana Rich.
                                  </div>
                                  <div
                                    className="f8 f12-sm f11-lg f11-xl lh-1 mx-auto mb-1-5 mb-lg-1 mb-xl-1-5 description px-1 px-sm-0"
                                    data-v-ba35f45e=""
                                  >
                                    We’re flying the G6 to give you an absurd
                                    amount of Gooey Fried Bananas.
                                    <br className="d-none d-sm-block" />
                                    Caramelized banana ice cream, pastry flakes,
                                    and brown sugar boba come together for a
                                    dessert so decadent, you’ll be balling at
                                    first bite.
                                  </div>
                                  <h4
                                    className="f1 f1-sm f1-xl ls-none no-wrap headline"
                                    data-v-ba35f45e=""
                                  >
                                    Gooey Fried
                                  </h4>
                                </div>
                              </div>
                              <div
                                className="mx-auto px-xl-2-75 bg-image z-2 position-relative"
                                data-v-ba35f45e=""
                              >
                                <div
                                  data-preset="y"
                                  data-delay=".1"
                                  data-fromy="200"
                                  data-dur="3"
                                  data-v-ba35f45e=""
                                >
                                  <figure
                                    className="spd overflow-hidden bg position-relative"
                                    style={stylesE7}
                                    data-v-23b40a86=""
                                    data-v-ba35f45e=""
                                  >
                                    <div
                                      className="position-absolute w-100 h-100 t-0 l-0"
                                      data-v-23b40a86=""
                                    >
                                      <picture data-v-23b40a86="">
                                        <source
                                          media="(min-width:1920px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/17HSf4PCGyIXBmaH7pq6BD/954876939c93258717e49ef7b0a31621/Banana.jpeg?h=370&amp;w=900&amp;q=80&amp;&amp;fm=webp&amp;q=80  1x,
                            https://images.ctfassets.net/j8k8klriwj2h/17HSf4PCGyIXBmaH7pq6BD/954876939c93258717e49ef7b0a31621/Banana.jpeg?h=481&amp;w=1170&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:1200px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/17HSf4PCGyIXBmaH7pq6BD/954876939c93258717e49ef7b0a31621/Banana.jpeg?h=370&amp;w=470&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/17HSf4PCGyIXBmaH7pq6BD/954876939c93258717e49ef7b0a31621/Banana.jpeg?h=481&amp;w=611&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:768px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/17HSf4PCGyIXBmaH7pq6BD/954876939c93258717e49ef7b0a31621/Banana.jpeg?h=370&amp;w=470&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/17HSf4PCGyIXBmaH7pq6BD/954876939c93258717e49ef7b0a31621/Banana.jpeg?h=481&amp;w=611&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:0px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/17HSf4PCGyIXBmaH7pq6BD/954876939c93258717e49ef7b0a31621/Banana.jpeg?h=309&amp;w=375&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/17HSf4PCGyIXBmaH7pq6BD/954876939c93258717e49ef7b0a31621/Banana.jpeg?h=402&amp;w=488&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <img
                                          draggable="false"
                                          loading="eager"
                                          alt="Banana"
                                          className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                                          data-v-23b40a86=""
                                        />
                                      </picture>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                              <div
                                className="image position-absolute"
                                data-v-ba35f45e=""
                              >
                                <div
                                  data-preset="y"
                                  data-delay=".1"
                                  className="w-100 h-100"
                                  data-v-ba35f45e=""
                                >
                                  <figure
                                    className="spd overflow-hidden w-100 h-100 position-relative"
                                    style={stylesE5}
                                    data-v-23b40a86=""
                                    data-v-ba35f45e=""
                                  >
                                    <div data-v-23b40a86="">
                                      <picture data-v-23b40a86="">
                                        <source
                                          media="(min-width:1920px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/3ydyqcyl8IjvgGr4QOjjpv/7a5c997b7d2c5672bd006f46a7310d39/Gooey_Fried_Banana.png?h=330&amp;w=300&amp;q=100&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/3ydyqcyl8IjvgGr4QOjjpv/7a5c997b7d2c5672bd006f46a7310d39/Gooey_Fried_Banana.png?h=429&amp;w=390&amp;q=100&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:1200px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/3ydyqcyl8IjvgGr4QOjjpv/7a5c997b7d2c5672bd006f46a7310d39/Gooey_Fried_Banana.png?h=300&amp;w=270&amp;q=100&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/3ydyqcyl8IjvgGr4QOjjpv/7a5c997b7d2c5672bd006f46a7310d39/Gooey_Fried_Banana.png?h=390&amp;w=351&amp;q=100&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:768px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/3ydyqcyl8IjvgGr4QOjjpv/7a5c997b7d2c5672bd006f46a7310d39/Gooey_Fried_Banana.png?h=220&amp;w=370&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/3ydyqcyl8IjvgGr4QOjjpv/7a5c997b7d2c5672bd006f46a7310d39/Gooey_Fried_Banana.png?h=286&amp;w=481&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:0px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/3ydyqcyl8IjvgGr4QOjjpv/7a5c997b7d2c5672bd006f46a7310d39/Gooey_Fried_Banana.png?h=309&amp;w=370&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/3ydyqcyl8IjvgGr4QOjjpv/7a5c997b7d2c5672bd006f46a7310d39/Gooey_Fried_Banana.png?h=402&amp;w=481&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <img
                                          draggable="false"
                                          loading="eager"
                                          alt="Fried-Banana"
                                          className="w-100 h-100 position-absolute t-0 l-0 picture contain bg-center"
                                          data-v-23b40a86=""
                                        />
                                      </picture>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                              <div
                                data-preset="y"
                                data-delay=".1"
                                data-fromy="50"
                                data-dur="3"
                                data-v-ba35f45e=""
                              >
                                <div
                                  className="content-wrapper"
                                  data-v-ba35f45e=""
                                >
                                  <h4
                                    className="f1 f1-sm f1-xl ls-none headline2 mb-1 mb-lg-0 no-wrap headline"
                                    data-v-ba35f45e=""
                                  >
                                    Bananas
                                  </h4>
                                  <div
                                    className="text mx-auto lh-1 f8 f12-sm f11-lg f11-xl text"
                                    data-v-ba35f45e=""
                                  >
                                    Scoop yourself a bowl of this luxe flavor
                                    before jetting off to your own private
                                    island. Go bougie or go home!
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            className="swiper-slide swiper-slide--prev"
                            data-v-791a2ac4=""
                          >
                            <div
                              data-id="waypoint-80"
                              className="synchronized-waypoint slide text-center text-uppercase pb-xl-2-75 d-flex flex-column align-items-center mb-0 mb-lg-0 slide--prev"
                              data-v-ba35f45e=""
                              data-v-791a2ac4=""
                              style={stylesE8}
                            >
                              <div
                                data-preset="y"
                                data-delay=".1"
                                data-fromy="50"
                                data-dur="3"
                                data-v-ba35f45e=""
                              >
                                <div
                                  className="content-wrapper d-flex flex-column align-items-center"
                                  data-v-ba35f45e=""
                                >
                                  <h3
                                    className="f4 f8-sm f8-lg f8-xl pp mb-2 mb-sm-4 mb-lg-1-5 mb-xl-2-75 pt-1 no-wrap"
                                    data-v-ba35f45e=""
                                  >
                                    Salted Ube &amp; S'mores
                                  </h3>
                                  <div
                                    className="founders-bold f7 f11-sm f11-lg f11-xl mb-0-5"
                                    data-v-ba35f45e=""
                                  >
                                    Swipe right on Ooh-Bae.
                                  </div>
                                  <div
                                    className="f8 f12-sm f11-lg f11-xl lh-1 mx-auto mb-1-5 mb-lg-1 mb-xl-1-5 description px-1 px-sm-0"
                                    data-v-ba35f45e=""
                                  >
                                    The beloved purple treasure of the
                                    Philippines, Ube, goes on a date with an
                                    American campfire classic. Purple yam flirts
                                    heavily with graham crackers, vegan
                                    chocolate, and marshmallows, turning into a
                                    ride-or-die love story like no other.
                                  </div>
                                  <h4
                                    className="f1 f1-sm f1-xl ls-none no-wrap headline"
                                    data-v-ba35f45e=""
                                  >
                                    Ooh
                                  </h4>
                                </div>
                              </div>
                              <div
                                className="mx-auto px-xl-2-75 bg-image z-2 position-relative"
                                data-v-ba35f45e=""
                              >
                                <div
                                  data-preset="y"
                                  data-delay=".1"
                                  data-fromy="200"
                                  data-dur="3"
                                  data-v-ba35f45e=""
                                >
                                  <figure
                                    className="spd overflow-hidden bg position-relative"
                                    style={stylesE7}
                                    data-v-23b40a86=""
                                    data-v-ba35f45e=""
                                  >
                                    <div
                                      className="position-absolute w-100 h-100 t-0 l-0"
                                      data-v-23b40a86=""
                                    >
                                      <picture data-v-23b40a86="">
                                        <source
                                          media="(min-width:1920px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/4LnKbv7BrjwO0mXTm9G0ht/9f4f9f0f275883fb46bb82c0bd5862f5/Bae.jpeg?h=370&amp;w=900&amp;q=80&amp;&amp;fm=webp&amp;q=80  1x,
                            https://images.ctfassets.net/j8k8klriwj2h/4LnKbv7BrjwO0mXTm9G0ht/9f4f9f0f275883fb46bb82c0bd5862f5/Bae.jpeg?h=481&amp;w=1170&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:1200px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/4LnKbv7BrjwO0mXTm9G0ht/9f4f9f0f275883fb46bb82c0bd5862f5/Bae.jpeg?h=370&amp;w=470&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/4LnKbv7BrjwO0mXTm9G0ht/9f4f9f0f275883fb46bb82c0bd5862f5/Bae.jpeg?h=481&amp;w=611&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:768px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/4LnKbv7BrjwO0mXTm9G0ht/9f4f9f0f275883fb46bb82c0bd5862f5/Bae.jpeg?h=370&amp;w=470&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/4LnKbv7BrjwO0mXTm9G0ht/9f4f9f0f275883fb46bb82c0bd5862f5/Bae.jpeg?h=481&amp;w=611&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:0px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/4LnKbv7BrjwO0mXTm9G0ht/9f4f9f0f275883fb46bb82c0bd5862f5/Bae.jpeg?h=309&amp;w=375&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/4LnKbv7BrjwO0mXTm9G0ht/9f4f9f0f275883fb46bb82c0bd5862f5/Bae.jpeg?h=402&amp;w=488&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <img
                                          draggable="false"
                                          loading="eager"
                                          alt="Bae"
                                          className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                                          data-v-23b40a86=""
                                        />
                                      </picture>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                              <div
                                className="image position-absolute"
                                data-v-ba35f45e=""
                              >
                                <div
                                  data-preset="y"
                                  data-delay=".1"
                                  className="w-100 h-100"
                                  data-v-ba35f45e=""
                                >
                                  <figure
                                    className="spd overflow-hidden w-100 h-100 position-relative"
                                    style={stylesE5}
                                    data-v-23b40a86=""
                                    data-v-ba35f45e=""
                                  >
                                    <div data-v-23b40a86="">
                                      <picture data-v-23b40a86="">
                                        <source
                                          media="(min-width:1920px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/01MWGFwgHjGFGI8nElbR9Y/7afe1d857f61eab7bb57b91edf7f4522/Salted_Ube_Smores.png?h=330&amp;w=300&amp;q=100&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/01MWGFwgHjGFGI8nElbR9Y/7afe1d857f61eab7bb57b91edf7f4522/Salted_Ube_Smores.png?h=429&amp;w=390&amp;q=100&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:1200px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/01MWGFwgHjGFGI8nElbR9Y/7afe1d857f61eab7bb57b91edf7f4522/Salted_Ube_Smores.png?h=300&amp;w=270&amp;q=100&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/01MWGFwgHjGFGI8nElbR9Y/7afe1d857f61eab7bb57b91edf7f4522/Salted_Ube_Smores.png?h=390&amp;w=351&amp;q=100&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:768px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/01MWGFwgHjGFGI8nElbR9Y/7afe1d857f61eab7bb57b91edf7f4522/Salted_Ube_Smores.png?h=220&amp;w=370&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/01MWGFwgHjGFGI8nElbR9Y/7afe1d857f61eab7bb57b91edf7f4522/Salted_Ube_Smores.png?h=286&amp;w=481&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:0px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/01MWGFwgHjGFGI8nElbR9Y/7afe1d857f61eab7bb57b91edf7f4522/Salted_Ube_Smores.png?h=309&amp;w=370&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/01MWGFwgHjGFGI8nElbR9Y/7afe1d857f61eab7bb57b91edf7f4522/Salted_Ube_Smores.png?h=402&amp;w=481&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <img
                                          draggable="false"
                                          loading="eager"
                                          alt="Salted Ube Smores-min"
                                          className="w-100 h-100 position-absolute t-0 l-0 picture contain bg-center"
                                          data-v-23b40a86=""
                                        />
                                      </picture>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                              <div
                                data-preset="y"
                                data-delay=".1"
                                data-fromy="50"
                                data-dur="3"
                                data-v-ba35f45e=""
                              >
                                <div
                                  className="content-wrapper"
                                  data-v-ba35f45e=""
                                >
                                  <h4
                                    className="f1 f1-sm f1-xl ls-none headline2 mb-1 mb-lg-0 no-wrap headline"
                                    data-v-ba35f45e=""
                                  >
                                    Bae
                                  </h4>
                                  <div
                                    className="text mx-auto lh-1 f8 f12-sm f11-lg f11-xl text"
                                    data-v-ba35f45e=""
                                  >
                                    Swipe right or you’ll miss out on this
                                    <br className="d-none d-lg-block" />
                                    match
                                    <br className="d-block d-sm-none" />
                                    made in
                                    <br className="d-none d-sm-block d-lg-none" />
                                    flavor heaven.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="swiper-slide swiper-slide--prev"
                            data-v-791a2ac4=""
                          >
                            <div
                              data-id="waypoint-84"
                              className="synchronized-waypoint slide text-center text-uppercase pb-xl-2-75 d-flex flex-column align-items-center mb-0 mb-lg-0 slide--prev"
                              data-v-ba35f45e=""
                              data-v-791a2ac4=""
                              style={stylesE9}
                            >
                              <div
                                data-preset="y"
                                data-delay=".1"
                                data-fromy="50"
                                data-dur="3"
                                data-v-ba35f45e=""
                              >
                                <div
                                  className="content-wrapper d-flex flex-column align-items-center"
                                  data-v-ba35f45e=""
                                >
                                  <h3
                                    className="f4 f8-sm f8-lg f8-xl pp mb-2 mb-sm-4 mb-lg-1-5 mb-xl-2-75 pt-1 no-wrap"
                                    data-v-ba35f45e=""
                                  >
                                    Mango Chamoy
                                  </h3>
                                  <div
                                    className="founders-bold f7 f11-sm f11-lg f11-xl mb-0-5"
                                    data-v-ba35f45e=""
                                  >
                                    If Thailand’s Full Moon Party was a flavor.
                                  </div>
                                  <div
                                    className="f8 f12-sm f11-lg f11-xl lh-1 mx-auto mb-1-5 mb-lg-1 mb-xl-1-5 description px-1 px-sm-0"
                                    data-v-ba35f45e=""
                                  >
                                    Get ready to be transported to the beaches
                                    in Koh Phangan with this refreshing dessert.
                                    Tangy mangos with hints of lime and honey
                                    join flecks of chamoy candy for a full-blown
                                    explosion of spicy, sweet, and sour.
                                  </div>
                                  <h4
                                    className="f1 f1-sm f1-xl ls-none no-wrap headline"
                                    data-v-ba35f45e=""
                                  >
                                    Full Moon
                                  </h4>
                                </div>
                              </div>
                              <div
                                className="mx-auto px-xl-2-75 bg-image z-2 position-relative"
                                data-v-ba35f45e=""
                              >
                                <div
                                  data-preset="y"
                                  data-delay=".1"
                                  data-fromy="200"
                                  data-dur="3"
                                  data-v-ba35f45e=""
                                >
                                  <figure
                                    className="spd overflow-hidden bg position-relative"
                                    style={stylesE7}
                                    data-v-23b40a86=""
                                    data-v-ba35f45e=""
                                  >
                                    <div
                                      className="position-absolute w-100 h-100 t-0 l-0"
                                      data-v-23b40a86=""
                                    >
                                      <picture data-v-23b40a86="">
                                        <source
                                          media="(min-width:1920px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/79QhVRvwzjbReq4l3w8MgK/6463ce0c23dae5453be2b22e96fac8e9/Mango.jpeg?h=370&amp;w=900&amp;q=80&amp;&amp;fm=webp&amp;q=80  1x,
                            https://images.ctfassets.net/j8k8klriwj2h/79QhVRvwzjbReq4l3w8MgK/6463ce0c23dae5453be2b22e96fac8e9/Mango.jpeg?h=481&amp;w=1170&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:1200px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/79QhVRvwzjbReq4l3w8MgK/6463ce0c23dae5453be2b22e96fac8e9/Mango.jpeg?h=370&amp;w=470&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/79QhVRvwzjbReq4l3w8MgK/6463ce0c23dae5453be2b22e96fac8e9/Mango.jpeg?h=481&amp;w=611&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:768px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/79QhVRvwzjbReq4l3w8MgK/6463ce0c23dae5453be2b22e96fac8e9/Mango.jpeg?h=370&amp;w=470&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/79QhVRvwzjbReq4l3w8MgK/6463ce0c23dae5453be2b22e96fac8e9/Mango.jpeg?h=481&amp;w=611&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:0px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/79QhVRvwzjbReq4l3w8MgK/6463ce0c23dae5453be2b22e96fac8e9/Mango.jpeg?h=309&amp;w=375&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/79QhVRvwzjbReq4l3w8MgK/6463ce0c23dae5453be2b22e96fac8e9/Mango.jpeg?h=402&amp;w=488&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <img
                                          draggable="false"
                                          loading="eager"
                                          alt="Mango"
                                          className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                                          data-v-23b40a86=""
                                        />
                                      </picture>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                              <div
                                className="image position-absolute"
                                data-v-ba35f45e=""
                              >
                                <div
                                  data-preset="y"
                                  data-delay=".1"
                                  className="w-100 h-100"
                                  data-v-ba35f45e=""
                                >
                                  <figure
                                    className="spd overflow-hidden w-100 h-100 position-relative"
                                    style={stylesE5}
                                    data-v-23b40a86=""
                                    data-v-ba35f45e=""
                                  >
                                    <div data-v-23b40a86="">
                                      <picture data-v-23b40a86="">
                                        <source
                                          media="(min-width:1920px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/6kpjysvBK78pLbaVnrGl6x/968158796de59dea868a24a82aa6fe28/Mango_Chamoy.png?h=330&amp;w=300&amp;q=100&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/6kpjysvBK78pLbaVnrGl6x/968158796de59dea868a24a82aa6fe28/Mango_Chamoy.png?h=429&amp;w=390&amp;q=100&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:1200px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/6kpjysvBK78pLbaVnrGl6x/968158796de59dea868a24a82aa6fe28/Mango_Chamoy.png?h=300&amp;w=270&amp;q=100&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/6kpjysvBK78pLbaVnrGl6x/968158796de59dea868a24a82aa6fe28/Mango_Chamoy.png?h=390&amp;w=351&amp;q=100&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:768px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/6kpjysvBK78pLbaVnrGl6x/968158796de59dea868a24a82aa6fe28/Mango_Chamoy.png?h=220&amp;w=370&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/6kpjysvBK78pLbaVnrGl6x/968158796de59dea868a24a82aa6fe28/Mango_Chamoy.png?h=286&amp;w=481&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:0px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/6kpjysvBK78pLbaVnrGl6x/968158796de59dea868a24a82aa6fe28/Mango_Chamoy.png?h=309&amp;w=370&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/6kpjysvBK78pLbaVnrGl6x/968158796de59dea868a24a82aa6fe28/Mango_Chamoy.png?h=402&amp;w=481&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <img
                                          draggable="false"
                                          loading="eager"
                                          alt="Mango Chamoy-min"
                                          className="w-100 h-100 position-absolute t-0 l-0 picture contain bg-center"
                                          data-v-23b40a86=""
                                        />
                                      </picture>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                              <div
                                data-preset="y"
                                data-delay=".1"
                                data-fromy="50"
                                data-dur="3"
                                data-v-ba35f45e=""
                              >
                                <div
                                  className="content-wrapper"
                                  data-v-ba35f45e=""
                                >
                                  <h4
                                    className="f1 f1-sm f1-xl ls-none headline2 mb-1 mb-lg-0 no-wrap headline"
                                    data-v-ba35f45e=""
                                  >
                                    Party
                                  </h4>
                                  <div
                                    className="text mx-auto lh-1 f8 f12-sm f11-lg f11-xl text"
                                    data-v-ba35f45e=""
                                  >
                                    It’s a party for your taste buds! A pint of
                                    this will
                                    <br className="d-block d-lg-none" />
                                    have
                                    <br className="d-none d-lg-block" />
                                    you dancing all night long.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="swiper-slide swiper-slide--prev"
                            data-v-791a2ac4=""
                          >
                            <div
                              data-id="waypoint-88"
                              className="synchronized-waypoint slide text-center text-uppercase pb-xl-2-75 d-flex flex-column align-items-center mb-0 mb-lg-0 slide--prev"
                              data-v-ba35f45e=""
                              data-v-791a2ac4=""
                              style={stylesE10}
                            >
                              <div
                                data-preset="y"
                                data-delay=".1"
                                data-fromy="50"
                                data-dur="3"
                                data-v-ba35f45e=""
                              >
                                <div
                                  className="content-wrapper d-flex flex-column align-items-center"
                                  data-v-ba35f45e=""
                                >
                                  <h3
                                    className="f4 f8-sm f8-lg f8-xl pp mb-2 mb-sm-4 mb-lg-1-5 mb-xl-2-75 pt-1 no-wrap"
                                    data-v-ba35f45e=""
                                  >
                                    Churro Raspberry
                                  </h3>
                                  <div
                                    className="founders-bold f7 f11-sm f11-lg f11-xl mb-0-5"
                                    data-v-ba35f45e=""
                                  >
                                    Imagine Dipping a Crunchy Churro in…
                                  </div>
                                  <div
                                    className="f8 f12-sm f11-lg f11-xl lh-1 mx-auto mb-1-5 mb-lg-1 mb-xl-1-5 description px-1 px-sm-0"
                                    data-v-ba35f45e=""
                                  >
                                    Sweet raspberry sauce that’s drizzled into
                                    buttery Vietnamese cinnamon ice cream. It’s
                                    a flavor pairing so intense, it’s almost
                                    electric. Switch out your gaming controller
                                    for a spoonful of this icy-cool treat.
                                  </div>
                                  <h4
                                    className="f1 f1-sm f1-xl ls-none no-wrap headline"
                                    data-v-ba35f45e=""
                                  >
                                    Fluffy Churro
                                  </h4>
                                </div>
                              </div>
                              <div
                                className="mx-auto px-xl-2-75 bg-image z-2 position-relative"
                                data-v-ba35f45e=""
                              >
                                <div
                                  data-preset="y"
                                  data-delay=".1"
                                  data-fromy="200"
                                  data-dur="3"
                                  data-v-ba35f45e=""
                                >
                                  <figure
                                    className="spd overflow-hidden bg position-relative"
                                    style={stylesE7}
                                    data-v-23b40a86=""
                                    data-v-ba35f45e=""
                                  >
                                    <div
                                      className="position-absolute w-100 h-100 t-0 l-0"
                                      data-v-23b40a86=""
                                    >
                                      <picture data-v-23b40a86="">
                                        <source
                                          media="(min-width:1920px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/2zKOQvqFfZqlc0o3gbVZDT/39cb4da8fde50ab3172599d4e9cf0d8e/raspberry.jpeg?h=370&amp;w=900&amp;q=80&amp;&amp;fm=webp&amp;q=80  1x,
                            https://images.ctfassets.net/j8k8klriwj2h/2zKOQvqFfZqlc0o3gbVZDT/39cb4da8fde50ab3172599d4e9cf0d8e/raspberry.jpeg?h=481&amp;w=1170&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:1200px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/2zKOQvqFfZqlc0o3gbVZDT/39cb4da8fde50ab3172599d4e9cf0d8e/raspberry.jpeg?h=370&amp;w=470&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/2zKOQvqFfZqlc0o3gbVZDT/39cb4da8fde50ab3172599d4e9cf0d8e/raspberry.jpeg?h=481&amp;w=611&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:768px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/2zKOQvqFfZqlc0o3gbVZDT/39cb4da8fde50ab3172599d4e9cf0d8e/raspberry.jpeg?h=370&amp;w=470&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/2zKOQvqFfZqlc0o3gbVZDT/39cb4da8fde50ab3172599d4e9cf0d8e/raspberry.jpeg?h=481&amp;w=611&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:0px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/2zKOQvqFfZqlc0o3gbVZDT/39cb4da8fde50ab3172599d4e9cf0d8e/raspberry.jpeg?h=309&amp;w=375&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/2zKOQvqFfZqlc0o3gbVZDT/39cb4da8fde50ab3172599d4e9cf0d8e/raspberry.jpeg?h=402&amp;w=488&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <img
                                          draggable="false"
                                          loading="eager"
                                          alt="raspberry"
                                          className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                                          data-v-23b40a86=""
                                        />
                                      </picture>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                              <div
                                className="image position-absolute"
                                data-v-ba35f45e=""
                              >
                                <div
                                  data-preset="y"
                                  data-delay=".1"
                                  className="w-100 h-100"
                                  data-v-ba35f45e=""
                                >
                                  <figure
                                    className="spd overflow-hidden w-100 h-100 position-relative"
                                    style={stylesE5}
                                    data-v-23b40a86=""
                                    data-v-ba35f45e=""
                                  >
                                    <div data-v-23b40a86="">
                                      <picture data-v-23b40a86="">
                                        <source
                                          media="(min-width:1920px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=330&amp;w=300&amp;q=100&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=429&amp;w=390&amp;q=100&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:1200px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=300&amp;w=270&amp;q=100&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=390&amp;w=351&amp;q=100&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:768px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=220&amp;w=370&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=286&amp;w=481&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:0px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=309&amp;w=370&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=402&amp;w=481&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <img
                                          draggable="false"
                                          loading="eager"
                                          alt="Churro Raspberry-min"
                                          className="w-100 h-100 position-absolute t-0 l-0 picture contain bg-center"
                                          data-v-23b40a86=""
                                        />
                                      </picture>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                              <div
                                data-preset="y"
                                data-delay=".1"
                                data-fromy="50"
                                data-dur="3"
                                data-v-ba35f45e=""
                              >
                                <div
                                  className="content-wrapper"
                                  data-v-ba35f45e=""
                                >
                                  <h4
                                    className="f1 f1-sm f1-xl ls-none headline2 mb-1 mb-lg-0 no-wrap headline"
                                    data-v-ba35f45e=""
                                  >
                                    Raspberry
                                  </h4>
                                  <div
                                    className="text mx-auto lh-1 f8 f12-sm f11-lg f11-xl text"
                                    data-v-ba35f45e=""
                                  >
                                    Because once you taste the crunchy toffee
                                    bits, pastry flakes, and brown sugar boba,
                                    the sparks will fly.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="swiper-slide swiper-slide--prev"
                            data-v-791a2ac4=""
                          >
                            <div
                              data-id="waypoint-92"
                              className="synchronized-waypoint slide text-center text-uppercase pb-xl-2-75 d-flex flex-column align-items-center mb-0 mb-lg-0 slide--prev"
                              data-v-ba35f45e=""
                              data-v-791a2ac4=""
                              style={stylesE11}
                            >
                              <div
                                data-preset="y"
                                data-delay=".1"
                                data-fromy="50"
                                data-dur="3"
                                data-v-ba35f45e=""
                              >
                                <div
                                  className="content-wrapper d-flex flex-column align-items-center"
                                  data-v-ba35f45e=""
                                >
                                  <h3
                                    className="f4 f8-sm f8-lg f8-xl pp mb-2 mb-sm-4 mb-lg-1-5 mb-xl-2-75 pt-1 no-wrap"
                                    data-v-ba35f45e=""
                                  >
                                    Double Espresso
                                  </h3>
                                  <div
                                    className="founders-bold f7 f11-sm f11-lg f11-xl mb-0-5"
                                    data-v-ba35f45e=""
                                  >
                                    This…is a Work of Art
                                  </div>
                                  <div
                                    className="f8 f12-sm f11-lg f11-xl lh-1 mx-auto mb-1-5 mb-lg-1 mb-xl-1-5 description px-1 px-sm-0"
                                    data-v-ba35f45e=""
                                  >
                                    We sculpted crunchy mocha toffee chips and
                                    swirled them into exotic Balinese coffee to
                                    make a rich, espresso-style ice cream
                                    canvas. Adding in boba, the chewy tapioca
                                    pearls that originated from Taiwan, it’s a
                                    masterpiece like no other.
                                  </div>
                                  <h4
                                    className="f1 f1-sm f1-xl ls-none no-wrap headline"
                                    data-v-ba35f45e=""
                                  >
                                    Takashi
                                  </h4>
                                </div>
                              </div>
                              <div
                                className="mx-auto px-xl-2-75 bg-image z-2 position-relative"
                                data-v-ba35f45e=""
                              >
                                <div
                                  data-preset="y"
                                  data-delay=".1"
                                  data-fromy="200"
                                  data-dur="3"
                                  data-v-ba35f45e=""
                                >
                                  <figure
                                    className="spd overflow-hidden bg position-relative"
                                    style={stylesE7}
                                    data-v-23b40a86=""
                                    data-v-ba35f45e=""
                                  >
                                    <div
                                      className="position-absolute w-100 h-100 t-0 l-0"
                                      data-v-23b40a86=""
                                    >
                                      <picture data-v-23b40a86="">
                                        <source
                                          media="(min-width:1920px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/ebnld0ZLqGAoeEAZY529w/a23dc10d697866b9d6ca7834522a7344/Double-espresso.jpeg?h=370&amp;w=900&amp;q=80&amp;&amp;fm=webp&amp;q=80  1x,
                            https://images.ctfassets.net/j8k8klriwj2h/ebnld0ZLqGAoeEAZY529w/a23dc10d697866b9d6ca7834522a7344/Double-espresso.jpeg?h=481&amp;w=1170&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:1200px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/ebnld0ZLqGAoeEAZY529w/a23dc10d697866b9d6ca7834522a7344/Double-espresso.jpeg?h=370&amp;w=470&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/ebnld0ZLqGAoeEAZY529w/a23dc10d697866b9d6ca7834522a7344/Double-espresso.jpeg?h=481&amp;w=611&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:768px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/ebnld0ZLqGAoeEAZY529w/a23dc10d697866b9d6ca7834522a7344/Double-espresso.jpeg?h=370&amp;w=470&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/ebnld0ZLqGAoeEAZY529w/a23dc10d697866b9d6ca7834522a7344/Double-espresso.jpeg?h=481&amp;w=611&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:0px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/ebnld0ZLqGAoeEAZY529w/a23dc10d697866b9d6ca7834522a7344/Double-espresso.jpeg?h=309&amp;w=375&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/ebnld0ZLqGAoeEAZY529w/a23dc10d697866b9d6ca7834522a7344/Double-espresso.jpeg?h=402&amp;w=488&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <img
                                          draggable="false"
                                          loading="eager"
                                          alt="Double-espresso"
                                          className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                                          data-v-23b40a86=""
                                        />
                                      </picture>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                              <div
                                className="image position-absolute"
                                data-v-ba35f45e=""
                              >
                                <div
                                  data-preset="y"
                                  data-delay=".1"
                                  className="w-100 h-100"
                                  data-v-ba35f45e=""
                                >
                                  <figure
                                    className="spd overflow-hidden w-100 h-100 position-relative"
                                    style={stylesE5}
                                    data-v-23b40a86=""
                                    data-v-ba35f45e=""
                                  >
                                    <div data-v-23b40a86="">
                                      <picture data-v-23b40a86="">
                                        <source
                                          media="(min-width:1920px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/qOTblA0deFa4Me5CR3RXX/523f1dfc70a5ba0aea6b2136777bdf28/Double_Espresso.png?h=330&amp;w=300&amp;q=100&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/qOTblA0deFa4Me5CR3RXX/523f1dfc70a5ba0aea6b2136777bdf28/Double_Espresso.png?h=429&amp;w=390&amp;q=100&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:1200px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/qOTblA0deFa4Me5CR3RXX/523f1dfc70a5ba0aea6b2136777bdf28/Double_Espresso.png?h=300&amp;w=270&amp;q=100&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/qOTblA0deFa4Me5CR3RXX/523f1dfc70a5ba0aea6b2136777bdf28/Double_Espresso.png?h=390&amp;w=351&amp;q=100&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:768px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/qOTblA0deFa4Me5CR3RXX/523f1dfc70a5ba0aea6b2136777bdf28/Double_Espresso.png?h=220&amp;w=370&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/qOTblA0deFa4Me5CR3RXX/523f1dfc70a5ba0aea6b2136777bdf28/Double_Espresso.png?h=286&amp;w=481&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <source
                                          media="(min-width:0px)"
                                          srcset="
                            https://images.ctfassets.net/j8k8klriwj2h/qOTblA0deFa4Me5CR3RXX/523f1dfc70a5ba0aea6b2136777bdf28/Double_Espresso.png?h=309&amp;w=370&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                            https://images.ctfassets.net/j8k8klriwj2h/qOTblA0deFa4Me5CR3RXX/523f1dfc70a5ba0aea6b2136777bdf28/Double_Espresso.png?h=402&amp;w=481&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                          "
                                          data-v-23b40a86=""
                                        />
                                        <img
                                          draggable="false"
                                          loading="eager"
                                          alt="Double Espresso-min"
                                          className="w-100 h-100 position-absolute t-0 l-0 picture contain bg-center"
                                          data-v-23b40a86=""
                                        />
                                      </picture>
                                    </div>
                                  </figure>
                                </div>
                              </div>
                              <div
                                data-preset="y"
                                data-delay=".1"
                                data-fromy="50"
                                data-dur="3"
                                data-v-ba35f45e=""
                              >
                                <div
                                  className="content-wrapper"
                                  data-v-ba35f45e=""
                                >
                                  <h4
                                    className="f1 f1-sm f1-xl ls-none headline2 mb-1 mb-lg-0 no-wrap headline"
                                    data-v-ba35f45e=""
                                  >
                                    muracoffee
                                  </h4>
                                  <div
                                    className="text mx-auto lh-1 f8 f12-sm f11-lg f11-xl text"
                                    data-v-ba35f45e=""
                                  >
                                    A sincere tribute to a creative legend in
                                    the world of Japanese pop art, this flavor
                                    is a true original. Grab a spoonful and be
                                    your own muse!
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span
                          className="swiper-notification"
                          aria-live="assertive"
                          aria-atomic="true"
                        ></span>
                      </div>
                    </div>

                    <div
                      className="p-0-5 p-xl-1 position-relative z-4 box"
                      data-v-791a2ac4=""
                      //   onMouseEnter={handleMouseEnter}
                      //   onMouseLeave={handleMouseLeave}
                    >
                      <a
                        href="https://shop.bobaicecream.com/collections/frontpage/products/ice-cream-package"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-v-791a2ac4=""
                      >
                        <div
                          className="button-component d-flex flex-center position-relative cursor-pointer f4 f7-sm f7-xl py-1-5 py-md-2-5 py-lg-2 pt-xl-4-5 pb-xl-4 transition bg-#EA1B0E"
                          style={{
                            background: "#ea1b0e",
                            color: "#f4b9c8",
                          }}
                          data-v-7b34fee5=""
                          data-v-791a2ac4=""
                        >
                          <div
                            className="d-inline-flex flex-center position-relative"
                            data-v-7b34fee5=""
                          >
                            <span
                              className="text position-relative pp-bold button-text color-#F4B9C8"
                              data-v-7b34fee5=""
                            >
                              ORDER NOW&nbsp;
                            </span>
                            <span
                              className="pp-bold ml-vmin-2 mt-0-25 mt-sm-0-5 color-yellow2"
                              data-v-7b34fee5=""
                            >
                              $85.00
                            </span>
                            <div
                              className="smiley-holder smiley-holder--1"
                              data-v-7b34fee5=""
                            >
                              <div
                                data-id="waypoint-97"
                                className="synchronized-waypoint floating-bubble yellow-smiley smiley--1"
                                data-v-4bd6f78a=""
                                data-v-7b34fee5=""
                                style={{
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform:
                                    "translate3d(-2.821%, -3.7408%, 0px) rotate(-236.177deg)",
                                }}
                              >
                                <div data-v-4bd6f78a="" className="">
                                  <svg
                                    width="195"
                                    height="194"
                                    viewBox="0 0 195 194"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-100 h-100"
                                    data-v-4bd6f78a=""
                                  >
                                    <ellipse
                                      cx="97.0409"
                                      cy="96.8766"
                                      rx="76.4975"
                                      ry="76.2338"
                                      transform="rotate(-18.8688 97.0409 96.8766)"
                                      fill="#FFD864"
                                      data-v-4bd6f78a=""
                                    ></ellipse>
                                    <path
                                      d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894"
                                      stroke="#473D36"
                                      stroke-width="2.45915"
                                      stroke-linecap="round"
                                      data-v-4bd6f78a=""
                                    ></path>
                                    <circle
                                      cx="134.577"
                                      cy="85.9991"
                                      r="2.11028"
                                      transform="rotate(-18.8688 134.577 85.9991)"
                                      fill="#473D36"
                                      data-v-4bd6f78a=""
                                    ></circle>
                                    <circle
                                      cx="117.053"
                                      cy="85.2973"
                                      r="2.11028"
                                      transform="rotate(-18.8688 117.053 85.2973)"
                                      fill="#473D36"
                                      data-v-4bd6f78a=""
                                    ></circle>
                                    <path
                                      d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z"
                                      fill="#F3EFE6"
                                      data-v-4bd6f78a=""
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div
                              className="smiley-holder smiley-holder--2"
                              data-v-7b34fee5=""
                            >
                              <div
                                data-id="waypoint-99"
                                className="synchronized-waypoint floating-bubble yellow-smiley smiley--2"
                                data-v-4bd6f78a=""
                                data-v-7b34fee5=""
                                style={{
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform:
                                    "translate3d(0.6114%, -7.3567%, 0px) rotate(236.177deg)",
                                }}
                              >
                                <div data-v-4bd6f78a="" className="">
                                  <svg
                                    width="195"
                                    height="194"
                                    viewBox="0 0 195 194"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-100 h-100"
                                    data-v-4bd6f78a=""
                                  >
                                    <ellipse
                                      cx="97.0409"
                                      cy="96.8766"
                                      rx="76.4975"
                                      ry="76.2338"
                                      transform="rotate(-18.8688 97.0409 96.8766)"
                                      fill="#FFD864"
                                      data-v-4bd6f78a=""
                                    ></ellipse>
                                    <path
                                      d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894"
                                      stroke="#473D36"
                                      stroke-width="2.45915"
                                      stroke-linecap="round"
                                      data-v-4bd6f78a=""
                                    ></path>
                                    <circle
                                      cx="134.577"
                                      cy="85.9991"
                                      r="2.11028"
                                      transform="rotate(-18.8688 134.577 85.9991)"
                                      fill="#473D36"
                                      data-v-4bd6f78a=""
                                    ></circle>
                                    <circle
                                      cx="117.053"
                                      cy="85.2973"
                                      r="2.11028"
                                      transform="rotate(-18.8688 117.053 85.2973)"
                                      fill="#473D36"
                                      data-v-4bd6f78a=""
                                    ></circle>
                                    <path
                                      d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z"
                                      fill="#F3EFE6"
                                      data-v-4bd6f78a=""
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div
                              className="smiley-holder smiley-holder--3"
                              data-v-7b34fee5=""
                            >
                              <div
                                data-id="waypoint-101"
                                className="synchronized-waypoint floating-bubble pink-smiley smiley--3"
                                data-v-4bd6f78a=""
                                data-v-7b34fee5=""
                                style={{
                                  translate: "none",
                                  rotate: "none",
                                  scale: "none",
                                  transform:
                                    "translate3d(-1.706%, 9.0467%, 0px) rotate(-236.177deg)",
                                }}
                              >
                                <div data-v-4bd6f78a="" className="">
                                  <svg
                                    width="195"
                                    height="194"
                                    viewBox="0 0 195 194"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-100 h-100"
                                    data-v-4bd6f78a=""
                                  >
                                    <ellipse
                                      cx="97.0409"
                                      cy="96.8766"
                                      rx="76.4975"
                                      ry="76.2338"
                                      transform="rotate(-18.8688 97.0409 96.8766)"
                                      fill="#EDC1CC"
                                      data-v-4bd6f78a=""
                                    ></ellipse>
                                    <path
                                      d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894"
                                      stroke="#473D36"
                                      stroke-width="2.45915"
                                      stroke-linecap="round"
                                      data-v-4bd6f78a=""
                                    ></path>
                                    <circle
                                      cx="134.577"
                                      cy="85.9991"
                                      r="2.11028"
                                      transform="rotate(-18.8688 134.577 85.9991)"
                                      fill="#473D36"
                                      data-v-4bd6f78a=""
                                    ></circle>
                                    <circle
                                      cx="117.053"
                                      cy="85.2973"
                                      r="2.11028"
                                      transform="rotate(-18.8688 117.053 85.2973)"
                                      fill="#473D36"
                                      data-v-4bd6f78a=""
                                    ></circle>
                                    <path
                                      d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z"
                                      fill="#F3EFE6"
                                      data-v-4bd6f78a=""
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 170.9422011084719"
                    preserveAspectRatio="none"
                    class="position-absolute bg-svg center-x"
                  >
                    <defs>
                      <clipPath id="slider-mask">
                        <path
                          fill="red"
                          d="M 50 63.5
      m -50.25, 0
      a 50.25,50.25 0 1,1 100.5,0
      L 100 170.9422011084719
      H 0 V 170.9422011084719
      "
                        ></path>
                      </clipPath>
                    </defs>
                    <path
                      clip-path="url(#slider-mask)"
                      d="M 0 0 V 12 C 5.555555555555555 12 5.555555555555555 12 11.11111111111111 12 16.666666666666664 12 16.666666666666664 12 22.22222222222222 12 27.77777777777777 12 27.77777777777777 12 33.33333333333333 12 38.888888888888886 12 38.888888888888886 12 44.44444444444444 12 50 12 50 12 55.55555555555556 12 61.1111111111111 12 61.1111111111111 12 66.66666666666666 12 72.22222222222223 12 72.22222222222223 12 77.77777777777779 12 83.33333333333333 12 83.33333333333333 12 88.88888888888889 12 94.44444444444444 12 94.44444444444444 12 100 12 V 170.9422011084719 H 0"
                      data-name="Karaoke"
                      fill="#F4B9C8"
                    ></path>
                  </svg>
                </div>
                <div
                  className="socials-component bg-yellow pt-1-75 pt-md-4 pt-lg-5 z-2 position-relative"
                  data-v-20b31861=""
                >
                  <div
                    data-id="waypoint-105"
                    className="synchronized-waypoint d-flex flex-column align-items-center"
                    data-v-20b31861=""
                  >
                    <svg
                      viewBox="0 0 24 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-preset="opacity,y"
                      data-delay=".1"
                      data-fromy="-50"
                      class="arrow mb-1-75 mb-md-4 mb-lg-5 should-animate"
                      data-v-20b31861=""
                      style={{ opacity: 1 }}
                    >
                      <rect
                        x="12.3545"
                        y="13.7109"
                        width="12.3547"
                        height="5.4052"
                        rx="0.310973"
                        transform="rotate(-180 12.3545 13.7109)"
                        data-v-20b31861=""
                      ></rect>
                      <path
                        d="M23.4691 10.6818C23.6764 10.8015 23.6764 11.1007 23.4691 11.2204L6.98765 20.736C6.71212 20.895 6.40377 20.5867 6.56285 20.3112L11.8771 11.1066C11.9327 11.0104 11.9327 10.8918 11.8771 10.7956L6.56285 1.59102C6.40377 1.31548 6.71211 1.00714 6.98765 1.16622L23.4691 10.6818Z"
                        data-v-20b31861=""
                      ></path>
                    </svg>
                    <div
                      className="hash-wrapper mb-3 mb-md-0"
                      data-v-20b31861=""
                    >
                      <div
                        data-preset="y"
                        data-delay=".1"
                        className="position-relative should-animate hash-bg"
                        data-v-20b31861=""
                        style={{ opacity: 1 }}
                      >
                        <img
                          src={BobaHash}
                          alt="boba hash"
                          className="w-100 h-100"
                          data-v-20b31861=""
                        />
                        <h4
                          className="position-absolute center text-uppercase text-center color-yellow w-100 f3 f6-sm f3-1-xl mt-0-25 mt-xl-0-5"
                          data-v-20b31861=""
                        >
                          # join the
                          <br />
                          bubble
                        </h4>
                        <img
                          src={CircleStar}
                          alt="Boba bubble"
                          data-preset="scale"
                          data-ease="Elastic.easeOut"
                          data-fromscale="0"
                          data-toscale="1"
                          data-dur="2"
                          className="social-bubble position-absolute should-animate"
                          data-v-20b31861=""
                          style={{ opacity: 1 }}
                        />
                      </div>
                    </div>
                    <div className="col-12 d-flex" data-v-20b31861="">
                      <div
                        data-id="waypoint-107"
                        className="synchronized-waypoint social-circle position-relative col-6"
                        data-v-3d3e503e=""
                        data-v-20b31861=""
                      >
                        <a
                          href="https://www.tiktok.com/@bobaicecream"
                          target="_blank"
                          data-v-3d3e503e=""
                        >
                          <div
                            className="synchronized-proportion-div position-relative round-border position-relative has-proportion"
                            style={stylesF7}
                            data-v-6752e43c=""
                            data-v-3d3e503e=""
                          >
                            <div
                              className="w-100 h-100 t-0 l-0 position-absolute"
                              data-v-6752e43c=""
                            >
                              <figure
                                data-preset="scale"
                                data-fromscale="1.1"
                                data-toscale={1}
                                data-dur={2}
                                className="spd overflow-hidden should-animate position-absolute w-100 h-100 t-0 l-0"
                                data-v-23b40a86
                                data-v-3d3e503e
                                data-v-6752e43c
                                style={{ opacity: 1 }}
                              >
                                <div data-v-23b40a86="">
                                  <picture data-v-23b40a86="">
                                    <source
                                      media="(min-width:1920px)"
                                      srcset="
                        https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=1200&amp;w=1200&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x,
                        https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=1560&amp;w=1560&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x
                      "
                                      data-v-23b40a86=""
                                    />
                                    <source
                                      media="(min-width:1080px)"
                                      srcset="
                        https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=960&amp;w=960&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80   1x,
                        https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=1248&amp;w=1248&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x
                      "
                                      data-v-23b40a86=""
                                    />
                                    <source
                                      media="(min-width:768px)"
                                      srcset="
                        https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=600&amp;w=600&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x,
                        https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=780&amp;w=780&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x
                      "
                                      data-v-23b40a86=""
                                    />
                                    <source
                                      media="(min-width:0px)"
                                      srcset="
                        https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=400&amp;w=400&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x,
                        https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=520&amp;w=520&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x
                      "
                                      data-v-23b40a86=""
                                    />
                                    <img
                                      draggable="false"
                                      loading="eager"
                                      alt="image 1582"
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                                      data-v-23b40a86=""
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                          </div>
                          <div
                            href="https://www.tiktok.com/@bobaicecream"
                            className="d-flex flex-center position-absolute title-wrapper color-pink"
                            data-v-3d3e503e=""
                          >
                            <svg
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="arrow-horizontal f4 f6-sm f2-xl mb-0-25 mb-md-0-5 mb-lg-1"
                              data-v-3d3e503e=""
                            >
                              <rect
                                x="12.3545"
                                y="13.7109"
                                width="12.3547"
                                height="5.4052"
                                rx="0.310973"
                                transform="rotate(-180 12.3545 13.7109)"
                                data-v-3d3e503e=""
                              ></rect>
                              <path
                                d="M23.4691 10.6818C23.6764 10.8015 23.6764 11.1007 23.4691 11.2204L6.98765 20.736C6.71212 20.895 6.40377 20.5867 6.56285 20.3112L11.8771 11.1066C11.9327 11.0104 11.9327 10.8918 11.8771 10.7956L6.56285 1.59102C6.40377 1.31548 6.71211 1.00714 6.98765 1.16622L23.4691 10.6818Z"
                                data-v-3d3e503e=""
                              ></path>
                            </svg>
                            <div
                              className="f4 f6-sm f2-xl pp-bold px-0-5 color-white mt-0-25 mt-md-0-5 mt-lg-1"
                              data-v-3d3e503e=""
                            >
                              TIKTOK
                            </div>
                            <svg
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="arrow-horizontal reversed f4 f6-sm f2-xl mb-0-25 mb-md-0-5 mb-lg-1"
                              data-v-3d3e503e=""
                            >
                              <rect
                                x="12.3545"
                                y="13.7109"
                                width="12.3547"
                                height="5.4052"
                                rx="0.310973"
                                transform="rotate(-180 12.3545 13.7109)"
                                data-v-3d3e503e=""
                              ></rect>
                              <path
                                d="M23.4691 10.6818C23.6764 10.8015 23.6764 11.1007 23.4691 11.2204L6.98765 20.736C6.71212 20.895 6.40377 20.5867 6.56285 20.3112L11.8771 11.1066C11.9327 11.0104 11.9327 10.8918 11.8771 10.7956L6.56285 1.59102C6.40377 1.31548 6.71211 1.00714 6.98765 1.16622L23.4691 10.6818Z"
                                data-v-3d3e503e=""
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                      <div
                        data-id="waypoint-111"
                        className="synchronized-waypoint social-circle position-relative col-6"
                        data-v-3d3e503e=""
                        data-v-20b31861=""
                      >
                        <a
                          href="https://instagram.com/bobaicecream"
                          target="_blank"
                          data-v-3d3e503e=""
                        >
                          <div
                            className="synchronized-proportion-div position-relative round-border position-relative has-proportion"
                            style={stylesF7}
                            data-v-6752e43c=""
                            data-v-3d3e503e=""
                          >
                            <div
                              className="w-100 h-100 t-0 l-0 position-absolute"
                              data-v-6752e43c=""
                            >
                              <figure
                                data-preset="scale"
                                data-fromscale="1.1"
                                data-toscale={1}
                                data-dur={2}
                                className="spd overflow-hidden should-animate position-absolute w-100 h-100 t-0 l-0"
                                data-v-23b40a86=""
                                data-v-3d3e503e=""
                                data-v-6752e43c=""
                                style={{ opacity: 1 }}
                              >
                                <div data-v-23b40a86="">
                                  <picture data-v-23b40a86="">
                                    <source
                                      media="(min-width:1920px)"
                                      srcset="
                        https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=1200&amp;w=1200&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x,
                        https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=1560&amp;w=1560&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x
                      "
                                      data-v-23b40a86=""
                                    />
                                    <source
                                      media="(min-width:1080px)"
                                      srcset="
                        https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=960&amp;w=960&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80   1x,
                        https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=1248&amp;w=1248&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x
                      "
                                      data-v-23b40a86=""
                                    />
                                    <source
                                      media="(min-width:768px)"
                                      srcset="
                        https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=600&amp;w=600&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x,
                        https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=780&amp;w=780&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x
                      "
                                      data-v-23b40a86=""
                                    />
                                    <source
                                      media="(min-width:0px)"
                                      srcset="
                        https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=400&amp;w=400&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x,
                        https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=520&amp;w=520&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x
                      "
                                      data-v-23b40a86=""
                                    />
                                    <img
                                      draggable="false"
                                      loading="eager"
                                      alt="image 1546"
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                                      data-v-23b40a86=""
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                          </div>
                          <div
                            href="https://instagram.com/bobaicecream"
                            className="d-flex flex-center position-absolute title-wrapper color-red2"
                            data-v-3d3e503e=""
                          >
                            <svg
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="arrow-horizontal f4 f6-sm f2-xl mb-0-25 mb-md-0-5 mb-lg-1"
                              data-v-3d3e503e=""
                            >
                              <rect
                                x="12.3545"
                                y="13.7109"
                                width="12.3547"
                                height="5.4052"
                                rx="0.310973"
                                transform="rotate(-180 12.3545 13.7109)"
                                data-v-3d3e503e=""
                              ></rect>
                              <path
                                d="M23.4691 10.6818C23.6764 10.8015 23.6764 11.1007 23.4691 11.2204L6.98765 20.736C6.71212 20.895 6.40377 20.5867 6.56285 20.3112L11.8771 11.1066C11.9327 11.0104 11.9327 10.8918 11.8771 10.7956L6.56285 1.59102C6.40377 1.31548 6.71211 1.00714 6.98765 1.16622L23.4691 10.6818Z"
                                data-v-3d3e503e=""
                              ></path>
                            </svg>
                            <div
                              className="f4 f6-sm f2-xl pp-bold px-0-5 color-white mt-0-25 mt-md-0-5 mt-lg-1"
                              data-v-3d3e503e=""
                            >
                              IG
                            </div>
                            <svg
                              viewBox="0 0 24 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              class="arrow-horizontal reversed f4 f6-sm f2-xl mb-0-25 mb-md-0-5 mb-lg-1"
                              data-v-3d3e503e=""
                            >
                              <rect
                                x="12.3545"
                                y="13.7109"
                                width="12.3547"
                                height="5.4052"
                                rx="0.310973"
                                transform="rotate(-180 12.3545 13.7109)"
                                data-v-3d3e503e=""
                              ></rect>
                              <path
                                d="M23.4691 10.6818C23.6764 10.8015 23.6764 11.1007 23.4691 11.2204L6.98765 20.736C6.71212 20.895 6.40377 20.5867 6.56285 20.3112L11.8771 11.1066C11.9327 11.0104 11.9327 10.8918 11.8771 10.7956L6.56285 1.59102C6.40377 1.31548 6.71211 1.00714 6.98765 1.16622L23.4691 10.6818Z"
                                data-v-3d3e503e=""
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    data-id="waypoint-114"
                    className="synchronized-waypoint"
                    data-v-20b31861=""
                  >
                    <div
                      data-preset="opacity,y"
                      data-delay=".1"
                      className="f5 f9-1-sm f6-xl color-red2 pp-bold text-center mt-2 mt-md-3 mt-lg-2 px-0-5 px-md-1-5 px-lg-6 pb-3 pb-md-7-5 pb-lg-10 should-animate scroll-animation"
                      data-v-20b31861=""
                      style={{ opacity: 1 }}
                    >
                      PROUDLY AAPI⁃OWNED! A PORTION OF THE PROCEEDS, OF EVERY
                      PINT SOLD, GOES TO SUPPORT AAPI COMMUNITIES IN NEED.
                    </div>
                  </div>
                </div>
                <div
                  data-id="waypoint-116"
                  className="synchronized-waypoint page-footer bg-yellow px-0-5 px-lg-2 py-1 py-lg-2"
                  data-v-709f7a56=""
                >
                  <div
                    data-preset="y"
                    data-delay=".2"
                    className="row justify-content-center justify-content-sm-between should-animate scroll-animation"
                    data-v-709f7a56
                    style={{ opacity: 1 }}
                  >
                    <a
                      href="/"
                      aria-current="page"
                      className="mb-1 mb-sm-0 logo-wrapper router-link-exact-active router-link-active"
                      data-v-709f7a56=""
                      style={{ color: "#ea1b0e !important" }}
                    >
                      <img
                        src={Logo}
                        width="172"
                        height="26"
                        alt="Boba Logo"
                        className="logo"
                        data-v-709f7a56=""
                      />
                    </a>
                    <div
                      className="d-flex col-12 col-sm justify-content-between justify-content-sm-end align-items-center gutter-custom"
                      data-v-709f7a56=""
                    >
                      <a
                        href="/privacy-policy"
                        className="text-uppercase f8 f12-sm f11-xl founders-semibold link mx-sm-0-75 no-wrap"
                        data-v-709f7a56=""
                      >
                        Privacy Policy
                      </a>
                      <a
                        href="/terms-and-conditions"
                        className="text-uppercase f8 f12-sm f11-xl founders-semibold link mx-sm-0-75 no-wrap"
                        data-v-709f7a56=""
                      >
                        Terms &amp; Conditions
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* bacic end here */}
            </div>
          </div>
          {/* <div
            className="warning-overlay flex-column flex-center py-1 px-2 on-top"
            data-v-721cc652=""
          >
            <div
              className="d-flex flex-column flex-center h-100 w-100 position-relative"
              data-v-721cc652=""
            >
              <svg
                viewBox="0 0 640 281"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="warning-decore"
                data-v-721cc652=""
              >
                <circle
                  cx="99.5001"
                  cy="248.5"
                  r="10.5001"
                  fill="#473D36"
                  data-v-721cc652=""
                ></circle>
                <path
                  d="M100.063 244.947C104.656 244.947 104.656 242.414 104.656 240.062C104.656 242.414 104.656 244.947 109.25 244.947C104.656 244.947 104.656 248.203 104.656 250.374C104.656 248.203 104.656 244.947 100.063 244.947Z"
                  fill="#F3EFE6"
                  data-v-721cc652=""
                ></path>
                <circle
                  cx="19.1076"
                  cy="58.1076"
                  r="19.1076"
                  fill="#473D36"
                  data-v-721cc652=""
                ></circle>
                <path
                  d="M20.1312 51.6426C28.4908 51.6426 28.4908 47.0333 28.4908 42.7533C28.4908 47.0333 28.4908 51.6426 36.8504 51.6426C28.4908 51.6426 28.4908 57.5688 28.4908 61.5197C28.4908 57.5688 28.4908 51.6426 20.1312 51.6426Z"
                  fill="#F3EFE6"
                  data-v-721cc652=""
                ></path>
                <circle
                  cx="628.892"
                  cy="160.892"
                  r="10.8924"
                  fill="#473D36"
                  data-v-721cc652=""
                ></circle>
                <path
                  d="M629.476 157.207C634.241 157.207 634.241 154.58 634.241 152.14C634.241 154.58 634.241 157.207 639.007 157.207C634.241 157.207 634.241 160.586 634.241 162.838C634.241 160.586 634.241 157.207 629.476 157.207Z"
                  fill="#F3EFE6"
                  data-v-721cc652=""
                ></path>
                <circle
                  r="12.5001"
                  transform="matrix(-1 0 0 1 434.5 12.5001)"
                  fill="#473D36"
                  data-v-721cc652=""
                ></circle>
                <path
                  d="M433.83 8.27193C428.361 8.27193 428.361 5.25656 428.361 2.45657C428.361 5.25656 428.361 8.27193 422.893 8.27193C428.361 8.27193 428.361 12.1488 428.361 14.7334C428.361 12.1488 428.361 8.27193 433.83 8.27193Z"
                  fill="#F3EFE6"
                  data-v-721cc652=""
                ></path>
                <circle
                  cx="197.5"
                  cy="204.5"
                  r="7.50004"
                  fill="#473D36"
                  data-v-721cc652=""
                ></circle>
                <path
                  d="M197.902 201.963C201.183 201.963 201.183 200.154 201.183 198.474C201.183 200.154 201.183 201.963 204.464 201.963C201.183 201.963 201.183 204.29 201.183 205.84C201.183 204.29 201.183 201.963 197.902 201.963Z"
                  fill="#F3EFE6"
                  data-v-721cc652=""
                ></path>
                <circle
                  cx="490.5"
                  cy="273.5"
                  r="7.50004"
                  fill="#473D36"
                  data-v-721cc652=""
                ></circle>
                <path
                  d="M490.902 270.963C494.183 270.963 494.183 269.154 494.183 267.474C494.183 269.154 494.183 270.963 497.464 270.963C494.183 270.963 494.183 273.29 494.183 274.84C494.183 273.29 494.183 270.963 490.902 270.963Z"
                  fill="#F3EFE6"
                  data-v-721cc652=""
                ></path>
              </svg>
              <div
                className="inner-wrapper d-flex flex-column flex-center flex-grow position-relative on-top"
                data-v-721cc652=""
              >
                <p
                  className="color-purple5 f8 lh-1 subheadline pp-bold mb-vmin-5 px-vmin-2 px-md-0 text-center text-uppercase"
                  data-v-721cc652=""
                >
                  For better experience, <br /> please use portrait mode
                </p>
                <img
                  draggable="false"
                  src={Rotate}
                  alt="Alet"
                  className="rotate-decore mt-1"
                  data-v-721cc652=""
                />
              </div>
            </div>
          </div> */}
        </main>
      </div>
    </div>
  );
};

export default Home;
