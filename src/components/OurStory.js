/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/aria-proptypes */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useState, useEffect,useRef} from "react";
import "./content.css";
import "../../src/index.css";
import { Link } from "react-router-dom";
import Video from "../assets/videos/boba-reel.mp4";
import BobaHash from "../assets/svg/bobaHash.svg";
import CircleStar from "../assets/svg/circleStar.svg";
import Logo from "../assets/svg/logo.svg";
// import sliderArrow from "../assets/svg/slider-arrow.svg";
import smallBrownBoba from "../assets/svg/small-brown-boba.svg";
import number10 from "../assets/svg/number-10-newest.svg";
import number0 from "../assets/svg/number-0-newest.svg";
import lactoseFree from "../assets/svg/lactose-free.svg";
import b7a from "../assets/svg/b70015d482afb3580393570c64dc4e7a.svg";
import f57c from "../assets/svg/f5ddd9a33cfbe4ccbb8e56091db1107c.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/swiper.min.css";
import { Fade } from "react-awesome-reveal";
import { useInView } from 'react-intersection-observer';
const OurStory = () => {
  const [rotation, setRotation] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [scale, setScale] = useState(0);
  const svgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isForward) {
        if (rotation < 360) {
          setRotation((prevRotation) => prevRotation + 10);
        } else {
          setIsForward(false);
        }
      } else {
        if (rotation > 0) {
          setRotation((prevRotation) => prevRotation - 10);
        } else {
          setIsForward(true);
        }
      }
    }, 500); // Change the interval duration as desired

    return () => {
      clearInterval(interval);
    };
  }, [rotation, isForward]);

  const transformStyle = {
    transform: `translate3d(0, 0, 0) rotate(${rotation}deg)`,
  };

  // for scale
  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prevScale) => (prevScale === 0 ? 1 : 0));
    }, 9000); // Change the interval duration as desired

    return () => {
      clearInterval(interval);
    };
  }, []);

  const transformStyle1 = {
    transform: `translate(0px, -20%) scale(${scale}, ${scale})`,
  };

 

  // for how-it-began rotation

  useEffect(() => {
    window.scrollTo(0, 1500);
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold as needed
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the animation class to rotate the text
          svgRef.current.classList.add('how-it-began','our-communities','supporting','Happiness');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(svgRef.current);

    const handleScroll = () => {
      if (svgRef.current && isScrolledIntoView(svgRef.current)) {
        // Add the animation class to rotate the text
        svgRef.current.classList.add('how-it-began','our-communities','supporting','Happiness');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolledIntoView = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top >= 0 && rect.bottom <= windowHeight;
  };

// for Circular text rotation
  
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element comes into view
    threshold: 0.5, // Adjust the threshold as needed
  });
  const textPathRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);


  
  
  
  const stylesMain = {
    "--white": "#f3efe6",
    "--whitev2": "#ffffff",
    "--black": "#000000",
    "--black2": "#473d36",
    "--black3": "#252220",
    "--red": "#ef1525",
    "--red2": "#ea1b0e",
    "--red3": "#e27391",
    "--red4": "#ff6b00",
    "--red5": "#ef1525",
    "--red6": "#bf4c6b",
    "--red7": "#c13158",
    "--red8": "#f68a9d",
    "--yellow": "#ffd864",
    "--yellow2": "#ffd249",
    "--yellow3": "#ffc106",
    "--yellow4": "#ffb800",
    "--yellow5": "#ce8938",
    "--yellow6": "#e58616",
    "--light-yellow": "#fdee9a",
    "--light-yellow2": "#f8f2cb",
    "--pink": "#edc1cc",
    "--pink2": "#f4b9c8",
    "--pink3": "#edc0cc",
    "--pink4": "#f4b9c8",
    "--pink5": "#fa7982",
    "--pink6": "#ffb9c3",
    "--light-pink": "#fff0f2",
    "--creme": "#faf6df",
    "--light-purple": "#ead7f0",
    "--purple": "#a380ae",
    "--purple2": "#d4b6d4",
    "--purple3": "#90629d",
    "--purple4": "#b595bf",
    "--purple5": "#bd3257",
    "--purple6": "#ab2339",
    "--purple7": "#e5cae5",
    "--gray": "#f3efe6",
    "--gold": "#b09675",
    "--brown": "#604442",
    "--brown2": "#755855",
    "--brown3": "#e5cdae",
    "--lightYellow": "#fdee9a",
    "--lightYellow2": "#f8f2cb",
    "--lightPink": "#fff0f2",
    "--lightPurple": "#ead7f0",
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


  const stylesE17 = {
    "--53a1ab0e": "undefined",
    "--6c777af4": "18vw",
    "--6c777af3": "0vw",
    "--46d85939": "50%",
    "--46d857d5": "33%",
    "--46d857b9": "22vw",
    "--a78950b0": "12px",
    "--a7895378": "9.696969696969697px",
    "--a78953b0": "12.727272727272727px",
    "--eeb2bae2": "15.2px",
    "--eeb2bdaa": "16.96969696969697px",
    "--eeb2bde2": "25.454545454545453px",
    "--0badb96c": "0px",
    opacity: "1",
  };
  const stylesE18 = {
    "--align": "center",
    "--align-mobile": "center",
    "--xs": "99.75%",
    "--sm": "99.75%",
    "--md": "99.75%",
    "--lg": "99.75%",
    "--xl": "99.75%",
    "--xxl": "99.75%",
  };
  const stylesE19 = {
    " --53a1ab0e": "undefined",
    "--6c777af4": "0vw",
    "--6c777af3": "0vw",
    "--46d85939": "50%",
    "--46d857d5": "33%",
    "--46d857b9": "40vw",
    "--a78950b0": "12px",
    "--a7895378": "9.696969696969697px",
    "--a78953b0": "7px",
    "--eeb2bae2": "15.2px",
    "--eeb2bdaa": "16.96969696969697px",
    "--eeb2bde2": "14px",
    "--0badb96c": "0px",
    opacity: "1",
  };
  const stylesE20 = {
    " --53a1ab0e": "undefined",
    "--6c777af4": "18vw",
    "--6c777af3": "-7vw",
    "--46d85939": "50%",
    "--46d857d5": "33%",
    "--46d857b9": "27vw",
    "--a78950b0": "12px",
    "--a7895378": "9.696969696969697px",
    "--a78953b0": "10.37037037037037px",
    "--eeb2bae2": "15.2px",
    "--eeb2bdaa": "16.96969696969697px",
    "--eeb2bde2": "20.74074074074074px",
    "--0badb96c": "0px",
    opacity: "1",
  };
  const stylesE21 = {
    "--53a1ab0e": "undefined",
    "--6c777af4": "3vw",
    "--6c777af3": "3vw",
    "--46d85939": "50%",
    "--46d857d5": "33%",
    "--46d857b9": "21vw",
    "--a78950b0": "12px",
    "--a7895378": "9.696969696969697px",
    "--a78953b0": "13.333333333333332px",
    "--eeb2bae2": "15.2px",
    "--eeb2bdaa": "16.96969696969697px",
    "--eeb2bde2": "26.666666666666664px",
    "--0badb96c": "0px",
    opacity: "1",
  };
  const stylesE22 = {
    "--53a1ab0e": "undefined",
    "--6c777af4": "17vw",
    "--6c777af3": "0vw",
    "--46d85939": "50%",
    "--46d857d5": "33%",
    "--46d857b9": "32vw",
    "--a78950b0": "12px",
    "--a7895378": "9.696969696969697px",
    "--a78953b0": "8.75px",
    "--eeb2bae2": "15.2px",
    "--eeb2bdaa": "16.96969696969697px",
    "--eeb2bde2": "17.5px",
    "--0badb96c": "0px",
    opacity: "1",
  };
  const stylesE23 = {
    "--align": "center",
    "--align-mobile": "center",
    "--xs": "99.83333333333333%",
    "--sm": "99.83333333333333%",
    "--md": "99.83333333333333%",
    "--lg": "99.83333333333333%",
    "--xl": "99.83333333333333%",
    "--xxl": "99.83333333333333%",
  };
  const stylesE24 = {
    " --53a1ab0e": "-1",
    "--6c777af4": "5vw",
    "--6c777af3": "-10vw",
    "--46d85939": "50%",
    "--46d857d5": "33%",
    "--46d857b9": "22vw",
    "--a78950b0": "12px",
    "--eeb2bdaa": "16.96969696969697px",
    "--eeb2bde2": "25.454545454545453px",
    "--0badb96c": "0px",
    opacity: "1",
  };
  const stylesE25 = {
    "--53a1ab0e": "undefined",
    "--6c777af4": "20vw",
    "--6c777af3": "5vw",
    "--46d85939": "50%",
    "--46d857d5": "33%",
    "--46d857b9": "27vw",
    "--a78950b0": "12px",
    "--a7895378": "9.696969696969697px",
    "--a78953b0": "10.37037037037037px",
    "--eeb2bae2": "15.2px",
    "--eeb2bdaa": "16.96969696969697px",
    "--eeb2bde2": "20.74074074074074px",
    "--0badb96c": "0px",
    opacity: "1",
  };
  const stylesE26 = {
    "--align": "center",
    "--align-mobile": "center",
    "--xs": "81.66666666666667%",
    "--sm": "81.66666666666667%",
    "--md": "81.66666666666667%",
    "--lg": "81.66666666666667%",
    "--xl": "81.66666666666667%",
    "--xxl": "81.66666666666667%",
  };
  const stylesE27 = {
    "--53a1ab0e": "undefined",
    "--6c777af4": "0",
    "--6c777af3": "0",
    "--46d85939": "50%",
    "--46d857d5": "33%",
    "--46d857b9": "100%",
    "--a78950b0": "18px",
    "--a7895378": "14.545454545454547px",
    "--a78953b0": "4.199999999999999px",
    "--eeb2bae2": " 22.799999999999997px",
    "--eeb2bdaa": "25.454545454545453px",
    "--eeb2bde2": "8.399999999999999px",
    "--0badb96c": "0px",
    opacity: "1",
  };
  const stylesE28 = {
    " --53a1ab0e": "undefined",
    "--6c777af4": "0",
    "--6c777af3": "0",
    "--46d85939": "50%",
    "--46d857d5": "33%",
    "--46d857b9": "100%",
    "--a78950b0": "18px",
    "--a7895378": "14.545454545454547px",
    "--a78953b0": "4.199999999999999px",
    "--eeb2bae2": "22.799999999999997px",
    "--eeb2bdaa": "25.454545454545453px",
    "--eeb2bde2": "8.399999999999999px",
    "--0badb96c": "0px",
    opacity: "1",
  };
  const stylesE29 = {
    "--53a1ab0e": "undefined",
    "--6c777af4": "0",
    "--6c777af3": "0",
    "--46d85939": "50%",
    "--46d857d5": "33%",
    "--46d857b9": "100%",
    "--a78950b0": "18px",
    "--a7895378": "14.545454545454547px",
    "--a78953b0": "4.199999999999999px",
    "--eeb2bae2": "22.799999999999997px",
    "--eeb2bdaa": "25.454545454545453px",
    "--eeb2bde2": "8.399999999999999px",
    "--0badb96c": "0px",
    opacity: "1",
  };
  const stylesE30 = {
    "--53a1ab0e": "undefined",
    "--6c777af4": "0",
    "--6c777af3": "0",
    "--46d85939": "50%",
    "--46d857d5": "33%",
    "--46d857b9": "100%",
    "--a78950b0": "18px",
    "--a7895378": "14.545454545454547px",
    "--a78953b0": "4.199999999999999px",
    "--eeb2bae2": "22.799999999999997px",
    "--eeb2bdaa": "25.454545454545453px",
    "--eeb2bde2": "8.399999999999999px",
    "--0badb96c": "0px",
    opacity: "1",
  };


  return (
    <div id="__nuxt">
      <div id="__layout">
        <main style={stylesMain}>
      {/* <div ref={ref} className="scroll-trigger"/> */}
          
          <div
            data-id="waypoint-10"
            className="synchronized-waypoint navigation px-0-875 px-sm-1-75 px-xl-2 py-0-75 py-lg-1-25 position-absolute t-0 l-0 w-100 on-top white"
            data-v-582e57fe=""
          >
            <div
              data-preset="opacity,y"
              data-fromy="-100"
              data-delay=".1"
              className="should-animate row align-items-center justify-content-between boba-text"
              data-v-582e57fe=""
              style={{ opacity: 1 }}
            >
              <a
                href="/"
                className="f5 f10-sm f10-2-1-xl router-link-active"
                data-v-582e57fe=""
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
                <span className="indented" data-v-582e57fe="">
                  Boba Ice Cream Home Page
                </span>
              </a>
              <div
                className="f5 f10-sm f10-2-1-xl d-flex col justify-content-end align-items-center gutter pp-bold"
                data-v-582e57fe=""
              >
                <Link
                  href="/our-story"
                  className="text-uppercase link mx-0-75 no-wrap router-link-exact-active router-link-active"
                  data-v-582e57fe=""
                  aria-current="page"
                >
                  Our Story
                </Link>
              </div>
            </div>
          </div>
          <div
            className="popup-button f5 f10-1-sm f10-1-xl fade-out disabled"
            data-v-4c4f7eb1=""
          >
            <a
              href="https://shop.bobaicecream.com/collections/frontpage/products/ice-cream-package"
              target="_blank"
              rel="noopener"
              className="text-center cursor-pointer follow-circle d-inline-block"
              data-v-4c4f7eb1=""
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
                class="w-100 h-100"
                data-v-4c4f7eb1=""
              >
                <defs data-v-4c4f7eb1="">
                  <filter id="blur-filter" x="0" y="0" data-v-4c4f7eb1="">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="20"
                      data-v-4c4f7eb1=""
                    ></feGaussianBlur>
                  </filter>
                  <clipPath id="ball-mask" data-v-4c4f7eb1="">
                    <path
                      id="Vector"
                      d="M47.38 118.122C45.8855 118.122 44.1774 117.701 42.8964 117.069C38.4127 114.541 36.7046 108.852 39.0532 104.428C53.7853 77.6719 79.1929 57.4469 108.871 49.0198C113.781 47.5451 119.119 50.4945 120.614 55.3401C122.108 60.1857 119.119 65.4527 114.208 66.9274C89.4413 74.0904 68.0904 90.9446 55.7069 113.487C53.9988 116.226 50.7962 118.122 47.38 118.122Z"
                      fill="#FFF193"
                      data-v-4c4f7eb1=""
                    ></path>
                    <path
                      id="Vector_2"
                      d="M37 141.945C31.4681 141.945 27 137.51 27 132.019C27 126.528 31.4681 122.093 37 122.093C42.5319 122.093 47 126.528 47 132.019C47 137.51 42.5319 141.945 37 141.945Z"
                      fill="#FFF193"
                      data-v-4c4f7eb1=""
                    ></path>
                    <path
                      id="Vector_3"
                      d="M8.37169 119.372C7.55171 121.25 7.00505 123.128 6.4584 125.006V125.274V125.542C5.91174 127.42 5.36509 129.298 4.81843 131.175C4.81843 131.444 4.81843 131.444 4.81843 131.712C4.27178 133.858 3.72513 135.736 3.4518 137.614C3.4518 137.882 3.4518 137.882 3.4518 138.15C2.63182 139.491 2.08516 141.369 1.81184 143.783V144.052C1.53851 145.929 1.26518 147.807 0.991856 150.221C0.718529 152.367 0.445202 154.513 0.445202 156.659V157.464C0.445202 158.805 0.171875 159.878 0.171875 161.22C0.171875 162.829 0.171875 164.439 0.171875 165.78C0.171875 202.799 14.9315 237.672 41.7176 263.96C68.5036 290.249 104.036 304.735 141.755 304.735C179.474 304.735 215.007 290.249 241.793 263.96C268.579 237.672 283.339 202.799 283.339 165.78C283.339 141.369 276.779 117.495 264.479 96.5709C262.839 93.6201 260.926 90.6693 259.013 87.9868C256.826 85.036 254.639 82.0853 252.453 79.1345C255.733 77.525 259.013 75.9155 262.566 75.1107C269.399 73.5012 290.172 71.3552 290.172 71.3552C290.172 71.3552 269.126 69.7457 262.293 68.1361C257.646 66.7949 252.999 64.6489 248.9 62.2346C244.526 59.2838 240.426 55.7965 237.146 51.5045C233.593 46.4077 230.86 41.0426 229.493 35.1411C227.58 26.557 225.667 0 225.667 0C225.667 0 223.753 26.557 221.84 35.1411C220.747 39.9696 218.834 44.2617 216.1 48.5537C193.961 34.8728 167.995 27.3618 141.482 27.3618H139.842C139.295 27.3618 138.749 27.3618 138.475 27.3618H137.655C137.109 27.3618 136.562 27.3618 136.015 27.3618C135.742 27.3618 135.469 27.3618 134.922 27.3618C89.2765 29.5078 47.4575 53.3823 22.5847 90.9376V91.2059C21.4914 92.8154 20.6714 94.4249 19.5781 96.0344C19.5781 96.0344 19.5781 96.3027 19.3048 96.3027C18.2115 97.9122 17.3915 99.5217 16.2982 101.399L16.0248 101.668C15.2049 103.277 14.3849 105.155 13.2916 107.033C13.2916 107.033 13.2916 107.301 13.0182 107.301C12.1983 109.179 11.3783 110.788 10.5583 112.666C10.5583 112.934 10.285 112.934 10.285 113.203C9.465 115.08 8.91834 116.69 8.09836 118.568L8.37169 119.372ZM132.462 279.519C99.9363 279.519 69.3236 267.179 46.0908 245.183C22.5847 222.918 9.19167 193.41 8.09836 161.756C8.09836 160.683 8.09836 159.342 8.37169 158.269V157.464C8.64501 155.318 8.64501 153.44 8.91834 151.294C9.19167 149.148 9.465 147.271 9.73832 145.393C9.73832 145.125 9.73832 145.125 9.73832 144.856C10.0116 142.71 10.5583 140.833 10.8316 139.223C10.8316 139.223 10.8316 139.223 10.8316 138.955C11.105 137.345 11.6516 135.468 12.1983 133.322V133.053C12.7449 131.175 13.2916 129.298 13.8382 127.688V127.42V127.152C14.3849 125.542 14.9315 123.664 15.7515 121.787L16.0248 121.518C16.8448 119.641 17.3915 118.031 18.2115 116.153V115.885C19.0314 114.544 19.8514 112.666 20.6714 111.057C20.6714 111.057 20.6714 111.057 20.6714 110.788C20.6714 110.788 20.6714 110.788 20.6714 110.52C21.4914 108.642 22.3114 107.033 23.1313 105.423C23.1313 105.423 23.1313 105.155 23.4047 105.155C24.498 103.277 25.318 101.668 26.1379 100.326C26.1379 100.326 26.1379 100.326 26.1379 100.058C27.2313 98.4487 28.0512 96.8392 29.1445 95.2296C29.1445 95.2296 29.1445 94.9614 29.4179 94.9614C52.924 59.5521 92.2831 37.2871 135.195 35.4093C135.469 35.4093 136.015 35.4093 136.289 35.4093C136.562 35.4093 137.109 35.4093 137.382 35.4093H137.929C163.895 35.9458 187.674 44.5299 206.807 58.7473C205.167 60.0886 203.801 61.1616 202.161 62.2346C198.061 64.9171 193.414 66.7949 188.768 68.1361C181.934 69.7457 161.162 71.8917 161.162 71.8917C161.162 71.8917 181.934 74.0377 188.768 75.6472C193.414 76.9885 198.061 79.1345 202.161 81.5488C206.534 84.4995 210.634 87.9868 213.914 92.2789C217.467 97.3757 220.2 102.741 221.567 108.642C223.48 117.226 225.393 143.783 225.393 143.783C225.393 143.783 227.307 117.226 229.22 108.642C230.86 102.741 233.32 97.1074 236.873 92.2789C237.146 92.0106 237.42 91.7424 237.42 91.4741C249.446 110.52 256.279 133.053 256.279 157.196C256.826 224.796 201.067 279.519 132.462 279.519Z"
                      fill="#FFF193"
                      data-v-4c4f7eb1=""
                    ></path>
                  </clipPath>
                </defs>
                <circle
                  id="Ellipse 639"
                  cx="137.5"
                  cy="163.734"
                  r="129.5"
                  fill="#FFD249"
                  data-v-4c4f7eb1=""
                ></circle>
                <g id="ball" data-v-4c4f7eb1="">
                  <path
                    id="Vector"
                    d="M47.38 118.122C45.8855 118.122 44.1774 117.701 42.8964 117.069C38.4127 114.541 36.7046 108.852 39.0532 104.428C53.7853 77.6719 79.1929 57.4469 108.871 49.0198C113.781 47.5451 119.119 50.4945 120.614 55.3401C122.108 60.1857 119.119 65.4527 114.208 66.9274C89.4413 74.0904 68.0904 90.9446 55.7069 113.487C53.9988 116.226 50.7962 118.122 47.38 118.122Z"
                    fill="#FFF193"
                    data-v-4c4f7eb1=""
                  ></path>
                  <path
                    id="Vector_2"
                    d="M37 141.945C31.4681 141.945 27 137.51 27 132.019C27 126.528 31.4681 122.093 37 122.093C42.5319 122.093 47 126.528 47 132.019C47 137.51 42.5319 141.945 37 141.945Z"
                    fill="#FFF193"
                    data-v-4c4f7eb1=""
                  ></path>
                  <path
                    id="Vector_3"
                    d="M8.37169 119.372C7.55171 121.25 7.00505 123.128 6.4584 125.006V125.274V125.542C5.91174 127.42 5.36509 129.298 4.81843 131.175C4.81843 131.444 4.81843 131.444 4.81843 131.712C4.27178 133.858 3.72513 135.736 3.4518 137.614C3.4518 137.882 3.4518 137.882 3.4518 138.15C2.63182 139.491 2.08516 141.369 1.81184 143.783V144.052C1.53851 145.929 1.26518 147.807 0.991856 150.221C0.718529 152.367 0.445202 154.513 0.445202 156.659V157.464C0.445202 158.805 0.171875 159.878 0.171875 161.22C0.171875 162.829 0.171875 164.439 0.171875 165.78C0.171875 202.799 14.9315 237.672 41.7176 263.96C68.5036 290.249 104.036 304.735 141.755 304.735C179.474 304.735 215.007 290.249 241.793 263.96C268.579 237.672 283.339 202.799 283.339 165.78C283.339 141.369 276.779 117.495 264.479 96.5709C262.839 93.6201 260.926 90.6693 259.013 87.9868C256.826 85.036 254.639 82.0853 252.453 79.1345C255.733 77.525 259.013 75.9155 262.566 75.1107C269.399 73.5012 290.172 71.3552 290.172 71.3552C290.172 71.3552 269.126 69.7457 262.293 68.1361C257.646 66.7949 252.999 64.6489 248.9 62.2346C244.526 59.2838 240.426 55.7965 237.146 51.5045C233.593 46.4077 230.86 41.0426 229.493 35.1411C227.58 26.557 225.667 0 225.667 0C225.667 0 223.753 26.557 221.84 35.1411C220.747 39.9696 218.834 44.2617 216.1 48.5537C193.961 34.8728 167.995 27.3618 141.482 27.3618H139.842C139.295 27.3618 138.749 27.3618 138.475 27.3618H137.655C137.109 27.3618 136.562 27.3618 136.015 27.3618C135.742 27.3618 135.469 27.3618 134.922 27.3618C89.2765 29.5078 47.4575 53.3823 22.5847 90.9376V91.2059C21.4914 92.8154 20.6714 94.4249 19.5781 96.0344C19.5781 96.0344 19.5781 96.3027 19.3048 96.3027C18.2115 97.9122 17.3915 99.5217 16.2982 101.399L16.0248 101.668C15.2049 103.277 14.3849 105.155 13.2916 107.033C13.2916 107.033 13.2916 107.301 13.0182 107.301C12.1983 109.179 11.3783 110.788 10.5583 112.666C10.5583 112.934 10.285 112.934 10.285 113.203C9.465 115.08 8.91834 116.69 8.09836 118.568L8.37169 119.372ZM132.462 279.519C99.9363 279.519 69.3236 267.179 46.0908 245.183C22.5847 222.918 9.19167 193.41 8.09836 161.756C8.09836 160.683 8.09836 159.342 8.37169 158.269V157.464C8.64501 155.318 8.64501 153.44 8.91834 151.294C9.19167 149.148 9.465 147.271 9.73832 145.393C9.73832 145.125 9.73832 145.125 9.73832 144.856C10.0116 142.71 10.5583 140.833 10.8316 139.223C10.8316 139.223 10.8316 139.223 10.8316 138.955C11.105 137.345 11.6516 135.468 12.1983 133.322V133.053C12.7449 131.175 13.2916 129.298 13.8382 127.688V127.42V127.152C14.3849 125.542 14.9315 123.664 15.7515 121.787L16.0248 121.518C16.8448 119.641 17.3915 118.031 18.2115 116.153V115.885C19.0314 114.544 19.8514 112.666 20.6714 111.057C20.6714 111.057 20.6714 111.057 20.6714 110.788C20.6714 110.788 20.6714 110.788 20.6714 110.52C21.4914 108.642 22.3114 107.033 23.1313 105.423C23.1313 105.423 23.1313 105.155 23.4047 105.155C24.498 103.277 25.318 101.668 26.1379 100.326C26.1379 100.326 26.1379 100.326 26.1379 100.058C27.2313 98.4487 28.0512 96.8392 29.1445 95.2296C29.1445 95.2296 29.1445 94.9614 29.4179 94.9614C52.924 59.5521 92.2831 37.2871 135.195 35.4093C135.469 35.4093 136.015 35.4093 136.289 35.4093C136.562 35.4093 137.109 35.4093 137.382 35.4093H137.929C163.895 35.9458 187.674 44.5299 206.807 58.7473C205.167 60.0886 203.801 61.1616 202.161 62.2346C198.061 64.9171 193.414 66.7949 188.768 68.1361C181.934 69.7457 161.162 71.8917 161.162 71.8917C161.162 71.8917 181.934 74.0377 188.768 75.6472C193.414 76.9885 198.061 79.1345 202.161 81.5488C206.534 84.4995 210.634 87.9868 213.914 92.2789C217.467 97.3757 220.2 102.741 221.567 108.642C223.48 117.226 225.393 143.783 225.393 143.783C225.393 143.783 227.307 117.226 229.22 108.642C230.86 102.741 233.32 97.1074 236.873 92.2789C237.146 92.0106 237.42 91.7424 237.42 91.4741C249.446 110.52 256.279 133.053 256.279 157.196C256.826 224.796 201.067 279.519 132.462 279.519Z"
                    fill="#FFF193"
                    data-v-4c4f7eb1=""
                  ></path>
                </g>
                <g clip-path="url(#ball-mask)" data-v-4c4f7eb1="">
                  <rect
                    transform="rotate(-20 0 0)"
                    filter="url(#blur-filter)"
                    x="-200"
                    y="-10"
                    fill="white"
                    width="100"
                    height="370"
                    data-v-4c4f7eb1=""
                  ></rect>
                </g>
              </svg>
              <div className="text-wrapper" data-v-4c4f7eb1="">
                <h6
                  className="f7 f10-1-sm f10-1-xl color-red4 d-none d-md-block mb-0-25 no-wrap"
                  data-v-4c4f7eb1=""
                >
                  ORDER
                  <br />
                  BOBA ICE CREAM
                </h6>
                <h6
                  className="f7 f10-1-sm color-red4 d-md-none mb-0-25"
                  data-v-4c4f7eb1=""
                >
                  ORDER
                </h6>
                <h6
                  className="f7 f10-1-sm f10-1-xl color-red d-none d-md-block text-uppercase"
                  data-v-4c4f7eb1=""
                >
                  set of 6
                </h6>
                <h6
                  className="f7 f10-1-sm color-red d-md-none text-uppercase no-wrap"
                  data-v-4c4f7eb1=""
                >
                  the set
                </h6>
              </div>
            </a>
          </div>
          <div
            className="lenis-scroll desktop-version lenis lenis-smooth"
            delay="0.15"
            style={{ opacity: 1 }}
          >
            <div className="scroller overflow-hidden">
              <div className="basic-page">
                <div ref={ref} className="scroll-trigger"/>
                <div className="about-header bg-yellow4 pt-3 pt-sm-5">
                  <div className="text-center mx-auto pp-bold color-red text-uppercase position-relative boba-title-h1">
                    <div
                      data-v-4bd6f78a=""
                      data-id="waypoint-228"
                      className="synchronized-waypoint floating-bubble smiley on-top"
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform:
                          "translate3d(5.7669%, -35.5175%, 0px) rotate(-11.8518deg)",
                      }}
                    >
                      <div
                        data-v-4bd6f78a=""
                        className="wrapper"
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          transform: "translate(0px, 0%)",
                        }}
                      >
                        <svg
                          data-v-4bd6f78a=""
                          width="195"
                          height="194"
                          viewBox="0 0 195 194"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-100 h-100"
                        >
                          <ellipse
                            data-v-4bd6f78a=""
                            cx="97.0409"
                            cy="96.8766"
                            rx="76.4975"
                            ry="76.2338"
                            transform="rotate(-18.8688 97.0409 96.8766)"
                            fill="#FFD864"
                          ></ellipse>
                          <path
                            data-v-4bd6f78a=""
                            d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894"
                            stroke="#473D36"
                            stroke-width="2.45915"
                            stroke-linecap="round"
                          ></path>
                          <circle
                            data-v-4bd6f78a=""
                            cx="134.577"
                            cy="85.9991"
                            r="2.11028"
                            transform="rotate(-18.8688 134.577 85.9991)"
                            fill="#473D36"
                          ></circle>
                          <circle
                            data-v-4bd6f78a=""
                            cx="117.053"
                            cy="85.2973"
                            r="2.11028"
                            transform="rotate(-18.8688 117.053 85.2973)"
                            fill="#473D36"
                          ></circle>
                          <path
                            data-v-4bd6f78a=""
                            d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z"
                            fill="#F3EFE6"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="row flex-center">
                      <div
                        data-v-6dc35003=""
                        data-id="waypoint-230"
                        className="synchronized-waypoint overflow-hidden"
                      >
                        <div
                          data-v-6dc35003=""
                          className="inner position-relative f0-xs  f0-xl lh-1-05 mobile-offset"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          This is
                        </div>
                      </div>
                      <div
                        data-v-6dc35003=""
                        data-id="waypoint-232"
                        className="synchronized-waypoint overflow-hidden"
                      >
                        <div
                          data-v-6dc35003=""
                          className="inner position-relative f0-xs  f0-xl lh-1-05 boba"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          Boba
                        </div>
                      </div>
                    </div>
                    <div className="flex-column flex-sm-row d-flex justify-content-center align-items-center second-line-offset">
                      <div className="position-relative d-inline-block">
                        <svg
                          viewBox="0 0 116 116"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="x position-relative d-block mobile-offset-2 should-animate headerX"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            opacity: 1,
                            transformOrigin: "50% 50%",
                            transform: "rotate(90deg)",
                          }}
                        >
                          <path
                            d="M81.5445 58.5743L114.852 91.8812L91.8812 114.851L58.5742 81.5446L24.1188 116L0 91.8812L34.4555 57.4257L1.1485 24.1188L24.1188 1.14851L57.4258 34.4554L91.8812 0L116 24.1188L81.5445 58.5743Z"
                            fill="#EF1525"
                          ></path>
                        </svg>
                      </div>
                      <div
                        data-v-6dc35003=""
                        data-id="waypoint-234"
                        className="synchronized-waypoint overflow-hidden"
                      >
                        <div
                          data-v-6dc35003=""
                          className="inner position-relative f2-2-1-xs f2-1-sm f1-2-xl lh-1-05"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          ice cream
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="curved-headline-and-circular-image position-relative pb-10 pb-sm-13 pb-xl-30">
                
                  <div
                    data-id="waypoint-237"
                    className="synchronized-waypoint waypoint-offset"
                  ></div>
                  
                  <div
                    data-id="waypoint-238"
                    className="synchronized-waypoint position-relative"
                  >
                    
                      <svg
                      data-v-791b065e=""
                      viewBox="0 0 2192 1539"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-curved-text svg-bg position-relative center-x"
                       
                    >
                      <ellipse
                        data-v-791b065e=""
                        cx="1096"
                        cy="1092"
                        rx="1096"
                        ry="1092"
                        fill="#FFD249"
                      ></ellipse>
                      <circle
                        data-v-791b065e=""
                        cx="1096"
                        cy="1022"
                        r="517"
                        fill="#FFB800"
                        className="circle-outer"
                      ></circle>
                      <circle
                        data-v-791b065e=""
                        cx="1096"
                        cy="1022"
                        r="462"
                        fill="#C9586B"
                        className="circle-inner"
                      ></circle>
                      <path
                        data-v-791b065e=""
                        id="textpath4"
                        d="M728,581C753.103,557.704 780.522,536.726 809.938,518.417C894.446,465.817 992.123,437.303 1092.11,436.044C1192.1,434.784 1290.49,460.829 1376.34,511.283C1414.64,533.796 1449.78,560.774 1481.07,591.5"
                      ></path>
                      <path
                        data-v-791b065e=""
                        id="textpath3"
                        d="M508,758C561.654,640.586 644.628,541.419 747.702,471.521C850.776,401.623 969.911,363.732 1091.87,362.058C1213.82,360.384 1333.83,394.994 1438.54,462.04C1543.24,529.087 1628.56,625.944 1685,741.848"
                      ></path>
                      <path
                        data-v-791b065e=""
                        id="textpath1"
                        d="M407,658C469.406,532.58 565.916,426.652 685.804,351.988C805.691,277.325 944.261,236.85 1086.11,235.062C1227.96,233.274 1367.54,270.244 1489.33,341.861C1611.12,413.479 1710.35,516.94 1776,640.746"
                      ></path>
                      <text data-v-791b065e="" fill="#FFB800" class={`${isVisible ? 'happiness' : ''}`}
                        ref={textPathRef}>
                        <textPath
                          data-v-791b065e=""
                          startOffset="24%"
                          text-anchor="middle"
                          xlinkHref="#textpath1"
                          className="curved-textpath1 pp-bold text-uppercase curvedHeadlineBig"
                          
                        >
                          Happiness
                        </textPath>
                      </text>
                      <text data-v-791b065e="" fill="#FFB800" class={`${isVisible ? 'delivered' : ''}`}
                        ref={textPathRef}>
                        <textPath
                          data-v-791b065e=""
                          startOffset="76%"
                          text-anchor="middle"
                          xlinkHref="#textpath1"
                          className="curved-textpath2 pp-bold text-uppercase curvedHeadlineBig"
                        >
                          delivered
                        </textPath>
                      </text>
                      <text data-v-791b065e="" fill="#BF4C6B" class={`${isVisible ? 'happiness' : ''}`}
                        ref={textPathRef}>
                        <textPath
                          data-v-791b065e=""
                          startOffset="50%"
                          text-anchor="middle"
                          xlinkHref="#textpath3"
                          className="curved-textpath3 pp-bold text-uppercase curvedHeadlineSmall"
                          
                        >
                          We believe food has the power to unite
                        </textPath>
                      </text>
                      <text data-v-791b065e="" fill="#BF4C6B" class={`${isVisible ? 'delivered' : ''}`}
                        ref={textPathRef}>
                        <textPath
                          data-v-791b065e=""
                          startOffset="50%"
                          text-anchor="middle"
                          xlinkHref="#textpath4"
                          className="curved-textpath4 pp-bold text-uppercase curvedHeadlineSmall"
                        >
                          people and deliver happiness.
                        </textPath>
                      </text>
                    </svg>
                    
                    
                    <div className="image-holder position-absolute mx-auto z-1">
                      <figure
                        data-v-23b40a86=""
                        className="spd overflow-hidden image mx-auto circle position-relative"
                        style={stylesF7}
                      >
                        <div data-v-23b40a86="" className="">
                          <picture data-v-23b40a86="">
                            <source
                              data-v-23b40a86=""
                              media="(min-width:1920px)"
                              srcset="
                      https://images.ctfassets.net/j8k8klriwj2h/2zzW3I9SpHZh5IPiITBCEe/29c71c54a4be9f0b2f93d6472f3ed973/About_Happiness_Delivered__1_.jpg?h=1050&amp;w=1050&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                      https://images.ctfassets.net/j8k8klriwj2h/2zzW3I9SpHZh5IPiITBCEe/29c71c54a4be9f0b2f93d6472f3ed973/About_Happiness_Delivered__1_.jpg?h=1365&amp;w=1365&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                    "
                            />
                            <source
                              data-v-23b40a86=""
                              media="(min-width:1200px)"
                              srcset="
                      https://images.ctfassets.net/j8k8klriwj2h/2zzW3I9SpHZh5IPiITBCEe/29c71c54a4be9f0b2f93d6472f3ed973/About_Happiness_Delivered__1_.jpg?h=840&amp;w=840&amp;q=80&amp;&amp;fm=webp&amp;q=80   1x,
                      https://images.ctfassets.net/j8k8klriwj2h/2zzW3I9SpHZh5IPiITBCEe/29c71c54a4be9f0b2f93d6472f3ed973/About_Happiness_Delivered__1_.jpg?h=1092&amp;w=1092&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                    "
                            />
                            <source
                              data-v-23b40a86=""
                              media="(min-width:768px)"
                              srcset="
                      https://images.ctfassets.net/j8k8klriwj2h/2zzW3I9SpHZh5IPiITBCEe/29c71c54a4be9f0b2f93d6472f3ed973/About_Happiness_Delivered__1_.jpg?h=500&amp;w=500&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                      https://images.ctfassets.net/j8k8klriwj2h/2zzW3I9SpHZh5IPiITBCEe/29c71c54a4be9f0b2f93d6472f3ed973/About_Happiness_Delivered__1_.jpg?h=650&amp;w=650&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                    "
                            />
                            <source
                              data-v-23b40a86=""
                              media="(min-width:0px)"
                              srcset="
                      https://images.ctfassets.net/j8k8klriwj2h/2zzW3I9SpHZh5IPiITBCEe/29c71c54a4be9f0b2f93d6472f3ed973/About_Happiness_Delivered__1_.jpg?h=320&amp;w=320&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                      https://images.ctfassets.net/j8k8klriwj2h/2zzW3I9SpHZh5IPiITBCEe/29c71c54a4be9f0b2f93d6472f3ed973/About_Happiness_Delivered__1_.jpg?h=416&amp;w=416&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                    "
                            />
                            <img
                              data-v-23b40a86=""
                              draggable="false"
                              loading="eager"
                              alt="About Happiness Delivered (1)"
                              className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                            />
                          </picture>
                        </div>
                      </figure>
                    </div>
                  </div>
                  <div className="content position-relative z-2">
                    <div className="yellow-text">
                      <div className="px-0-25 px-sm-0 mb-1-75 mb-sm-2 mb-xl-1-75 mx-auto col-12 col-sm-8 col-xl-5 pp-bold text-uppercase text-center f6-2 f10-3-sm f10-4-xl">
                        Our families expressed love through foods that were
                        <b>full of vibrant unique flavors</b> and
                        <b>reminded us of home</b>. For Asian⁃Americans,
                        <b>Boba was an important part of the culture</b> growing
                        up.
                      </div>
                      <div
                        data-id="waypoint-241"
                        className="synchronized-waypoint"
                      >
                        <svg
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="d-block mx-auto dark-bubble mb-1-75 mb-sm-2 mb-xl-2-5"
                        >
                          <circle
                            cx="20.5"
                            cy="20.5"
                            r="20.5"
                            fill="#CE8938"
                          ></circle>
                          <path
                            d="M19.6582 13.8046C28.3637 13.8046 28.3637 8.97646 28.3637 4.49316C28.3637 8.97646 28.3637 13.8046 37.0692 13.8046C28.3637 13.8046 28.3637 20.0123 28.3637 24.1507C28.3637 20.0123 28.3637 13.8046 19.6582 13.8046Z"
                            fill="#F3EFE6"
                          ></path>
                        </svg>
                      </div>
                      <div className="mb-4 mb-xl-3 mb-sm-4 pp-bold col-11 col-sm-8 col-xl-5 px-xl-1 text-uppercase text-center mx-auto f6-2-xs f10-3-sm f10-4-xl">
                        Boba x Ice Cream is on a mission to inspire a new
                        generation of Americans to create a future where
                        everyone feels
                        <b>included</b> and <b>proud</b>, no matter where
                        they're from.
                      </div>
                    </div>
                    <div className="position-relative">
                      <div
                        data-v-4bd6f78a=""
                        data-id="waypoint-243"
                        className="synchronized-waypoint floating-bubble pink-bubble on-top"
                        // style={{
                        //   translate: "none",
                        //   rotate: "none",
                        //   scale: "none",
                        //   transform:
                        //     "translate3d(-0.2389%, 18.2281%, 0px) rotate(-11.8518deg)",
                        // }}
                        style={transformStyle}
                      >
                        <div
                          data-v-4bd6f78a=""
                          className="wrapper"
                          style={{
                            opacity: 1,
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0%)",
                          }}
                        >
                          <svg
                            data-v-4bd6f78a=""
                            width="195"
                            height="194"
                            viewBox="0 0 195 194"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-100 h-100"
                          >
                            <ellipse
                              data-v-4bd6f78a=""
                              cx="97.0409"
                              cy="96.8766"
                              rx="76.4975"
                              ry="76.2338"
                              transform="rotate(-18.8688 97.0409 96.8766)"
                              fill="#FFE3EA"
                            ></ellipse>
                            <path
                              data-v-4bd6f78a=""
                              d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894"
                              stroke="#473D36"
                              stroke-width="2.45915"
                              stroke-linecap="round"
                            ></path>
                            <circle
                              data-v-4bd6f78a=""
                              cx="134.577"
                              cy="85.9991"
                              r="2.11028"
                              transform="rotate(-18.8688 134.577 85.9991)"
                              fill="#473D36"
                            ></circle>
                            <circle
                              data-v-4bd6f78a=""
                              cx="117.053"
                              cy="85.2973"
                              r="2.11028"
                              transform="rotate(-18.8688 117.053 85.2973)"
                              fill="#473D36"
                            ></circle>
                            <path
                              data-v-4bd6f78a=""
                              d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z"
                              fill="#F3EFE6"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div
                        data-v-6dc35003=""
                        data-id="waypoint-245"
                        className="synchronized-waypoint overflow-hidden"
                      >
                        
                        <Fade direction="up">
                          <div
                          data-v-6dc35003=""
                          className="inner position-relative lh-1-05 color-red6 pp-bold text-center text-uppercase f3-3-xs f6-2-sm f3-2-xl"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          Our promise
                          <br className="d-lg-none" />
                        </div>
                        </Fade>
                      </div>
                      <div
                        data-v-6dc35003=""
                        data-id="waypoint-247"
                        className="synchronized-waypoint overflow-hidden"
                      >
                        <Fade direction="up">
                          <div
                          data-v-6dc35003=""
                          className="inner position-relative on-top bottom-headline-offset pt-xl-1-25 color-red6 pp-bold text-center text-uppercase f1-3-xs  f1-0-xl"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          deliver happiness.
                        </div>
                        </Fade>
                      </div>
                    </div>
                  </div>
                  </div>
                  
                <div
                  className="two-images-and-bubbles color-white position-relative mb-sm-4 mb-xl-12"
                  bubblesgroup="[object Object]"
                >
                  <div
                    data-id="waypoint-250"
                    className="synchronized-waypoint bubbles-waypoint"
                  ></div>
                  <div
                    data-id="waypoint-251"
                    className="synchronized-waypoint"
                  ></div>
                  <div
                    data-v-4bd6f78a=""
                    data-id="waypoint-253"
                    className="synchronized-waypoint floating-bubble yellow-top-bubble position-absolute on-top"
                    // style={{
                    //   translate: "none",
                    //   rotate: "none",
                    //   scale: "none",
                    //   transform:
                    //     "translate3d(7.0547%, 1.7413%, 0px) rotate(11.8518deg)",
                    // }}
                    style={transformStyle}
                  >
                    <div
                      data-v-4bd6f78a=""
                      className="wrapper"
                      style={{
                        opacity: 1,
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0%)",
                      }}
                    >
                      <svg
                        data-v-4bd6f78a=""
                        width="195"
                        height="194"
                        viewBox="0 0 195 194"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-100 h-100"
                      >
                        <ellipse
                          data-v-4bd6f78a=""
                          cx="97.0409"
                          cy="96.8766"
                          rx="76.4975"
                          ry="76.2338"
                          transform="rotate(-18.8688 97.0409 96.8766)"
                          fill="#FFD864"
                        ></ellipse>
                        <path
                          data-v-4bd6f78a=""
                          d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894"
                          stroke="#473D36"
                          stroke-width="2.45915"
                          stroke-linecap="round"
                        ></path>
                        <circle
                          data-v-4bd6f78a=""
                          cx="134.577"
                          cy="85.9991"
                          r="2.11028"
                          transform="rotate(-18.8688 134.577 85.9991)"
                          fill="#473D36"
                        ></circle>
                        <circle
                          data-v-4bd6f78a=""
                          cx="117.053"
                          cy="85.2973"
                          r="2.11028"
                          transform="rotate(-18.8688 117.053 85.2973)"
                          fill="#473D36"
                        ></circle>
                        <path
                          data-v-4bd6f78a=""
                          d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z"
                          fill="#F3EFE6"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    data-v-4bd6f78a=""
                    data-id="waypoint-255"
                    className="synchronized-waypoint floating-bubble pink-bubble d-none d-xl-block position-absolute on-top"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform:
                        "translate3d(-2.3159%, -30.4412%, 0px) rotate(11.8518deg)",
                    }}
                  >
                    <div
                      data-v-4bd6f78a=""
                      className="wrapper"
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        opacity: 0,
                        transform: "translate(0px, -20%) scale(0, 0)",
                      }}
                    >
                      <svg
                        data-v-4bd6f78a=""
                        width="195"
                        height="194"
                        viewBox="0 0 195 194"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-100 h-100"
                      >
                        <ellipse
                          data-v-4bd6f78a=""
                          cx="97.0409"
                          cy="96.8766"
                          rx="76.4975"
                          ry="76.2338"
                          transform="rotate(-18.8688 97.0409 96.8766)"
                          fill="#FFE3EA"
                        ></ellipse>
                        <path
                          data-v-4bd6f78a=""
                          d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894"
                          stroke="#473D36"
                          stroke-width="2.45915"
                          stroke-linecap="round"
                        ></path>
                        <circle
                          data-v-4bd6f78a=""
                          cx="134.577"
                          cy="85.9991"
                          r="2.11028"
                          transform="rotate(-18.8688 134.577 85.9991)"
                          fill="#473D36"
                        ></circle>
                        <circle
                          data-v-4bd6f78a=""
                          cx="117.053"
                          cy="85.2973"
                          r="2.11028"
                          transform="rotate(-18.8688 117.053 85.2973)"
                          fill="#473D36"
                        ></circle>
                        <path
                          data-v-4bd6f78a=""
                          d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z"
                          fill="#F3EFE6"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="inner-wrapper position-relative pb-9 pb-sm-15 pt-4-5 pt-sm-10-5 pt-xl-15">
                    <svg
                      viewBox="0 0 614 224"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="bubbles d-xl-none position-absolute on-top"
                    >
                      <g id="Group 316124681">
                        <g className="big-bubble">
                          <circle
                            id="Ellipse 649"
                            cx="521.819"
                            cy="91.3813"
                            r="91.3813"
                            fill="#FDEEF2"
                          ></circle>
                          <circle
                            id="Ellipse 206"
                            cx="521.819"
                            cy="91.3819"
                            r="87.3423"
                            fill="#FDDDE5"
                          ></circle>
                          <circle
                            id="Ellipse 620"
                            cx="521.82"
                            cy="91.3835"
                            r="82.0412"
                            fill="#F4B9C8"
                          ></circle>
                        </g>
                        <g className="big-bubble">
                          <ellipse
                            id="Ellipse 619"
                            cx="91.0026"
                            cy="110.012"
                            rx="91.0026"
                            ry="92.0124"
                            fill="#FDEEF2"
                          ></ellipse>
                          <ellipse
                            id="Ellipse 674"
                            cx="91.0027"
                            cy="110.012"
                            rx="86.9637"
                            ry="87.9734"
                            fill="#FDDDE5"
                          ></ellipse>
                          <ellipse
                            id="Ellipse 675"
                            cx="90.9989"
                            cy="110.013"
                            rx="81.915"
                            ry="82.9247"
                            fill="#F4B9C8"
                          ></ellipse>
                        </g>
                        <g className="big-bubble">
                          <ellipse
                            id="Ellipse 610"
                            cx="392.429"
                            cy="160.537"
                            rx="57.4288"
                            ry="58.9434"
                            fill="#FDEEF2"
                          ></ellipse>
                          <circle
                            id="Ellipse 624"
                            cx="392.427"
                            cy="160.539"
                            r="54.6521"
                            fill="#FDDDE5"
                          ></circle>
                          <circle
                            id="Ellipse 625"
                            cx="392.429"
                            cy="160.539"
                            r="50.6131"
                            fill="#F4B9C8"
                          ></circle>
                        </g>
                        <g id="Group 316124601">
                          <circle
                            id="Ellipse 217"
                            cx="416.409"
                            cy="214.054"
                            r="9.21386"
                            fill="#473D36"
                          ></circle>
                          <path
                            id="Vector 577"
                            d="M416.03 211.044C419.943 211.044 419.943 208.874 419.943 206.859C419.943 208.874 419.943 211.044 423.856 211.044C419.943 211.044 419.943 213.835 419.943 215.695C419.943 213.835 419.943 211.044 416.03 211.044Z"
                            fill="#F3EFE6"
                          ></path>
                        </g>
                        <circle
                          id="Ellipse 217_2"
                          cx="198"
                          cy="198"
                          r="5"
                          fill="#473D36"
                        ></circle>
                        <g id="group">
                          <g id="Group 316123870">
                            <circle
                              id="Ellipse 219"
                              cx="129.36"
                              cy="27.3595"
                              r="11.3595"
                              fill="#473D36"
                            ></circle>
                          </g>
                          <path
                            id="Vector 578"
                            d="M129.341 23.2154C133.254 23.2154 133.254 21.0453 133.254 19.0303C133.254 21.0453 133.254 23.2154 137.166 23.2154C133.254 23.2154 133.254 26.0054 133.254 27.8655C133.254 26.0054 133.254 23.2154 129.341 23.2154Z"
                            fill="#F3EFE6"
                          ></path>
                        </g>
                        <g className="small-bubble">
                          <circle
                            id="Ellipse 215"
                            cx="397.226"
                            cy="106.515"
                            r="14.515"
                            fill="#E27391"
                          ></circle>
                          <path
                            id="Vector 575"
                            d="M399.117 102.603C403.409 102.603 403.409 100.247 403.409 98.0591C403.409 100.247 403.409 102.603 407.7 102.603C403.409 102.603 403.409 105.632 403.409 107.652C403.409 105.632 403.409 102.603 399.117 102.603Z"
                            fill="#F3EFE6"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <svg
                      viewBox="0 0 2975 3830"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="background-svg d-none d-sm-block position-absolute t-0 l-0"
                    >
                      <g id="Group 316124686">
                        <ellipse
                          id="Ellipse 782"
                          cx="1441.82"
                          cy="748.5"
                          rx="1162"
                          ry="748.5"
                          fill="#F4B9C8"
                        ></ellipse>
                        <path
                          id="Rectangle 917754"
                          d="M154.82 608H2792.82V2285C2792.82 3013.46 2202.28 3604 1473.82 3604V3604C745.357 3604 154.82 3013.46 154.82 2285V608Z"
                          fill="#F0B1C2"
                        ></path>
                        <ellipse
                          id="Ellipse 698"
                          cx="1439.32"
                          cy="759.5"
                          rx="718.5"
                          ry="645.5"
                          fill="#F4B9C8"
                        ></ellipse>
                        <path
                          id="Vector 666"
                          d="M467.82 1650.1L1042.92 1149L1143.82 1220.51L467.82 2265V1650.1Z"
                          fill="#F4B9C8"
                        ></path>
                        <path
                          id="Vector 667"
                          d="M450.533 1240.24L907.471 1069.06L1020.95 1168.74L438.934 1618.08L450.533 1240.24Z"
                          fill="#F4B9C8"
                        ></path>
                        <path
                          id="Vector 668"
                          d="M325.167 963.42L809.627 898.184L888.305 1076.83L325.167 1251.5L325.167 963.42Z"
                          fill="#F4B9C8"
                        ></path>
                        <path
                          id="Vector 669"
                          d="M305.275 704.235L751.62 713.629L816.681 899.943L260.389 930.734L305.275 704.235Z"
                          fill="#F4B9C8"
                        ></path>
                        <path
                          id="Vector 670"
                          d="M342.95 563.867L779.474 537.436L757.174 713.65L261.906 676.596L342.95 563.867Z"
                          fill="#F4B9C8"
                        ></path>
                        <path
                          id="Vector 671"
                          d="M418.295 2268.18L1180.43 989.611L1284.26 1097.76L820.771 3447.29C820.771 3447.29 648.286 3337.7 558.008 3176.43C383.794 2865.24 418.295 2268.18 418.295 2268.18Z"
                          fill="#F4B9C8"
                        ></path>
                        <path
                          id="Vector 672"
                          d="M2429.82 1645.25L1858.73 1149L1757.82 1220.49L2429.82 2237V1645.25Z"
                          fill="#F4B9C8"
                        ></path>
                        <path
                          id="Vector 661"
                          d="M2451.44 1240.24L1994.5 1069.06L1881.02 1168.74L2463.03 1618.08L2451.44 1240.24Z"
                          fill="#F4B9C8"
                        ></path>
                        <path
                          id="Vector 663"
                          d="M2576.8 963.42L2092.34 898.184L2013.66 1076.83L2576.8 1251.5L2576.8 963.42Z"
                          fill="#F4B9C8"
                        ></path>
                        <path
                          id="Vector 664"
                          d="M2596.69 704.235L2150.34 713.629L2085.28 899.943L2641.57 930.734L2596.69 704.235Z"
                          fill="#F4B9C8"
                        ></path>
                        <path
                          id="Vector 665"
                          d="M2596.58 576.389L2122.49 537.432L2144.79 713.646L2640.06 676.593L2596.58 576.389Z"
                          fill="#F4B9C8"
                        ></path>
                        <path
                          id="Vector 673"
                          d="M887.649 3495.3L1291.33 1034.08L1584.43 1034.08L2001.32 3493.5C2001.32 3493.5 1466.64 3781.3 887.649 3495.3Z"
                          fill="#F4B9C8"
                        ></path>
                        <path
                          id="Vector 674"
                          d="M2483.68 2268.17L1721.55 989.606L1585.48 1048L2067.82 3463C2067.82 3463 2345.82 3329.5 2435.48 3158.69C2601.32 2842.76 2483.68 2268.17 2483.68 2268.17Z"
                          fill="#F4B9C8"
                        ></path>
                        <g className="big-bubble d-none d-xl-block">
                          <circle
                            id="Ellipse 649"
                            cx="2492.82"
                            cy="2834"
                            r="362"
                            fill="#FDEEF2"
                          ></circle>
                          <circle
                            id="Ellipse 206"
                            cx="2492.82"
                            cy="2834"
                            r="346"
                            fill="#FDDDE5"
                          ></circle>
                          <circle
                            id="Ellipse 620"
                            cx="2492.82"
                            cy="2834"
                            r="325"
                            fill="#F4B9C8"
                          ></circle>
                        </g>
                        <g className="big-bubble d-none d-xl-block">
                          <ellipse
                            id="Ellipse 619"
                            cx="655.32"
                            cy="3239.5"
                            rx="360.5"
                            ry="364.5"
                            fill="#FDEEF2"
                          ></ellipse>
                          <ellipse
                            id="Ellipse 674"
                            cx="655.32"
                            cy="3239.5"
                            rx="344.5"
                            ry="348.5"
                            fill="#FDDDE5"
                          ></ellipse>
                          <ellipse
                            id="Ellipse 675"
                            cx="655.32"
                            cy="3239.5"
                            rx="324.5"
                            ry="328.5"
                            fill="#F4B9C8"
                          ></ellipse>
                        </g>
                        <g className="big-bubble d-none d-xl-block">
                          <ellipse
                            id="Ellipse 610"
                            cx="2021.32"
                            cy="3164.5"
                            rx="227.5"
                            ry="233.5"
                            fill="#FDEEF2"
                          ></ellipse>
                          <circle
                            id="Ellipse 624"
                            cx="2021.32"
                            cy="3164.5"
                            r="216.5"
                            fill="#FDDDE5"
                          ></circle>
                          <circle
                            id="Ellipse 625"
                            cx="2021.32"
                            cy="3164.5"
                            r="200.5"
                            fill="#F4B9C8"
                          ></circle>
                        </g>
                        <g id="missing bubble">
                          <circle
                            id="Ellipse 217"
                            cx="2101.5"
                            cy="3361.5"
                            r="36.5"
                            fill="#473D36"
                          ></circle>
                          <path
                            id="Vector 577"
                            d="M2100 3349.58C2115.5 3349.58 2115.5 3340.98 2115.5 3333C2115.5 3340.98 2115.5 3349.58 2131 3349.58C2115.5 3349.58 2115.5 3360.63 2115.5 3368C2115.5 3360.63 2115.5 3349.58 2100 3349.58Z"
                            fill="#F3EFE6"
                          ></path>
                        </g>
                        <g className="big-bubble d-none d-xl-block">
                          <circle
                            id="Ellipse 218"
                            cx="2331.32"
                            cy="3252"
                            r="98.5"
                            fill="#FDEEF2"
                          ></circle>
                          <circle
                            id="Ellipse 622"
                            cx="2331.32"
                            cy="3252"
                            r="88.449"
                            fill="#FDDDE5"
                          ></circle>
                          <circle
                            id="Ellipse 623"
                            cx="2331.32"
                            cy="3252"
                            r="75.3827"
                            fill="#F4B9C8"
                          ></circle>
                        </g>
                        <g className="big-bubble d-none d-xl-block">
                          <circle
                            id="Ellipse 632"
                            cx="1820.82"
                            cy="3584"
                            r="76"
                            fill="#FDDDE5"
                          ></circle>
                          <circle
                            id="Ellipse 224"
                            cx="1820.82"
                            cy="3584"
                            r="59"
                            fill="#F4B9C8"
                          ></circle>
                        </g>
                        <g id="Group 316124108">
                          <circle
                            id="Ellipse 217_2"
                            cx="1771.82"
                            cy="3660"
                            r="22"
                            fill="#473D36"
                          ></circle>
                          <path
                            id="Vector 577_2"
                            d="M1770.82 3652.95C1779.82 3652.95 1779.82 3647.79 1779.82 3643C1779.82 3647.79 1779.82 3652.95 1788.82 3652.95C1779.82 3652.95 1779.82 3659.58 1779.82 3664C1779.82 3659.58 1779.82 3652.95 1770.82 3652.95Z"
                            fill="#F3EFE6"
                          ></path>
                        </g>
                        <g id="Group 316124121">
                          <circle
                            id="Ellipse 217_3"
                            cx="886.82"
                            cy="3630"
                            r="8"
                            fill="#473D36"
                          ></circle>
                          <path
                            id="Vector 577_3"
                            d="M886.457 3627.44C889.73 3627.44 889.73 3625.56 889.73 3623.82C889.73 3625.56 889.73 3627.44 893.002 3627.44C889.73 3627.44 889.73 3629.85 889.73 3631.45C889.73 3629.85 889.73 3627.44 886.457 3627.44Z"
                            fill="#F3EFE6"
                          ></path>
                        </g>
                        <g id="Group 316124120">
                          <circle
                            id="Ellipse 217_4"
                            cx="2256.82"
                            cy="3568"
                            r="8"
                            fill="#473D36"
                          ></circle>
                          <path
                            id="Vector 577_4"
                            d="M2256.46 3565.44C2259.73 3565.44 2259.73 3563.56 2259.73 3561.82C2259.73 3563.56 2259.73 3565.44 2263 3565.44C2259.73 3565.44 2259.73 3567.85 2259.73 3569.45C2259.73 3567.85 2259.73 3565.44 2256.46 3565.44Z"
                            fill="#F3EFE6"
                          ></path>
                        </g>
                        <g id="Group 316124444">
                          <circle
                            id="Ellipse 217_5"
                            cx="785.82"
                            cy="1450"
                            r="8"
                            fill="#473D36"
                          ></circle>
                          <path
                            id="Vector 577_5"
                            d="M785.457 1447.44C788.73 1447.44 788.73 1445.56 788.73 1443.82C788.73 1445.56 788.73 1447.44 792.002 1447.44C788.73 1447.44 788.73 1449.85 788.73 1451.45C788.73 1449.85 788.73 1447.44 785.457 1447.44Z"
                            fill="#F3EFE6"
                          ></path>
                        </g>
                        <g id="Group 316123871">
                          <g id="Group 316123870">
                            <circle
                              id="Ellipse 219"
                              cx="766.82"
                              cy="3240"
                              r="45"
                              fill="#473D36"
                            ></circle>
                          </g>
                          <path
                            id="Vector 578"
                            d="M758.82 3223.58C774.32 3223.58 774.32 3214.98 774.32 3207C774.32 3214.98 774.32 3223.58 789.82 3223.58C774.32 3223.58 774.32 3234.63 774.32 3242C774.32 3234.63 774.32 3223.58 758.82 3223.58Z"
                            fill="#F3EFE6"
                          ></path>
                        </g>
                        <g id="Group 316124201">
                          <circle
                            id="Ellipse 591"
                            r="26.5"
                            transform="matrix(-1 0 0 1 597.32 1759.5)"
                            fill="#473D36"
                          ></circle>
                          <path
                            id="Vector 570"
                            d="M592.82 1752.74C605.32 1752.74 605.32 1745.61 605.32 1739C605.32 1745.61 605.32 1752.74 617.82 1752.74C605.32 1752.74 605.32 1761.89 605.32 1768C605.32 1761.89 605.32 1752.74 592.82 1752.74Z"
                            fill="#F3EFE6"
                          ></path>
                        </g>
                        <g id="Group 316124544">
                          <circle
                            id="Ellipse 591_2"
                            r="14.5"
                            transform="matrix(-1 0 0 1 2145.32 1627.5)"
                            fill="#473D36"
                          ></circle>
                          <path
                            id="Vector 570_2"
                            d="M2142.86 1623.8C2149.7 1623.8 2149.7 1619.9 2149.7 1616.28C2149.7 1619.9 2149.7 1623.8 2156.54 1623.8C2149.7 1623.8 2149.7 1628.81 2149.7 1632.15C2149.7 1628.81 2149.7 1623.8 2142.86 1623.8Z"
                            fill="#F3EFE6"
                          ></path>
                        </g>
                        <g id="Group 316124443">
                          <circle
                            id="Ellipse 591_3"
                            r="26.5"
                            transform="matrix(-1 0 0 1 2312.32 2515.5)"
                            fill="#473D36"
                          ></circle>
                          <path
                            id="Vector 570_3"
                            d="M2307.82 2508.74C2320.32 2508.74 2320.32 2501.61 2320.32 2495C2320.32 2501.61 2320.32 2508.74 2332.82 2508.74C2320.32 2508.74 2320.32 2517.89 2320.32 2524C2320.32 2517.89 2320.32 2508.74 2307.82 2508.74Z"
                            fill="#F3EFE6"
                          ></path>
                        </g>
                        <g className="small-bubble d-none d-xl-block">
                          <circle
                            id="Ellipse 595"
                            cx="597.82"
                            cy="2872"
                            r="77"
                            fill="#E27391"
                          ></circle>
                          <path
                            id="Vector 566"
                            d="M601.945 2845.95C635.633 2845.95 635.633 2827.37 635.633 2810.12C635.633 2827.37 635.633 2845.95 669.32 2845.95C635.633 2845.95 635.633 2869.83 635.633 2885.75C635.633 2869.83 635.633 2845.95 601.945 2845.95Z"
                            fill="#F3EFE6"
                          ></path>
                        </g>
                        <g className="small-bubble d-none d-xl-block">
                          <circle
                            id="Ellipse 215"
                            cx="2040.32"
                            cy="2950.5"
                            r="57.5"
                            fill="#E27391"
                          ></circle>
                          <path
                            id="Vector 575"
                            d="M2047.82 2935C2064.82 2935 2064.82 2925.67 2064.82 2917C2064.82 2925.67 2064.82 2935 2081.82 2935C2064.82 2935 2064.82 2947 2064.82 2955C2064.82 2947 2064.82 2935 2047.82 2935Z"
                            fill="#F3EFE6"
                          ></path>
                        </g>
                        <g id="Group 316123867">
                          <circle
                            id="Ellipse 222"
                            cx="633.32"
                            cy="2956.5"
                            r="31.5"
                            fill="#473D36"
                          ></circle>
                          <path
                            id="Vector 579"
                            d="M633.82 2947.32C645.32 2947.32 645.32 2940.93 645.32 2935C645.32 2940.93 645.32 2947.32 656.82 2947.32C645.32 2947.32 645.32 2955.53 645.32 2961C645.32 2955.53 645.32 2947.32 633.82 2947.32Z"
                            fill="#F3EFE6"
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <svg
                      viewBox="0 0 2720 3964"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="background-svg d-sm-none position-absolute t-0 l-0"
                    >
                      <ellipse
                        cx="1308"
                        cy="667.5"
                        rx="815"
                        ry="667.5"
                        fill="#F4B9C8"
                      ></ellipse>
                      <path
                        d="M114 803H2560V3192.3C2560 3452.81 2348.81 3664 2088.3 3664H585.699C325.187 3664 114 3452.81 114 3192.3V803Z"
                        fill="#F0B1C2"
                      ></path>
                      <ellipse
                        cx="1307"
                        cy="952"
                        rx="638"
                        ry="635"
                        fill="#F4B9C8"
                      ></ellipse>
                      <path
                        d="M405 1823.12L940.113 1331L1034 1401.23L405 2427V1823.12Z"
                        fill="#F4B9C8"
                      ></path>
                      <path
                        d="M390.03 1422.52L813.761 1254.4L918.993 1352.3L379.274 1793.61L390.03 1422.52Z"
                        fill="#F4B9C8"
                      ></path>
                      <path
                        d="M273.744 1150.66L722.998 1086.59L795.959 1262.05L273.744 1433.59L273.744 1150.66Z"
                        fill="#F4B9C8"
                      ></path>
                      <path
                        d="M255.331 896.091L669.239 905.317L729.572 1088.3L213.706 1118.54L255.331 896.091Z"
                        fill="#F4B9C8"
                      ></path>
                      <path
                        d="M290.257 758.259L695.058 732.3L674.378 905.363L215.102 868.972L290.257 758.259Z"
                        fill="#F4B9C8"
                      ></path>
                      <path
                        d="M416.267 2538.47L1117.63 1228.76L1172.95 1282.6L743.137 3590.12C743.137 3590.12 583.186 3482.48 499.468 3324.1C337.915 3018.47 416.267 2538.47 416.267 2538.47Z"
                        fill="#F4B9C8"
                      ></path>
                      <path
                        d="M2226 1819.5L1695.7 1331L1602 1401.37L2226 2402V1819.5Z"
                        fill="#F4B9C8"
                      ></path>
                      <path
                        d="M2245.52 1422.52L1821.79 1254.4L1716.55 1352.3L2256.27 1793.61L2245.52 1422.52Z"
                        fill="#F4B9C8"
                      ></path>
                      <path
                        d="M2361.75 1150.66L1912.5 1086.59L1839.54 1262.05L2361.75 1433.59L2361.75 1150.66Z"
                        fill="#F4B9C8"
                      ></path>
                      <path
                        d="M2380.19 896.091L1966.28 905.317L1905.95 1088.3L2421.82 1118.54L2380.19 896.091Z"
                        fill="#F4B9C8"
                      ></path>
                      <path
                        d="M2380.11 770.567L1940.48 732.307L1961.16 905.37L2420.44 868.979L2380.11 770.567Z"
                        fill="#F4B9C8"
                      ></path>
                      <path
                        d="M801.85 3637.26L1176.19 1220.05L1448 1220.05L1834.52 3632.64C1834.52 3632.64 1338.76 3918.14 801.85 3637.26Z"
                        fill="#F4B9C8"
                      ></path>
                      <path
                        d="M2215.3 2541.74L1505.81 1201.03L1442.51 1233.73L1888.39 3601.9C1888.39 3601.9 2147.03 3465.05 2230.74 3306.67C2392.3 3001.04 2215.3 2541.74 2215.3 2541.74Z"
                        fill="#F4B9C8"
                      ></path>
                      <circle
                        r="21.8216"
                        transform="matrix(-1 0 0 1 682.086 1628.7)"
                        fill="#473D36"
                      ></circle>
                      <path
                        d="M678.365 1623.12C688.658 1623.12 688.658 1617.25 688.658 1611.81C688.658 1617.25 688.658 1623.12 698.952 1623.12C688.658 1623.12 688.658 1630.66 688.658 1635.69C688.658 1630.66 688.658 1623.12 678.365 1623.12Z"
                        fill="#F3EFE6"
                      ></path>
                      <circle
                        r="21.8216"
                        transform="matrix(-1 0 0 1 1829.36 1353.33)"
                        fill="#473D36"
                      ></circle>
                      <path
                        d="M1825.65 1347.76C1835.94 1347.76 1835.94 1341.89 1835.94 1336.44C1835.94 1341.89 1835.94 1347.76 1846.23 1347.76C1835.94 1347.76 1835.94 1355.3 1835.94 1360.32C1835.94 1355.3 1835.94 1347.76 1825.65 1347.76Z"
                        fill="#F3EFE6"
                      ></path>
                      <circle
                        r="21.8216"
                        transform="matrix(-1 0 0 1 2030.9 2137.59)"
                        fill="#473D36"
                      ></circle>
                      <path
                        d="M2027.18 2132.02C2037.47 2132.02 2037.47 2126.15 2037.47 2120.7C2037.47 2126.15 2037.47 2132.02 2047.77 2132.02C2037.47 2132.02 2037.47 2139.56 2037.47 2144.58C2037.47 2139.56 2037.47 2132.02 2027.18 2132.02Z"
                        fill="#F3EFE6"
                      ></path>
                    </svg>
                    <div className="col-8 col-sm-5 col-xl-6 circle px-sm-1-25 px-xl-3 mt-2 position-relative mx-auto icecream-icons-wrapper">
                      <svg
                        data-v-16c2f99a=""
                        viewBox="0 0 1660 1681"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="curved-text top-curved-text how-it-began"
                        ref={svgRef}
                      >
                        <defs data-v-16c2f99a="">
                          <path
                            data-v-16c2f99a=""
                            id="clip-path-256"
                            d="M335,840.002L335,840.002C335,715.085 387.204,595.283 480.128,506.953C573.055,418.623 699.085,369 830.5,369C961.915,369 1087.95,418.623 1180.87,506.953C1273.79,595.283 1326,715.085 1326,840.002C1326,964.919 1273.79,1084.72 1180.87,1173.05C1087.95,1261.38 961.915,1311 830.5,1311C699.085,1311 573.055,1261.38 480.128,1173.05C387.204,1084.72 335,964.919 335,840.002"
                            stroke="#0000FF"
                          ></path>
                        </defs>
                        <text
                          data-v-16c2f99a=""
                          fill="#EF1525"
                          className="curved-text text-uppercase pp-bold how-it-began"
                        >
                          <textPath
                            data-v-16c2f99a=""
                            startOffset="25%"
                            text-anchor="middle"
                            xlinkHref="#clip-path-256"
                          >
                            How it all began
                          </textPath>
                        </text>
                      </svg>
                      <section
                        className="media-component-full position-relative image circle w-100 h-100"
                        data-props="scale"
                        data-delay=".1"
                        data-fromscale="1.1"
                        data-toscale="1"
                        data-dur="1"
                        data-keep-props="true"
                      >
                        <div
                          data-v-6752e43c=""
                          className="synchronized-proportion-div position-relative w-100 has-proportion"
                          style={stylesF7}
                        >
                          <div
                            data-v-6752e43c=""
                            className="w-100 h-100 t-0 l-0 position-absolute"
                          >
                            <figure
                              data-v-61bec510=""
                              className="video-player h-100"
                              alt="Xsight"
                              loading="lazy"
                              image="[object Object]"
                              imagesizes="[object Object]"
                              x2ratio="1.3"
                              align="center"
                              data-v-6752e43c=""
                            >
                              <video
                                data-v-61bec510=""
                                id="video"
                                preload="metadata"
                                playsinline={true}
                                loop={true}
                                className="video responsive"
                                autoPlay={true}
                                muted
                              >
                                <source
                                  data-v-61bec510=""
                                  src={Video}
                                  type="video/mp4"
                                />
                              </video>
                            </figure>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className="mb-0-75 mt-1-25 mb-sm-2 mt-sm-2-5 mt-xl-2-25 mb-xl-0-75 f9-xs f7-sm f5-xl color-red3 pp-bold text-uppercase mx-auto text-center col-10 col-sm-10 col-xl-8 px-xl-2">
                      Through the pandemic, sweeping injustice impacted
                      asian⁃americans across the nation. close friends
                    </div>
                    <div
                      data-id="waypoint-259"
                      className="synchronized-waypoint col-9 col-sm-8 col-xl-7 px-0-125 px-sm-0-875 px-xl-1-25 position-relative mx-auto icecream-icons-wrapper"
                    >
                      <div
                        data-preset="y"
                        data-dur="2.5"
                        data-fromy="50%"
                        className="should-animate"
                        style={{ opacity: 1 }}
                      >
                        
                        <Fade direction="up">
                          <figure
                          data-v-23b40a86=""
                          className="spd overflow-hidden image mx-auto position-relative"
                          style={stylesF6}
                        >
                          <div data-v-23b40a86="" className="">
                            <picture data-v-23b40a86="">
                              <source
                                data-v-23b40a86=""
                                media="(min-width:1920px)"
                                srcset="
                        https://images.ctfassets.net/j8k8klriwj2h/xqtFzxAge3Imtv9nxKzhG/d769bfe4358a51354b718c3572334440/Boba_Doug_and_Boba_Charn.png?h=650&amp;w=1270&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                        https://images.ctfassets.net/j8k8klriwj2h/xqtFzxAge3Imtv9nxKzhG/d769bfe4358a51354b718c3572334440/Boba_Doug_and_Boba_Charn.png?h=845&amp;w=1651&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                      "
                              />
                              <source
                                data-v-23b40a86=""
                                media="(min-width:1200px)"
                                srcset="
                        https://images.ctfassets.net/j8k8klriwj2h/xqtFzxAge3Imtv9nxKzhG/d769bfe4358a51354b718c3572334440/Boba_Doug_and_Boba_Charn.png?h=750&amp;w=1070&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                        https://images.ctfassets.net/j8k8klriwj2h/xqtFzxAge3Imtv9nxKzhG/d769bfe4358a51354b718c3572334440/Boba_Doug_and_Boba_Charn.png?h=975&amp;w=1391&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                      "
                              />
                              <source
                                data-v-23b40a86=""
                                media="(min-width:768px)"
                                srcset="
                        https://images.ctfassets.net/j8k8klriwj2h/xqtFzxAge3Imtv9nxKzhG/d769bfe4358a51354b718c3572334440/Boba_Doug_and_Boba_Charn.png?h=600&amp;w=900&amp;q=80&amp;&amp;fm=webp&amp;q=80  1x,
                        https://images.ctfassets.net/j8k8klriwj2h/xqtFzxAge3Imtv9nxKzhG/d769bfe4358a51354b718c3572334440/Boba_Doug_and_Boba_Charn.png?h=780&amp;w=1170&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                      "
                              />
                              <source
                                data-v-23b40a86=""
                                media="(min-width:0px)"
                                srcset="
                        https://images.ctfassets.net/j8k8klriwj2h/xqtFzxAge3Imtv9nxKzhG/d769bfe4358a51354b718c3572334440/Boba_Doug_and_Boba_Charn.png?h=320&amp;w=480&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x,
                        https://images.ctfassets.net/j8k8klriwj2h/xqtFzxAge3Imtv9nxKzhG/d769bfe4358a51354b718c3572334440/Boba_Doug_and_Boba_Charn.png?h=416&amp;w=624&amp;q=80&amp;&amp;fm=webp&amp;q=80 2x
                      "
                              />
                              <img
                                data-v-23b40a86=""
                                draggable="false"
                                loading="eager"
                                alt="About founders"
                                className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                              />
                            </picture>
                          </div>
                        </figure>
                        </Fade>
                      </div>
                      <svg
                        data-v-16c2f99a=""
                        viewBox="0 0 1660 1681"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="curved-text bottom-curved-text"
                        
                      >
                        <defs data-v-16c2f99a="">
                          <path
                            data-v-16c2f99a=""
                            id="clip-path-261"
                            d="M335 840.002C335 964.919 387.204 1084.72 480.128 1173.05C573.055 1261.38 699.085 1311 830.5 1311C961.915 1311 1087.95 1261.38 1180.87 1173.05C1273.79 1084.72 1326 964.919 1326 840.002C1326 715.085 1273.79 595.283 1180.87 506.953C1087.95 418.623 961.915 369 830.5 369C699.085 369 573.055 418.623 480.128 506.953C387.204 595.283 335 715.085 335 840.002Z"
                            stroke="#0000FF"
                          ></path>
                        </defs>
                        <text
                          data-v-16c2f99a=""
                          fill="#EF1525"
                          className="curved-text text-uppercase pp-bold"
                        >
                          <textPath
                            data-v-16c2f99a=""
                            startOffset="25.5%"
                            text-anchor="middle"
                            xlinkHref="#clip-path-261"
                          >
                            BOBA FANATICS
                          </textPath>
                        </text>
                      </svg>
                     

                      <div
                        data-v-4bd6f78a=""
                        data-id="waypoint-263"
                        className="synchronized-waypoint floating-bubble smiley-yellow-twoimages on-top"
                        // style={{
                        //   translate: "none",
                        //   rotate: "none",
                        //   scale: "none",
                        //   transform:
                        //     "translate3d(8.8067%, 4.3868%, 0px) rotate(-11.8518deg)",
                        // }}
                        style={transformStyle}
                      >
                        <div
                          data-v-4bd6f78a=""
                          className="wrapper"
                          //   style={{
                          //     opacity: 1,
                          //     translate: "none",
                          //     rotate: "none",
                          //     scale: "none",
                          //     transform: "translate(0px, 0%)",
                          //   }}
                          style={transformStyle1}
                        >
                          <svg
                            data-v-4bd6f78a=""
                            width="195"
                            height="194"
                            viewBox="0 0 195 194"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-100 h-100"
                          >
                            <ellipse
                              data-v-4bd6f78a=""
                              cx="97.0409"
                              cy="96.8766"
                              rx="76.4975"
                              ry="76.2338"
                              transform="rotate(-18.8688 97.0409 96.8766)"
                              fill="#FFD864"
                            ></ellipse>
                            <path
                              data-v-4bd6f78a=""
                              d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894"
                              stroke="#473D36"
                              stroke-width="2.45915"
                              stroke-linecap="round"
                            ></path>
                            <circle
                              data-v-4bd6f78a=""
                              cx="134.577"
                              cy="85.9991"
                              r="2.11028"
                              transform="rotate(-18.8688 134.577 85.9991)"
                              fill="#473D36"
                            ></circle>
                            <circle
                              data-v-4bd6f78a=""
                              cx="117.053"
                              cy="85.2973"
                              r="2.11028"
                              transform="rotate(-18.8688 117.053 85.2973)"
                              fill="#473D36"
                            ></circle>
                            <path
                              data-v-4bd6f78a=""
                              d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z"
                              fill="#F3EFE6"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div
                        data-v-4bd6f78a=""
                        data-id="waypoint-265"
                        className="synchronized-waypoint floating-bubble smiley-pink-twoimages on-top"
                        // style={{
                        //   translate: "none",
                        //   rotate: "none",
                        //   scale: "none",
                        //   transform:
                        //     "translate3d(-3.5092%, -25.981%, 0px) rotate(-11.8518deg)",
                        // }}
                        style={transformStyle}
                      >
                        <div
                          data-v-4bd6f78a=""
                          className="wrapper"
                          //   style={{
                          //     opacity: 1,
                          //     translate: "none",
                          //     rotate: "none",
                          //     scale: "none",
                          //     transform: "translate(0px, -20%) scale(0, 0)",
                          //                           }}
                          style={transformStyle1}
                        >
                          <svg
                            data-v-4bd6f78a=""
                            width="195"
                            height="194"
                            viewBox="0 0 195 194"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-100 h-100"
                          >
                            <ellipse
                              data-v-4bd6f78a=""
                              cx="97.0409"
                              cy="96.8766"
                              rx="76.4975"
                              ry="76.2338"
                              transform="rotate(-18.8688 97.0409 96.8766)"
                              fill="#E27391"
                            ></ellipse>
                            <path
                              data-v-4bd6f78a=""
                              d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894"
                              stroke="#473D36"
                              stroke-width="2.45915"
                              stroke-linecap="round"
                            ></path>
                            <circle
                              data-v-4bd6f78a=""
                              cx="134.577"
                              cy="85.9991"
                              r="2.11028"
                              transform="rotate(-18.8688 134.577 85.9991)"
                              fill="#473D36"
                            ></circle>
                            <circle
                              data-v-4bd6f78a=""
                              cx="117.053"
                              cy="85.2973"
                              r="2.11028"
                              transform="rotate(-18.8688 117.053 85.2973)"
                              fill="#473D36"
                            ></circle>
                            <path
                              data-v-4bd6f78a=""
                              d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z"
                              fill="#F3EFE6"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="descriptions mt-6 mt-sm-11 mt-xl-18">
                      <div className="mb-1-75 mb-sm-4 mb-xl-12 col-10 col-sm-10 col-xl-8 mx-auto text-center text-uppercase pp-bold f9-xs f7-sm f5-xl">
                        Came together to create an ice cream company based on
                        <b>spreading postivity</b> and <b>sharing cultures.</b>
                      </div>
                      <div className="mb-1-75 mb-sm-2 mb-xl-4-5 col-9 col-sm-6 col-xl-3 pp-bold text-uppercase mx-auto text-center f9-xs f10-2-sm f10-3-xl">
                        There was a lack of <b>asian⁃focused</b> flavors in the
                        ice cream aisle and wanted to make asian⁃inspired
                        flavors available everywhere.
                      </div>
                      <div className="founder color-red3 col-7 col-sm-6 col-xl-4 mx-auto text-center f9-xs f10-2-sm f10-3-xl">
                        It was time to <b>shake things up</b> and create
                        something new that has never been offered before.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="round-slider-and-headline px-0-5 px-md-0-75 px-xl-2-25 py-2 py-sm-3 py-xl-4-5">
                  <div
                    data-v-6dc35003=""
                    data-id="waypoint-269"
                    className="synchronized-waypoint overflow-hidden magic-font-offset"
                  >
                    <Fade direction="up">
                      <div
                      data-v-6dc35003=""
                      className="inner position-relative text-uppercase color-red lh-1-05 f2-2 f3-1-sm f1-1-xl pp-bold"
                      style={{ opacity: 1 }}
                    >
                      A magical duo of boba
                    </div>
                    </Fade>
                  </div>
                  <div className="position-relative mt-1">
                    {/* <div
                      className="swiper-button on-top ml-0-75 ml-sm-1-5 ml-xl-3 d-flex flex-center p-sm-1 swiper-button-disabled swiper-button-prev"
                      tabindex="-1"
                      role="button"
                      aria-label="Previous slide"
                      aria-disabled="true"
                    >
                      <img
                        src={sliderArrow}
                        className="arrow arrow-hover "
                        alt="slider-arrow"
                      />
                    </div> */}
                    <div className="swiper slider-wrapper col border-radius overflow-hidden">
                      <div
                        className="swiper-container position-relative swiper-container-initialized swiper-container-horizontal"
                        style={{ cursor: "grab" }}
                      >
                        <div
                          className=" swiper-wrapper "
                          style={{ transform: "translate3d(0px, 0px, 0px)" }}
                        >
                          <Swiper
                            modules={[Navigation, EffectFade]}
                            navigation
                            // effect={"fade"}
                            speed={900}
                            slidesPerView={1}
                            loop
                          >
                            <SwiperSlide>
                              <img
                                src="https://images.ctfassets.net/j8k8klriwj2h/2HLOnJMhTYTrnJ4ZzveH15/5adcdfbd4cdb26ddd5b49ccc303836fc/smoked_ube_a_magic_duo.jpg?h=1079&w=2379&q=80&fit=fill&&fm=webp&q=80"
                                alt="smoked ube a magic duo"
                                className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src="https://images.ctfassets.net/j8k8klriwj2h/6Bn6GGn4JdQdMzMqHuIcFV/de4744da44e084c5e87cea74a0dbf365/gooey_fried_banana_a_magic_duo.jpg?h=1079&w=2379&q=80&fit=fill&&fm=webp&q=80"
                                alt="smoked ube a magic duo"
                                className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src="https://images.ctfassets.net/j8k8klriwj2h/6syb5AsuID83hlflYqqqok/06397c1d94ef1a0d6b33272595c749ff/strawberry_cake__a_magic_duo.jpg?h=1079&w=2379&q=80&fit=fill&&fm=webp&q=80"
                                alt="smoked ube a magic duo"
                                className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src="https://images.ctfassets.net/j8k8klriwj2h/5PIe3wO0SkVjLlZ0PBoUUQ/b18ebabdfe97495f967ae96b695005e8/churo_raspberry_a_magic_duo.jpg?h=1079&w=2379&q=80&fit=fill&&fm=webp&q=80"
                                alt="smoked ube a magic duo"
                                className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src="https://images.ctfassets.net/j8k8klriwj2h/15gev7qMyytDcvxULOktuk/e1248d5d4cb0ff64f1d3c3ff7f2b9ad1/mango_chamoy_a_magic_duo.jpg?h=1079&w=2379&q=80&fit=fill&&fm=webp&q=80"
                                alt="smoked ube a magic duo"
                                className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center"
                              />
                            </SwiperSlide>
                            <SwiperSlide>
                              <img
                                src="https://images.ctfassets.net/j8k8klriwj2h/5YiPgttQprxiQkq5Z4z1QQ/9c77080e926ebe0c5384690f9008f6d5/Double_espresso_a_magic_duo.jpg?h=1079&w=2379&q=80&fit=fill&&fm=webp&q=80"
                                alt="smoked ube a magic duo"
                                className="w-100 h-100  t-0 l-0 picture cover bg-center"
                              />
                            </SwiperSlide>
                          </Swiper>
                          {/* <div
                            className="swiper-slide overflow-hidden swiper-slide-active "
                            style={{ width: "1223px " }}
                          >
                            <figure
                              data-v-23b40a86=" "
                              className="spd overflow-hidden slide-bgimg position-relative "
                              style={stylesE12}
                            >
                              <div
                                data-v-23b40a86=" "
                                className="position-absolute w-100 h-100 t-0 l-0 "
                              >
                                <picture data-v-23b40a86=" ">
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:1920px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/2HLOnJMhTYTrnJ4ZzveH15/5adcdfbd4cdb26ddd5b49ccc303836fc/smoked_ube_a_magic_duo.jpg?h=930&amp;w=2130&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/2HLOnJMhTYTrnJ4ZzveH15/5adcdfbd4cdb26ddd5b49ccc303836fc/smoked_ube_a_magic_duo.jpg?h=1209&amp;w=2769&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:1200px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/2HLOnJMhTYTrnJ4ZzveH15/5adcdfbd4cdb26ddd5b49ccc303836fc/smoked_ube_a_magic_duo.jpg?h=830&amp;w=1830&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/2HLOnJMhTYTrnJ4ZzveH15/5adcdfbd4cdb26ddd5b49ccc303836fc/smoked_ube_a_magic_duo.jpg?h=1079&amp;w=2379&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:768px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/2HLOnJMhTYTrnJ4ZzveH15/5adcdfbd4cdb26ddd5b49ccc303836fc/smoked_ube_a_magic_duo.jpg?h=600&amp;w=600&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/2HLOnJMhTYTrnJ4ZzveH15/5adcdfbd4cdb26ddd5b49ccc303836fc/smoked_ube_a_magic_duo.jpg?h=780&amp;w=780&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:0px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/2HLOnJMhTYTrnJ4ZzveH15/5adcdfbd4cdb26ddd5b49ccc303836fc/smoked_ube_a_magic_duo.jpg?h=500&amp;w=500&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/2HLOnJMhTYTrnJ4ZzveH15/5adcdfbd4cdb26ddd5b49ccc303836fc/smoked_ube_a_magic_duo.jpg?h=650&amp;w=650&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <img
                                    data-v-23b40a86=" "
                                    draggable="false "
                                    loading="eager "
                                    alt="smoked ube a magic duo "
                                    className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                  />
                                </picture>
                              </div>
                            </figure>
                          </div>
                          <div
                            className="swiper-slide overflow-hidden swiper-slide-next "
                            style={{ width: "1223px" }}
                          >
                            <figure
                              data-v-23b40a86=" "
                              className="spd overflow-hidden slide-bgimg position-relative "
                              style={stylesE31}
                            >
                              <div
                                data-v-23b40a86=" "
                                className="position-absolute w-100 h-100 t-0 l-0 "
                              >
                                <picture data-v-23b40a86=" ">
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:1920px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/6Bn6GGn4JdQdMzMqHuIcFV/de4744da44e084c5e87cea74a0dbf365/gooey_fried_banana_a_magic_duo.jpg?h=930&amp;w=2130&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/6Bn6GGn4JdQdMzMqHuIcFV/de4744da44e084c5e87cea74a0dbf365/gooey_fried_banana_a_magic_duo.jpg?h=1209&amp;w=2769&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:1200px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/6Bn6GGn4JdQdMzMqHuIcFV/de4744da44e084c5e87cea74a0dbf365/gooey_fried_banana_a_magic_duo.jpg?h=830&amp;w=1830&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/6Bn6GGn4JdQdMzMqHuIcFV/de4744da44e084c5e87cea74a0dbf365/gooey_fried_banana_a_magic_duo.jpg?h=1079&amp;w=2379&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:768px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/6Bn6GGn4JdQdMzMqHuIcFV/de4744da44e084c5e87cea74a0dbf365/gooey_fried_banana_a_magic_duo.jpg?h=600&amp;w=600&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/6Bn6GGn4JdQdMzMqHuIcFV/de4744da44e084c5e87cea74a0dbf365/gooey_fried_banana_a_magic_duo.jpg?h=780&amp;w=780&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:0px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/6Bn6GGn4JdQdMzMqHuIcFV/de4744da44e084c5e87cea74a0dbf365/gooey_fried_banana_a_magic_duo.jpg?h=500&amp;w=500&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/6Bn6GGn4JdQdMzMqHuIcFV/de4744da44e084c5e87cea74a0dbf365/gooey_fried_banana_a_magic_duo.jpg?h=650&amp;w=650&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <img
                                    data-v-23b40a86=" "
                                    draggable="false "
                                    loading="eager "
                                    alt="gooey fried banana a magic duo "
                                    className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                  />
                                </picture>
                              </div>
                            </figure>
                          </div>
                          <div
                            className="swiper-slide overflow-hidden "
                            style={{ width: "1223px" }}
                          >
                            <figure
                              data-v-23b40a86=" "
                              className="spd overflow-hidden slide-bgimg position-relative "
                              style={stylesE13}
                            >
                              <div
                                data-v-23b40a86=" "
                                className="position-absolute w-100 h-100 t-0 l-0 "
                              >
                                <picture data-v-23b40a86=" ">
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:1920px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/6syb5AsuID83hlflYqqqok/06397c1d94ef1a0d6b33272595c749ff/strawberry_cake__a_magic_duo.jpg?h=930&amp;w=2130&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/6syb5AsuID83hlflYqqqok/06397c1d94ef1a0d6b33272595c749ff/strawberry_cake__a_magic_duo.jpg?h=1209&amp;w=2769&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:1200px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/6syb5AsuID83hlflYqqqok/06397c1d94ef1a0d6b33272595c749ff/strawberry_cake__a_magic_duo.jpg?h=830&amp;w=1830&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/6syb5AsuID83hlflYqqqok/06397c1d94ef1a0d6b33272595c749ff/strawberry_cake__a_magic_duo.jpg?h=1079&amp;w=2379&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:768px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/6syb5AsuID83hlflYqqqok/06397c1d94ef1a0d6b33272595c749ff/strawberry_cake__a_magic_duo.jpg?h=600&amp;w=600&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/6syb5AsuID83hlflYqqqok/06397c1d94ef1a0d6b33272595c749ff/strawberry_cake__a_magic_duo.jpg?h=780&amp;w=780&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:0px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/6syb5AsuID83hlflYqqqok/06397c1d94ef1a0d6b33272595c749ff/strawberry_cake__a_magic_duo.jpg?h=500&amp;w=500&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/6syb5AsuID83hlflYqqqok/06397c1d94ef1a0d6b33272595c749ff/strawberry_cake__a_magic_duo.jpg?h=650&amp;w=650&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <img
                                    data-v-23b40a86=" "
                                    draggable="false "
                                    loading="eager "
                                    alt="strawberry cake a magic duo "
                                    className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                  />
                                </picture>
                              </div>
                            </figure>
                          </div>
                          <div
                            className="swiper-slide overflow-hidden "
                            style={{ width: "1223px" }}
                          >
                            <figure
                              data-v-23b40a86=" "
                              className="spd overflow-hidden slide-bgimg position-relative "
                              style={stylesE14}
                            >
                              <div
                                data-v-23b40a86=" "
                                className="position-absolute w-100 h-100 t-0 l-0 "
                              >
                                <picture data-v-23b40a86=" ">
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:1920px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/5PIe3wO0SkVjLlZ0PBoUUQ/b18ebabdfe97495f967ae96b695005e8/churo_raspberry_a_magic_duo.jpg?h=930&amp;w=2130&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/5PIe3wO0SkVjLlZ0PBoUUQ/b18ebabdfe97495f967ae96b695005e8/churo_raspberry_a_magic_duo.jpg?h=1209&amp;w=2769&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:1200px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/5PIe3wO0SkVjLlZ0PBoUUQ/b18ebabdfe97495f967ae96b695005e8/churo_raspberry_a_magic_duo.jpg?h=830&amp;w=1830&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/5PIe3wO0SkVjLlZ0PBoUUQ/b18ebabdfe97495f967ae96b695005e8/churo_raspberry_a_magic_duo.jpg?h=1079&amp;w=2379&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:768px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/5PIe3wO0SkVjLlZ0PBoUUQ/b18ebabdfe97495f967ae96b695005e8/churo_raspberry_a_magic_duo.jpg?h=600&amp;w=600&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/5PIe3wO0SkVjLlZ0PBoUUQ/b18ebabdfe97495f967ae96b695005e8/churo_raspberry_a_magic_duo.jpg?h=780&amp;w=780&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:0px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/5PIe3wO0SkVjLlZ0PBoUUQ/b18ebabdfe97495f967ae96b695005e8/churo_raspberry_a_magic_duo.jpg?h=500&amp;w=500&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/5PIe3wO0SkVjLlZ0PBoUUQ/b18ebabdfe97495f967ae96b695005e8/churo_raspberry_a_magic_duo.jpg?h=650&amp;w=650&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <img
                                    data-v-23b40a86=" "
                                    draggable="false "
                                    loading="eager "
                                    alt="churo raspberry a magic duo "
                                    className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                  />
                                </picture>
                              </div>
                            </figure>
                          </div>
                          <div
                            className="swiper-slide overflow-hidden "
                            style={{ width: "1223px" }}
                          >
                            <figure
                              data-v-23b40a86=" "
                              className="spd overflow-hidden slide-bgimg position-relative "
                              style={stylesE15}
                            >
                              <div
                                data-v-23b40a86=" "
                                className="position-absolute w-100 h-100 t-0 l-0 "
                              >
                                <picture data-v-23b40a86=" ">
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:1920px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/15gev7qMyytDcvxULOktuk/e1248d5d4cb0ff64f1d3c3ff7f2b9ad1/mango_chamoy_a_magic_duo.jpg?h=930&amp;w=2130&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/15gev7qMyytDcvxULOktuk/e1248d5d4cb0ff64f1d3c3ff7f2b9ad1/mango_chamoy_a_magic_duo.jpg?h=1209&amp;w=2769&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:1200px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/15gev7qMyytDcvxULOktuk/e1248d5d4cb0ff64f1d3c3ff7f2b9ad1/mango_chamoy_a_magic_duo.jpg?h=830&amp;w=1830&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/15gev7qMyytDcvxULOktuk/e1248d5d4cb0ff64f1d3c3ff7f2b9ad1/mango_chamoy_a_magic_duo.jpg?h=1079&amp;w=2379&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:768px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/15gev7qMyytDcvxULOktuk/e1248d5d4cb0ff64f1d3c3ff7f2b9ad1/mango_chamoy_a_magic_duo.jpg?h=600&amp;w=600&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/15gev7qMyytDcvxULOktuk/e1248d5d4cb0ff64f1d3c3ff7f2b9ad1/mango_chamoy_a_magic_duo.jpg?h=780&amp;w=780&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:0px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/15gev7qMyytDcvxULOktuk/e1248d5d4cb0ff64f1d3c3ff7f2b9ad1/mango_chamoy_a_magic_duo.jpg?h=500&amp;w=500&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/15gev7qMyytDcvxULOktuk/e1248d5d4cb0ff64f1d3c3ff7f2b9ad1/mango_chamoy_a_magic_duo.jpg?h=650&amp;w=650&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <img
                                    data-v-23b40a86=" "
                                    draggable="false "
                                    loading="eager "
                                    alt="mango chamoy a magic duo "
                                    className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                  />
                                </picture>
                              </div>
                            </figure>
                          </div>
                          <div
                            className="swiper-slide overflow-hidden "
                            style={{ width: "1223px" }}
                          >
                            <figure
                              data-v-23b40a86=" "
                              className="spd overflow-hidden slide-bgimg position-relative "
                              style={stylesE16}
                            >
                              <div
                                data-v-23b40a86=" "
                                className="position-absolute w-100 h-100 t-0 l-0 "
                              >
                                <picture data-v-23b40a86=" ">
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:1920px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/5YiPgttQprxiQkq5Z4z1QQ/9c77080e926ebe0c5384690f9008f6d5/Double_espresso_a_magic_duo.jpg?h=930&amp;w=2130&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/5YiPgttQprxiQkq5Z4z1QQ/9c77080e926ebe0c5384690f9008f6d5/Double_espresso_a_magic_duo.jpg?h=1209&amp;w=2769&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:1200px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/5YiPgttQprxiQkq5Z4z1QQ/9c77080e926ebe0c5384690f9008f6d5/Double_espresso_a_magic_duo.jpg?h=830&amp;w=1830&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/5YiPgttQprxiQkq5Z4z1QQ/9c77080e926ebe0c5384690f9008f6d5/Double_espresso_a_magic_duo.jpg?h=1079&amp;w=2379&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:768px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/5YiPgttQprxiQkq5Z4z1QQ/9c77080e926ebe0c5384690f9008f6d5/Double_espresso_a_magic_duo.jpg?h=600&amp;w=600&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/5YiPgttQprxiQkq5Z4z1QQ/9c77080e926ebe0c5384690f9008f6d5/Double_espresso_a_magic_duo.jpg?h=780&amp;w=780&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <source
                                    data-v-23b40a86=" "
                                    media="(min-width:0px) "
                                    srcset=" https://images.ctfassets.net/j8k8klriwj2h/5YiPgttQprxiQkq5Z4z1QQ/9c77080e926ebe0c5384690f9008f6d5/Double_espresso_a_magic_duo.jpg?h=500&amp;w=500&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    1x, https://images.ctfassets.net/j8k8klriwj2h/5YiPgttQprxiQkq5Z4z1QQ/9c77080e926ebe0c5384690f9008f6d5/Double_espresso_a_magic_duo.jpg?h=650&amp;w=650&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 2x "
                                  />
                                  <img
                                    data-v-23b40a86=" "
                                    draggable="false "
                                    loading="eager "
                                    alt="Double espresso a magic duo "
                                    className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                  />
                                </picture>
                              </div>
                            </figure>
                          </div> */}
                        </div>
                        <span
                          className="swiper-notification "
                          aria-live="assertive "
                          aria-atomic={true}
                        ></span>
                      </div>
                    </div>
                    {/* <div
                      className="swiper-button swiper-next-button on-top mr-0-75 mr-sm-1-5 mr-xl-3 d-flex flex-center p-sm-1 swiper-button-next"
                      tabindex="0 "
                      role="button "
                      aria-label="Next slide "
                      aria-disabled={false}
                    >
                      <img
                        src={sliderArrow}
                        className="arrow arrow-hover "
                        alt="slider-arrow"
                      />
                    </div> */}
                  </div>
                  <Fade direction="up">
<div className="d-flex text-uppercase color-red f2-2 f3-1-sm f1-1-xl pp-bold pt-0-625 mb-0-25 mb-sm-0 pt-md-1 text-center ">
                    <div className="mr-3 mr-md-7 mr-xl-13 position-relative ">
                      <div
                        data-v-6dc35003=" "
                        data-id="waypoint-278 "
                        className="synchronized-waypoint overflow-hidden "
                      >
                        <div
                          data-v-6dc35003=" "
                          className="inner position-relative lh-1-05 "
                          style={{ opacity: 1 }}
                        >
                          and
                        </div>
                      </div>
                      <div className="smiley position-absolute z-2 ">
                        <div
                          data-v-4bd6f78a=" "
                          data-id="waypoint-280 "
                          className="synchronized-waypoint floating-bubble "
                          //   style={{
                          //     translate: "none",
                          //     rotate: "none",
                          //     scale: "none",
                          //     transform:
                          //       "translate3d(-0.5706%, 1.3377%, 0px) rotate(-223.225deg)",
                          //   }}
                          style={transformStyle}
                        >
                          <div
                            data-v-4bd6f78a=" "
                            className="wrapper "
                            style={{
                              opacity: 1,
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transform: "translate(0px, 0%)",
                            }}
                          >
                            <svg
                              data-v-4bd6f78a=" "
                              width="195 "
                              height="194 "
                              viewBox="0 0 195 194 "
                              fill="none "
                              xmlns="http://www.w3.org/2000/svg "
                              className="w-100 h-100 "
                            >
                              <ellipse
                                data-v-4bd6f78a=" "
                                cx="97.0409 "
                                cy="96.8766 "
                                rx="76.4975 "
                                ry="76.2338 "
                                transform="rotate(-18.8688 97.0409 96.8766) "
                                fill="#E5CAE5 "
                              ></ellipse>
                              <path
                                data-v-4bd6f78a=" "
                                d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894 "
                                stroke="#473D36 "
                                stroke-width="2.45915 "
                                stroke-linecap="round "
                              ></path>
                              <circle
                                data-v-4bd6f78a=" "
                                cx="134.577 "
                                cy="85.9991 "
                                r="2.11028 "
                                transform="rotate(-18.8688 134.577 85.9991) "
                                fill="#473D36 "
                              ></circle>
                              <circle
                                data-v-4bd6f78a=" "
                                cx="117.053 "
                                cy="85.2973 "
                                r="2.11028 "
                                transform="rotate(-18.8688 117.053 85.2973) "
                                fill="#473D36 "
                              ></circle>
                              <path
                                data-v-4bd6f78a=" "
                                d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z "
                                fill="#F3EFE6 "
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-6dc35003=" "
                      data-id="waypoint-282 "
                      className="synchronized-waypoint overflow-hidden "
                    >
                      <div
                        data-v-6dc35003=" "
                        className="inner position-relative lh-1-05 "
                        style={{ opacity: 1 }}
                      >
                        super⁃premium
                      </div>
                    </div>
                  </div>
                  <div className="d-xl-flex bottom-text-offset position-relative ">
                    <div
                      data-v-6dc35003=" "
                      data-id="waypoint-284 "
                      className="synchronized-waypoint overflow-hidden "
                    >
                      <div
                        data-v-6dc35003=" "
                        className="inner position-relative lh-093 text-uppercase text-center color-red f2-2 f3-1-sm f1-1-xl pp-bold pt-0-625 on-top position-relative "
                        style={{ opacity: 1 }}
                      >
                        ice creams.
                      </div>
                    </div>
                    <div className="position-relative ">
                      <div className="content-pill pp-bold col-xl bg-pink4 color-pink5 lh-12 f8-1 f10-5-sm f10-4-xl mt-0-5 mt-xl-0 py-0-75 py-md-1-5 py-xl-1-5 px-1 px-sm-3 pl-xl-4-25 pr-xl-4-75 ">
                        <div className="d-flex justify-content-end no-wrap ">
                          BOBA X ICE CREAM BROUGHT THE MOST TALENTED
                        </div>
                        <div>
                          PEOPLE IN ICE CREAM TOGETHER TO TACKLE ISSUES THAT
                          WERE DEEPLY IMPORTANT
                        </div>
                        <div>
                          IMPORTANT TO US, WHILE PROMOTING ASIAN AND
                          ASIAN⁃AMERICAN CULTURE
                        </div>
                        <div>
                          AND <b>BRINGING PEOPLE CLOSER TOGETHER.</b>
                        </div>
                      </div>
                      <img
                        src={smallBrownBoba}
                        alt="Boba Ice Cream "
                        className="brown-boba "
                      />
                    </div>
                  </div>
                  </Fade>
                  
                </div>
                <div
                  data-id="waypoint-287 "
                  className="synchronized-waypoint big-number-and-texts bg-light-purple position-relative text-center pp-bold text-uppercase color-purple pb-1 pb-sm-1-25 pt-8-5 pt-xl-18 "
                >
                  <svg
                    viewBox="0 0 2207 2115 "
                    fill="none "
                    xmlns="http://www.w3.org/2000/svg "
                    className="background-svg d-none d-sm-block "
                  >
                    <g
                      className="left-group "
                      data-svg-origin="0 26 "
                      transform="matrix(1,0,0,1,-200,0) "
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transformOrigin: "0px 0px",
                      }}
                    >
                      <g
                        data-from="left "
                        className="smiley move-in "
                        data-svg-origin="365.8 409.8 "
                        transform="matrix(0.69229,-0.72162,0.72162,0.69229,-183.15956,390.06815) "
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                        }}
                      >
                        <circle
                          id="Ellipse 710 "
                          cx="393 "
                          cy="437 "
                          r="136 "
                          fill="#F3EFE6 "
                        ></circle>
                        <path
                          id="Vector 629 "
                          d="M383.625 448.229C387.25 456.688 398.554 455.287 401.621 449.582 "
                          stroke="#473D36 "
                          stroke-width="3 "
                          stroke-linecap="round "
                        ></path>
                        <circle
                          id="Ellipse 719 "
                          cx="409.964 "
                          cy="426.404 "
                          r="4 "
                          transform="rotate(-15.1257 409.964 426.404) "
                          fill="#473D36 "
                        ></circle>
                        <circle
                          id="Ellipse 720 "
                          cx="376.905 "
                          cy="422.904 "
                          r="4 "
                          transform="rotate(-15.1257 376.905 422.904) "
                          fill="#473D36 "
                        ></circle>
                      </g>
                      <g data-from="left " className="ball move-in ">
                        <circle
                          cx="136 "
                          cy="784 "
                          r="136 "
                          fill="#F3EFE6 "
                        ></circle>
                      </g>
                      <g data-from="left " className="move-in ball ">
                        <circle
                          cx="136 "
                          cy="162 "
                          r="136 "
                          fill="#F3EFE6 "
                        ></circle>
                      </g>
                      <g
                        data-from="left "
                        className="smiley move-in "
                        data-svg-origin="168.8 1201.8 "
                        transform="matrix(0.69229,-0.72162,0.72162,0.69229,-815.30147,491.61533) "
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                        }}
                      >
                        <circle
                          id="Ellipse 714 "
                          cx="196 "
                          cy="1229 "
                          r="136 "
                          fill="#F3EFE6 "
                        ></circle>
                        <path
                          id="Vector 635 "
                          d="M219.625 1195.23C223.25 1203.69 234.554 1202.29 237.621 1196.58 "
                          stroke="#473D36 "
                          stroke-width="3 "
                          stroke-linecap="round "
                        ></path>
                        <circle
                          id="Ellipse 731 "
                          cx="245.964 "
                          cy="1173.4 "
                          r="4 "
                          transform="rotate(-15.1257 245.964 1173.4) "
                          fill="#473D36 "
                        ></circle>
                        <circle
                          id="Ellipse 732 "
                          cx="212.905 "
                          cy="1169.9 "
                          r="4 "
                          transform="rotate(-15.1257 212.905 1169.9) "
                          fill="#473D36 "
                        ></circle>
                      </g>
                      <g
                        data-from="left "
                        className="smiley move-in "
                        data-svg-origin="188.7433074951172 1806.7443359375 "
                        transform="matrix(0.69229,-0.72162,0.72162,0.69229,-1245.70464,692.15425) "
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                        }}
                      >
                        <circle
                          id="Ellipse 714_2 "
                          cx="227.179 "
                          cy="1845.18 "
                          r="136 "
                          transform="rotate(42.7037 227.179 1845.18) "
                          fill="#F3EFE6 "
                        ></circle>
                        <path
                          id="Vector 635_2 "
                          d="M267.443 1836.38C264.371 1845.06 273.628 1851.7 279.751 1849.58 "
                          stroke="#473D36 "
                          stroke-width="3 "
                          stroke-linecap="round "
                        ></path>
                        <circle
                          id="Ellipse 731_2 "
                          cx="301.607 "
                          cy="1838.2 "
                          r="4 "
                          transform="rotate(27.578 301.607 1838.2) "
                          fill="#473D36 "
                        ></circle>
                        <circle
                          id="Ellipse 732_2 "
                          cx="279.681 "
                          cy="1813.22 "
                          r="4 "
                          transform="rotate(27.578 279.681 1813.22) "
                          fill="#473D36 "
                        ></circle>
                      </g>
                      <g
                        data-from="left "
                        className="ball-with-text ball move-in "
                        data-svg-origin="497.20201110839844 1528.2200927734375 "
                        transform="matrix(0.99963,0.02728,-0.02728,0.99963,94.53583,-104.20975) "
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                        }}
                      >
                        <circle
                          id="Ellipse 717_2 "
                          cx="497.202 "
                          cy="1528.22 "
                          r="136 "
                          transform="rotate(3.42121 497.202 1528.22) "
                          fill="#F3EFE6 "
                        ></circle>
                        <g id="Linked Path Group_2 ">
                          <path
                            id="[Copy] Lactose-Free_13 "
                            d="M480.202 1405.86L484.984 1405.52L486.627 1428.68L492.393 1428.28L492.675 1432.24L482.127 1432.99L480.202 1405.86Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_14 "
                            d="M498.792 1404.86L505.448 1405.18L507.734 1432.52L502.878 1432.29L502.697 1427.58L499.403 1427.42L498.769 1432.09L493.879 1431.85L498.792 1404.86ZM502.516 1423.59L501.975 1410.12L501.911 1409.33L501.806 1410.11L499.969 1423.47L502.516
                                    1423.59Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_15 "
                            d="M514.808 1434.88C510.464 1434.06 508.778 1431.06 509.75 1425.87L511.972 1414.01C512.941 1408.84 515.597 1406.66 519.941 1407.47C524.286 1408.29 525.974 1411.28 525.006 1416.45L524.361 1419.89L519.549 1418.99L520.481 1414.01C520.653
                                    1413.1 520.627 1412.43 520.404 1412.02C520.203 1411.62 519.813 1411.36 519.234 1411.25C518.655 1411.14 518.187 1411.24 517.831 1411.54C517.496 1411.85 517.244 1412.46 517.073 1413.37L514.262 1428.38C514.095 1429.27 514.112
                                    1429.92 514.312 1430.32C514.535 1430.73 514.936 1430.99 515.516 1431.1C516.095 1431.21 516.551 1431.11 516.886 1430.8C517.242 1430.5 517.504 1429.91 517.671 1429.01L518.61 1424L523.422 1424.9L522.783 1428.31C521.811 1433.5
                                    519.153 1435.69 514.808 1434.88Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_16 "
                            d="M530.313 1414.72L526.602 1413.5L527.853 1409.72L539.794 1413.68L538.543 1417.45L534.864 1416.23L527.56 1438.28L523.009 1436.77L530.313 1414.72Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_17 "
                            d="M535.416 1442.64C531.441 1440.71 530.604 1437.38 532.905 1432.65L538.2 1421.76C540.5 1417.03 543.638 1415.64 547.613 1417.57C551.587 1419.5 552.424 1422.83 550.124 1427.56L544.828 1438.45C542.528 1443.18 539.39 1444.57 535.416 1442.64ZM536.608
                                    1436.23C536.221 1437.02 536.071 1437.64 536.157 1438.09C536.263 1438.54 536.581 1438.9 537.111 1439.15C537.641 1439.41 538.108 1439.44 538.511 1439.23C538.935 1439.03 539.34 1438.54 539.727 1437.74L546.39 1424.05C546.787
                                    1423.23 546.932 1422.6 546.826 1422.14C546.75 1421.67 546.447 1421.31 545.917 1421.06C545.387 1420.8 544.905 1420.78 544.472 1420.99C544.068 1421.2 543.673 1421.7 543.287 1422.5L536.608 1436.23Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_18 "
                            d="M548.469 1448.94C546.601 1447.7 545.579 1446.22 545.403 1444.53C545.227 1442.83 545.868 1440.89 547.326 1438.7L548.363 1437.14L552.437 1439.86L550.514 1442.74C550.011 1443.5 549.772 1444.1 549.797 1444.55C549.823 1445.01 550.099
                                    1445.41 550.627 1445.76C551.137 1446.1 551.589 1446.2 551.985 1446.05C552.413 1445.9 552.865 1445.47 553.343 1444.75L554.192 1443.48C554.707 1442.71 554.996 1442.03 555.059 1441.44C555.134 1440.84 555.04 1440.16 554.776
                                    1439.41L553.7 1436C553.209 1434.45 553.011 1433.05 553.105 1431.8C553.212 1430.54 553.718 1429.23 554.623 1427.87C555.842 1426.04 557.247 1424.94 558.837 1424.55C560.44 1424.15 562.147 1424.55 563.958 1425.76C565.693 1426.91
                                    566.696 1428.29 566.967 1429.89C567.269 1431.48 566.804 1433.2 565.572 1435.05L564.441 1436.74L560.395 1434.05L561.828 1431.9C562.343 1431.12 562.582 1430.52 562.544 1430.09C562.519 1429.63 562.261 1429.24 561.771 1428.92C561.28
                                    1428.59 560.828 1428.49 560.413 1428.63C560.029 1428.75 559.618 1429.14 559.178 1429.8L558.612 1430.65C558.147 1431.35 557.883 1431.99 557.82 1432.58C557.77 1433.14 557.865 1433.78 558.104 1434.48L559.17 1437.85C559.503
                                    1438.94 559.711 1439.9 559.793 1440.71C559.906 1441.53 559.837 1442.41 559.585 1443.36C559.347 1444.29 558.857 1445.31 558.115 1446.42C555.362 1450.55 552.147 1451.39 548.469 1448.94Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_19 "
                            d="M572.486 1432.36L580.418 1439.19L577.821 1442.21L573.52 1438.5L568.525 1444.3L572.594 1447.8L570.019 1450.79L565.95 1447.28L560.955 1453.08L565.256 1456.78L562.659 1459.8L554.727 1452.96L572.486 1432.36Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_20 "
                            d="M574.214 1454.59L577.3 1451.81L583.252 1458.44L580.166 1461.21L574.214 1454.59Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_21 "
                            d="M595.733 1457.5L601.673 1466.12L598.396 1468.38L595.176 1463.7L587.755 1468.81L590.918 1473.41L587.67 1475.64L584.507 1471.05L576.05 1476.87L573.331 1472.93L595.733 1457.5Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_22 "
                            d="M583.32 1489.96C583.409 1489.73 583.615 1489.51 583.937 1489.3C584.28 1489.07 584.734 1488.81 585.299 1488.52L590.657 1485.78C591.485 1485.36 591.977 1484.88 592.134 1484.34C592.302 1483.82 592.247 1483.29 591.968 1482.75L591.365
                                    1481.57L581.586 1486.57L579.404 1482.3L603.623 1469.92L606.393 1475.33C607.198 1476.91 607.646 1478.23 607.736 1479.31C607.837 1480.4 607.537 1481.38 606.835 1482.25C606.153 1483.11 605.005 1483.95 603.391 1484.77L602.997
                                    1484.98C601.705 1485.64 600.614 1486.07 599.724 1486.27C598.864 1486.48 598.089 1486.48 597.398 1486.27C596.737 1486.08 596.054 1485.66 595.349 1485.03C595.513 1486.34 595.31 1487.44 594.74 1488.32C594.19 1489.18 593.34
                                    1489.91 592.189 1490.5L587.527 1492.88C587.003 1493.15 586.579 1493.39 586.256 1493.61C585.954 1493.82 585.718 1494.05 585.548 1494.32L583.32 1489.96ZM595.177 1481.11C595.559 1481.85 596.014 1482.24 596.541 1482.28C597.099
                                    1482.33 597.751 1482.16 598.498 1481.78L601.889 1480.04C602.777 1479.59 603.305 1479.15 603.474 1478.74C603.662 1478.31 603.571 1477.73 603.2 1477.01L602.596 1475.83L594.574 1479.93L595.177 1481.11Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_23 "
                            d="M611.68 1486.14L615.21 1496L611.465 1497.34L609.551 1492L602.349 1494.57L604.16 1499.63L600.446 1500.96L598.635 1495.9L591.433 1498.48L593.348 1503.83L589.602 1505.17L586.072 1495.31L611.68 1486.14Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_24 "
                            d="M616.412 1500.45L618.75 1510.66L614.872 1511.55L613.605 1506.01L606.148 1507.72L607.347 1512.95L603.502 1513.83L602.303 1508.6L594.846 1510.31L596.114 1515.84L592.236 1516.73L589.898 1506.52L616.412 1500.45Z "
                            fill="#A380AE "
                          ></path>
                        </g>
                      </g>
                      <g
                        data-from="left "
                        className="ball-with-text ball move-in "
                        data-svg-origin="492.4840393066406 965.5890808105469 "
                        transform="matrix(0.99963,0.02728,-0.02728,0.99963,95.03813,-131.74619) "
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                        }}
                      >
                        <circle
                          id="Ellipse 717_4 "
                          cx="492.484 "
                          cy="965.589 "
                          r="136 "
                          transform="rotate(-58.2888 492.484 965.589) "
                          fill="#F3EFE6 "
                        ></circle>
                        <g id="Linked Path Group_4 ">
                          <path
                            id="[Copy] Lactose-Free_37 "
                            d="M376.68 922.567L378.648 918.195L399.824 927.726L402.196 922.455L405.823 924.087L401.484 933.73L376.68 922.567Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_38 "
                            d="M384.608 905.722L388.046 900.013L413.206 910.959L410.698 915.124L406.468 913.053L404.767 915.878L408.576 918.648L406.05 922.842L384.608 905.722ZM402.868 911.321L390.749 905.412L390.026 905.095L390.661 905.557L401.552 913.505L402.868
                                    911.321Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_39 "
                            d="M418.633 905.846C415.857 909.286 412.414 909.348 408.304 906.031L398.911 898.452C394.818 895.15 394.16 891.778 396.935 888.339C399.711 884.899 403.145 884.83 407.238 888.132L409.963 890.331L406.888 894.142L402.946 890.96C402.223
                                    890.377 401.627 890.086 401.16 890.087C400.707 890.071 400.295 890.293 399.925 890.751C399.555 891.21 399.419 891.668 399.516 892.125C399.627 892.564 400.045 893.076 400.768 893.659L412.649 903.246C413.354 903.815 413.934
                                    904.108 414.387 904.124C414.854 904.122 415.273 903.892 415.643 903.434C416.013 902.975 416.142 902.526 416.031 902.086C415.934 901.629 415.532 901.116 414.827 900.547L410.857 897.344L413.932 893.534L416.631 895.712C420.741
                                    899.028 421.408 902.406 418.633 905.846Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_40 "
                            d="M408.236 882.642L405.394 885.327L402.662 882.436L411.806 873.796L414.538 876.687L411.72 879.349L427.669 896.228L424.184 899.521L408.236 882.642Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_41 "
                            d="M435.235 891.379C431.649 893.962 428.319 893.121 425.245 888.854L418.171 879.032C415.097 874.766 415.353 871.34 418.94 868.757C422.526 866.174 425.856 867.015 428.93 871.282L436.004 881.103C439.078 885.37 438.822 888.796 435.235
                                    891.379ZM430.152 887.289C430.668 888.006 431.143 888.432 431.576 888.568C432.027 888.69 432.492 888.578 432.97 888.234C433.448 887.89 433.691 887.491 433.7 887.037C433.727 886.571 433.482 885.979 432.966 885.262L424.063
                                    872.902C423.533 872.167 423.042 871.738 422.591 871.616C422.145 871.462 421.683 871.558 421.205 871.902C420.727 872.246 420.481 872.661 420.467 873.146C420.458 873.599 420.712 874.185 421.229 874.902L430.152 887.289Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_42 "
                            d="M446.968 882.87C444.988 883.925 443.208 884.128 441.63 883.478C440.052 882.829 438.645 881.344 437.409 879.023L436.531 877.373L440.852 875.072L442.482 878.133C442.908 878.933 443.326 879.43 443.737 879.622C444.147 879.814 444.633
                                    879.761 445.193 879.463C445.733 879.175 446.033 878.823 446.094 878.406C446.163 877.958 445.996 877.354 445.591 876.593L444.872 875.243C444.435 874.422 443.975 873.846 443.489 873.514C442.994 873.161 442.354 872.924 441.57
                                    872.802L438.054 872.132C436.455 871.828 435.129 871.339 434.078 870.667C433.015 869.974 432.101 868.907 431.334 867.467C430.301 865.526 429.992 863.764 430.408 862.182C430.813 860.58 431.976 859.267 433.897 858.245C435.738
                                    857.265 437.425 857.034 438.959 857.552C440.503 858.04 441.797 859.264 442.841 861.225L443.799 863.026L439.508 865.311L438.293 863.03C437.857 862.21 437.438 861.713 437.038 861.541C436.628 861.349 436.163 861.391 435.642
                                    861.668C435.122 861.945 434.822 862.297 434.742 862.725C434.671 863.122 434.822 863.671 435.194 864.372L435.674 865.272C436.068 866.012 436.507 866.548 436.992 866.881C437.467 867.193 438.071 867.411 438.804 867.534L442.273
                                    868.191C443.395 868.416 444.334 868.686 445.093 869.001C445.861 869.286 446.603 869.763 447.32 870.435C448.026 871.086 448.693 872.002 449.322 873.182C451.654 877.564 450.87 880.793 446.968 882.87Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_43 "
                            d="M443.749 853.863L453.529 850.119L454.952 853.834L449.649 855.864L452.384 863.008L457.401 861.088L458.811 864.771L453.794 866.692L456.529 873.836L461.832 871.806L463.254 875.521L453.475 879.265L443.749 853.863Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_44 "
                            d="M464.142 862.877L463.164 858.846L471.821 856.745L472.799 860.776L464.142 862.877Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_45 "
                            d="M476.905 845.308L487.314 844.165L487.748 848.119L482.104 848.739L483.087 857.695L488.63 857.087L489.061 861.007L483.518 861.615L484.638 871.822L479.873 872.345L476.905 845.308Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_46 "
                            d="M499.603 871.621C499.448 871.437 499.352 871.151 499.315 870.765C499.278 870.356 499.267 869.834 499.28 869.2L499.408 863.183C499.427 862.254 499.237 861.593 498.837 861.199C498.46 860.805 497.966 860.602 497.354 860.589L496.028
                                    860.561L495.796 871.541L491.003 871.439L491.579 844.245L497.664 844.374C499.431 844.411 500.809 844.645 501.798 845.074C502.809 845.503 503.53 846.233 503.962 847.262C504.394 848.269 504.591 849.679 504.552 851.492L504.543
                                    851.933C504.512 853.384 504.374 854.548 504.129 855.427C503.907 856.284 503.541 856.968 503.031 857.479C502.545 857.967 501.856 858.372 500.965 858.693C502.202 859.173 503.071 859.871 503.573 860.789C504.076 861.684 504.313
                                    862.777 504.286 864.069L504.175 869.304C504.162 869.893 504.175 870.38 504.212 870.767C504.25 871.13 504.345 871.45 504.498 871.725L499.603 871.621ZM497.43 856.986C498.269 857.004 498.829 856.789 499.11 856.341C499.415
                                    855.872 499.576 855.218 499.594 854.379L499.675 850.572C499.696 849.575 499.563 848.903 499.275 848.557C498.988 848.188 498.437 847.995 497.621 847.978L496.296 847.95L496.105 856.958L497.43 856.986Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_47 "
                            d="M509.684 844.84L520.038 846.404L519.444 850.338L513.83 849.49L512.688 857.054L518 857.856L517.411 861.756L512.099 860.954L510.957 868.518L516.571 869.366L515.977 873.299L505.622 871.736L509.684 844.84Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_48 "
                            d="M524.526 847.454L534.623 850.234L533.567 854.069L528.093 852.562L526.062 859.938L531.241 861.364L530.195 865.166L525.015 863.74L522.985 871.116L528.459 872.623L527.403 876.458L517.307 873.679L524.526 847.454Z "
                            fill="#A380AE "
                          ></path>
                        </g>
                      </g>
                      <g
                        data-from="left "
                        className="smiley move-in "
                        data-svg-origin="687.8 141.8 "
                        transform="matrix(0.69229,-0.72162,0.72162,0.69229,109.31722,539.96351) "
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                        }}
                      >
                        <circle
                          id="Ellipse 699_2 "
                          cx="715 "
                          cy="169 "
                          r="136 "
                          fill="#F3EFE6 "
                        ></circle>
                        <path
                          id="Vector 628_2 "
                          d="M766.625 199.229C770.25 207.688 781.554 206.287 784.621 200.582 "
                          stroke="#473D36 "
                          stroke-width="3 "
                          stroke-linecap="round "
                        ></path>
                        <circle
                          id="Ellipse 612_2 "
                          cx="792.964 "
                          cy="177.404 "
                          r="4 "
                          transform="rotate(-15.1257 792.964 177.404) "
                          fill="#473D36 "
                        ></circle>
                        <circle
                          id="Ellipse 607_2 "
                          cx="759.905 "
                          cy="173.904 "
                          r="4 "
                          transform="rotate(-15.1257 759.905 173.904) "
                          fill="#473D36 "
                        ></circle>
                      </g>
                    </g>
                    <g className="middle-group ">
                      <g
                        data-from="right "
                        className="ball-with-text ball move-in "
                        data-svg-origin="1127.1600646972656 292.1620330810547 "
                        transform="matrix(0.99963,0.02728,-0.02728,0.99963,59.24161,-118.72147) "
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                        }}
                      >
                        <circle
                          id="Ellipse 717_3 "
                          cx="1127.16 "
                          cy="292.162 "
                          r="136 "
                          transform="rotate(-1.25024 1127.16 292.162) "
                          fill="#F3EFE6 "
                        ></circle>
                        <g id="Linked Path Group_3 ">
                          <path
                            id="[Copy] Lactose-Free_25 "
                            d="M1100.25 171.591L1104.99 170.863L1108.52 193.816L1114.23 192.939L1114.83 196.871L1104.38 198.476L1100.25 171.591Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_26 "
                            d="M1118.7 169.078L1125.36 168.857L1129.87 195.922L1125.01 196.084L1124.44 191.408L1121.15 191.517L1120.9 196.22L1116 196.383L1118.7 169.078ZM1123.94 187.444L1122.3 174.061L1122.17 173.283L1122.13 174.067L1121.39 187.529L1123.94 187.444Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_27 "
                            d="M1137.11 197.694C1132.71 197.236 1130.79 194.381 1131.33 189.128L1132.58 177.123C1133.13 171.893 1135.6 169.506 1139.99 169.963C1144.39 170.421 1146.32 173.265 1145.77 178.495L1145.41 181.978L1140.54 181.472L1141.06 176.433C1141.16
                                    175.509 1141.08 174.851 1140.82 174.46C1140.59 174.071 1140.18 173.846 1139.6 173.785C1139.01 173.724 1138.55 173.858 1138.22 174.189C1137.91 174.521 1137.71 175.15 1137.61 176.074L1136.03 191.258C1135.94 192.16 1136.01
                                    192.805 1136.24 193.194C1136.5 193.585 1136.92 193.811 1137.51 193.872C1138.09 193.933 1138.54 193.798 1138.85 193.465C1139.18 193.135 1139.39 192.519 1139.48 191.617L1140.01 186.544L1144.88 187.051L1144.52 190.5C1143.98
                                    195.753 1141.5 198.151 1137.11 197.694Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_28 "
                            d="M1150.92 176.345L1147.12 175.422L1148.06 171.556L1160.29 174.528L1159.35 178.393L1155.58 177.478L1150.09 200.042L1145.44 198.91L1150.92 176.345Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_29 "
                            d="M1158.28 203.752C1154.16 202.149 1153.06 198.897 1154.96 193.996L1159.35 182.717C1161.26 177.817 1164.28 176.168 1168.39 177.772C1172.51 179.375 1173.62 182.627 1171.71 187.528L1167.32 198.807C1165.41 203.707 1162.4 205.356 1158.28
                                    203.752ZM1158.95 197.262C1158.63 198.086 1158.53 198.716 1158.65 199.152C1158.79 199.597 1159.14 199.927 1159.69 200.14C1160.24 200.354 1160.7 200.341 1161.09 200.102C1161.49 199.871 1161.86 199.344 1162.18 198.52L1167.7
                                    184.326C1168.03 183.481 1168.13 182.836 1167.98 182.391C1167.87 181.933 1167.54 181.598 1166.99 181.384C1166.44 181.17 1165.96 181.189 1165.54 181.441C1165.16 181.681 1164.81 182.212 1164.48 183.036L1158.95 197.262Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_30 "
                            d="M1171.8 208.967C1169.84 207.879 1168.7 206.496 1168.39 204.819C1168.07 203.142 1168.55 201.153 1169.83 198.854L1170.74 197.218L1175.02 199.593L1173.34 202.626C1172.9 203.419 1172.71 204.04 1172.77 204.489C1172.83 204.938 1173.14
                                    205.316 1173.7 205.624C1174.23 205.921 1174.69 205.981 1175.07 205.804C1175.49 205.619 1175.9 205.15 1176.32 204.397L1177.06 203.059C1177.51 202.246 1177.75 201.546 1177.76 200.958C1177.79 200.35 1177.64 199.684 1177.31
                                    198.96L1175.96 195.646C1175.35 194.138 1175.04 192.76 1175.03 191.512C1175.03 190.244 1175.43 188.896 1176.22 187.469C1177.29 185.546 1178.6 184.329 1180.15 183.817C1181.72 183.285 1183.45 183.546 1185.35 184.602C1187.18
                                    185.613 1188.29 186.903 1188.69 188.473C1189.12 190.033 1188.79 191.785 1187.72 193.728L1186.73 195.512L1182.48 193.154L1183.73 190.894C1184.18 190.081 1184.37 189.46 1184.3 189.031C1184.23 188.582 1183.95 188.215 1183.43
                                    187.929C1182.91 187.643 1182.46 187.583 1182.05 187.748C1181.68 187.905 1181.3 188.33 1180.92 189.024L1180.42 189.916C1180.02 190.649 1179.81 191.31 1179.79 191.898C1179.79 192.466 1179.93 193.091 1180.23 193.773L1181.56
                                    197.041C1181.99 198.104 1182.27 199.04 1182.42 199.848C1182.6 200.647 1182.6 201.53 1182.43 202.496C1182.27 203.443 1181.86 204.501 1181.21 205.671C1178.8 210.012 1175.67 211.111 1171.8 208.967Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_31 "
                            d="M1194.39 190.485L1202.85 196.653L1200.51 199.868L1195.92 196.523L1191.41 202.705L1195.76 205.87L1193.43 209.057L1189.09 205.892L1184.58 212.074L1189.17 215.419L1186.83 218.634L1178.37 212.465L1194.39 190.485Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_32 "
                            d="M1197.92 212.499L1200.77 209.485L1207.24 215.606L1204.39 218.62L1197.92 212.499Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_33 "
                            d="M1219.61 213.648L1226.23 221.761L1223.15 224.276L1219.56 219.878L1212.58 225.576L1216.1 229.895L1213.05 232.389L1209.52 228.07L1201.57 234.563L1198.54 230.849L1219.61 213.648Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_34 "
                            d="M1209.88 247.01C1209.95 246.779 1210.14 246.543 1210.44 246.302C1210.76 246.049 1211.19 245.755 1211.73 245.421L1216.85 242.255C1217.64 241.766 1218.09 241.246 1218.21 240.697C1218.33 240.166 1218.23 239.641 1217.91 239.12L1217.21
                                    237.993L1207.87 243.771L1205.35 239.695L1228.48 225.383L1231.68 230.558C1232.61 232.061 1233.17 233.345 1233.35 234.407C1233.54 235.489 1233.32 236.492 1232.69 237.414C1232.08 238.324 1231 239.256 1229.46 240.21L1229.08
                                    240.443C1227.85 241.206 1226.8 241.724 1225.93 241.997C1225.09 242.276 1224.32 242.341 1223.61 242.192C1222.94 242.049 1222.22 241.691 1221.47 241.119C1221.74 242.417 1221.62 243.527 1221.13 244.447C1220.65 245.356 1219.86
                                    246.15 1218.76 246.83L1214.31 249.585C1213.81 249.895 1213.41 250.171 1213.1 250.412C1212.82 250.641 1212.6 250.895 1212.45 251.173L1209.88 247.01ZM1220.98 237.224C1221.42 237.937 1221.9 238.29 1222.43 238.283C1222.99 238.283
                                    1223.63 238.063 1224.34 237.621L1227.58 235.618C1228.43 235.093 1228.92 234.616 1229.05 234.186C1229.21 233.745 1229.07 233.177 1228.64 232.483L1227.94 231.356L1220.28 236.097L1220.98 237.224Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_35 "
                            d="M1237.83 240.897L1242.15 250.436L1238.53 252.077L1236.19 246.905L1229.22 250.062L1231.44 254.956L1227.84 256.583L1225.63 251.69L1218.66 254.847L1221 260.019L1217.38 261.661L1213.06 252.122L1237.83 240.897Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_36 "
                            d="M1243.72 254.773L1246.88 264.756L1243.08 265.957L1241.37 260.544L1234.08 262.853L1235.7 267.975L1231.94 269.165L1230.32 264.044L1223.02 266.353L1224.74 271.766L1220.95 272.967L1217.78 262.983L1243.72 254.773Z "
                            fill="#A380AE "
                          ></path>
                        </g>
                      </g>
                    </g>
                    <g
                      className="right-group "
                      data-svg-origin="1362.0018310546875 46 "
                      transform="matrix(1,0,0,1,200,0) "
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transformOrigin: "0px 0px",
                      }}
                    >
                      <g
                        data-from="right "
                        className="smiley move-in "
                        data-svg-origin="1513.0242431640625 1520.024365234375 "
                        transform="matrix(0.69229,-0.72162,0.72162,0.69229,-631.30729,1559.55525) "
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                        }}
                      >
                        <circle
                          id="Ellipse 699 "
                          cx="1550.78 "
                          cy="1557.78 "
                          r="136 "
                          transform="rotate(-33.9667 1550.78 1557.78) "
                          fill="#F3EFE6 "
                        ></circle>
                        <path
                          id="Vector 628 "
                          d="M1610.48 1554C1618.22 1558.99 1626.81 1551.52 1626.16 1545.07 "
                          stroke="#473D36 "
                          stroke-width="3 "
                          stroke-linecap="round "
                        ></path>
                        <circle
                          id="Ellipse 612 "
                          cx="1620.13 "
                          cy="1521.19 "
                          r="4 "
                          transform="rotate(-49.0924 1620.13 1521.19) "
                          fill="#473D36 "
                        ></circle>
                        <circle
                          id="Ellipse 607 "
                          cx="1590.76 "
                          cy="1536.76 "
                          r="4 "
                          transform="rotate(-49.0924 1590.76 1536.76) "
                          fill="#473D36 "
                        ></circle>
                      </g>
                      <g data-from="right " className="ball move-in ">
                        <circle
                          cx="1776 "
                          cy="537 "
                          r="136 "
                          fill="#F3EFE6 "
                        ></circle>
                      </g>
                      <g data-from="right " className="ball move-in ">
                        <circle
                          cx="2071 "
                          cy="1349 "
                          r="136 "
                          fill="#F3EFE6 "
                        ></circle>
                      </g>
                      <g data-from="right " className="ball move-in ">
                        <circle
                          cx="1992 "
                          cy="907 "
                          r="136 "
                          fill="#F3EFE6 "
                        ></circle>
                      </g>
                      <g
                        data-from="right "
                        className="smiley move-in "
                        data-svg-origin="1486.8 225.8 "
                        transform="matrix(0.69229,-0.72162,0.72162,0.69229,294.56143,1142.38553) "
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                        }}
                      >
                        <circle
                          cx="1514 "
                          cy="253 "
                          r="136 "
                          fill="#F3EFE6 "
                        ></circle>
                        <path
                          id="Vector 631 "
                          d="M1482.62 302.229C1486.25 310.688 1497.55 309.287 1500.62 303.582 "
                          stroke="#473D36 "
                          stroke-width="3 "
                          stroke-linecap="round "
                        ></path>
                        <circle
                          id="Ellipse 723 "
                          cx="1508.96 "
                          cy="280.404 "
                          r="4 "
                          transform="rotate(-15.1257 1508.96 280.404) "
                          fill="#473D36 "
                        ></circle>
                        <circle
                          id="circle "
                          cx="1475.91 "
                          cy="276.904 "
                          r="4 "
                          transform="rotate(-15.1257 1475.91 276.904) "
                          fill="#473D36 "
                        ></circle>
                      </g>
                      <g
                        data-from="right "
                        className="smiley move-in "
                        data-svg-origin="1682.8 1171.8 "
                        transform="matrix(0.69229,-0.72162,0.72162,0.69229,-327.77993,1574.91671) "
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                        }}
                      >
                        <circle
                          id="Ellipse 705 "
                          cx="1710 "
                          cy="1199 "
                          r="136 "
                          fill="#F3EFE6 "
                        ></circle>
                        <path
                          id="Vector 634 "
                          d="M1663.62 1145.23C1667.25 1153.69 1678.55 1152.29 1681.62 1146.58 "
                          stroke="#473D36 "
                          stroke-width="3 "
                          stroke-linecap="round "
                        ></path>
                        <circle
                          id="Ellipse 729 "
                          cx="1689.96 "
                          cy="1123.4 "
                          r="4 "
                          transform="rotate(-15.1257 1689.96 1123.4) "
                          fill="#473D36 "
                        ></circle>
                        <circle
                          id="Ellipse 730 "
                          cx="1656.91 "
                          cy="1119.9 "
                          r="4 "
                          transform="rotate(-15.1257 1656.91 1119.9) "
                          fill="#473D36 "
                        ></circle>
                      </g>
                      <g
                        data-from="right "
                        className="ball-with-text move-in "
                        data-svg-origin="1881.7799072265625 1853.1900634765625 "
                        transform="matrix(0.99963,0.02728,-0.02728,0.99963,114.34688,-159.93181) "
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                        }}
                      >
                        <circle
                          id="Ellipse 717 "
                          cx="1881.78 "
                          cy="1853.19 "
                          r="136 "
                          transform="rotate(-71.3308 1881.78 1853.19) "
                          fill="#F3EFE6 "
                        ></circle>
                        <g id="Linked Path Group ">
                          <path
                            id="[Copy] Lactose-Free "
                            d="M1759.26 1837.41L1760.19 1832.71L1782.97 1837.21L1784.09 1831.54L1787.99 1832.32L1785.94 1842.69L1759.26 1837.41Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_2 "
                            d="M1763.18 1819.21L1765.24 1812.87L1792.22 1817.86L1790.72 1822.48L1786.13 1821.42L1785.11 1824.56L1789.45 1826.39L1787.93 1831.05L1763.18 1819.21ZM1782.23 1820.54L1769.09 1817.52L1768.32 1817.38L1769.04 1817.68L1781.44 1822.97L1782.23
                                    1820.54Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_3 "
                            d="M1796.36 1811.65C1794.43 1815.63 1791.09 1816.47 1786.34 1814.16L1775.47 1808.9C1770.74 1806.61 1769.34 1803.47 1771.27 1799.49C1773.2 1795.52 1776.53 1794.67 1781.26 1796.97L1784.41 1798.5L1782.27 1802.9L1777.72 1800.69C1776.88
                                    1800.29 1776.23 1800.14 1775.78 1800.24C1775.33 1800.33 1774.98 1800.64 1774.73 1801.17C1774.47 1801.7 1774.44 1802.18 1774.64 1802.6C1774.84 1803 1775.37 1803.41 1776.2 1803.81L1789.94 1810.47C1790.76 1810.87 1791.39 1811.02
                                    1791.83 1810.93C1792.29 1810.83 1792.64 1810.51 1792.9 1809.98C1793.16 1809.45 1793.18 1808.98 1792.97 1808.58C1792.78 1808.15 1792.27 1807.75 1791.45 1807.35L1786.86 1805.13L1789 1800.72L1792.12 1802.23C1796.87 1804.54
                                    1798.28 1807.68 1796.36 1811.65Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_4 "
                            d="M1780.99 1791.39L1778.83 1794.65L1775.51 1792.45L1782.47 1781.97L1785.79 1784.17L1783.64 1787.4L1802.99 1800.24L1800.34 1804.24L1780.99 1791.39Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_5 "
                            d="M1809.27 1793.81C1806.35 1797.14 1802.92 1797.07 1798.96 1793.61L1789.86 1785.64C1785.9 1782.17 1785.37 1778.78 1788.29 1775.45C1791.2 1772.13 1794.63 1772.19 1798.59 1775.66L1807.7 1783.63C1811.65 1787.09 1812.18 1790.49 1809.27
                                    1793.81ZM1803.39 1790.98C1804.06 1791.56 1804.61 1791.87 1805.07 1791.9C1805.53 1791.92 1805.96 1791.7 1806.35 1791.26C1806.74 1790.82 1806.88 1790.37 1806.79 1789.93C1806.71 1789.47 1806.34 1788.95 1805.67 1788.37L1794.21
                                    1778.33C1793.53 1777.74 1792.96 1777.43 1792.49 1777.41C1792.02 1777.36 1791.59 1777.56 1791.2 1778C1790.81 1778.45 1790.67 1778.91 1790.76 1779.38C1790.86 1779.83 1791.24 1780.34 1791.9 1780.92L1803.39 1790.98Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_6 "
                            d="M1818.78 1782.88C1817.08 1784.35 1815.4 1784.95 1813.71 1784.67C1812.03 1784.4 1810.32 1783.27 1808.6 1781.29L1807.37 1779.88L1811.06 1776.66L1813.34 1779.27C1813.93 1779.96 1814.45 1780.35 1814.89 1780.44C1815.34 1780.54 1815.8
                                    1780.37 1816.28 1779.96C1816.74 1779.56 1816.95 1779.14 1816.92 1778.72C1816.88 1778.27 1816.58 1777.72 1816.02 1777.07L1815.01 1775.92C1814.4 1775.22 1813.82 1774.76 1813.28 1774.55C1812.71 1774.31 1812.04 1774.23 1811.24
                                    1774.29L1807.67 1774.43C1806.04 1774.49 1804.64 1774.31 1803.46 1773.9C1802.27 1773.46 1801.14 1772.63 1800.07 1771.4C1798.62 1769.74 1797.93 1768.09 1797.97 1766.46C1798.01 1764.81 1798.84 1763.26 1800.48 1761.84C1802.06
                                    1760.47 1803.65 1759.86 1805.26 1760.02C1806.87 1760.15 1808.41 1761.05 1809.87 1762.72L1811.21 1764.26L1807.55 1767.45L1805.85 1765.51C1805.24 1764.8 1804.72 1764.42 1804.29 1764.34C1803.85 1764.24 1803.4 1764.39 1802.96
                                    1764.78C1802.51 1765.16 1802.3 1765.57 1802.32 1766.01C1802.34 1766.41 1802.61 1766.91 1803.13 1767.51L1803.8 1768.28C1804.35 1768.91 1804.9 1769.34 1805.45 1769.55C1805.98 1769.75 1806.62 1769.82 1807.36 1769.78L1810.89
                                    1769.63C1812.03 1769.6 1813.01 1769.65 1813.82 1769.79C1814.63 1769.89 1815.46 1770.19 1816.31 1770.68C1817.15 1771.16 1818 1771.9 1818.88 1772.91C1822.14 1776.65 1822.11 1779.97 1818.78 1782.88Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_7 "
                            d="M1809.09 1755.34L1817.78 1749.49L1820 1752.79L1815.29 1755.96L1819.57 1762.3L1824.02 1759.3L1826.23 1762.57L1821.77 1765.57L1826.05 1771.92L1830.76 1768.74L1832.98 1772.04L1824.3 1777.9L1809.09 1755.34Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_8 "
                            d="M1831 1759.52L1829.13 1755.82L1837.09 1751.82L1838.95 1755.52L1831 1759.52Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_9 "
                            d="M1839.46 1739.53L1849.35 1736.06L1850.66 1739.82L1845.3 1741.7L1848.28 1750.2L1853.54 1748.36L1854.85 1752.08L1849.59 1753.92L1852.98 1763.61L1848.46 1765.2L1839.46 1739.53Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_10 "
                            d="M1867.51 1760.04C1867.32 1759.89 1867.16 1759.64 1867.04 1759.27C1866.91 1758.88 1866.78 1758.37 1866.65 1757.75L1865.42 1751.86C1865.23 1750.95 1864.9 1750.35 1864.42 1750.06C1863.96 1749.76 1863.43 1749.67 1862.83 1749.8L1861.54
                                    1750.07L1863.79 1760.82L1859.1 1761.8L1853.52 1735.18L1859.48 1733.93C1861.21 1733.57 1862.6 1733.49 1863.66 1733.68C1864.74 1733.87 1865.61 1734.42 1866.26 1735.32C1866.91 1736.21 1867.42 1737.54 1867.79 1739.31L1867.88
                                    1739.74C1868.18 1741.16 1868.31 1742.33 1868.27 1743.24C1868.25 1744.13 1868.04 1744.88 1867.66 1745.49C1867.3 1746.07 1866.72 1746.62 1865.92 1747.14C1867.24 1747.33 1868.24 1747.81 1868.94 1748.59C1869.63 1749.35 1870.11
                                    1750.36 1870.37 1751.62L1871.45 1756.75C1871.57 1757.33 1871.69 1757.8 1871.81 1758.17C1871.93 1758.51 1872.1 1758.8 1872.31 1759.04L1867.51 1760.04ZM1862.1 1746.27C1862.92 1746.1 1863.41 1745.76 1863.59 1745.26C1863.78
                                    1744.74 1863.79 1744.06 1863.61 1743.24L1862.83 1739.52C1862.63 1738.54 1862.35 1737.92 1861.99 1737.64C1861.63 1737.35 1861.05 1737.29 1860.25 1737.45L1858.95 1737.72L1860.8 1746.54L1862.1 1746.27Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_11 "
                            d="M1871.29 1731.67L1881.73 1730.86L1882.04 1734.83L1876.38 1735.27L1876.97 1742.89L1882.33 1742.48L1882.64 1746.41L1877.28 1746.83L1877.87 1754.45L1883.54 1754.01L1883.84 1757.98L1873.4 1758.79L1871.29 1731.67Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_12 "
                            d="M1886.34 1730.87L1896.8 1731.3L1896.64 1735.28L1890.97 1735.04L1890.65 1742.69L1896.02 1742.91L1895.86 1746.85L1890.49 1746.63L1890.18 1754.27L1895.85 1754.5L1895.69 1758.48L1885.23 1758.05L1886.34 1730.87Z "
                            fill="#A380AE "
                          ></path>
                        </g>
                      </g>
                      <g
                        data-from="right "
                        className="smiley move-in "
                        data-svg-origin="1831.8 118.8 "
                        transform="matrix(0.69229,0.72162,-0.72162,0.69229,649.39163,-1285.30757) "
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                        }}
                      >
                        <circle
                          id="Ellipse 715 "
                          cx="1850 "
                          cy="137 "
                          r="91 "
                          fill="#F3EFE6 "
                        ></circle>
                        <path
                          id="Vector 630 "
                          d="M1805.59 181.984C1808.01 187.644 1815.58 186.707 1817.63 182.889 "
                          stroke="#473D36 "
                          stroke-width="2.00735 "
                          stroke-linecap="round "
                        ></path>
                        <circle
                          id="Ellipse 721 "
                          cx="1823.21 "
                          cy="167.38 "
                          r="2.67647 "
                          transform="rotate(-15.1257 1823.21 167.38) "
                          fill="#473D36 "
                        ></circle>
                        <circle
                          id="Ellipse 722 "
                          cx="1801.09 "
                          cy="165.038 "
                          r="2.67647 "
                          transform="rotate(-15.1257 1801.09 165.038) "
                          fill="#473D36 "
                        ></circle>
                      </g>
                    </g>
                  </svg>
                  <svg
                    viewBox="0 0 544 1038 "
                    fill="none "
                    xmlns="http://www.w3.org/2000/svg "
                    className="background-svg d-sm-none "
                  >
                    <g id="Group 316124678 ">
                      <rect
                        id="Rectangle 2228 "
                        x="33 "
                        width="511 "
                        height="1038 "
                      ></rect>
                      <g
                        className="left-group "
                        data-svg-origin="0 6.917900085449219 "
                        transform="matrix(1,0,0,1,-200,0) "
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                        }}
                      >
                        <g
                          data-from="left "
                          className="smiley move-in "
                          data-svg-origin="163.84737243652344 537.8483703613281 "
                          transform="matrix(0.69229,-0.72162,0.72162,0.69229,-337.70467,283.73686) "
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                          }}
                        >
                          <circle
                            id="Ellipse 699 "
                            r="35.3096 "
                            transform="matrix(-0.946601 -0.322408 -0.322408 0.946601 172.809 546.81) "
                            fill="#F3EFE6 "
                          ></circle>
                          <path
                            id="Vector 628 "
                            d="M157.583 549.919C155.983 551.695 153.323 550.404 153.046 548.746 "
                            stroke="#473D36 "
                            stroke-width="0.693804 "
                            stroke-linecap="round "
                          ></path>
                          <circle
                            id="Ellipse 612 "
                            r="1.03852 "
                            transform="matrix(-0.829678 -0.558242 -0.558242 0.829678 152.948 542.349) "
                            fill="#473D36 "
                          ></circle>
                          <circle
                            id="Ellipse 607 "
                            r="1.03852 "
                            transform="matrix(-0.829678 -0.558242 -0.558242 0.829678 161.36 544.254) "
                            fill="#473D36 "
                          ></circle>
                        </g>
                        <g
                          data-from="left "
                          className="smiley move-in "
                          data-svg-origin="124.93518371582032 133.9351837158203 "
                          transform="matrix(0.69229,0.72162,-0.72162,0.69229,135.09411,-48.94253) "
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                          }}
                        >
                          <circle
                            id="Ellipse 710 "
                            cx="133.419 "
                            cy="142.419 "
                            r="42.419 "
                            fill="#F3EFE6 "
                          ></circle>
                          <path
                            id="Vector 629 "
                            d="M130.491 145.918C131.622 148.556 135.148 148.119 136.104 146.34 "
                            stroke="#473D36 "
                            stroke-width="0.935713 "
                            stroke-linecap="round "
                          ></path>
                          <circle
                            id="Ellipse 719 "
                            cx="138.714 "
                            cy="139.115 "
                            r="1.24762 "
                            transform="rotate(-15.1257 138.714 139.115) "
                            fill="#473D36 "
                          ></circle>
                          <circle
                            id="Ellipse 720 "
                            cx="128.398 "
                            cy="138.025 "
                            r="1.24762 "
                            transform="rotate(-15.1257 128.398 138.025) "
                            fill="#473D36 "
                          ></circle>
                        </g>
                        <g id="ball ">
                          <circle
                            id="Ellipse 713 "
                            cx="36.1722 "
                            cy="208.524 "
                            r="36.1722 "
                            fill="#F3EFE6 "
                          ></circle>
                        </g>
                        <g data-from="left " className="ball move-in ">
                          <circle
                            id="Ellipse 712 "
                            cx="36.1722 "
                            cy="43.0901 "
                            r="36.1722 "
                            fill="#F3EFE6 "
                          ></circle>
                        </g>
                        <g
                          data-from="left "
                          className="smiley move-in "
                          data-svg-origin="44.89865951538086 319.64454345703126 "
                          transform="matrix(0.69229,-0.72162,0.72162,0.69229,-216.84613,130.75759) "
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                          }}
                        >
                          <circle
                            id="Ellipse 714 "
                            cx="52.1331 "
                            cy="326.879 "
                            r="36.1722 "
                            fill="#F3EFE6 "
                          ></circle>
                          <path
                            id="Vector 635 "
                            d="M58.4146 317.897C59.379 320.147 62.3856 319.774 63.2012 318.257 "
                            stroke="#473D36 "
                            stroke-width="0.797916 "
                            stroke-linecap="round "
                          ></path>
                          <circle
                            id="Ellipse 731 "
                            cx="65.4242 "
                            cy="312.09 "
                            r="1.06389 "
                            transform="rotate(-15.1257 65.4242 312.09) "
                            fill="#473D36 "
                          ></circle>
                          <circle
                            id="Ellipse 732 "
                            cx="56.6293 "
                            cy="311.16 "
                            r="1.06389 "
                            transform="rotate(-15.1257 56.6293 311.16) "
                            fill="#473D36 "
                          ></circle>
                        </g>
                        <g
                          data-from="left "
                          className="smiley move-in "
                          data-svg-origin="50.2017972946167 480.5431640625 "
                          transform="matrix(0.69229,0.72162,-0.72162,0.69229,362.21715,111.64132) "
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                          }}
                        >
                          <circle
                            id="Ellipse 714_2 "
                            cx="60.4246 "
                            cy="490.766 "
                            r="36.1722 "
                            transform="rotate(42.7037 60.4246 490.766) "
                            fill="#F3EFE6 "
                          ></circle>
                          <path
                            id="Vector 635_2 "
                            d="M71.1336 488.428C70.3164 490.735 72.7786 492.5 74.4071 491.939 "
                            stroke="#473D36 "
                            stroke-width="0.797916 "
                            stroke-linecap="round "
                          ></path>
                          <circle
                            id="Ellipse 731_2 "
                            cx="80.2223 "
                            cy="488.911 "
                            r="1.06389 "
                            transform="rotate(27.578 80.2223 488.911) "
                            fill="#473D36 "
                          ></circle>
                          <circle
                            id="Ellipse 732_2 "
                            cx="74.3863 "
                            cy="482.264 "
                            r="1.06389 "
                            transform="rotate(27.578 74.3863 482.264) "
                            fill="#473D36 "
                          ></circle>
                        </g>
                        <g className="offset-mob ">
                          <g
                            data-from="left "
                            className="ball-with-text ball move-in "
                            data-svg-origin="151.50399780273438 378.2690124511719 "
                            transform="matrix(0.99963,0.02728,-0.02728,0.99963,30.82485,-39.41214) "
                            style={{
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transformOrigin: "0px 0px",
                            }}
                          >
                            <circle
                              id="Ellipse 717_2 "
                              cx="151.504 "
                              cy="378.269 "
                              r="42.419 "
                              transform="rotate(23.6395 151.504 378.269) "
                              fill="#F3EFE6 "
                            ></circle>
                            <g id="Linked Path Group_2 ">
                              <path
                                id="[Copy] Lactose-Free_13 "
                                d="M157.274 347.626L160.156 348.794L160.596 347.71L159.02 347.071L161.586 340.741L160.279 340.212L157.274 347.626Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_14 "
                                d="M161.351 349.435L162.676 349.997L163.326 348.773L164.219 349.152L163.79 350.47L165.107 351.028L167.255 343.249L165.451 342.484L161.351 349.435ZM163.884 347.739L165.749 344.24L165.857 344.036L165.795 344.259L164.574 348.032L163.884
                                    347.739Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_15 "
                                d="M167.073 352.562C168.198 353.234 169.147 352.892 169.942 351.561L170.464 350.685L169.228 349.947L168.459 351.235C168.172 351.716 167.935 351.761 167.652 351.592C167.369 351.423 167.296 351.193 167.583 350.712L169.884 346.857C170.176
                                    346.367 170.413 346.322 170.696 346.491C170.98 346.66 171.052 346.89 170.76 347.38L169.996 348.659L171.233 349.397L171.761 348.512C172.555 347.181 172.4 346.192 171.275 345.521C170.15 344.85 169.206 345.183 168.412 346.514L166.593
                                    349.562C165.798 350.893 165.948 351.891 167.073 352.562Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_16 "
                                d="M169.061 353.87L170.164 354.749L174.42 349.407L175.312 350.118L176.041 349.203L173.147 346.897L172.418 347.812L173.318 348.529L169.061 353.87Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_17 "
                                d="M172.225 357.053C173.133 357.998 174.131 357.926 175.249 356.853L177.817 354.387C178.935 353.313 179.047 352.318 178.14 351.373C177.233 350.428 176.234 350.5 175.116 351.574L172.548 354.039C171.43 355.113 171.318 356.108 172.225
                                    357.053ZM173.207 355.404L176.445 352.294C176.835 351.92 177.082 351.918 177.318 352.163C177.553 352.408 177.534 352.662 177.144 353.036L173.913 356.139C173.531 356.507 173.283 356.509 173.048 356.263C172.812 356.018 172.824
                                    355.771 173.207 355.404Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_18 "
                                d="M175.488 360.471C176.272 361.545 177.243 361.604 178.407 360.756C179.409 360.025 179.528 359.357 179.569 358.497L179.617 357.46C179.63 357.054 179.718 356.767 180.147 356.455L180.389 356.278C180.777 355.995 180.994 356.022 181.195
                                    356.297C181.383 356.555 181.376 356.783 180.908 357.125L180.294 357.573L181.136 358.728L181.621 358.375C182.679 357.603 182.838 356.633 182.12 355.647C181.348 354.589 180.346 354.539 179.328 355.282C178.504 355.883 178.291
                                    356.558 178.247 357.431L178.197 358.483C178.187 358.911 178.091 359.203 177.623 359.545L177.259 359.81C176.847 360.111 176.619 360.104 176.407 359.813C176.195 359.522 176.238 359.292 176.682 358.968L177.507 358.367L176.658
                                    357.204L176.214 357.528C174.969 358.435 174.71 359.404 175.488 360.471Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_19 "
                                d="M176.844 362.293L178.338 364.986L179.361 364.419L178.551 362.958L180.519 361.867L181.285 363.248L182.299 362.686L181.533 361.304L183.5 360.212L184.311 361.673L185.334 361.105L183.84 358.412L176.844 362.293Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_20 "
                                d="M182.105 364.834L183.238 364.383L184.207 366.817L183.074 367.268L182.105 364.834Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_21 "
                                d="M179.878 370.111L180.227 371.477L183.153 370.729L183.559 372.318L184.683 372.031L184.277 370.442L186.844 369.785L187.258 371.403L188.391 371.114L187.629 368.13L179.878 370.111Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_22 "
                                d="M181.245 376.27L181.417 377.699C181.584 377.579 181.821 377.54 182.109 377.505L183.638 377.322C184.323 377.239 184.882 376.94 185.066 376.133C185.444 376.843 185.932 377.046 187.183 376.895L187.312 376.88C188.9 376.689 189.281
                                    376.089 189.1 374.58L188.886 372.803L180.943 373.758L181.112 375.158L184.319 374.772L184.365 375.159C184.402 375.467 184.28 375.794 183.695 375.864L181.937 376.076C181.639 376.112 181.353 376.156 181.245 376.27ZM185.371
                                    374.646L188.002 374.329L188.049 374.716C188.106 375.193 187.954 375.352 187.378 375.421L186.266 375.555C185.839 375.607 185.481 375.559 185.418 375.033L185.371 374.646Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_23 "
                                d="M181.479 378.285L181.452 381.365L182.622 381.375L182.637 379.705L184.887 379.726L184.872 381.305L186.032 381.316L186.047 379.736L188.296 379.756L188.281 381.426L189.451 381.437L189.479 378.357L181.479 378.285Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_24 "
                                d="M181.385 382.029L180.992 385.084L182.153 385.233L182.365 383.577L184.597 383.863L184.396 385.43L185.546 385.578L185.748 384.011L187.979 384.298L187.766 385.954L188.927 386.103L189.319 383.048L181.385 382.029Z "
                                fill="#A380AE "
                              ></path>
                            </g>
                          </g>
                        </g>
                        <g className="offset-mob ">
                          <g
                            data-from="left "
                            className="ball-with-text ball move-in "
                            data-svg-origin="151.74500274658203 726.8600463867188 "
                            transform="matrix(0.99963,0.02728,-0.02728,0.99963,41.61606,-41.50942) "
                            style={{
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transformOrigin: "0px 0px",
                            }}
                          >
                            <circle
                              id="Ellipse 717_3 "
                              cx="151.745 "
                              cy="726.86 "
                              r="42.419 "
                              transform="rotate(-126.758 151.745 726.86) "
                              fill="#F3EFE6 "
                            ></circle>
                            <g id="Linked Path Group_3 ">
                              <path
                                id="[Copy] Lactose-Free_25 "
                                d="M132.132 749.861L129.962 747.633L129.124 748.449L130.31 749.667L125.417 754.432L126.4 755.442L132.132 749.861Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_26 "
                                d="M128.941 747.067L128.066 745.923L126.897 746.666L126.307 745.896L127.331 744.962L126.462 743.826L120.752 749.528L121.942 751.085L128.941 747.067ZM125.901 747.289L122.551 749.411L122.356 749.535L122.52 749.371L125.445 746.694L125.901
                                    747.289Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_27 "
                                d="M125.511 741.52C124.864 740.381 123.87 740.209 122.522 740.974L121.635 741.477L122.345 742.73L123.65 741.99C124.137 741.713 124.365 741.791 124.528 742.078C124.691 742.365 124.64 742.6 124.153 742.877L120.248 745.092C119.752
                                    745.374 119.524 745.296 119.361 745.009C119.199 744.722 119.249 744.487 119.745 744.205L121.041 743.47L120.33 742.218L119.434 742.726C118.086 743.491 117.732 744.427 118.379 745.567C119.025 746.706 120.011 746.883 121.359
                                    746.118L124.446 744.366C125.794 743.601 126.157 742.66 125.511 741.52Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_28 "
                                d="M124.428 739.401L123.903 738.092L117.564 740.634L117.14 739.576L116.054 740.011L117.43 743.445L118.516 743.01L118.089 741.943L124.428 739.401Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_29 "
                                d="M123.249 735.071C122.927 733.801 122.023 733.37 120.521 733.751L117.07 734.627C115.568 735.008 114.979 735.818 115.301 737.087C115.623 738.357 116.527 738.788 118.029 738.407L121.48 737.532C122.982 737.15 123.571 736.341 123.249
                                    735.071ZM121.581 736.02L117.229 737.124C116.706 737.257 116.489 737.137 116.406 736.807C116.322 736.477 116.464 736.266 116.988 736.133L121.33 735.032C121.844 734.901 122.06 735.022 122.144 735.351C122.228 735.681 122.095
                                    735.89 121.581 736.02Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_30 "
                                d="M122.1 730.487C121.95 729.166 121.134 728.635 119.704 728.798C118.472 728.938 118.038 729.46 117.577 730.187L117.023 731.066C116.811 731.412 116.593 731.618 116.066 731.678L115.768 731.712C115.291 731.766 115.115 731.635 115.077
                                    731.297C115.041 730.979 115.159 730.785 115.736 730.719L116.491 730.633L116.329 729.212L115.733 729.28C114.431 729.428 113.814 730.193 113.952 731.405C114.1 732.707 114.946 733.245 116.198 733.102C117.212 732.987 117.731
                                    732.505 118.2 731.767L118.763 730.877C118.983 730.51 119.211 730.303 119.787 730.237L120.234 730.186C120.741 730.129 120.936 730.247 120.976 730.605C121.017 730.963 120.866 731.141 120.32 731.203L119.306 731.319L119.469
                                    732.75L120.016 732.687C121.546 732.513 122.25 731.799 122.1 730.487Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_31 "
                                d="M121.822 728.233L121.853 725.153L120.683 725.141L120.666 726.811L118.416 726.789L118.432 725.209L117.272 725.197L117.256 726.777L115.006 726.754L115.023 725.084L113.853 725.072L113.822 728.152L121.822 728.233Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_32 "
                                d="M118.964 724.09L117.756 723.922L118.115 721.327L119.324 721.495L118.964 724.09Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_33 "
                                d="M122.555 720.807L122.926 719.447L120.013 718.652L120.445 717.07L119.326 716.764L118.894 718.346L116.337 717.649L116.777 716.038L115.648 715.729L114.837 718.701L122.555 720.807Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_34 "
                                d="M124.899 713.907L125.456 712.579C125.251 712.601 125.026 712.518 124.759 712.406L123.338 711.81C122.702 711.543 122.069 711.527 121.509 712.138C121.532 711.335 121.208 710.917 120.046 710.43L119.926 710.38C118.45 709.761 117.823
                                    710.094 117.235 711.496L116.543 713.147L123.921 716.24L124.466 714.939L121.487 713.691L121.638 713.331C121.758 713.045 122.025 712.821 122.569 713.049L124.202 713.734C124.478 713.85 124.75 713.952 124.899 713.907ZM120.51
                                    713.281L118.066 712.256L118.217 711.897C118.402 711.454 118.613 711.391 119.148 711.615L120.181 712.048C120.577 712.214 120.865 712.432 120.661 712.921L120.51 713.281Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_35 "
                                d="M125.691 712.039L127.237 709.375L126.225 708.788L125.387 710.232L123.44 709.103L124.233 707.737L123.23 707.154L122.437 708.521L120.491 707.392L121.329 705.948L120.317 705.361L118.771 708.025L125.691 712.039Z "
                                fill="#A380AE "
                              ></path>
                              <path
                                id="[Copy] Lactose-Free_36 "
                                d="M127.623 708.83L129.474 706.368L128.538 705.665L127.535 707L125.736 705.648L126.685 704.385L125.758 703.688L124.809 704.951L123.01 703.6L124.013 702.265L123.078 701.562L121.228 704.024L127.623 708.83Z "
                                fill="#A380AE "
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g
                        className="right-group "
                        data-svg-origin="240 20 "
                        transform="matrix(1,0,0,1,200,0) "
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                        }}
                      >
                        <g
                          data-from="right "
                          className="smiley move-in "
                          data-svg-origin="390.9375427246094 771.937646484375 "
                          transform="matrix(0.69229,0.72162,-0.72162,0.69229,677.34104,-44.57542) "
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                          }}
                        >
                          <circle
                            id="Ellipse 705 "
                            cx="399.172 "
                            cy="780.172 "
                            r="41.1722 "
                            fill="#F3EFE6 "
                          ></circle>
                          <path
                            id="Vector 634 "
                            d="M385.126 763.894C386.224 766.455 389.646 766.031 390.574 764.304 "
                            stroke="#473D36 "
                            stroke-width="0.797916 "
                            stroke-linecap="round "
                          ></path>
                          <circle
                            id="Ellipse 729 "
                            cx="393.107 "
                            cy="757.282 "
                            r="1.21095 "
                            transform="rotate(-15.1257 393.107 757.282) "
                            fill="#473D36 "
                          ></circle>
                          <circle
                            id="Ellipse 730 "
                            cx="383.094 "
                            cy="756.229 "
                            r="1.21095 "
                            transform="rotate(-15.1257 383.094 756.229) "
                            fill="#473D36 "
                          ></circle>
                        </g>
                        <g
                          data-from="right "
                          className="ball-with-text "
                          data-svg-origin="420.6129913330078 144.28599548339844 "
                          transform="matrix(0.99963,0.02728,-0.02728,0.99963,26.01322,-49.38928) "
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                          }}
                        >
                          <g>
                            <circle
                              id="Ellipse 717 "
                              cx="420.613 "
                              cy="144.286 "
                              r="42.419 "
                              transform="rotate(-41.696 420.613 144.286) "
                              fill="#F3EFE6 "
                            ></circle>
                          </g>
                          <g data-from="right " id="Linked Path Group ">
                            <path
                              id="[Copy] Lactose-Free "
                              d="M395.361 126.897L397.517 124.402L396.578 123.591L395.4 124.955L389.919 120.22L388.941 121.351L395.361 126.897Z "
                              fill="#A380AE "
                            ></path>
                            <path
                              id="[Copy] Lactose-Free_2 "
                              d="M398.631 124.056L399.76 123.027L398.868 121.86L399.628 121.167L400.708 122.163L401.829 121.141L395.283 115.629L393.747 117.029L398.631 124.056ZM398.118 120.865L395.571 117.519L395.422 117.324L395.61 117.483L398.706 120.329L398.118
                                    120.865Z "
                              fill="#A380AE "
                            ></path>
                            <path
                              id="[Copy] Lactose-Free_3 "
                              d="M403.754 119.415C404.898 118.628 404.989 117.562 404.058 116.207L403.445 115.316L402.187 116.181L403.088 117.492C403.424 117.981 403.363 118.229 403.075 118.427C402.786 118.626 402.533 118.594 402.196 118.105L399.499 114.181C399.157
                                    113.683 399.218 113.435 399.506 113.237C399.794 113.038 400.048 113.07 400.39 113.568L401.285 114.87L402.544 114.005L401.925 113.105C400.994 111.75 399.972 111.462 398.827 112.249C397.682 113.036 397.586 114.093 398.517
                                    115.448L400.65 118.55C401.581 119.905 402.609 120.202 403.754 119.415Z "
                              fill="#A380AE "
                            ></path>
                            <path
                              id="[Copy] Lactose-Free_4 "
                              d="M406.175 117.944L407.51 117.27L404.246 110.804L405.326 110.259L404.766 109.152L401.264 110.92L401.823 112.028L402.911 111.478L406.175 117.944Z "
                              fill="#A380AE "
                            ></path>
                            <path
                              id="[Copy] Lactose-Free_5 "
                              d="M409.981 116.608C411.293 116.152 411.666 115.158 411.126 113.605L409.887 110.039C409.347 108.487 408.437 107.939 407.125 108.395C405.813 108.851 405.44 109.845 405.98 111.398L407.22 114.964C407.76 116.516 408.669 117.065 409.981
                                    116.608ZM408.826 114.933L407.262 110.436C407.074 109.895 407.182 109.655 407.522 109.537C407.863 109.418 408.099 109.549 408.287 110.09L409.848 114.578C410.032 115.109 409.925 115.348 409.584 115.466C409.244 115.585 409.011
                                    115.464 408.826 114.933Z "
                              fill="#A380AE "
                            ></path>
                            <path
                              id="[Copy] Lactose-Free_6 "
                              d="M414.449 115.069C415.831 114.79 416.318 113.88 416.015 112.383C415.754 111.094 415.163 110.684 414.353 110.263L413.374 109.758C412.989 109.565 412.751 109.354 412.64 108.803L412.577 108.491C412.476 107.992 412.598 107.794 412.952
                                    107.723C413.284 107.655 413.501 107.763 413.623 108.366L413.783 109.156L415.269 108.855L415.143 108.232C414.867 106.87 414.003 106.287 412.735 106.544C411.373 106.819 410.882 107.763 411.147 109.072C411.362 110.132 411.918
                                    110.637 412.741 111.065L413.732 111.579C414.14 111.778 414.379 112 414.501 112.603L414.596 113.07C414.703 113.6 414.596 113.817 414.221 113.893C413.847 113.968 413.645 113.825 413.53 113.254L413.315 112.193L411.818 112.496L411.934
                                    113.068C412.258 114.669 413.077 115.347 414.449 115.069Z "
                              fill="#A380AE "
                            ></path>
                            <path
                              id="[Copy] Lactose-Free_7 "
                              d="M416.579 114.599L419.836 114.35L419.742 113.113L417.976 113.248L417.795 110.869L419.466 110.741L419.372 109.515L417.701 109.642L417.52 107.263L419.286 107.128L419.192 105.891L415.935 106.139L416.579 114.599Z "
                              fill="#A380AE "
                            ></path>
                            <path
                              id="[Copy] Lactose-Free_8 "
                              d="M420.822 109.828L420.889 108.536L423.663 108.68L423.597 109.972L420.822 109.828Z "
                              fill="#A380AE "
                            ></path>
                            <path
                              id="[Copy] Lactose-Free_9 "
                              d="M424.044 114.668L425.515 114.936L426.09 111.785L427.801 112.097L428.021 110.887L426.31 110.575L426.814 107.81L428.556 108.128L428.779 106.907L425.565 106.321L424.044 114.668Z "
                              fill="#A380AE "
                            ></path>
                            <path
                              id="[Copy] Lactose-Free_10 "
                              d="M431.245 116.437L432.699 116.904C432.656 116.689 432.724 116.444 432.818 116.151L433.317 114.596C433.541 113.9 433.5 113.229 432.803 112.694C433.655 112.644 434.066 112.264 434.475 110.992L434.517 110.86C435.036 109.245 434.627
                                    108.612 433.092 108.119L431.285 107.539L428.69 115.616L430.114 116.073L431.161 112.812L431.555 112.939C431.868 113.039 432.129 113.301 431.938 113.897L431.364 115.684C431.267 115.987 431.183 116.283 431.245 116.437ZM431.505
                                    111.742L432.364 109.066L432.758 109.193C433.243 109.348 433.329 109.566 433.141 110.151L432.778 111.282C432.638 111.716 432.434 112.04 431.899 111.868L431.505 111.742Z "
                              fill="#A380AE "
                            ></path>
                            <path
                              id="[Copy] Lactose-Free_11 "
                              d="M433.055 117.015L436.011 118.405L436.539 117.282L434.936 116.528L435.951 114.369L437.468 115.082L437.991 113.969L436.475 113.256L437.49 111.096L439.093 111.85L439.62 110.727L436.665 109.337L433.055 117.015Z "
                              fill="#A380AE "
                            ></path>
                            <path
                              id="[Copy] Lactose-Free_12 "
                              d="M436.423 118.654L439.194 120.384L439.851 119.332L438.349 118.394L439.613 116.37L441.034 117.258L441.686 116.214L440.264 115.327L441.528 113.303L443.03 114.241L443.688 113.189L440.917 111.458L436.423 118.654Z "
                              fill="#A380AE "
                            ></path>
                          </g>
                        </g>
                        <g
                          data-from="right "
                          className="smiley move-in "
                          data-svg-origin="273.935205078125 53.935202026367186 "
                          transform="matrix(0.69229,0.72162,-0.72162,0.69229,123.21332,-181.08072) "
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                          }}
                        >
                          <circle
                            id="Ellipse 699_2 "
                            cx="282.419 "
                            cy="62.419 "
                            r="42.419 "
                            fill="#F3EFE6 "
                          ></circle>
                          <path
                            id="Vector 628_2 "
                            d="M298.52 71.8457C299.651 74.4842 303.177 74.0471 304.133 72.2677 "
                            stroke="#473D36 "
                            stroke-width="0.935713 "
                            stroke-linecap="round "
                          ></path>
                          <circle
                            id="Ellipse 612_2 "
                            cx="306.734 "
                            cy="65.038 "
                            r="1.24762 "
                            transform="rotate(-15.1257 306.734 65.038) "
                            fill="#473D36 "
                          ></circle>
                          <circle
                            id="Ellipse 607_2 "
                            cx="296.418 "
                            cy="63.9482 "
                            r="1.24762 "
                            transform="rotate(-15.1257 296.418 63.9482) "
                            fill="#473D36 "
                          ></circle>
                        </g>
                        <g data-from="right " className="ball move-in ">
                          <circle
                            id="Ellipse 702 "
                            cx="481.172 "
                            cy="613.172 "
                            r="36.1722 "
                            fill="#F3EFE6 "
                          ></circle>
                        </g>
                        <g
                          data-from="right "
                          className="smiley move-in "
                          data-svg-origin="397.35458984375 358.35358276367185 "
                          transform="matrix(0.69229,-0.72162,0.72162,0.69229,-136.32513,397.008) "
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transformOrigin: "0px 0px",
                          }}
                        >
                          <circle
                            id="Ellipse 699_3 "
                            r="42.419 "
                            transform="matrix(-0.942039 0.335504 0.335504 0.942039 408.193 369.192) "
                            fill="#F3EFE6 "
                          ></circle>
                          <path
                            id="Vector 628_3 "
                            d="M396.188 383.475C396.008 386.34 392.54 387.111 391.042 385.755 "
                            stroke="#473D36 "
                            stroke-width="0.935713 "
                            stroke-linecap="round "
                          ></path>
                          <circle
                            id="Ellipse 612_3 "
                            r="1.24762 "
                            transform="matrix(-0.996948 0.0780678 0.0780678 0.996948 386.167 379.817) "
                            fill="#473D36 "
                          ></circle>
                          <circle
                            id="Ellipse 607_3 "
                            r="1.24762 "
                            transform="matrix(-0.996948 0.0780678 0.0780678 0.996948 395.519 375.329) "
                            fill="#473D36 "
                          ></circle>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div
                    data-preset="y "
                    data-fromy="400 "
                    className="position-relative should-animate "
                    style={{ opacity: 1 }}
                  >
                    <div>
                      <div className="f1 f3-sm f2-xl lh-093 px-sm-8 px-xl-0 ">
                        Ice Cream,
                      </div>
                      <div className="f1 f3-sm f2-xl lh-093 px-sm-8 px-xl-0 ">
                        Made Easy on the Tummy
                      </div>
                    </div>
                    <div className="position-relative on-top ">
                      <div className="f4 f7-sm f4-2-xl ">
                        All of our Boba Ice
                      </div>
                      <div className="f4 f7-sm f4-2-xl ">Creams are made</div>
                    </div>
                    <div className="position-relative on-top d-flex justify-content-center align-items-start pt-0-5 ">
                      <div
                        data-id="waypoint-288 "
                        className="synchronized-waypoint position-relative "
                      >
                        <img
                          alt="Boba Ice Creams "
                          src={number10}
                          className="number "
                        />
                        <img
                          alt="Boba Ice Creams "
                          src={number0}
                          className="number number-0 "
                        />
                        <div className="position-absolute t-0 r-0 founders ml-custom font-weight-bold f5 f6-1-sm f4-2-xl ">
                          %
                        </div>
                      </div>
                    </div>
                    <svg
                      viewBox="0 0 2207 2115 "
                      fill="none "
                      xmlns="http://www.w3.org/2000/svg "
                      className="rogue-ball d-none d-xl-block position-absolute w-100 h-100 z-2 "
                    >
                      <g
                        className="ball-with-text ball ball-10 "
                        data-svg-origin="1544.2000732421875 794.2219848632812 "
                        transform="matrix(0.99963,0.02728,-0.02728,0.99963,74.89976,-133.04342) "
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transformOrigin: "0px 0px",
                        }}
                      >
                        <circle
                          id="Ellipse 717_5 "
                          cx="1544.2 "
                          cy="794.222 "
                          r="136 "
                          transform="rotate(3.42121 1544.2 794.222) "
                          fill="#F3EFE6 "
                        ></circle>
                        <g id="Linked Path Group_5 ">
                          <path
                            id="[Copy] Lactose-Free_49 "
                            d="M1527.2 671.86L1531.98 671.521L1533.63 694.684L1539.39 694.275L1539.67 698.243L1529.13 698.992L1527.2 671.86Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_50 "
                            d="M1545.79 670.858L1552.45 671.18L1554.73 698.522L1549.88 698.287L1549.7 693.581L1546.4 693.422L1545.77 698.089L1540.88 697.852L1545.79 670.858ZM1549.52 689.59L1548.98 676.118L1548.91 675.332L1548.81 676.11L1546.97 689.467L1549.52
                                    689.59Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_51 "
                            d="M1561.81 700.877C1557.46 700.064 1555.78 697.061 1556.75 691.87L1558.97 680.007C1559.94 674.838 1562.6 672.66 1566.94 673.474C1571.29 674.288 1572.97 677.279 1572.01 682.448L1571.36 685.89L1566.55 684.989L1567.48 680.009C1567.65
                                    679.096 1567.63 678.434 1567.4 678.023C1567.2 677.616 1566.81 677.359 1566.23 677.25C1565.65 677.142 1565.19 677.239 1564.83 677.541C1564.5 677.847 1564.24 678.457 1564.07 679.371L1561.26 694.376C1561.09 695.267 1561.11
                                    695.916 1561.31 696.322C1561.54 696.733 1561.94 696.993 1562.52 697.101C1563.09 697.21 1563.55 697.111 1563.89 696.804C1564.24 696.502 1564.5 695.905 1564.67 695.014L1565.61 690.001L1570.42 690.903L1569.78 694.312C1568.81
                                    699.503 1566.15 701.691 1561.81 700.877Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_52 "
                            d="M1577.31 680.725L1573.6 679.495L1574.85 675.719L1586.79 679.676L1585.54 683.452L1581.86 682.233L1574.56 704.276L1570.01 702.768L1577.31 680.725Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_53 "
                            d="M1582.42 708.64C1578.44 706.707 1577.6 703.375 1579.9 698.647L1585.2 687.762C1587.5 683.034 1590.64 681.636 1594.61 683.57C1598.59 685.504 1599.42 688.835 1597.12 693.564L1591.83 704.448C1589.53 709.176 1586.39 710.574 1582.42 708.64ZM1583.61
                                    702.226C1583.22 703.021 1583.07 703.641 1583.16 704.086C1583.26 704.541 1583.58 704.897 1584.11 705.155C1584.64 705.413 1585.11 705.438 1585.51 705.231C1585.93 705.034 1586.34 704.538 1586.73 703.743L1593.39 690.046C1593.79
                                    689.23 1593.93 688.595 1593.83 688.14C1593.75 687.675 1593.45 687.313 1592.92 687.055C1592.39 686.797 1591.91 686.777 1591.47 686.995C1591.07 687.202 1590.67 687.703 1590.29 688.498L1583.61 702.226Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_54 "
                            d="M1595.47 714.94C1593.6 713.695 1592.58 712.224 1592.4 710.527C1592.23 708.83 1592.87 706.887 1594.33 704.699L1595.36 703.143L1599.44 705.858L1597.51 708.744C1597.01 709.498 1596.77 710.102 1596.8 710.554C1596.82 711.007 1597.1 711.409
                                    1597.63 711.761C1598.14 712.101 1598.59 712.198 1598.99 712.053C1599.41 711.903 1599.87 711.469 1600.34 710.752L1601.19 709.479C1601.71 708.705 1602 708.026 1602.06 707.442C1602.13 706.838 1602.04 706.162 1601.78 705.414L1600.7
                                    702.001C1600.21 700.448 1600.01 699.049 1600.11 697.805C1600.21 696.541 1600.72 695.23 1601.62 693.872C1602.84 692.043 1604.25 690.936 1605.84 690.552C1607.44 690.15 1609.15 690.552 1610.96 691.758C1612.69 692.915 1613.7
                                    694.291 1613.97 695.888C1614.27 697.479 1613.8 699.198 1612.57 701.047L1611.44 702.744L1607.39 700.048L1608.83 697.898C1609.34 697.124 1609.58 696.521 1609.54 696.087C1609.52 695.634 1609.26 695.245 1608.77 694.918C1608.28
                                    694.591 1607.83 694.494 1607.41 694.626C1607.03 694.751 1606.62 695.144 1606.18 695.805L1605.61 696.653C1605.15 697.351 1604.88 697.993 1604.82 698.577C1604.77 699.143 1604.86 699.778 1605.1 700.482L1606.17 703.848C1606.5
                                    704.942 1606.71 705.898 1606.79 706.715C1606.91 707.526 1606.84 708.406 1606.59 709.355C1606.35 710.286 1605.86 711.307 1605.11 712.42C1602.36 716.551 1599.15 717.391 1595.47 714.94Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_55 "
                            d="M1619.49 698.358L1627.42 705.195L1624.82 708.208L1620.52 704.501L1615.53 710.295L1619.59 713.802L1617.02 716.79L1612.95 713.282L1607.96 719.077L1612.26 722.784L1609.66 725.797L1601.73 718.96L1619.49 698.358Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_56 "
                            d="M1621.21 720.587L1624.3 717.815L1630.25 724.442L1627.17 727.214L1621.21 720.587Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_57 "
                            d="M1642.73 723.498L1648.67 732.123L1645.4 734.379L1642.18 729.703L1634.76 734.813L1637.92 739.406L1634.67 741.643L1631.51 737.05L1623.05 742.874L1620.33 738.926L1642.73 723.498Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_58 "
                            d="M1630.32 755.956C1630.41 755.732 1630.61 755.512 1630.94 755.297C1631.28 755.071 1631.73 754.813 1632.3 754.524L1637.66 751.785C1638.48 751.362 1638.98 750.881 1639.13 750.342C1639.3 749.824 1639.25 749.292 1638.97 748.747L1638.36
                                    747.567L1628.59 752.565L1626.4 748.297L1650.62 735.916L1653.39 741.335C1654.2 742.909 1654.65 744.233 1654.74 745.307C1654.84 746.401 1654.54 747.382 1653.84 748.25C1653.15 749.107 1652.01 749.949 1650.39 750.774L1650 750.975C1648.71
                                    751.636 1647.61 752.066 1646.72 752.267C1645.86 752.477 1645.09 752.479 1644.4 752.272C1643.74 752.075 1643.05 751.661 1642.35 751.028C1642.51 752.345 1642.31 753.441 1641.74 754.318C1641.19 755.185 1640.34 755.912 1639.19
                                    756.5L1634.53 758.884C1634 759.152 1633.58 759.394 1633.26 759.61C1632.95 759.815 1632.72 760.05 1632.55 760.315L1630.32 755.956ZM1642.18 747.107C1642.56 747.854 1643.01 748.245 1643.54 748.281C1644.1 748.326 1644.75 748.158
                                    1645.5 747.777L1648.89 746.043C1649.78 745.589 1650.31 745.154 1650.47 744.737C1650.66 744.309 1650.57 743.732 1650.2 743.006L1649.6 741.825L1641.57 745.926L1642.18 747.107Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_59 "
                            d="M1658.68 752.141L1662.21 761.999L1658.46 763.341L1656.55 757.995L1649.35 760.574L1651.16 765.632L1647.45 766.961L1645.64 761.904L1638.43 764.483L1640.35 769.828L1636.6 771.17L1633.07 761.311L1658.68 752.141Z "
                            fill="#A380AE "
                          ></path>
                          <path
                            id="[Copy] Lactose-Free_60 "
                            d="M1663.41 766.449L1665.75 776.657L1661.87 777.545L1660.6 772.01L1653.15 773.718L1654.35 778.954L1650.5 779.835L1649.3 774.598L1641.85 776.306L1643.11 781.841L1639.24 782.729L1636.9 772.521L1663.41 766.449Z "
                            fill="#A380AE "
                          ></path>
                        </g>
                      </g>
                    </svg>
                    <div className="d-flex flex-center pt-0-25 pt-sm-0-5 pt-xl-0-5 ">
                      <div className="bottom-headline bg-purple p-0-375 p-xl-0-75 ">
                        <img
                          src={lactoseFree}
                          alt="Boba Ice Cream "
                          className="lactose-free "
                        />
                      </div>
                    </div>
                    <div className="pt-0-75 pb-5 pb-sm-8-5 pb-xl-8 ">
                      <div className="f4 f7-sm f4-2-xl ">
                        so its easy on the tummy
                      </div>
                      <div className="f4 f7-sm f4-2-xl ">
                        and enjoyable to eat.
                      </div>
                    </div>
                    <div className="mt-5-5 mt-md-0 px-0-75 px-sm-1 px-xl-0 ">
                      <div className="founders col-xl-5 px-0-25 px-sm-2 px-xl-0-5 pb-0-5 pb-sm-2-5 pb-xl-1-25 f7 custom-sm-font f10-5-xl mx-auto ">
                        FYI, more than 50% of the world’s population is missing
                        “lactase” an enzyme that helps make dairy easy to
                        digest. We made sure to take care of the hard part for
                        you already.
                      </div>
                      <div className="col-xl-11 px-xl-3-25 f6 custom-sm-font f8-1-xl mx-auto ">
                        We take pride in sourcing superior quality ingredients
                        worldwide and create small⁃batch, one⁃of⁃a⁃kind flavors.
                        We craft only super⁃premium ice creams with magic of
                        Boba.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-5a623b3d=" "
                  data-id="waypoint-291 "
                  className="synchronized-waypoint team px-0-5 pt-xl-5-5 py-2 px-lg-1 position-relative bg-gray "
                >
                  <Fade direction="up">
                    <div
                    data-v-5a623b3d=" "
                    className="color-red text-center d-flex flex-column pp-bold text-uppercase lh-12 z-2 position-relative "
                  >
                    <span
                      data-v-5a623b3d=" "
                      data-preset="opacity,y "
                      data-fromy="100% "
                      data-toy="0% "
                      data-delay="0.1 "
                      className="should-animate d-inline-block f2-2-2 f3-sm f2-xl lh-1-05 "
                      style={{ opacity: 1 }}
                    >
                      The Boba Squad
                    </span>
                    <span
                      data-v-5a623b3d=" "
                      data-preset="opacity,y "
                      data-fromy="100% "
                      data-toy="0% "
                      data-delay="0.24285714285714285 "
                      className="should-animate d-inline-block f2-2-2 f3-sm f2-xl lh-1-05 "
                      style={{ opacity: 1 }}
                    >
                      We’re Here To Shake
                    </span>
                    <span
                      data-v-5a623b3d=" "
                      data-preset="opacity,y "
                      data-fromy="100% "
                      data-toy="0% "
                      data-delay="0.3857142857142857 "
                      className="should-animate d-inline-block f2-2-2 f3-sm f2-xl lh-1-05 "
                      style={{ opacity: 1 }}
                    >
                      Things Up!
                    </span>
                  </div>
                  </Fade>

                  <div data-v-5a623b3d=" " className="position-relative">
                    <button
                      data-v-5a623b3d=" "
                      aria-label="arrow-button "
                      className="arrow-button position-absolute color-black d-none d-lg-block "
                      
                    >
                      <img
                        data-v-5a623b3d=" "
                        alt="Boba Ice Creams "
                        src={b7a}
                      />
                    </button>
                    
                    <div
                          data-v-5a623b3d=" "
                          className="d-none d-lg-inline-flex align-items-start "
                        >
                          <div
                            data-v-9c24d646=" "
                            data-v-5a623b3d=" "
                            className="team-member position-relative d-inline-block p-1 should-animate "
                            data-preset="x "
                            data-fromx="0 "
                            style={stylesE17}
                          >
                            <div
                              data-v-9c24d646=" "
                              className="position-relative "
                            >
                              <svg
                                data-v-9c24d646=" "
                                width="300 "
                                height="300 "
                                viewBox="0 0 300 300 "
                                fill="none "
                                xmlns="http://www.w3.org/2000/svg "
                              >
                                <defs data-v-9c24d646=" ">
                                  <path
                                    data-v-9c24d646=" "
                                    fill="transparent "
                                    id="circlePath292 "
                                    d="M0,150a150,150 0 1,0 300,0a150,150 0 1,0 -300,0 "
                                  ></path>
                                </defs>
                                <text data-v-9c24d646=" " fill="#000 ">
                                  <textPath
                                    data-v-9c24d646=" "
                                    startOffset="20% "
                                    text-anchor="middle "
                                    xlinkHref="#circlePath292 "
                                    className="svg-text pp-bold "
                                  >
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-name "
                                    >
                                      Charn
                                    </tspan>
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-position founders "
                                    >
                                      "Chief happiness maker "
                                    </tspan>
                                  </textPath>
                                </text>
                              </svg>
                              <figure
                                data-v-23b40a86=" "
                                data-v-9c24d646=" "
                                className="spd overflow-hidden position-relative "
                                style={stylesE18}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=1050&amp;w=1050&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=1365&amp;w=1365&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1200px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=800&amp;w=800&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=1040&amp;w=1040&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=500&amp;w=500&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=650&amp;w=650&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=300&amp;w=300&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=390&amp;w=390&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="Charn "
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                            <div data-v-9c24d646=" " className="slot ">
                              <div
                                data-v-5a623b3d=" "
                                data-v-9c24d646=" "
                                className="bubble-wrapper-0 "
                              >
                                <div
                                  data-v-4bd6f78a=" "
                                  data-v-5a623b3d=" "
                                  data-id="waypoint-295 "
                                  className="synchronized-waypoint floating-bubble bubble bubble-1 "
                                  data-v-9c24d646=" "
                                  //   style={{
                                  //     translate: "none",
                                  //     rotate: "none",
                                  //     scale: "none",
                                  //     transform:
                                  //       "translate3d(-0.3474%, -31.7151%, 0px) rotate(11.8518deg)",
                                  //   }}
                                  style={transformStyle}
                                >
                                  <div
                                    data-v-4bd6f78a=" "
                                    className="wrapper "
                                    style={{
                                      opacity: 1,
                                      translate: "none",
                                      rotate: "none",
                                      scale: "none",
                                      transform: "translate(0px, 0%)",
                                    }}
                                  >
                                    <svg
                                      data-v-4bd6f78a=" "
                                      width="195 "
                                      height="194 "
                                      viewBox="0 0 195 194 "
                                      fill="none "
                                      xmlns="http://www.w3.org/2000/svg "
                                      className="w-100 h-100 "
                                    >
                                      <ellipse
                                        data-v-4bd6f78a=" "
                                        cx="97.0409 "
                                        cy="96.8766 "
                                        rx="76.4975 "
                                        ry="76.2338 "
                                        transform="rotate(-18.8688 97.0409 96.8766) "
                                        fill="#473D36 "
                                      ></ellipse>
                                      <path
                                        data-v-4bd6f78a=" "
                                        d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894 "
                                        stroke="#473D36 "
                                        stroke-width="2.45915 "
                                        stroke-linecap="round "
                                      ></path>
                                      <circle
                                        data-v-4bd6f78a=" "
                                        cx="134.577 "
                                        cy="85.9991 "
                                        r="2.11028 "
                                        transform="rotate(-18.8688 134.577 85.9991) "
                                        fill="#473D36 "
                                      ></circle>
                                      <circle
                                        data-v-4bd6f78a=" "
                                        cx="117.053 "
                                        cy="85.2973 "
                                        r="2.11028 "
                                        transform="rotate(-18.8688 117.053 85.2973) "
                                        fill="#473D36 "
                                      ></circle>
                                      <path
                                        data-v-4bd6f78a=" "
                                        d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z "
                                        fill="#F3EFE6 "
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <div
                                  data-v-4bd6f78a=" "
                                  data-v-5a623b3d=" "
                                  data-id="waypoint-297 "
                                  className="synchronized-waypoint floating-bubble bubble bubble-2 "
                                  data-v-9c24d646=" "
                                  //   style={{
                                  //     translate: "none",
                                  //     rotate: "none",
                                  //     scale: "none",
                                  //     transform:
                                  //       "translate3d(2.244%, -11.7539%, 0px) rotate(-11.8518deg)",
                                  //   }}
                                  style={transformStyle}
                                >
                                  <div
                                    data-v-4bd6f78a=" "
                                    className="wrapper "
                                    style={{
                                      opacity: 1,
                                      translate: "none",
                                      rotate: "none",
                                      scale: "none",
                                      transform: "translate(0px, 0%)",
                                    }}
                                  >
                                    <svg
                                      data-v-4bd6f78a=" "
                                      width="195 "
                                      height="194 "
                                      viewBox="0 0 195 194 "
                                      fill="none "
                                      xmlns="http://www.w3.org/2000/svg "
                                      className="w-100 h-100 "
                                    >
                                      <ellipse
                                        data-v-4bd6f78a=" "
                                        cx="97.0409 "
                                        cy="96.8766 "
                                        rx="76.4975 "
                                        ry="76.2338 "
                                        transform="rotate(-18.8688 97.0409 96.8766) "
                                        fill="#473D36 "
                                      ></ellipse>
                                      <path
                                        data-v-4bd6f78a=" "
                                        d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894 "
                                        stroke="#473D36 "
                                        stroke-width="2.45915 "
                                        stroke-linecap="round "
                                      ></path>
                                      <circle
                                        data-v-4bd6f78a=" "
                                        cx="134.577 "
                                        cy="85.9991 "
                                        r="2.11028 "
                                        transform="rotate(-18.8688 134.577 85.9991) "
                                        fill="#473D36 "
                                      ></circle>
                                      <circle
                                        data-v-4bd6f78a=" "
                                        cx="117.053 "
                                        cy="85.2973 "
                                        r="2.11028 "
                                        transform="rotate(-18.8688 117.053 85.2973) "
                                        fill="#473D36 "
                                      ></circle>
                                      <path
                                        data-v-4bd6f78a=" "
                                        d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z "
                                        fill="#F3EFE6 "
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <div
                                  data-v-4bd6f78a=" "
                                  data-v-5a623b3d=" "
                                  data-id="waypoint-299 "
                                  className="synchronized-waypoint floating-bubble bubble bubble-3 "
                                  data-v-9c24d646=" "
                                  style={{
                                    translate: "none",
                                    rotate: "none",
                                    scale: "none",
                                    transform:
                                      "translate3d(0.7979%, -22.2875%, 0px) rotate(11.8518deg)",
                                  }}
                                >
                                  <div
                                    data-v-4bd6f78a=" "
                                    className="wrapper "
                                    style={{
                                      opacity: 0,
                                      translate: "none",
                                      rotate: "none",
                                      scale: "none",
                                      transform:
                                        "translate(0px, -20%) scale(0, 0)",
                                    }}
                                  >
                                    <svg
                                      data-v-4bd6f78a=" "
                                      width="195 "
                                      height="194 "
                                      viewBox="0 0 195 194 "
                                      fill="none "
                                      xmlns="http://www.w3.org/2000/svg "
                                      className="w-100 h-100 "
                                    >
                                      <ellipse
                                        data-v-4bd6f78a=" "
                                        cx="97.0409 "
                                        cy="96.8766 "
                                        rx="76.4975 "
                                        ry="76.2338 "
                                        transform="rotate(-18.8688 97.0409 96.8766) "
                                        fill="#473D36 "
                                      ></ellipse>
                                      <path
                                        data-v-4bd6f78a=" "
                                        d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894 "
                                        stroke="#473D36 "
                                        stroke-width="2.45915 "
                                        stroke-linecap="round "
                                      ></path>
                                      <circle
                                        data-v-4bd6f78a=" "
                                        cx="134.577 "
                                        cy="85.9991 "
                                        r="2.11028 "
                                        transform="rotate(-18.8688 134.577 85.9991) "
                                        fill="#473D36 "
                                      ></circle>
                                      <circle
                                        data-v-4bd6f78a=" "
                                        cx="117.053 "
                                        cy="85.2973 "
                                        r="2.11028 "
                                        transform="rotate(-18.8688 117.053 85.2973) "
                                        fill="#473D36 "
                                      ></circle>
                                      <path
                                        data-v-4bd6f78a=" "
                                        d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z "
                                        fill="#F3EFE6 "
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-9c24d646=" "
                            data-v-5a623b3d=" "
                            className="team-member position-relative d-inline-block p-1 should-animate "
                            data-preset="x "
                            data-fromx="300 "
                            style={stylesE19}
                          >
                            <div
                              data-v-9c24d646=" "
                              className="position-relative "
                            >
                              <svg
                                data-v-9c24d646=" "
                                width="300 "
                                height="300 "
                                viewBox="0 0 300 300 "
                                fill="none "
                                xmlns="http://www.w3.org/2000/svg "
                              >
                                <defs data-v-9c24d646=" ">
                                  <path
                                    data-v-9c24d646=" "
                                    fill="transparent "
                                    id="circlePath300 "
                                    d="M0,150a150,150 0 1,0 300,0a150,150 0 1,0 -300,0 "
                                  ></path>
                                </defs>
                                <text data-v-9c24d646=" " fill="#000 ">
                                  <textPath
                                    data-v-9c24d646=" "
                                    startOffset="20% "
                                    text-anchor="middle "
                                    xlinkHref="#circlePath300 "
                                    className="svg-text pp-bold "
                                  >
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-name "
                                    >
                                      Chungi
                                    </tspan>
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-position founders "
                                    >
                                      Boba "Van Gogh " Director
                                    </tspan>
                                  </textPath>
                                </text>
                              </svg>
                              <figure
                                data-v-23b40a86=" "
                                data-v-9c24d646=" "
                                className="spd overflow-hidden position-relative "
                                style={stylesF7}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=1050&amp;w=1050&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=1365&amp;w=1365&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1200px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=800&amp;w=800&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=1040&amp;w=1040&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=500&amp;w=500&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=650&amp;w=650&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=300&amp;w=300&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=390&amp;w=390&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="Chungi "
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                            <div data-v-9c24d646=" " className="slot ">
                              <div
                                data-v-4bd6f78a=" "
                                data-v-5a623b3d=" "
                                data-id="waypoint-303 "
                                className="synchronized-waypoint floating-bubble bubble "
                                data-v-9c24d646=" "
                                // style={{
                                //   translate: "none",
                                //   rotate: "none",
                                //   scale: "none",
                                //   transform:
                                //     "translate3d(-6.3203%, -36.051%, 0px) rotate(11.8518deg)",
                                // }}
                                style={transformStyle}
                              >
                                <div
                                  data-v-4bd6f78a=" "
                                  className="wrapper "
                                  style={{
                                    opacity: 1,
                                    translate: "none",
                                    rotate: "none",
                                    scale: "none",
                                    transform: "translate(0px, 0%) ",
                                  }}
                                >
                                  <svg
                                    data-v-4bd6f78a=" "
                                    width="195 "
                                    height="194 "
                                    viewBox="0 0 195 194 "
                                    fill="none "
                                    xmlns="http://www.w3.org/2000/svg "
                                    className="w-100 h-100 "
                                  >
                                    <ellipse
                                      data-v-4bd6f78a=" "
                                      cx="97.0409 "
                                      cy="96.8766 "
                                      rx="76.4975 "
                                      ry="76.2338 "
                                      transform="rotate(-18.8688 97.0409 96.8766) "
                                      fill="#E07390 "
                                    ></ellipse>
                                    <path
                                      data-v-4bd6f78a=" "
                                      d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894 "
                                      stroke="#473D36 "
                                      stroke-width="2.45915 "
                                      stroke-linecap="round "
                                    ></path>
                                    <circle
                                      data-v-4bd6f78a=" "
                                      cx="134.577 "
                                      cy="85.9991 "
                                      r="2.11028 "
                                      transform="rotate(-18.8688 134.577 85.9991) "
                                      fill="#473D36 "
                                    ></circle>
                                    <circle
                                      data-v-4bd6f78a=" "
                                      cx="117.053 "
                                      cy="85.2973 "
                                      r="2.11028 "
                                      transform="rotate(-18.8688 117.053 85.2973) "
                                      fill="#473D36 "
                                    ></circle>
                                    <path
                                      data-v-4bd6f78a=" "
                                      d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z "
                                      fill="#F3EFE6 "
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-9c24d646=" "
                            data-v-5a623b3d=" "
                            className="team-member position-relative d-inline-block p-1 should-animate "
                            data-preset="x "
                            data-fromx="600 "
                            style={stylesE20}
                          >
                            <div
                              data-v-9c24d646=" "
                              className="position-relative "
                            >
                              <svg
                                data-v-9c24d646=" "
                                width="300 "
                                height="300 "
                                viewBox="0 0 300 300 "
                                fill="none "
                                xmlns="http://www.w3.org/2000/svg "
                              >
                                <defs data-v-9c24d646=" ">
                                  <path
                                    data-v-9c24d646=" "
                                    fill="transparent "
                                    id="circlePath304 "
                                    d="M0,150a150,150 0 1,0 300,0a150,150 0 1,0 -300,0 "
                                  ></path>
                                </defs>
                                <text data-v-9c24d646=" " fill="#000 ">
                                  <textPath
                                    data-v-9c24d646=" "
                                    startOffset="40% "
                                    text-anchor="middle "
                                    xlinkHref="#circlePath304 "
                                    className="svg-text pp-bold "
                                  >
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-name "
                                    >
                                      Doug
                                    </tspan>
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-position founders "
                                    >
                                      "Chief Boba Tech Wiz "
                                    </tspan>
                                  </textPath>
                                </text>
                              </svg>
                              <figure
                                data-v-23b40a86=" "
                                data-v-9c24d646=" "
                                className="spd overflow-hidden position-relative "
                                style={stylesF7}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=1050&amp;w=1050&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=1365&amp;w=1365&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1200px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=800&amp;w=800&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=1040&amp;w=1040&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=500&amp;w=500&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=650&amp;w=650&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=300&amp;w=300&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=390&amp;w=390&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="Doug "
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                            <div data-v-9c24d646=" " className="slot "></div>
                          </div>
                          <div
                            data-v-9c24d646=" "
                            data-v-5a623b3d=" "
                            className="team-member position-relative d-inline-block p-1 should-animate "
                            data-preset="x "
                            data-fromx="900 "
                            style={stylesE21}
                          >
                            <div
                              data-v-9c24d646=" "
                              className="position-relative "
                            >
                              <svg
                                data-v-9c24d646=" "
                                width="300 "
                                height="300 "
                                viewBox="0 0 300 300 "
                                fill="none "
                                xmlns="http://www.w3.org/2000/svg "
                              >
                                <defs data-v-9c24d646=" ">
                                  <path
                                    data-v-9c24d646=" "
                                    fill="transparent "
                                    id="circlePath306 "
                                    d="M0,150a150,150 0 1,0 300,0a150,150 0 1,0 -300,0 "
                                  ></path>
                                </defs>
                                <text data-v-9c24d646=" " fill="#000 ">
                                  <textPath
                                    data-v-9c24d646=" "
                                    startOffset="20% "
                                    text-anchor="middle "
                                    xlinkHref="#circlePath306 "
                                    className="svg-text pp-bold "
                                  >
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-name "
                                    >
                                      Mitch
                                    </tspan>
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-position founders "
                                    >
                                      "Boba Hype Man "
                                    </tspan>
                                  </textPath>
                                </text>
                              </svg>
                              <figure
                                data-v-23b40a86=" "
                                data-v-9c24d646=" "
                                className="spd overflow-hidden position-relative "
                                style={stylesF7}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=1050&amp;w=1050&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=1365&amp;w=1365&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1200px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=800&amp;w=800&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=1040&amp;w=1040&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=500&amp;w=500&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=650&amp;w=650&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=300&amp;w=300&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=390&amp;w=390&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="Mitch "
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                            <div data-v-9c24d646=" " className="slot "></div>
                          </div>
                          <div
                            data-v-9c24d646=" "
                            data-v-5a623b3d=" "
                            className="team-member position-relative d-inline-block p-1 should-animate "
                            data-preset="x "
                            data-fromx="1200 "
                            style={stylesE22}
                          >
                            <div
                              data-v-9c24d646=" "
                              className="position-relative "
                            >
                              <svg
                                data-v-9c24d646=" "
                                width="300 "
                                height="300 "
                                viewBox="0 0 300 300 "
                                fill="none "
                                xmlns="http://www.w3.org/2000/svg "
                              >
                                <defs data-v-9c24d646=" ">
                                  <path
                                    data-v-9c24d646=" "
                                    fill="transparent "
                                    id="circlePath308 "
                                    d="M0,150a150,150 0 1,0 300,0a150,150 0 1,0 -300,0 "
                                  ></path>
                                </defs>
                                <text data-v-9c24d646=" " fill="#000 ">
                                  <textPath
                                    data-v-9c24d646=" "
                                    startOffset="25% "
                                    text-anchor="middle "
                                    xlinkHref="#circlePath308 "
                                    className="svg-text pp-bold "
                                  >
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-name "
                                    >
                                      Olivia
                                    </tspan>
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-position founders "
                                    >
                                      Happiness flavor creator
                                    </tspan>
                                  </textPath>
                                </text>
                              </svg>
                              <figure
                                data-v-23b40a86=" "
                                data-v-9c24d646=" "
                                className="spd overflow-hidden position-relative "
                                style={stylesE23}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=1050&amp;w=1050&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=1365&amp;w=1365&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1200px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=800&amp;w=800&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=1040&amp;w=1040&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=500&amp;w=500&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=650&amp;w=650&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=300&amp;w=300&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=390&amp;w=390&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="Olivia "
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                            <div data-v-9c24d646=" " className="slot ">
                              <div
                                data-v-5a623b3d=" "
                                data-v-9c24d646=" "
                                className="bubble-wrapper-4 "
                              >
                                <div
                                  data-v-4bd6f78a=" "
                                  data-v-5a623b3d=" "
                                  data-id="waypoint-311 "
                                  className="synchronized-waypoint floating-bubble bubble bubble-1 "
                                  data-v-9c24d646=" "
                                  //   style={{
                                  //     translate: "none",
                                  //     rotate: "none",
                                  //     scale: "none",
                                  //     transform:
                                  //       "translate3d(-4.1728%, -28.6906%, 0px) rotate(11.8518deg)",
                                  //   }}
                                  style={transformStyle}
                                >
                                  <div
                                    data-v-4bd6f78a=" "
                                    className="wrapper "
                                    style={{
                                      opacity: 1,
                                      translate: "none",
                                      rotate: "none",
                                      scale: "none",
                                      transform: "translate(0px, 0%)",
                                    }}
                                  >
                                    <svg
                                      data-v-4bd6f78a=" "
                                      width="195 "
                                      height="194 "
                                      viewBox="0 0 195 194 "
                                      fill="none "
                                      xmlns="http://www.w3.org/2000/svg "
                                      className="w-100 h-100 "
                                    >
                                      <ellipse
                                        data-v-4bd6f78a=" "
                                        cx="97.0409 "
                                        cy="96.8766 "
                                        rx="76.4975 "
                                        ry="76.2338 "
                                        transform="rotate(-18.8688 97.0409 96.8766) "
                                        fill="#473D36 "
                                      ></ellipse>
                                      <path
                                        data-v-4bd6f78a=" "
                                        d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894 "
                                        stroke="#473D36 "
                                        stroke-width="2.45915 "
                                        stroke-linecap="round "
                                      ></path>
                                      <circle
                                        data-v-4bd6f78a=" "
                                        cx="134.577 "
                                        cy="85.9991 "
                                        r="2.11028 "
                                        transform="rotate(-18.8688 134.577 85.9991) "
                                        fill="#473D36 "
                                      ></circle>
                                      <circle
                                        data-v-4bd6f78a=" "
                                        cx="117.053 "
                                        cy="85.2973 "
                                        r="2.11028 "
                                        transform="rotate(-18.8688 117.053 85.2973) "
                                        fill="#473D36 "
                                      ></circle>
                                      <path
                                        data-v-4bd6f78a=" "
                                        d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z "
                                        fill="#F3EFE6 "
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                <div
                                  data-v-4bd6f78a=" "
                                  data-v-5a623b3d=" "
                                  data-id="waypoint-313 "
                                  className="synchronized-waypoint floating-bubble bubble bubble-2 "
                                  data-v-9c24d646=" "
                                  //   style={{
                                  //     translate: "none",
                                  //     rotate: "none",
                                  //     scale: "none",
                                  //     transform:
                                  //       "translate3d(7.6522%, 36.969%, 0px) rotate(11.8518deg)",
                                  //   }}
                                  style={transformStyle}
                                >
                                  <div
                                    data-v-4bd6f78a=" "
                                    className="wrapper "
                                    style={{
                                      opacity: 1,
                                      translate: "none",
                                      rotate: "none",
                                      scale: "none",
                                      transform: "translate(0px, 0%)",
                                    }}
                                  >
                                    <svg
                                      data-v-4bd6f78a=" "
                                      width="195 "
                                      height="194 "
                                      viewBox="0 0 195 194 "
                                      fill="none "
                                      xmlns="http://www.w3.org/2000/svg "
                                      className="w-100 h-100 "
                                    >
                                      <ellipse
                                        data-v-4bd6f78a=" "
                                        cx="97.0409 "
                                        cy="96.8766 "
                                        rx="76.4975 "
                                        ry="76.2338 "
                                        transform="rotate(-18.8688 97.0409 96.8766) "
                                        fill="#473D36 "
                                      ></ellipse>
                                      <path
                                        data-v-4bd6f78a=" "
                                        d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894 "
                                        stroke="#473D36 "
                                        stroke-width="2.45915 "
                                        stroke-linecap="round "
                                      ></path>
                                      <circle
                                        data-v-4bd6f78a=" "
                                        cx="134.577 "
                                        cy="85.9991 "
                                        r="2.11028 "
                                        transform="rotate(-18.8688 134.577 85.9991) "
                                        fill="#473D36 "
                                      ></circle>
                                      <circle
                                        data-v-4bd6f78a=" "
                                        cx="117.053 "
                                        cy="85.2973 "
                                        r="2.11028 "
                                        transform="rotate(-18.8688 117.053 85.2973) "
                                        fill="#473D36 "
                                      ></circle>
                                      <path
                                        data-v-4bd6f78a=" "
                                        d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z "
                                        fill="#F3EFE6 "
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-9c24d646=" "
                            data-v-5a623b3d=" "
                            className="team-member position-relative d-inline-block p-1 should-animate "
                            data-preset="x "
                            data-fromx="1500 "
                            style={stylesE24}
                          >
                            <div
                              data-v-9c24d646=" "
                              className="position-relative "
                            >
                              <svg
                                data-v-9c24d646=" "
                                width="300 "
                                height="300 "
                                viewBox="0 0 300 300 "
                                fill="none "
                                xmlns="http://www.w3.org/2000/svg "
                              >
                                <defs data-v-9c24d646=" ">
                                  <path
                                    data-v-9c24d646=" "
                                    fill="transparent "
                                    id="circlePath314 "
                                    d="M0,150a150,150 0 1,0 300,0a150,150 0 1,0 -300,0 "
                                  ></path>
                                </defs>
                                <text data-v-9c24d646=" " fill="#000 ">
                                  <textPath
                                    data-v-9c24d646=" "
                                    startOffset="40% "
                                    text-anchor="middle "
                                    xlinkHref="#circlePath314 "
                                    className="svg-text pp-bold "
                                  >
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-name "
                                    >
                                      Nick
                                    </tspan>
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-position founders "
                                    >
                                      Boba Fortune Teller
                                    </tspan>
                                  </textPath>
                                </text>
                              </svg>
                              <figure
                                data-v-23b40a86=" "
                                data-v-9c24d646=" "
                                className="spd overflow-hidden position-relative "
                                style={stylesF7}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=1050&amp;w=1050&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=1365&amp;w=1365&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1200px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=800&amp;w=800&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=1040&amp;w=1040&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=500&amp;w=500&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=650&amp;w=650&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=300&amp;w=300&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=390&amp;w=390&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="Nick "
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                            <div data-v-9c24d646=" " className="slot "></div>
                          </div>
                          <div
                            data-v-9c24d646=" "
                            data-v-5a623b3d=" "
                            className="team-member position-relative d-inline-block p-1 should-animate "
                            data-preset="x "
                            data-fromx="1800 "
                            style={stylesE25}
                          >
                            <div
                              data-v-9c24d646=" "
                              className="position-relative "
                            >
                              <svg
                                data-v-9c24d646=" "
                                width="300 "
                                height="300 "
                                viewBox="0 0 300 300 "
                                fill="none "
                                xmlns="http://www.w3.org/2000/svg "
                              >
                                <defs data-v-9c24d646=" ">
                                  <path
                                    data-v-9c24d646=" "
                                    fill="transparent "
                                    id="circlePath316 "
                                    d="M0,150a150,150 0 1,0 300,0a150,150 0 1,0 -300,0 "
                                  ></path>
                                </defs>
                                <text data-v-9c24d646=" " fill="#000 ">
                                  <textPath
                                    data-v-9c24d646=" "
                                    startOffset="15% "
                                    text-anchor="middle "
                                    xlinkHref="#circlePath316 "
                                    className="svg-text pp-bold "
                                  >
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-name "
                                    >
                                      Mary
                                    </tspan>
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-position founders "
                                    >
                                      The Ice Cream Professor
                                    </tspan>
                                  </textPath>
                                </text>
                              </svg>
                              <figure
                                data-v-23b40a86=" "
                                data-v-9c24d646=" "
                                className="spd overflow-hidden position-relative "
                                style={stylesE23}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=1050&amp;w=1050&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=1365&amp;w=1365&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1200px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=800&amp;w=800&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=1040&amp;w=1040&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=500&amp;w=500&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=650&amp;w=650&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=300&amp;w=300&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=390&amp;w=390&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="Mary "
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                            <div data-v-9c24d646=" " className="slot "></div>
                          </div>
                        </div>

                    <div
                          data-v-5a623b3d=" "
                          className="d-lg-none row justify-content-center "
                        >
                          <div
                            data-v-9c24d646=" "
                            data-v-5a623b3d=" "
                            className="team-member position-relative d-inline-block p-0-5 mb-3-5 should-animate "
                            data-preset="opacity,y "
                            data-delay="0 "
                            style={stylesE30}
                          >
                            <div
                              data-v-9c24d646=" "
                              className="position-relative "
                            >
                              <svg
                                data-v-9c24d646=" "
                                width="300 "
                                height="300 "
                                viewBox="0 0 300 300 "
                                fill="none "
                                xmlns="http://www.w3.org/2000/svg "
                              >
                                <defs data-v-9c24d646=" ">
                                  <path
                                    data-v-9c24d646=" "
                                    fill="transparent "
                                    id="circlePath318 "
                                    d="M0,150a150,150 0 1,0 300,0a150,150 0 1,0 -300,0 "
                                  ></path>
                                </defs>
                                <text data-v-9c24d646=" " fill="#000 ">
                                  <textPath
                                    data-v-9c24d646=" "
                                    startOffset="22% "
                                    text-anchor="middle "
                                    xlinkHref="#circlePath318 "
                                    className="svg-text pp-bold "
                                  >
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-name "
                                    >
                                      Charn
                                    </tspan>
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-position founders "
                                    >
                                      "Chief happiness maker "
                                    </tspan>
                                  </textPath>
                                </text>
                              </svg>
                              <figure
                                data-v-23b40a86=" "
                                data-v-9c24d646=" "
                                className="spd overflow-hidden position-relative "
                                style={stylesE18}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=1050&amp;w=1050&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=1365&amp;w=1365&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1200px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=800&amp;w=800&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=1040&amp;w=1040&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=500&amp;w=500&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=650&amp;w=650&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=300&amp;w=300&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/2nS8l1zyDuEeJ9hXA0lSNv/00d0c0fdbb6216f9a821804ea67e8f98/charn.png?h=390&amp;w=390&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="Charn "
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                            <div data-v-9c24d646=" " className="slot "></div>
                          </div>
                          <div
                            data-v-9c24d646=" "
                            data-v-5a623b3d=" "
                            className="team-member position-relative d-inline-block p-0-5 mb-3-5 should-animate "
                            data-preset="opacity,y "
                            data-delay="0.1 "
                            style={stylesE30}
                          >
                            <div
                              data-v-9c24d646=" "
                              className="position-relative "
                            >
                              <svg
                                data-v-9c24d646=" "
                                width="300 "
                                height="300 "
                                viewBox="0 0 300 300 "
                                fill="none "
                                xmlns="http://www.w3.org/2000/svg "
                              >
                                <defs data-v-9c24d646=" ">
                                  <path
                                    data-v-9c24d646=" "
                                    fill="transparent "
                                    id="circlePath320 "
                                    d="M0,150a150,150 0 1,0 300,0a150,150 0 1,0 -300,0 "
                                  ></path>
                                </defs>
                                <text data-v-9c24d646=" " fill="#000 ">
                                  <textPath
                                    data-v-9c24d646=" "
                                    startOffset="22% "
                                    text-anchor="middle "
                                    xlinkHref="#circlePath320 "
                                    className="svg-text pp-bold "
                                  >
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-name "
                                    >
                                      Chungi
                                    </tspan>
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-position founders "
                                    >
                                      Boba "Van Gogh " Director
                                    </tspan>
                                  </textPath>
                                </text>
                              </svg>
                              <figure
                                data-v-23b40a86=" "
                                data-v-9c24d646=" "
                                className="spd overflow-hidden position-relative "
                                style={stylesF7}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=1050&amp;w=1050&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=1365&amp;w=1365&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1200px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=800&amp;w=800&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=1040&amp;w=1040&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=500&amp;w=500&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=650&amp;w=650&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=300&amp;w=300&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/OHjjaa0WpS3PqmVRr5Jf5/d5b5d9de94a5120203de45a1631b2dbc/chungi.png?h=390&amp;w=390&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="Chungi "
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                            <div data-v-9c24d646=" " className="slot "></div>
                          </div>
                          <div
                            data-v-9c24d646=" "
                            data-v-5a623b3d=" "
                            className="team-member position-relative d-inline-block p-0-5 mb-3-5 should-animate "
                            data-preset="opacity,y "
                            data-delay="0.2 "
                            style={stylesE30}
                          >
                            <div
                              data-v-9c24d646=" "
                              className="position-relative "
                            >
                              <svg
                                data-v-9c24d646=" "
                                width="300 "
                                height="300 "
                                viewBox="0 0 300 300 "
                                fill="none "
                                xmlns="http://www.w3.org/2000/svg "
                              >
                                <defs data-v-9c24d646=" ">
                                  <path
                                    data-v-9c24d646=" "
                                    fill="transparent "
                                    id="circlePath322 "
                                    d="M0,150a150,150 0 1,0 300,0a150,150 0 1,0 -300,0 "
                                  ></path>
                                </defs>
                                <text data-v-9c24d646=" " fill="#000 ">
                                  <textPath
                                    data-v-9c24d646=" "
                                    startOffset="22% "
                                    text-anchor="middle "
                                    xlinkHref="#circlePath322 "
                                    className="svg-text pp-bold "
                                  >
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-name "
                                    >
                                      Doug
                                    </tspan>
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-position founders "
                                    >
                                      "Chief Boba Tech Wiz "
                                    </tspan>
                                  </textPath>
                                </text>
                              </svg>
                              <figure
                                data-v-23b40a86=" "
                                data-v-9c24d646=" "
                                className="spd overflow-hidden position-relative "
                                style={stylesF7}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=1050&amp;w=1050&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=1365&amp;w=1365&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1200px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=800&amp;w=800&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=1040&amp;w=1040&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=500&amp;w=500&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=650&amp;w=650&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=300&amp;w=300&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/6WcfxO0uBNFj0WrRsMMm7p/62a88e3cd703b9c2cb54b8db7404cd9f/doug.png?h=390&amp;w=390&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="Doug "
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                            <div data-v-9c24d646=" " className="slot "></div>
                          </div>
                          <div
                            data-v-9c24d646=" "
                            data-v-5a623b3d=" "
                            className="team-member position-relative d-inline-block p-0-5 mb-3-5 should-animate "
                            data-preset="opacity,y "
                            data-delay="0.30000000000000004 "
                            style={stylesE30}
                          >
                            <div
                              data-v-9c24d646=" "
                              className="position-relative "
                            >
                              <svg
                                data-v-9c24d646=" "
                                width="300 "
                                height="300 "
                                viewBox="0 0 300 300 "
                                fill="none "
                                xmlns="http://www.w3.org/2000/svg "
                              >
                                <defs data-v-9c24d646=" ">
                                  <path
                                    data-v-9c24d646=" "
                                    fill="transparent "
                                    id="circlePath324 "
                                    d="M0,150a150,150 0 1,0 300,0a150,150 0 1,0 -300,0 "
                                  ></path>
                                </defs>
                                <text data-v-9c24d646=" " fill="#000 ">
                                  <textPath
                                    data-v-9c24d646=" "
                                    startOffset="22% "
                                    text-anchor="middle "
                                    xlinkHref="#circlePath324 "
                                    className="svg-text pp-bold "
                                  >
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-name "
                                    >
                                      Mitch
                                    </tspan>
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-position founders "
                                    >
                                      "Boba Hype Man "
                                    </tspan>
                                  </textPath>
                                </text>
                              </svg>
                              <figure
                                data-v-23b40a86=" "
                                data-v-9c24d646=" "
                                className="spd overflow-hidden position-relative "
                                style={stylesF7}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=1050&amp;w=1050&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=1365&amp;w=1365&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1200px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=800&amp;w=800&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=1040&amp;w=1040&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=500&amp;w=500&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=650&amp;w=650&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=300&amp;w=300&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/1xmd7KLuSATQyhRRFZuQ9z/b397b159f0c4cd6f116a5dd50338e43e/mitch.png?h=390&amp;w=390&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="Mitch "
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                            <div data-v-9c24d646=" " className="slot "></div>
                          </div>
                          <div
                            data-v-9c24d646=" "
                            data-v-5a623b3d=" "
                            className="team-member position-relative d-inline-block p-0-5 mb-3-5 should-animate "
                            data-preset="opacity,y "
                            data-delay="0.4 "
                            style={stylesE29}
                          >
                            <div
                              data-v-9c24d646=" "
                              className="position-relative "
                            >
                              <svg
                                data-v-9c24d646=" "
                                width="300 "
                                height="300 "
                                viewBox="0 0 300 300 "
                                fill="none "
                                xmlns="http://www.w3.org/2000/svg "
                              >
                                <defs data-v-9c24d646=" ">
                                  <path
                                    data-v-9c24d646=" "
                                    fill="transparent "
                                    id="circlePath326 "
                                    d="M0,150a150,150 0 1,0 300,0a150,150 0 1,0 -300,0 "
                                  ></path>
                                </defs>
                                <text data-v-9c24d646=" " fill="#000 ">
                                  <textPath
                                    data-v-9c24d646=" "
                                    startOffset="22% "
                                    text-anchor="middle "
                                    xlinkHref="#circlePath326 "
                                    className="svg-text pp-bold "
                                  >
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-name "
                                    >
                                      Olivia
                                    </tspan>
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-position founders "
                                    >
                                      Happiness flavor creator
                                    </tspan>
                                  </textPath>
                                </text>
                              </svg>
                              <figure
                                data-v-23b40a86=" "
                                data-v-9c24d646=" "
                                className="spd overflow-hidden position-relative "
                                style={stylesE23}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=1050&amp;w=1050&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=1365&amp;w=1365&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1200px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=800&amp;w=800&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=1040&amp;w=1040&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=500&amp;w=500&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=650&amp;w=650&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=300&amp;w=300&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/3KSldI7gMRmNRUqRWbI0rG/32e3aa366b4e08633a2989183fa2d0a3/olivia.png?h=390&amp;w=390&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="Olivia "
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                            <div data-v-9c24d646=" " className="slot "></div>
                          </div>
                          <div
                            data-v-9c24d646=" "
                            data-v-5a623b3d=" "
                            className="team-member position-relative d-inline-block p-0-5 mb-3-5 should-animate "
                            data-preset="opacity,y "
                            data-delay="0.5 "
                            style={stylesE28}
                          >
                            <div
                              data-v-9c24d646=" "
                              className="position-relative "
                            >
                              <svg
                                data-v-9c24d646=" "
                                width="300 "
                                height="300 "
                                viewBox="0 0 300 300 "
                                fill="none "
                                xmlns="http://www.w3.org/2000/svg "
                              >
                                <defs data-v-9c24d646=" ">
                                  <path
                                    data-v-9c24d646=" "
                                    fill="transparent "
                                    id="circlePath328 "
                                    d="M0,150a150,150 0 1,0 300,0a150,150 0 1,0 -300,0 "
                                  ></path>
                                </defs>
                                <text data-v-9c24d646=" " fill="#000 ">
                                  <textPath
                                    data-v-9c24d646=" "
                                    startOffset="22% "
                                    text-anchor="middle "
                                    xlinkHref="#circlePath328 "
                                    className="svg-text pp-bold "
                                  >
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-name "
                                    >
                                      Nick
                                    </tspan>
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-position founders "
                                    >
                                      Boba Fortune Teller
                                    </tspan>
                                  </textPath>
                                </text>
                              </svg>
                              <figure
                                data-v-23b40a86=" "
                                data-v-9c24d646=" "
                                className="spd overflow-hidden position-relative "
                                style={stylesF7}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=1050&amp;w=1050&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=1365&amp;w=1365&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1200px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=800&amp;w=800&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=1040&amp;w=1040&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=500&amp;w=500&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=650&amp;w=650&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=300&amp;w=300&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4CdNqB4TsvNBIau4olkGia/aa7f9416292e0b8d0f735cddeceb0e31/nick.png?h=390&amp;w=390&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="Nick "
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                            <div data-v-9c24d646=" " className="slot "></div>
                          </div>
                          <div
                            data-v-9c24d646=" "
                            data-v-5a623b3d=" "
                            className="team-member position-relative d-inline-block p-0-5 mb-3-5 should-animate "
                            data-preset="opacity,y "
                            data-delay="0.6000000000000001 "
                            style={stylesE27}
                          >
                            <div
                              data-v-9c24d646=" "
                              className="position-relative "
                            >
                              <svg
                                data-v-9c24d646=" "
                                width="300 "
                                height="300 "
                                viewBox="0 0 300 300 "
                                fill="none "
                                xmlns="http://www.w3.org/2000/svg "
                              >
                                <defs data-v-9c24d646=" ">
                                  <path
                                    data-v-9c24d646=" "
                                    fill="transparent "
                                    id="circlePath330 "
                                    d="M0,150a150,150 0 1,0 300,0a150,150 0 1,0 -300,0 "
                                  ></path>
                                </defs>
                                <text data-v-9c24d646=" " fill="#000 ">
                                  <textPath
                                    data-v-9c24d646=" "
                                    startOffset="22% "
                                    text-anchor="middle "
                                    xlinkHref="#circlePath330 "
                                    className="svg-text pp-bold "
                                  >
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-name "
                                    >
                                      Mary
                                    </tspan>
                                    <tspan
                                      data-v-9c24d646=" "
                                      className="member-position founders "
                                    >
                                      The Ice Cream Professor
                                    </tspan>
                                  </textPath>
                                </text>
                              </svg>
                              <figure
                                data-v-23b40a86=" "
                                data-v-9c24d646=" "
                                className="spd overflow-hidden position-relative "
                                style={stylesE23}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=1050&amp;w=1050&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=1365&amp;w=1365&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1200px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=800&amp;w=800&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=1040&amp;w=1040&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=500&amp;w=500&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=650&amp;w=650&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=300&amp;w=300&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/4kxeFFIwBRw7Dw9cHfXAZ/ba79c580f6cc27d739fc1d2330efb24a/mary.png?h=390&amp;w=390&amp;q=80&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="Mary "
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                            <div data-v-9c24d646=" " className="slot "></div>
                          </div>
                        </div>
                  </div>
                </div>
                
                <div
                  className="big-circles-and-round-text position-relative"
                  data-v-f223df8c=""
                  
                >
                  <div
                    data-id="waypoint-131"
                    className="synchronized-waypoint"
                    data-v-f223df8c=""
                  ></div>
               <div ref={ref} className="scroll-trigger" />

                  <div
                    className="big-circle-and-round-text-svg circles-svg position-relative d-none d-sm-block "
                    data-v-f223df8c=""
                  >
                    <svg
                      viewBox="0 0 2650 3235"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Group 316124689">
                        <g id="Group 316124567">
                          <ellipse
                            id="Ellipse 633"
                            cx="1325"
                            cy="1394.5"
                            rx="1325"
                            ry="1394.5"
                            fill="#FFB800"
                          ></ellipse>
                          <rect
                            id="Rectangle 2238"
                            x="247"
                            y="716"
                            width="2144"
                            height="2519"
                            fill="#FFB800"
                          ></rect>
                          <g
                            class="bottom-circle "
                            data-svg-origin="1969.8600463867188 1614.7900390625"
                            transform="matrix(0.7526,0.65848,-0.65848,0.7526,1550.65032,-897.61439)"
                            style={{
                              translate: "none",
                              rotate: "none",
                              scale: "none",
                              transformOrigin: "0px 0px",
                            }}
                          >
                            <circle
                              id="Ellipse 206"
                              cx="1969.86"
                              cy="1614.79"
                              r="306.376"
                              fill="#FFD864"
                            ></circle>
                            <g id="Linked Path Group">
                              <path
                                id="[Copy] With each pint sold, we proudly support"
                                d="M1781.31 1802.42L1775.6 1795.48L1803.65 1767.73L1804.75 1766.65L1804.71 1766.6L1803.44 1767.48L1770.25 1788.99L1763.31 1780.56L1790.83 1752.17L1791.9 1751.04L1791.86 1750.99L1790.59 1751.87L1758.01 1774.12L1752.3 1767.18L1796.15 1739.64L1803.9 1749.06L1777.61 1775.61L1776.45 1776.82L1777.86 1775.9L1808.96 1755.2L1816.76 1764.67L1781.31 1802.42Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_2"
                                d="M1750.13 1762.34L1745.27 1754.7L1788.62 1727.15L1793.47 1734.79L1750.13 1762.34Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_3"
                                d="M1745.9 1740.91L1749.32 1747.45L1742.67 1750.94L1731.65 1729.9L1738.3 1726.41L1741.7 1732.89L1780.54 1712.54L1784.74 1720.56L1745.9 1740.91Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_4"
                                d="M1750.94 1699.56L1753.28 1705.61L1773.76 1697.67L1777.03 1706.11L1729.14 1724.68L1725.87 1716.24L1746.34 1708.3L1744 1702.26L1723.52 1710.19L1720.25 1701.75L1768.14 1683.19L1771.41 1691.63L1750.94 1699.56Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_5"
                                d="M1713.49 1677.93L1709.71 1658.52L1717.08 1657.08L1719.13 1667.61L1733.31 1664.84L1731.37 1654.89L1738.68 1653.46L1740.62 1663.42L1754.8 1660.65L1752.75 1650.13L1760.12 1648.69L1763.91 1668.1L1713.49 1677.93Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_6"
                                d="M1708.24 1647.2L1707.16 1634.66L1757.74 1623.44L1758.53 1632.58L1749.77 1634.12L1750.31 1640.32L1759.2 1640.32L1760 1649.53L1708.24 1647.2ZM1742.35 1635.47L1717.28 1639.9L1715.82 1640.22L1717.31 1640.22L1742.76 1640.27L1742.35 1635.47Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_7"
                                d="M1758.72 1611.63C1758.5 1619.97 1753.4 1624.01 1743.44 1623.75L1720.65 1623.16C1710.72 1622.9 1705.87 1618.6 1706.09 1610.26C1706.31 1601.91 1711.38 1597.87 1721.3 1598.13L1727.91 1598.3L1727.67 1607.54L1718.11 1607.29C1716.36 1607.25 1715.13 1607.49 1714.43 1608.03C1713.73 1608.53 1713.37 1609.33 1713.34 1610.44C1713.31 1611.56 1713.63 1612.4 1714.3 1612.97C1714.97 1613.51 1716.19 1613.79 1717.94 1613.84L1746.76 1614.59C1748.47 1614.64 1749.67 1614.41 1750.37 1613.91C1751.07 1613.38 1751.43 1612.55 1751.46 1611.44C1751.49 1610.33 1751.17 1609.5 1750.5 1608.97C1749.83 1608.4 1748.64 1608.09 1746.93 1608.04L1737.3 1607.79L1737.54 1598.55L1744.09 1598.72C1754.06 1598.98 1758.93 1603.28 1758.72 1611.63Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_8"
                                d="M1738.84 1580.96L1737.91 1587.38L1759.65 1590.5L1758.36 1599.46L1707.52 1592.17L1708.81 1583.21L1730.54 1586.32L1731.46 1579.91L1709.73 1576.79L1711.01 1567.83L1761.86 1575.12L1760.57 1584.08L1738.84 1580.96Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_9"
                                d="M1717.05 1542.65L1720.52 1532.64C1721.71 1529.2 1723.13 1526.68 1724.77 1525.07C1726.37 1523.45 1728.41 1522.6 1730.89 1522.51C1733.34 1522.36 1736.49 1522.95 1740.33 1524.28L1742.21 1524.93C1746.01 1526.25 1748.85 1527.73 1750.73 1529.38C1752.62 1530.99 1753.72 1532.96 1754.05 1535.29C1754.35 1537.56 1753.91 1540.4 1752.73 1543.8L1752.22 1545.26L1768.54 1550.91L1765.58 1559.46L1717.05 1542.65ZM1746.72 1540.36C1747.18 1539.02 1747.1 1537.95 1746.47 1537.15C1745.82 1536.29 1744.58 1535.54 1742.76 1534.91L1733.73 1531.78C1731.91 1531.15 1730.51 1530.98 1729.55 1531.28C1728.56 1531.53 1727.83 1532.32 1727.37 1533.65L1726.44 1536.32L1745.79 1543.03L1746.72 1540.36Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_10"
                                d="M1727.6 1513.95L1731.29 1505.68L1778.2 1526.59L1774.51 1534.86L1727.6 1513.95Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_11"
                                d="M1733.43 1500.51L1737.37 1493.45L1767.44 1500.18L1741.66 1485.77L1745.61 1478.71L1790.44 1503.77L1786.5 1510.83L1756.37 1504.07L1782.21 1518.51L1778.26 1525.57L1733.43 1500.51Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_12"
                                d="M1758.8 1472.61L1754.51 1478.61L1748.39 1474.25L1762.2 1454.92L1768.31 1459.28L1764.06 1465.24L1799.74 1490.72L1794.48 1498.09L1758.8 1472.61Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_13"
                                d="M1822.7 1465.58C1819.66 1468.53 1816.54 1469.82 1813.33 1469.47C1810.13 1469.12 1806.8 1467.16 1803.34 1463.6L1800.89 1461.06L1807.53 1454.63L1812.08 1459.33C1813.27 1460.56 1814.29 1461.24 1815.14 1461.37C1815.98 1461.51 1816.84 1461.16 1817.7 1460.32C1818.53 1459.52 1818.89 1458.72 1818.78 1457.93C1818.67 1457.08 1818.05 1456.08 1816.92 1454.91L1814.91 1452.83C1813.69 1451.57 1812.55 1450.77 1811.5 1450.42C1810.41 1450.04 1809.13 1449.94 1807.64 1450.13L1800.91 1450.75C1797.85 1451.04 1795.19 1450.85 1792.93 1450.18C1790.64 1449.47 1788.42 1448.02 1786.28 1445.8C1783.39 1442.82 1781.91 1439.79 1781.83 1436.7C1781.73 1433.58 1783.16 1430.59 1786.11 1427.73C1788.93 1424.99 1791.87 1423.69 1794.93 1423.83C1797.99 1423.91 1800.97 1425.45 1803.89 1428.46L1806.57 1431.23L1799.98 1437.62L1796.59 1434.11C1795.36 1432.85 1794.35 1432.17 1793.53 1432.07C1792.68 1431.94 1791.86 1432.26 1791.06 1433.03C1790.26 1433.8 1789.9 1434.6 1789.98 1435.42C1790.06 1436.18 1790.62 1437.09 1791.66 1438.17L1793 1439.55C1794.11 1440.69 1795.18 1441.43 1796.24 1441.78C1797.26 1442.1 1798.47 1442.18 1799.87 1442.02L1806.51 1441.4C1808.66 1441.22 1810.5 1441.22 1812.05 1441.39C1813.59 1441.51 1815.18 1441.99 1816.84 1442.83C1818.46 1443.64 1820.15 1444.96 1821.9 1446.77C1828.43 1453.5 1828.69 1459.77 1822.7 1465.58Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_14"
                                d="M1841.6 1449.23C1834.97 1454.31 1828.64 1452.91 1822.6 1445.03L1808.69 1426.89C1802.65 1419.01 1802.94 1412.53 1809.56 1407.45C1816.18 1402.37 1822.52 1403.77 1828.56 1411.65L1842.47 1429.79C1848.51 1437.67 1848.22 1444.15 1841.6 1449.23ZM1831.77 1441.8C1832.79 1443.12 1833.71 1443.9 1834.53 1444.13C1835.39 1444.33 1836.26 1444.1 1837.14 1443.42C1838.03 1442.74 1838.46 1441.98 1838.45 1441.12C1838.48 1440.24 1837.98 1439.14 1836.97 1437.81L1819.46 1414.99C1818.42 1413.63 1817.47 1412.85 1816.61 1412.64C1815.76 1412.38 1814.9 1412.58 1814.01 1413.26C1813.13 1413.94 1812.69 1414.73 1812.69 1415.65C1812.7 1416.51 1813.21 1417.6 1814.23 1418.92L1831.77 1441.8Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_15"
                                d="M1824.76 1397.17L1832.5 1392.46L1855.31 1429.91L1864.63 1424.23L1868.54 1430.64L1851.48 1441.03L1824.76 1397.17Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_16"
                                d="M1846.37 1384.19L1856.24 1379.53C1859.45 1378.02 1862.12 1377.2 1864.25 1377.1C1866.42 1376.98 1868.32 1377.64 1869.95 1379.09C1871.6 1380.49 1873.2 1382.82 1874.73 1386.07L1884.88 1407.55C1886.39 1410.76 1887.17 1413.47 1887.22 1415.67C1887.29 1417.82 1886.59 1419.71 1885.14 1421.34C1883.67 1422.93 1881.34 1424.48 1878.17 1425.98L1868.3 1430.64L1846.37 1384.19ZM1875.38 1419.77C1876.46 1419.26 1877.24 1418.75 1877.71 1418.24C1878.17 1417.7 1878.35 1417.04 1878.27 1416.27C1878.23 1415.49 1877.91 1414.46 1877.31 1413.18L1865.58 1388.33C1864.96 1387.01 1864.36 1386.09 1863.77 1385.56C1863.23 1385.01 1862.6 1384.77 1861.87 1384.83C1861.18 1384.87 1860.27 1385.16 1859.15 1385.69L1857.46 1386.48L1873.58 1420.62L1875.38 1419.77Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_17"
                                d="M1894.41 1423.14C1895.69 1422.27 1896.73 1421.2 1897.55 1419.94C1898.36 1418.69 1898.77 1417.38 1898.77 1416.01C1898.55 1416.77 1898.23 1417.39 1897.81 1417.86C1897.45 1418.36 1896.88 1418.75 1896.12 1419.03C1894.95 1419.46 1893.84 1419.41 1892.78 1418.89C1891.71 1418.32 1890.9 1417.28 1890.34 1415.75C1889.81 1414.3 1889.82 1412.98 1890.38 1411.77C1890.97 1410.5 1891.98 1409.61 1893.43 1409.08C1895 1408.5 1896.39 1408.58 1897.62 1409.32C1898.85 1410.05 1899.79 1411.33 1900.45 1413.13C1901.25 1415.31 1901.22 1417.64 1900.36 1420.15C1899.55 1422.67 1898.09 1425.08 1895.96 1427.36L1894.41 1423.14Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_18"
                                d="M1905.09 1360.78L1913.96 1359.35L1923.75 1397.57L1924.13 1399.07L1924.19 1399.06L1924.07 1397.52L1922.26 1358.01L1933.04 1356.28L1943.66 1394.37L1944.09 1395.86L1944.16 1395.85L1944.04 1394.31L1941.28 1354.95L1950.15 1353.52L1951.79 1405.28L1939.74 1407.22L1930.1 1371.12L1929.64 1369.51L1929.72 1371.19L1931.88 1408.49L1919.78 1410.44L1905.09 1360.78Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_19"
                                d="M1954.21 1354.01L1973.98 1353.59L1974.14 1361.1L1963.42 1361.33L1963.72 1375.77L1973.87 1375.55L1974.02 1383L1963.88 1383.21L1964.19 1397.66L1974.91 1397.43L1975.07 1404.94L1955.3 1405.36L1954.21 1354.01Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_20"
                                d="M1998.52 1354.97L2008.99 1356.59C2012.58 1357.15 2015.32 1358.09 2017.19 1359.42C2019.07 1360.7 2020.28 1362.56 2020.81 1364.98C2021.4 1367.37 2021.38 1370.57 2020.76 1374.59L2020.45 1376.55C2019.84 1380.53 2018.89 1383.59 2017.61 1385.73C2016.36 1387.87 2014.63 1389.32 2012.39 1390.05C2010.2 1390.75 2007.33 1390.83 2003.78 1390.28L2002.26 1390.05L1999.62 1407.11L1990.67 1405.73L1998.52 1354.97ZM2006.09 1383.75C2007.48 1383.97 2008.52 1383.7 2009.2 1382.93C2009.93 1382.14 2010.44 1380.79 2010.74 1378.88L2012.2 1369.43C2012.5 1367.53 2012.41 1366.13 2011.94 1365.23C2011.52 1364.3 2010.61 1363.73 2009.22 1363.51L2006.43 1363.08L2003.3 1383.32L2006.09 1383.75Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_21"
                                d="M2030.94 1413.91C2030.74 1413.5 2030.7 1412.93 2030.81 1412.21C2030.93 1411.45 2031.15 1410.49 2031.47 1409.33L2034.51 1398.38C2034.98 1396.69 2034.94 1395.39 2034.4 1394.48C2033.89 1393.59 2033.08 1392.99 2031.97 1392.68L2029.55 1392.01L2024.01 1411.99L2015.28 1409.57L2029.02 1360.08L2040.09 1363.15C2043.31 1364.04 2045.72 1365.11 2047.33 1366.36C2048.98 1367.62 2049.96 1369.29 2050.27 1371.37C2050.59 1373.42 2050.3 1376.09 2049.38 1379.39L2049.16 1380.19C2048.42 1382.83 2047.63 1384.9 2046.77 1386.39C2045.96 1387.86 2044.98 1388.94 2043.8 1389.63C2042.69 1390.3 2041.24 1390.72 2039.46 1390.89C2041.5 1392.35 2042.76 1394.03 2043.25 1395.94C2043.75 1397.81 2043.68 1399.93 2043.03 1402.28L2040.38 1411.8C2040.09 1412.88 2039.88 1413.77 2039.77 1414.5C2039.67 1415.18 2039.69 1415.81 2039.84 1416.38L2030.94 1413.91ZM2033.79 1386.12C2035.31 1386.54 2036.44 1386.41 2037.16 1385.72C2037.94 1385.01 2038.54 1383.88 2038.96 1382.36L2040.88 1375.43C2041.39 1373.62 2041.46 1372.32 2041.09 1371.56C2040.74 1370.75 2039.82 1370.14 2038.34 1369.73L2035.92 1369.06L2031.37 1385.45L2033.79 1386.12Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_22"
                                d="M2049.76 1421.23C2042.02 1418.09 2040.02 1411.92 2043.76 1402.72L2052.36 1381.55C2056.09 1372.35 2061.83 1369.32 2069.56 1372.46C2077.29 1375.6 2079.29 1381.77 2075.56 1390.97L2066.96 1412.14C2063.22 1421.34 2057.49 1424.37 2049.76 1421.23ZM2051.19 1409C2050.56 1410.54 2050.36 1411.73 2050.58 1412.56C2050.83 1413.4 2051.48 1414.03 2052.51 1414.45C2053.54 1414.87 2054.42 1414.86 2055.16 1414.42C2055.93 1413.99 2056.63 1413.01 2057.26 1411.46L2068.08 1384.81C2068.72 1383.22 2068.91 1382.01 2068.66 1381.17C2068.45 1380.3 2067.84 1379.66 2066.81 1379.24C2065.78 1378.82 2064.87 1378.84 2064.08 1379.31C2063.34 1379.75 2062.66 1380.74 2062.03 1382.29L2051.19 1409Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_23"
                                d="M2071.89 1431.77C2068.19 1429.71 2066.01 1427.16 2065.35 1424.1C2064.69 1421.05 2065.57 1417.35 2067.97 1413.01L2086.14 1380.21L2094.23 1384.69L2074.79 1419.79C2073.98 1421.25 2073.62 1422.42 2073.72 1423.31C2073.84 1424.16 2074.4 1424.86 2075.41 1425.42C2076.38 1425.96 2077.26 1426.05 2078.04 1425.7C2078.88 1425.34 2079.71 1424.42 2080.51 1422.96L2099.96 1387.86L2107.99 1392.31L2089.82 1425.11C2087.41 1429.45 2084.74 1432.16 2081.8 1433.22C2078.9 1434.3 2075.6 1433.82 2071.89 1431.77Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_24"
                                d="M2114.1 1396.12L2122.94 1402.53C2125.81 1404.62 2127.81 1406.57 2128.92 1408.38C2130.07 1410.22 2130.41 1412.21 2129.92 1414.34C2129.49 1416.46 2128.22 1418.97 2126.11 1421.88L2112.15 1441.11C2110.07 1443.99 2108.07 1445.97 2106.16 1447.07C2104.31 1448.16 2102.32 1448.47 2100.19 1447.98C2098.08 1447.45 2095.61 1446.16 2092.77 1444.1L2083.94 1437.69L2114.1 1396.12ZM2096.87 1438.67C2097.84 1439.37 2098.66 1439.81 2099.33 1439.98C2100.03 1440.11 2100.69 1439.96 2101.33 1439.52C2102 1439.11 2102.75 1438.33 2103.58 1437.19L2119.72 1414.95C2120.57 1413.77 2121.09 1412.8 2121.28 1412.03C2121.5 1411.29 2121.4 1410.62 2121 1410.01C2120.63 1409.42 2119.94 1408.77 2118.94 1408.04L2117.43 1406.94L2095.26 1437.5L2096.87 1438.67Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_25"
                                d="M2139.35 1415.01L2146.06 1421.08L2116.65 1453.6L2124.74 1460.92L2119.7 1466.49L2104.89 1453.1L2139.35 1415.01Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_26"
                                d="M2138.28 1460.1L2157.13 1431.12L2163.3 1438L2150.09 1455.38L2149.31 1456.33L2150.3 1455.62L2168.96 1444.31L2175.14 1451.19L2144.33 1466.84L2130.95 1478.84L2124.9 1472.11L2138.28 1460.1Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_27"
                                d="M2149.74 1505.52C2147.52 1501.91 2146.94 1498.58 2147.98 1495.53C2149.02 1492.48 2151.65 1489.66 2155.88 1487.06L2158.89 1485.21L2163.73 1493.09L2158.15 1496.52C2156.69 1497.41 2155.8 1498.26 2155.49 1499.05C2155.17 1499.85 2155.33 1500.76 2155.96 1501.78C2156.56 1502.76 2157.26 1503.29 2158.06 1503.35C2158.91 1503.43 2160.03 1503.05 2161.41 1502.2L2163.87 1500.68C2165.37 1499.76 2166.4 1498.83 2166.97 1497.88C2167.58 1496.9 2167.95 1495.67 2168.09 1494.18L2168.94 1487.47C2169.33 1484.42 2170.1 1481.87 2171.24 1479.81C2172.42 1477.72 2174.33 1475.88 2176.95 1474.26C2180.49 1472.09 2183.78 1471.3 2186.81 1471.9C2189.87 1472.48 2192.48 1474.52 2194.63 1478.02C2196.69 1481.38 2197.33 1484.53 2196.53 1487.48C2195.79 1490.45 2193.63 1493.03 2190.06 1495.22L2186.77 1497.24L2181.97 1489.42L2186.13 1486.86C2187.62 1485.94 2188.51 1485.1 2188.79 1484.32C2189.1 1483.53 2188.97 1482.66 2188.38 1481.71C2187.8 1480.76 2187.1 1480.23 2186.29 1480.13C2185.53 1480.05 2184.51 1480.39 2183.24 1481.18L2181.6 1482.19C2180.25 1483.02 2179.29 1483.91 2178.72 1484.86C2178.18 1485.79 2177.84 1486.95 2177.7 1488.35L2176.86 1494.96C2176.57 1497.1 2176.17 1498.91 2175.66 1500.37C2175.22 1501.85 2174.4 1503.31 2173.22 1504.74C2172.08 1506.14 2170.43 1507.51 2168.28 1508.83C2160.29 1513.74 2154.11 1512.63 2149.74 1505.52Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_28"
                                d="M2161.65 1527.43C2159.87 1523.59 2159.61 1520.24 2160.89 1517.39C2162.16 1514.53 2165.05 1512.06 2169.56 1509.98L2203.58 1494.23L2207.46 1502.62L2171.05 1519.47C2169.54 1520.17 2168.56 1520.91 2168.11 1521.68C2167.71 1522.44 2167.75 1523.34 2168.23 1524.39C2168.7 1525.4 2169.35 1525.99 2170.19 1526.17C2171.08 1526.37 2172.29 1526.12 2173.8 1525.42L2210.22 1508.56L2214.07 1516.89L2180.05 1532.64C2175.54 1534.73 2171.79 1535.33 2168.79 1534.46C2165.81 1533.62 2163.43 1531.28 2161.65 1527.43Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_29"
                                d="M2216.76 1523.55L2220.03 1533.62C2221.16 1537.08 2221.55 1539.95 2221.2 1542.22C2220.9 1544.48 2219.79 1546.39 2217.87 1547.96C2216 1549.56 2213.14 1550.98 2209.27 1552.24L2207.38 1552.85C2203.55 1554.1 2200.39 1554.63 2197.9 1554.45C2195.43 1554.31 2193.36 1553.4 2191.69 1551.74C2190.08 1550.1 2188.72 1547.58 2187.61 1544.16L2187.13 1542.69L2170.71 1548.03L2167.91 1539.42L2216.76 1523.55ZM2194.48 1543.27C2194.91 1544.62 2195.63 1545.42 2196.61 1545.69C2197.65 1545.98 2199.09 1545.83 2200.92 1545.23L2210.02 1542.28C2211.85 1541.68 2213.06 1540.97 2213.65 1540.15C2214.29 1539.36 2214.39 1538.29 2213.96 1536.95L2213.08 1534.26L2193.6 1540.59L2194.48 1543.27Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_30"
                                d="M2225.74 1551.98L2227.85 1562.36C2228.57 1565.93 2228.63 1568.82 2228.03 1571.04C2227.47 1573.25 2226.15 1575.02 2224.07 1576.36C2222.03 1577.73 2219.02 1578.82 2215.03 1579.63L2213.08 1580.03C2209.14 1580.83 2205.94 1580.99 2203.49 1580.53C2201.05 1580.11 2199.09 1578.97 2197.63 1577.13C2196.21 1575.32 2195.15 1572.65 2194.43 1569.13L2194.13 1567.62L2177.2 1571.05L2175.4 1562.18L2225.74 1551.98ZM2201.36 1569.04C2201.64 1570.42 2202.25 1571.3 2203.2 1571.68C2204.2 1572.09 2205.65 1572.1 2207.53 1571.72L2216.91 1569.82C2218.8 1569.44 2220.08 1568.87 2220.76 1568.12C2221.49 1567.41 2221.71 1566.36 2221.43 1564.97L2220.87 1562.2L2200.8 1566.27L2201.36 1569.04Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_31"
                                d="M2180.79 1598.95C2180.1 1590.63 2184.7 1586.06 2194.6 1585.24L2217.37 1583.34C2227.27 1582.52 2232.56 1586.26 2233.25 1594.58C2233.95 1602.9 2229.34 1607.47 2219.45 1608.29L2196.67 1610.19C2186.78 1611.01 2181.48 1607.26 2180.79 1598.95ZM2192.35 1594.7C2190.69 1594.84 2189.54 1595.19 2188.9 1595.76C2188.26 1596.37 2187.99 1597.23 2188.08 1598.34C2188.18 1599.45 2188.58 1600.23 2189.31 1600.69C2190.04 1601.18 2191.23 1601.36 2192.9 1601.23L2221.56 1598.84C2223.27 1598.7 2224.44 1598.32 2225.07 1597.71C2225.76 1597.14 2226.05 1596.3 2225.96 1595.19C2225.87 1594.08 2225.44 1593.28 2224.66 1592.78C2223.94 1592.33 2222.75 1592.17 2221.08 1592.31L2192.35 1594.7Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_32"
                                d="M2181.97 1627.97C2182.32 1627.69 2182.86 1627.51 2183.59 1627.45C2184.37 1627.39 2185.35 1627.38 2186.55 1627.42L2197.91 1627.8C2199.66 1627.86 2200.92 1627.51 2201.67 1626.77C2202.42 1626.06 2202.81 1625.14 2202.85 1623.98L2202.94 1621.48L2182.21 1620.79L2182.51 1611.74L2233.85 1613.45L2233.46 1624.94C2233.35 1628.27 2232.88 1630.87 2232.05 1632.73C2231.21 1634.63 2229.82 1635.97 2227.87 1636.76C2225.95 1637.56 2223.29 1637.89 2219.87 1637.78L2219.03 1637.75C2216.29 1637.66 2214.1 1637.37 2212.44 1636.89C2210.83 1636.45 2209.55 1635.75 2208.6 1634.77C2207.68 1633.84 2206.94 1632.53 2206.35 1630.84C2205.42 1633.17 2204.08 1634.79 2202.33 1635.72C2200.63 1636.65 2198.56 1637.07 2196.12 1636.99L2186.24 1636.66C2185.13 1636.62 2184.21 1636.64 2183.48 1636.7C2182.79 1636.76 2182.19 1636.93 2181.66 1637.21L2181.97 1627.97ZM2209.65 1624.21C2209.6 1625.79 2209.99 1626.85 2210.83 1627.39C2211.71 1627.98 2212.94 1628.3 2214.53 1628.35L2221.71 1628.59C2223.6 1628.65 2224.87 1628.42 2225.53 1627.88C2226.23 1627.35 2226.61 1626.31 2226.66 1624.77L2226.74 1622.27L2209.74 1621.71L2209.65 1624.21Z"
                                fill="#FFB800"
                              ></path>
                              <path
                                id="[Copy] With each pint sold, we proudly support_33"
                                d="M2224.3 1647.88L2225.35 1640.57L2232.78 1641.64L2229.41 1665.15L2221.97 1664.08L2223.01 1656.84L2179.61 1650.61L2180.89 1641.65L2224.3 1647.88Z"
                                fill="#FFB800"
                              ></path>
                            </g>
                            <g id="Group 316124533">
                              <path
                                id="[Copy] Asian Alliances"
                                d="M1885.19 1809.48L1896.69 1814.59L1882.06 1864.29L1873.67 1860.56L1876.56 1852.15L1870.87 1849.63L1866.57 1857.41L1858.12 1853.65L1885.19 1809.48ZM1878.96 1845L1887.21 1820.92L1887.63 1819.49L1886.92 1820.79L1874.56 1843.05L1878.96 1845Z"
                                fill="#FEF6F8"
                              ></path>
                              <path
                                id="[Copy] Asian Alliances_2"
                                d="M1895.99 1868.76C1891.95 1867.48 1889.32 1865.35 1888.11 1862.37C1886.9 1859.38 1887.04 1855.52 1888.53 1850.79L1889.59 1847.42L1898.41 1850.2L1896.44 1856.44C1895.92 1858.08 1895.81 1859.3 1896.09 1860.1C1896.38 1860.91 1897.09 1861.5 1898.23 1861.86C1899.34 1862.2 1900.21 1862.14 1900.85 1861.67C1901.55 1861.17 1902.14 1860.15 1902.63 1858.6L1903.5 1855.84C1904.02 1854.17 1904.19 1852.78 1904 1851.69C1903.82 1850.56 1903.29 1849.38 1902.42 1848.16L1898.67 1842.54C1896.96 1839.98 1895.87 1837.55 1895.38 1835.24C1894.91 1832.89 1895.14 1830.25 1896.07 1827.31C1897.32 1823.35 1899.28 1820.61 1901.96 1819.07C1904.66 1817.5 1907.97 1817.33 1911.89 1818.57C1915.64 1819.75 1918.18 1821.72 1919.51 1824.47C1920.9 1827.2 1920.96 1830.56 1919.7 1834.56L1918.54 1838.24L1909.78 1835.48L1911.25 1830.82C1911.78 1829.15 1911.9 1827.93 1911.6 1827.16C1911.31 1826.35 1910.64 1825.78 1909.58 1825.45C1908.52 1825.11 1907.65 1825.17 1906.96 1825.63C1906.34 1826.06 1905.8 1826.99 1905.34 1828.42L1904.77 1830.26C1904.29 1831.77 1904.15 1833.07 1904.34 1834.16C1904.55 1835.21 1905.05 1836.32 1905.86 1837.47L1909.56 1843.01C1910.74 1844.82 1911.62 1846.44 1912.2 1847.88C1912.83 1849.29 1913.17 1850.93 1913.21 1852.78C1913.27 1854.59 1912.92 1856.7 1912.16 1859.11C1909.34 1868.05 1903.95 1871.27 1895.99 1868.76Z"
                                fill="#FEF6F8"
                              ></path>
                              <path
                                id="[Copy] Asian Alliances_3"
                                d="M1923.91 1821.89L1932.74 1823.88L1921.44 1873.99L1912.61 1871.99L1923.91 1821.89Z"
                                fill="#FEF6F8"
                              ></path>
                              <path
                                id="[Copy] Asian Alliances_4"
                                d="M1939.23 1824.31L1951.7 1825.99L1951.58 1877.8L1942.48 1876.58L1942.9 1867.69L1936.73 1866.86L1934.78 1875.54L1925.62 1874.3L1939.23 1824.31ZM1943.21 1860.15L1944.37 1834.72L1944.37 1833.23L1944.05 1834.68L1938.43 1859.51L1943.21 1860.15Z"
                                fill="#FEF6F8"
                              ></path>
                              <path
                                id="[Copy] Asian Alliances_5"
                                d="M1954.56 1826.72L1962.65 1826.88L1970.87 1856.58L1971.44 1827.05L1979.53 1827.21L1978.53 1878.56L1970.44 1878.41L1962.23 1848.64L1961.65 1878.23L1953.56 1878.08L1954.56 1826.72Z"
                                fill="#FEF6F8"
                              ></path>
                              <path
                                id="[Copy] Asian Alliances_6"
                                d="M2001.23 1824.92L2013.63 1822.82L2028.94 1872.31L2019.89 1873.85L2017.65 1865.24L2011.51 1866.29L2012.23 1875.15L2003.12 1876.7L2001.23 1824.92ZM2015.69 1857.96L2009.23 1833.33L2008.8 1831.91L2008.92 1833.38L2010.95 1858.76L2015.69 1857.96Z"
                                fill="#FEF6F8"
                              ></path>
                              <path
                                id="[Copy] Asian Alliances_7"
                                d="M2017.78 1821.87L2026.53 1819.56L2037.73 1861.95L2048.28 1859.17L2050.2 1866.43L2030.9 1871.53L2017.78 1821.87Z"
                                fill="#FEF6F8"
                              ></path>
                              <path
                                id="[Copy] Asian Alliances_8"
                                d="M2036.45 1817.04L2044.94 1813.9L2060.16 1855.03L2070.39 1851.24L2073 1858.29L2054.27 1865.21L2036.45 1817.04Z"
                                fill="#FEF6F8"
                              ></path>
                              <path
                                id="[Copy] Asian Alliances_9"
                                d="M2053.87 1811.14L2062.07 1807.33L2083.74 1853.89L2075.53 1857.71L2053.87 1811.14Z"
                                fill="#FEF6F8"
                              ></path>
                              <path
                                id="[Copy] Asian Alliances_10"
                                d="M2067.05 1803.79L2077.96 1797.54L2109.4 1838.72L2101.43 1843.28L2096.36 1835.98L2090.96 1839.07L2094.69 1847.15L2086.67 1851.74L2067.05 1803.79ZM2092.01 1829.81L2077.46 1808.92L2076.56 1807.74L2077.18 1809.08L2087.84 1832.21L2092.01 1829.81Z"
                                fill="#FEF6F8"
                              ></path>
                              <path
                                id="[Copy] Asian Alliances_11"
                                d="M2081.02 1796.42L2087.53 1791.63L2112.13 1810.18L2094.61 1786.41L2101.12 1781.61L2131.59 1822.95L2125.08 1827.75L2100.44 1809.15L2118 1832.97L2111.49 1837.77L2081.02 1796.42Z"
                                fill="#FEF6F8"
                              ></path>
                              <path
                                id="[Copy] Asian Alliances_12"
                                d="M2145.06 1812.54C2139.07 1818.35 2132.6 1817.67 2125.66 1810.5L2109.81 1794.13C2102.91 1786.99 2102.45 1780.52 2108.45 1774.72C2114.44 1768.91 2120.89 1769.58 2127.8 1776.71L2132.4 1781.46L2125.76 1787.89L2119.11 1781.02C2117.88 1779.76 2116.84 1779.08 2115.96 1778.97C2115.11 1778.84 2114.29 1779.15 2113.49 1779.93C2112.69 1780.7 2112.33 1781.53 2112.41 1782.41C2112.52 1783.26 2113.18 1784.31 2114.4 1785.57L2134.45 1806.28C2135.64 1807.51 2136.66 1808.2 2137.5 1808.33C2138.38 1808.44 2139.22 1808.1 2140.02 1807.33C2140.82 1806.55 2141.16 1805.74 2141.06 1804.89C2140.98 1804.01 2140.35 1802.96 2139.16 1801.73L2132.46 1794.81L2139.1 1788.38L2143.65 1793.09C2150.59 1800.25 2151.06 1806.74 2145.06 1812.54Z"
                                fill="#FEF6F8"
                              ></path>
                              <path
                                id="[Copy] Asian Alliances_13"
                                d="M2116.84 1767.57L2129.54 1752.4L2135.3 1757.23L2128.41 1765.45L2139.49 1774.72L2146 1766.94L2151.71 1771.72L2145.2 1779.5L2156.28 1788.77L2163.16 1780.55L2168.92 1785.37L2156.23 1800.54L2116.84 1767.57Z"
                                fill="#FEF6F8"
                              ></path>
                              <path
                                id="[Copy] Asian Alliances_14"
                                d="M2180.13 1774.2C2177.76 1777.71 2174.97 1779.63 2171.76 1779.94C2168.56 1780.26 2164.9 1779.03 2160.78 1776.25L2157.85 1774.27L2163.02 1766.61L2168.45 1770.27C2169.87 1771.23 2171.01 1771.69 2171.86 1771.64C2172.72 1771.6 2173.48 1771.08 2174.15 1770.09C2174.8 1769.13 2174.99 1768.28 2174.72 1767.53C2174.44 1766.72 2173.62 1765.86 2172.27 1764.95L2169.88 1763.34C2168.42 1762.35 2167.14 1761.8 2166.04 1761.68C2164.9 1761.53 2163.62 1761.7 2162.21 1762.19L2155.75 1764.18C2152.82 1765.09 2150.17 1765.45 2147.82 1765.26C2145.44 1765.05 2142.97 1764.08 2140.41 1762.36C2136.97 1760.03 2134.9 1757.37 2134.19 1754.36C2133.45 1751.33 2134.22 1748.11 2136.52 1744.71C2138.72 1741.44 2141.33 1739.56 2144.35 1739.07C2147.36 1738.51 2150.6 1739.41 2154.08 1741.76L2157.27 1743.91L2152.14 1751.52L2148.09 1748.79C2146.64 1747.81 2145.5 1747.35 2144.68 1747.42C2143.82 1747.46 2143.09 1747.95 2142.46 1748.87C2141.84 1749.79 2141.65 1750.65 2141.9 1751.43C2142.13 1752.16 2142.87 1752.94 2144.11 1753.78L2145.71 1754.85C2147.02 1755.74 2148.23 1756.24 2149.33 1756.37C2150.4 1756.47 2151.6 1756.3 2152.93 1755.85L2159.3 1753.88C2161.37 1753.26 2163.17 1752.88 2164.72 1752.73C2166.25 1752.53 2167.91 1752.66 2169.7 1753.15C2171.46 1753.61 2173.38 1754.55 2175.47 1755.96C2183.24 1761.2 2184.8 1767.28 2180.13 1774.2Z"
                                fill="#FEF6F8"
                              ></path>
                            </g>
                          </g>
                          <circle
                            id="Ellipse 226"
                            cx="2208.5"
                            cy="2211.5"
                            r="324.5"
                            fill="#FFD864"
                          ></circle>
                          <circle
                            id="Ellipse 220"
                            cx="452.5"
                            cy="1270.5"
                            r="339.5"
                            fill="#FFD864"
                          ></circle>
                          <circle
                            id="Ellipse 221"
                            cx="834.75"
                            cy="1607.25"
                            r="168.75"
                            fill="#FFD864"
                          ></circle>
                          <circle
                            id="Ellipse 637"
                            cx="415"
                            cy="1958"
                            r="345"
                            fill="#FFD864"
                          ></circle>
                          <circle
                            id="Ellipse 636"
                            cx="2001"
                            cy="1158"
                            r="113"
                            fill="#FFD864"
                          ></circle>
                          <circle
                            id="Ellipse 225"
                            cx="1071"
                            cy="1604.5"
                            r="49"
                            fill="#FFD864"
                          ></circle>
                          <circle
                            id="Ellipse 638"
                            cx="796"
                            cy="1835"
                            r="43"
                            fill="#FFD864"
                          ></circle>
                          <circle
                            id="Ellipse 635"
                            cx="1870.5"
                            cy="1267.5"
                            r="44.5"
                            fill="#FFD864"
                          ></circle>
                          <circle
                            id="Ellipse 634"
                            cx="1584"
                            cy="1613"
                            r="64"
                            fill="#FFD864"
                          ></circle>
                          <circle
                            id="Ellipse 210"
                            cx="1295"
                            cy="2165"
                            r="552"
                            fill="#FFD864"
                          ></circle>
                          <g id="Group 316124546">
                            <ellipse
                              id="Ellipse 211"
                              cx="1312.79"
                              cy="1064.67"
                              rx="539.792"
                              ry="540.332"
                              fill="#FFD864"
                            ></ellipse>
                            <ellipse
                              id="Ellipse 212"
                              cx="1312.79"
                              cy="1064.67"
                              rx="539.792"
                              ry="540.332"
                              fill="#FFD864"
                            ></ellipse>
                            <g id="Group 316124545">
                              <g id="Group 316124512">
                                <ellipse
                                  id="Ellipse 601"
                                  cx="1315.18"
                                  cy="1069.49"
                                  rx="45.5744"
                                  ry="45.3043"
                                  fill="#473D36"
                                ></ellipse>
                                <path
                                  id="Vector 571"
                                  d="M1312.21 1053.57C1331.04 1053.57 1331.04 1042.93 1331.04 1033.05C1331.04 1042.93 1331.04 1053.57 1349.86 1053.57C1331.04 1053.57 1331.04 1067.26 1331.04 1076.38C1331.04 1067.26 1331.04 1053.57 1312.21 1053.57Z"
                                  fill="#F3EFE6"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                      <g id="Group 316124688">
                        <g
                          class="svg-parallax"
                          style={{
                            transform:
                              "translate3d(6.225px, 14.9797px, 0px) rotate(47deg)",
                          }}
                        >
                          <g class="follow-smiley">
                            <path
                              id="Vector 628"
                              d="M912.942 1675.55C916.028 1681.62 924.307 1680.04 926.296 1675.68"
                              stroke="#473D36"
                              stroke-width="3.44915"
                              stroke-linecap="round"
                            ></path>
                            <circle
                              id="Ellipse 612"
                              cx="931.336"
                              cy="1658.16"
                              r="2.95982"
                              transform="rotate(-18.8688 931.336 1658.16)"
                              fill="#473D36"
                            ></circle>
                            <circle
                              id="Ellipse 607"
                              cx="906.758"
                              cy="1657.18"
                              r="2.95982"
                              transform="rotate(-18.8688 906.758 1657.18)"
                              fill="#473D36"
                            ></circle>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <svg
                    viewBox="0 0 704 985"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="circles-svg position-relative d-sm-none"
                    data-v-f223df8c=""
                    
                  >
                    <ellipse
                      cx="352"
                      cy="370.463"
                      rx="352"
                      ry="370.463"
                      fill="#FFB800"
                      data-v-f223df8c=""
                    ></ellipse>
                    <rect
                      x="97"
                      y="258"
                      width="510"
                      height="727"
                      fill="#FFB800"
                      data-v-f223df8c=""
                    ></rect>
                    <g
                      class="bottom-circle"
                      data-v-f223df8c=""
                      data-svg-origin="418.25596618652344 586.0989837646484"
                      transform="matrix(0.7526,0.65848,-0.65848,0.7526,489.41098,-130.4123)"
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transformOrigin: "0px 0px",
                      }}
                    >
                      <circle
                        cx="418.256"
                        cy="586.099"
                        r="127.058"
                        fill="#FFD864"
                        data-v-f223df8c=""
                      ></circle>
                      <path
                        d="M354.414 648.88L351.521 645.367L339.979 653.05L339.456 653.388L339.888 652.939L349.644 643.087L346.767 639.592L330.494 649.812L332.614 652.387L344.702 644.131L345.174 643.804L345.189 643.823L344.793 644.241L334.582 654.778L337.156 657.904L349.472 649.924L349.944 649.598L349.959 649.616L349.548 650.016L339.14 660.314L341.26 662.889L354.414 648.88Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M345.411 637.516L343.609 634.681L327.524 644.903L329.326 647.738L345.411 637.516Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M342.402 633.034L340.843 630.059L326.43 637.61L325.169 635.204L322.7 636.498L326.791 644.306L329.26 643.012L327.988 640.585L342.402 633.034Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M336.272 621.446L335.058 618.314L317.288 625.205L318.503 628.336L326.099 625.391L326.969 627.634L319.373 630.58L320.587 633.712L338.357 626.821L337.142 623.69L329.546 626.635L328.676 624.392L336.272 621.446Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M332.272 608.1L330.868 600.898L328.133 601.431L328.894 605.336L323.633 606.362L322.912 602.667L320.2 603.196L320.92 606.891L315.659 607.916L314.898 604.011L312.162 604.545L313.566 611.747L332.272 608.1Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M330.788 600.173L330.491 596.755L327.191 596.755L326.991 594.453L330.242 593.883L329.947 590.489L311.178 594.654L311.582 599.306L330.788 600.173ZM324.392 596.735L314.945 596.719L314.395 596.719L314.934 596.6L324.237 594.955L324.392 596.735Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M330.172 584.892C330.253 581.772 328.435 580.199 324.744 580.103L322.315 580.04L322.226 583.469L325.798 583.562C327.132 583.597 327.501 584.036 327.481 584.822C327.46 585.607 327.068 586.026 325.735 585.991L315.042 585.713C313.684 585.678 313.314 585.239 313.335 584.453C313.355 583.667 313.747 583.248 315.105 583.284L318.653 583.376L318.743 579.947L316.29 579.883C312.598 579.787 310.725 581.263 310.643 584.383C310.562 587.503 312.356 589.075 316.048 589.171L324.502 589.391C328.193 589.487 330.091 588.011 330.172 584.892Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M330.979 573.53L331.456 570.205L312.591 567.499L312.114 570.824L320.179 571.981L319.837 574.363L311.772 573.206L311.295 576.531L330.16 579.237L330.637 575.912L322.572 574.755L322.914 572.373L330.979 573.53Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M333.352 562.415L334.451 559.241L328.396 557.143L328.583 556.603C329.886 552.844 328.823 551.038 324.681 549.603L323.983 549.361C319.774 547.902 317.933 548.702 316.631 552.461L315.344 556.175L333.352 562.415ZM326.01 556.316L318.829 553.828L319.173 552.837C319.524 551.824 320.203 551.682 321.532 552.142L324.886 553.304C326.214 553.765 326.704 554.313 326.353 555.326L326.01 556.316Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M336.288 554.121L337.656 551.053L320.248 543.293L318.88 546.361L336.288 554.121Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M338.621 548.622L340.086 546.002L330.499 540.643L341.678 543.153L343.143 540.532L326.506 531.233L325.042 533.854L334.608 539.201L323.449 536.703L321.985 539.323L338.621 548.622Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M344.405 538.454L346.357 535.721L333.115 526.265L334.694 524.055L332.425 522.435L327.303 529.609L329.571 531.228L331.163 528.999L344.405 538.454Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M357.352 523.625C359.627 521.42 359.444 519.109 357.057 516.646C355.001 514.525 353.384 514.466 351.343 514.653L348.879 514.884C347.917 514.987 347.212 514.875 346.333 513.968L345.835 513.455C345.039 512.634 345.031 512.112 345.612 511.548C346.16 511.017 346.7 510.958 347.662 511.95L348.922 513.251L351.368 510.879L350.373 509.853C348.201 507.612 345.86 507.559 343.773 509.582C341.532 511.754 341.748 514.133 343.837 516.288C345.528 518.033 347.192 518.312 349.267 518.125L351.764 517.894C352.777 517.775 353.499 517.904 354.461 518.897L355.207 519.666C356.053 520.539 356.111 521.079 355.496 521.676C354.88 522.273 354.324 522.247 353.412 521.306L351.721 519.562L349.258 521.949L350.17 522.89C352.723 525.524 355.094 525.814 357.352 523.625Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M364.893 517.1C367.369 515.201 367.463 512.817 365.216 509.887L360.055 503.157C357.808 500.227 355.482 499.699 353.005 501.598C350.529 503.497 350.435 505.881 352.682 508.811L357.843 515.541C360.09 518.471 362.416 518.999 364.893 517.1ZM361.247 514.342L354.738 505.854C353.955 504.833 354.015 504.246 354.658 503.753C355.301 503.26 355.898 503.373 356.68 504.394L363.175 512.863C363.943 513.865 363.883 514.452 363.24 514.945C362.598 515.438 362.015 515.344 361.247 514.342Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M369.498 513.422L375.826 509.568L374.376 507.188L370.917 509.294L362.453 495.398L359.584 497.145L369.498 513.422Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M376.58 509.133L380.243 507.403C383.711 505.766 384.409 504.119 382.731 500.565L378.967 492.594C377.269 488.996 375.574 488.532 372.106 490.169L368.443 491.898L376.58 509.133ZM378.54 505.415L372.559 492.748L373.184 492.453C374.369 491.893 374.889 491.99 375.57 493.434L379.923 502.654C380.595 504.076 380.371 504.55 379.208 505.1L378.54 505.415Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M385.759 506.52L386.333 508.086C387.882 506.427 388.608 504.461 388.001 502.806C387.526 501.509 386.58 500.866 385.394 501.3C384.343 501.686 383.845 502.68 384.246 503.776C384.681 504.962 385.587 505.289 386.393 504.994C386.997 504.773 387.22 504.412 387.377 503.872C387.394 504.957 386.631 505.922 385.759 506.52Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M397.487 500.994L401.98 500.27L401.175 486.429L401.147 485.806L401.316 486.406L404.896 499.801L409.365 499.082L408.759 479.875L405.466 480.405L406.489 495.008L406.533 495.58L406.51 495.584L406.348 495.031L402.408 480.897L398.41 481.541L399.08 496.201L399.124 496.773L399.101 496.777L398.963 496.22L395.329 482.037L392.036 482.567L397.487 500.994Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M412.781 498.865L420.117 498.71L420.058 495.923L416.08 496.007L415.967 490.648L419.73 490.569L419.671 487.806L415.908 487.885L415.795 482.526L419.772 482.442L419.713 479.655L412.377 479.811L412.781 498.865Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M427.906 499.16L431.225 499.673L432.205 493.34L432.77 493.427C436.702 494.035 438.288 492.665 438.958 488.333L439.07 487.604C439.751 483.201 438.635 481.534 434.703 480.926L430.819 480.325L427.906 499.16ZM432.591 490.844L433.752 483.334L434.788 483.494C435.848 483.658 436.11 484.301 435.895 485.69L435.352 489.198C435.138 490.587 434.686 491.168 433.627 491.005L432.591 490.844Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M443.802 502.424L447.108 503.342C446.993 502.865 447.123 502.307 447.308 501.642L448.289 498.107C448.728 496.523 448.576 495.022 446.964 493.882C448.871 493.694 449.761 492.804 450.563 489.911L450.646 489.613C451.666 485.94 450.69 484.557 447.201 483.588L443.092 482.448L437.994 500.812L441.231 501.711L443.289 494.296L444.184 494.544C444.896 494.742 445.506 495.307 445.13 496.661L444.002 500.724C443.811 501.413 443.649 502.085 443.802 502.424ZM443.964 491.863L445.653 485.779L446.548 486.028C447.65 486.334 447.863 486.813 447.494 488.145L446.78 490.716C446.506 491.703 446.076 492.449 444.86 492.111L443.964 491.863Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M451.842 505.52C454.734 506.694 456.837 505.568 458.226 502.147L461.416 494.288C462.805 490.867 462.082 488.594 459.191 487.42C456.299 486.246 454.196 487.372 452.807 490.793L449.617 498.651C448.228 502.073 448.951 504.346 451.842 505.52ZM452.374 500.979L456.398 491.068C456.882 489.876 457.419 489.631 458.169 489.936C458.92 490.241 459.125 490.813 458.641 492.005L454.626 501.894C454.151 503.063 453.614 503.308 452.864 503.004C452.113 502.699 451.899 502.149 452.374 500.979Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M461.095 509.932C463.824 511.444 465.957 510.692 467.746 507.462L474.489 495.292L471.509 493.641L464.293 506.665C463.681 507.77 463.108 507.969 462.399 507.577C461.67 507.173 461.556 506.592 462.168 505.488L469.383 492.463L466.382 490.801L459.64 502.971C457.851 506.201 458.365 508.419 461.095 509.932Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M466.555 512.781L469.833 515.16C472.937 517.412 474.716 517.232 477.025 514.05L482.202 506.916C484.539 503.696 484.131 501.987 481.026 499.734L477.749 497.356L466.555 512.781ZM470.757 512.71L478.984 501.372L479.543 501.778C480.604 502.548 480.769 503.05 479.831 504.342L473.843 512.595C472.919 513.867 472.396 513.899 471.354 513.144L470.757 512.71Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M475.247 519.251L480.741 524.221L482.611 522.154L479.608 519.437L490.524 507.371L488.033 505.117L475.247 519.251Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M482.19 526.158L484.433 528.659L489.399 524.204L500.831 518.397L498.54 515.843L491.615 520.039L491.247 520.306L491.536 519.951L496.441 513.502L494.15 510.949L487.156 521.704L482.19 526.158Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M492.932 539.753C494.591 542.453 496.886 542.776 499.809 540.98C502.326 539.434 502.735 537.869 502.995 535.836L503.305 533.381C503.413 532.419 503.676 531.755 504.752 531.094L505.361 530.72C506.335 530.121 506.847 530.226 507.271 530.916C507.67 531.566 507.61 532.106 506.433 532.829L504.89 533.777L506.673 536.68L507.891 535.931C510.551 534.298 511.111 532.024 509.59 529.548C507.956 526.889 505.587 526.582 503.029 528.154C500.959 529.426 500.326 530.989 500.057 533.055L499.74 535.543C499.636 536.557 499.353 537.234 498.176 537.958L497.262 538.519C496.227 539.155 495.687 539.095 495.238 538.364C494.789 537.633 494.935 537.097 496.051 536.411L498.122 535.139L496.326 532.216L495.21 532.902C492.084 534.822 491.286 537.074 492.932 539.753Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M498.539 549.944C499.851 552.776 502.016 553.427 505.367 551.876L517.992 546.031L516.561 542.939L503.049 549.195C501.904 549.725 501.323 549.548 500.982 548.813C500.632 548.056 500.883 547.52 502.028 546.99L515.54 540.734L514.099 537.621L501.474 543.466C498.123 545.017 497.228 547.112 498.539 549.944Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M501.336 555.664L502.373 558.859L508.468 556.878L508.645 557.422C509.874 561.206 511.812 562.004 515.981 560.65L516.683 560.422C520.92 559.045 521.906 557.297 520.676 553.514L519.462 549.775L501.336 555.664ZM510.87 556.098L518.098 553.75L518.422 554.747C518.753 555.767 518.297 556.29 516.96 556.725L513.584 557.822C512.247 558.256 511.525 558.115 511.194 557.095L510.87 556.098Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M504.37 565.194L505.037 568.486L511.318 567.214L511.432 567.774C512.222 571.673 514.056 572.687 518.352 571.817L519.076 571.67C523.442 570.786 524.62 569.162 523.83 565.263L523.05 561.41L504.37 565.194ZM513.793 566.712L521.242 565.204L521.45 566.231C521.663 567.282 521.15 567.75 519.772 568.029L516.293 568.734C514.916 569.013 514.214 568.79 514.001 567.74L513.793 566.712Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M506.49 579.823C506.749 582.933 508.703 584.301 512.383 583.994L520.835 583.291C524.515 582.985 526.216 581.314 525.958 578.203C525.699 575.093 523.744 573.726 520.065 574.032L511.613 574.735C507.933 575.042 506.231 576.713 506.49 579.823ZM510.781 578.247L521.441 577.36C522.723 577.253 523.184 577.621 523.251 578.429C523.318 579.236 522.901 579.677 521.619 579.784L510.983 580.669C509.724 580.773 509.263 580.405 509.196 579.598C509.129 578.791 509.523 578.352 510.781 578.247Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M506.939 591.754L506.824 595.183C507.261 594.959 507.833 594.955 508.524 594.978L512.19 595.1C513.833 595.154 515.256 594.654 515.985 592.819C516.616 594.627 517.69 595.283 520.691 595.383L521 595.393C524.81 595.52 525.925 594.246 526.045 590.627L526.187 586.365L507.139 585.73L507.027 589.088L514.718 589.344L514.687 590.273C514.663 591.011 514.257 591.736 512.852 591.689L508.638 591.549C507.923 591.525 507.232 591.526 506.939 591.754ZM517.242 589.428L523.552 589.638L523.521 590.567C523.483 591.71 523.067 592.03 521.686 591.984L519.019 591.895C517.995 591.861 517.169 591.619 517.211 590.357L517.242 589.428Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M506.905 596.872L506.428 600.197L522.534 602.507L522.149 605.196L524.908 605.592L526.159 596.866L523.4 596.471L523.011 599.182L506.905 596.872Z"
                        fill="#FFB800"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M382.793 664.016L387.06 665.912L381.628 684.354L378.515 682.971L379.589 679.85L377.477 678.912L375.881 681.8L372.746 680.407L382.793 664.016ZM380.481 677.197L383.541 668.259L383.698 667.729L383.432 668.21L378.849 676.471L380.481 677.197Z"
                        fill="#FEF6F8"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M387.59 686.829C386.09 686.356 385.115 685.566 384.665 684.458C384.215 683.35 384.267 681.918 384.822 680.161L385.216 678.911L388.487 679.943L387.757 682.26C387.565 682.866 387.523 683.319 387.628 683.619C387.733 683.918 387.998 684.135 388.422 684.269C388.831 684.398 389.155 684.375 389.393 684.2C389.651 684.015 389.871 683.635 390.053 683.059L390.375 682.037C390.571 681.416 390.633 680.903 390.561 680.497C390.494 680.076 390.298 679.64 389.975 679.188L388.584 677.101C387.951 676.152 387.545 675.249 387.365 674.393C387.19 673.522 387.275 672.541 387.619 671.45C388.082 669.981 388.811 668.962 389.807 668.393C390.807 667.81 392.034 667.747 393.488 668.206C394.882 668.645 395.825 669.376 396.319 670.397C396.833 671.409 396.856 672.657 396.387 674.141L395.957 675.504L392.708 674.48L393.253 672.753C393.449 672.132 393.492 671.679 393.382 671.394C393.276 671.095 393.027 670.883 392.633 670.759C392.239 670.634 391.916 670.657 391.662 670.827C391.429 670.987 391.228 671.331 391.061 671.862L390.846 672.543C390.669 673.104 390.617 673.587 390.689 673.992C390.765 674.383 390.953 674.792 391.251 675.219L392.626 677.276C393.064 677.947 393.39 678.55 393.605 679.084C393.839 679.607 393.964 680.213 393.981 680.901C394.002 681.574 393.871 682.357 393.589 683.251C392.543 686.568 390.543 687.761 387.59 686.829Z"
                        fill="#FEF6F8"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M398.397 670.018L401.674 670.757L397.482 689.349L394.205 688.61L398.397 670.018Z"
                        fill="#FEF6F8"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M405.709 671.288L410.336 671.912L410.293 691.137L406.917 690.682L407.073 687.386L404.783 687.077L404.06 690.297L400.661 689.839L405.709 671.288ZM407.186 684.588L407.616 675.151L407.619 674.598L407.498 675.135L405.415 684.35L407.186 684.588Z"
                        fill="#FEF6F8"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M412.857 691.782L415.858 691.841L416.073 680.86L419.121 691.905L422.122 691.963L422.495 672.908L419.494 672.85L419.279 683.806L416.23 672.786L413.229 672.727L412.857 691.782Z"
                        fill="#FEF6F8"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M432.611 672.162L437.214 671.38L442.894 689.748L439.535 690.318L438.703 687.124L436.425 687.511L436.693 690.8L433.311 691.374L432.611 672.162ZM437.978 684.42L435.581 675.282L435.419 674.754L435.464 675.302L436.217 684.719L437.978 684.42Z"
                        fill="#FEF6F8"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M440.053 670.048L443.289 669.148L447.648 684.825L451.55 683.74L452.296 686.426L445.158 688.41L440.053 670.048Z"
                        fill="#FEF6F8"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M447.916 667.832L451.052 666.625L456.894 681.812L460.674 680.357L461.675 682.959L454.76 685.619L447.916 667.832Z"
                        fill="#FEF6F8"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M454.717 665.752L457.745 664.296L466.006 681.471L462.978 682.927L454.717 665.752Z"
                        fill="#FEF6F8"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M460.26 662.675L464.281 660.302L476.142 675.432L473.208 677.164L471.291 674.478L469.301 675.652L470.725 678.629L467.771 680.372L460.26 662.675ZM469.649 672.21L464.148 664.53L463.808 664.094L464.046 664.59L468.11 673.118L469.649 672.21Z"
                        fill="#FEF6F8"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M466.531 659.106L468.924 657.294L478.141 664.061L471.526 655.324L473.92 653.512L485.424 668.707L483.03 670.519L473.799 663.733L480.428 672.489L478.035 674.301L466.531 659.106Z"
                        fill="#FEF6F8"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M491.574 663.497C489.348 665.651 486.949 665.399 484.375 662.74L478.492 656.664C475.929 654.017 475.761 651.616 477.986 649.462C480.211 647.308 482.605 647.554 485.168 650.201L486.874 651.964L484.41 654.351L481.941 651.8C481.488 651.332 481.099 651.079 480.774 651.04C480.46 650.99 480.155 651.109 479.858 651.396C479.561 651.683 479.427 651.99 479.456 652.316C479.496 652.631 479.742 653.023 480.195 653.49L487.635 661.176C488.077 661.632 488.455 661.885 488.768 661.935C489.094 661.974 489.404 661.85 489.701 661.563C489.998 661.276 490.126 660.975 490.086 660.659C490.058 660.333 489.823 659.942 489.381 659.485L486.895 656.918L489.36 654.532L491.05 656.278C493.624 658.936 493.799 661.343 491.574 663.497Z"
                        fill="#FEF6F8"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M481.784 646.061L486.494 640.434L488.631 642.223L486.077 645.274L490.188 648.715L492.604 645.828L494.723 647.602L492.307 650.489L496.417 653.929L498.971 650.878L501.108 652.668L496.398 658.294L481.784 646.061Z"
                        fill="#FEF6F8"
                        data-v-f223df8c=""
                      ></path>
                      <path
                        d="M506.036 647.299C505.157 648.603 504.122 649.313 502.932 649.43C501.742 649.547 500.383 649.09 498.856 648.06L497.77 647.327L499.688 644.483L501.703 645.842C502.229 646.197 502.651 646.367 502.969 646.351C503.286 646.335 503.569 646.143 503.818 645.774C504.057 645.419 504.127 645.102 504.028 644.824C503.923 644.524 503.621 644.205 503.121 643.867L502.232 643.268C501.692 642.904 501.218 642.698 500.808 642.652C500.386 642.597 499.912 642.66 499.387 642.843L496.991 643.583C495.901 643.92 494.92 644.054 494.048 643.983C493.163 643.903 492.247 643.544 491.299 642.904C490.022 642.042 489.252 641.054 488.989 639.938C488.713 638.813 489.002 637.619 489.855 636.355C490.672 635.143 491.64 634.446 492.76 634.263C493.876 634.057 495.079 634.39 496.369 635.26L497.554 636.06L495.649 638.884L494.148 637.871C493.608 637.507 493.186 637.338 492.882 637.362C492.565 637.378 492.291 637.557 492.06 637.9C491.829 638.242 491.759 638.559 491.85 638.85C491.936 639.119 492.21 639.409 492.671 639.72L493.263 640.12C493.75 640.448 494.199 640.636 494.608 640.682C495.004 640.72 495.45 640.656 495.944 640.491L498.307 639.758C499.075 639.528 499.745 639.387 500.318 639.333C500.886 639.256 501.503 639.308 502.167 639.488C502.818 639.659 503.532 640.006 504.309 640.531C507.192 642.476 507.768 644.732 506.036 647.299Z"
                        fill="#FEF6F8"
                        data-v-f223df8c=""
                      ></path>
                    </g>
                    <circle
                      cx="218.121"
                      cy="511.121"
                      r="81.1211"
                      fill="#FFD864"
                      data-v-f223df8c=""
                    ></circle>
                    <circle
                      cx="316.258"
                      cy="482.258"
                      r="17.2578"
                      fill="#FFD864"
                      data-v-f223df8c=""
                    ></circle>
                    <circle
                      cx="180.5"
                      cy="404.5"
                      r="29.5"
                      fill="#FFD864"
                      data-v-f223df8c=""
                    ></circle>
                    <circle
                      cx="272.5"
                      cy="595.5"
                      r="16.5"
                      fill="#FFD864"
                      data-v-f223df8c=""
                    ></circle>
                    <circle
                      cx="285"
                      cy="617"
                      r="7"
                      fill="#FFD864"
                      data-v-f223df8c=""
                    ></circle>
                    <circle
                      cx="359.5"
                      cy="733.5"
                      r="30.5"
                      fill="#FFD864"
                      data-v-f223df8c=""
                    ></circle>
                    <circle
                      cx="527"
                      cy="695"
                      r="24"
                      fill="#FFD864"
                      data-v-f223df8c=""
                    ></circle>
                    <circle
                      cx="198"
                      cy="723"
                      r="129"
                      fill="#FFD864"
                      data-v-f223df8c=""
                    ></circle>
                    <circle
                      cx="474"
                      cy="841"
                      r="129"
                      fill="#FFD864"
                      data-v-f223df8c=""
                    ></circle>
                    <circle
                      cx="525"
                      cy="436"
                      r="56"
                      fill="#FFD864"
                      data-v-f223df8c=""
                    ></circle>
                    <ellipse
                      cx="349.024"
                      cy="298.191"
                      rx="167.024"
                      ry="167.191"
                      fill="#FFD864"
                      data-v-f223df8c=""
                    ></ellipse>
                    <ellipse
                      cx="349.024"
                      cy="298.191"
                      rx="167.024"
                      ry="167.191"
                      fill="#FFD864"
                      data-v-f223df8c=""
                    ></ellipse>
                    <ellipse
                      cx="349.107"
                      cy="298.036"
                      rx="12.1073"
                      ry="12.0356"
                      fill="#473D36"
                      data-v-f223df8c=""
                    ></ellipse>
                  </svg>

                  <svg
                    viewBox="0 0 1660 1681"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-16c2f99a=""
          data-v-f223df8c=""
                    class={`curved-text curved-text curved-text--top ${isVisible ? 'supporting' : ''}`}
           ref={textPathRef}
                  >
                    <defs data-v-16c2f99a="">
                      <path
                        data-v-16c2f99a=""
                        id="clip-path-134"
                        d="M335,840.002L335,840.002C335,715.085 387.204,595.283 480.128,506.953C573.055,418.623 699.085,369 830.5,369C961.915,369 1087.95,418.623 1180.87,506.953C1273.79,595.283 1326,715.085 1326,840.002C1326,964.919 1273.79,1084.72 1180.87,1173.05C1087.95,1261.38 961.915,1311 830.5,1311C699.085,1311 573.055,1261.38 480.128,1173.05C387.204,1084.72 335,964.919 335,840.002"
                        stroke="#0000FF"
                      ></path>
                    </defs>
                    <text
                      fill="#FFD864"
                      class="curved-text text-uppercase pp-bold"
                      data-v-16c2f99a=""
                    >
                      <textPath
                        startOffset="25%"
                        text-anchor="middle"
                        xlinkHref="#clip-path-134"
              data-v-16c2f99a=""
             
                      >
                        SUPPORTING
                      </textPath>
                    </text>
                  </svg>
                  <svg
                    viewBox="0 0 1660 1681"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class={`curved-text curved-text curved-text--bottom ${isVisible ? 'communities' : ''}`}
                    data-v-16c2f99a=""
          data-v-f223df8c=""
          ref={textPathRef}
                  >
                    <defs data-v-16c2f99a="">
                      <path
                        data-v-16c2f99a=""
                        id="clip-path-135"
                        d="M335,840.002L335,840.002C335,715.085 387.204,595.283 480.128,506.953C573.055,418.623 699.085,369 830.5,369C961.915,369 1087.95,418.623 1180.87,506.953C1273.79,595.283 1326,715.085 1326,840.002C1326,964.919 1273.79,1084.72 1180.87,1173.05C1087.95,1261.38 961.915,1311 830.5,1311C699.085,1311 573.055,1261.38 480.128,1173.05C387.204,1084.72 335,964.919 335,840.002"
                        stroke="#0000FF"
                      ></path>
                    </defs>
                    <text
                      fill="#FFD864"
                      class="curved-text text-uppercase pp-bold"
                      data-v-16c2f99a=""
                    >
                      <textPath
                        startOffset="25%"
                        text-anchor="middle"
                        xlinkHref="#clip-path-135"
              data-v-16c2f99a=""
              
                      >
                        OUR COMMUNITIES
                      </textPath>
                    </text>
                  </svg>

                  <img
                    src={f57c}
                    alt="Boba Ice Creams"
                    className="paths t-0 on-top"
                    data-v-f223df8c=""
                  />
                </div>
                
                <div
                  data-id="waypoint-138"
                  className="synchronized-waypoint newsletter-component position-relative z-4 pb-1 color-yellow pp-bold text-center text-uppercase d-flex flex-column justify-content-between overflow-hidden"
                >
                  <div className="circle-bg bg-purple6 position-absolute"></div>
                  <div
                    data-delay="0.1"
                    data-preset="opacity,scale"
                    data-fromy="100"
                    data-fromscale="0.85"
                    data-dur="1.5"
                    className="icecream should-animate"
                    style={{ opacity: 1 }}
                  >
                    <figure
                      src=" img/newsletter-icecream.png "
                      className="spd overflow-hidden full-absolute position-relative "
                      style={stylesE26}
                      data-v-23b40a86=" "
                    >
                      <div data-v-23b40a86=" ">
                        <picture data-v-23b40a86=" ">
                          <source
                            media="(min-width:1920px) "
                            srcset=" https://images.ctfassets.net/j8k8klriwj2h/6BatKLyygL6O7Kxy1tuNQ6/cccd6c96e3dbdef34a17c9112c788368/newsletter-icecream.png?w=2200&amp;h=2000&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/6BatKLyygL6O7Kxy1tuNQ6/cccd6c96e3dbdef34a17c9112c788368/newsletter-icecream.png?w=2860&amp;h=2600&amp;q=80&amp;&amp;fm=webp&amp;q=80
        2x "
                            data-v-23b40a86=" "
                          />
                          <source
                            media="(min-width:1200px) "
                            srcset=" https://images.ctfassets.net/j8k8klriwj2h/6BatKLyygL6O7Kxy1tuNQ6/cccd6c96e3dbdef34a17c9112c788368/newsletter-icecream.png?w=1920&amp;h=1700&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/6BatKLyygL6O7Kxy1tuNQ6/cccd6c96e3dbdef34a17c9112c788368/newsletter-icecream.png?w=2496&amp;h=2210&amp;q=80&amp;&amp;fm=webp&amp;q=80
        2x "
                            data-v-23b40a86=" "
                          />
                          <source
                            media="(min-width:768px) "
                            srcset=" https://images.ctfassets.net/j8k8klriwj2h/6BatKLyygL6O7Kxy1tuNQ6/cccd6c96e3dbdef34a17c9112c788368/newsletter-icecream.png?w=1100&amp;h=1100&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/6BatKLyygL6O7Kxy1tuNQ6/cccd6c96e3dbdef34a17c9112c788368/newsletter-icecream.png?w=1430&amp;h=1430&amp;q=80&amp;&amp;fm=webp&amp;q=80
        2x "
                            data-v-23b40a86=" "
                          />
                          <source
                            media="(min-width:0px) "
                            srcset=" https://images.ctfassets.net/j8k8klriwj2h/6BatKLyygL6O7Kxy1tuNQ6/cccd6c96e3dbdef34a17c9112c788368/newsletter-icecream.png?w=700&amp;h=700&amp;q=80&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/6BatKLyygL6O7Kxy1tuNQ6/cccd6c96e3dbdef34a17c9112c788368/newsletter-icecream.png?w=910&amp;h=910&amp;q=80&amp;&amp;fm=webp&amp;q=80
        2x "
                            data-v-23b40a86=" "
                          />
                          <img
                            draggable="false "
                            loading="eager "
                            alt="newsletter-icecream "
                            className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                            data-v-23b40a86=" "
                          />
                        </picture>
                      </div>
                    </figure>
                  </div>
                  <svg
                    viewBox="0 0 1920 1590 "
                    fill="none "
                    xmlns="http://www.w3.org/2000/svg "
                    xmlnsXlink="http://www.w3.org/1999/xlink "
                    class="round-image "
                  >
                    <defs>
                      <path
                        d="M271.5,907.5A682,682 0 1 11635.5,907.5A682,682 0 1 1271.5,907.5 "
                        stroke="green "
                        id="newsletter-textpath1 "
                      ></path>
                      <path
                        d="M405.5,857A548.5,548.5 0 1 11502.5,857A548.5,548.5 0 1 1405.5,857 "
                        stroke="green "
                        id="newsletter-textpath2 "
                      ></path>
                      <path
                        d="M470.5,833.5A481,481 0 1 11432.5,833.5A481,481 0 1 1470.5,833.5 "
                        stroke="green "
                        id="newsletter-textpath3 "
                      ></path>
                    </defs>
                    <text fill="#FFD864 ">
                      <textPath
                        startOffset="25% "
                        text-anchor="middle "
                        xlinkHref="#newsletter-textpath1 "
                        class="newsletterHeadline newsletter-textpath1 "
                      >
                        The Latest Scoop
                      </textPath>
                    </text>
                    <text fill="#FFD864 " class="content1 ">
                      <textPath
                        startOffset="25% "
                        text-anchor="middle "
                        xlinkHref="#newsletter-textpath2 "
                        class="d-none d-sm-block newsletterCaption newsletter-textpath2 "
                      >
                        SIGN UP FOR OUR NEWSLETTER&nbsp;"CULTURE&nbsp;SHOCK "
                      </textPath>
                    </text>
                    <text fill="#FFD864 " class="content2 ">
                      <textPath
                        startOffset="25% "
                        text-anchor="middle "
                        xlinkHref="#newsletter-textpath3 "
                        class="d-none d-sm-block newsletterCaption newsletter-textpath3 "
                      >
                        AND STAY UP⁃TO⁃DATE ON THE LATEST.
                      </textPath>
                    </text>
                  </svg>
                  <div></div>
                  <div className="position-relative ">
                    <div className="to-fade d-flex flex-column d-sm-none ">
                      <span className="position-relative on-top f4 ">
                        SIGN UP FOR OUR NEWSLETTER&nbsp;"CULTURE&nbsp;SHOCK "
                      </span>
                      <span className="position-relative on-top f4 ">
                        AND STAY UP⁃TO⁃DATE ON THE LATEST.
                      </span>
                    </div>
                    <div className="w-100 p-0-75 p-xl-1-5 bg-purple6 ">
                      <div className="to-fade full-absolute2 ">
                        <form className="button-wrapper w-100 row ">
                          <span className="custom-col position-relative ">
                            <input
                              type="text "
                              placeholder="YOUR EMAIL "
                              className="pp-bold fw-400 text-center text-sm-left input-field input-responsive col-12 col-sm f4 f7-sm h-100 "
                            />
                          </span>
                          <div
                            className="button-component d-flex flex-center position-relative cursor-pointer f4 f7-sm f7-xl col-12 col-sm bg-pink "
                            data-v-7b34fee5=" "
                          >
                            <div
                              className="d-inline-flex flex-center position-relative "
                              data-v-7b34fee5=" "
                            >
                              <span
                                className="text position-relative pp-bold button-text color-red "
                                data-v-7b34fee5=" "
                              >
                                SEND
                              </span>
                              <div
                                className="smiley-holder smiley-holder--1 "
                                data-v-7b34fee5=" "
                              >
                                <div
                                  data-id="waypoint-144 "
                                  className="synchronized-waypoint floating-bubble yellow-smiley smiley--1 "
                                  data-v-4bd6f78a=" "
                                  data-v-7b34fee5=" "
                                  style={{
                                    translate: "none",
                                    rotate: "none",
                                    scale: "none",
                                    transform:
                                      "translate3d(-1.8232%, -4.57%, 0px) rotate(228.785deg)",
                                  }}
                                >
                                  <div data-v-4bd6f78a=" " className=" ">
                                    <svg
                                      width="195 "
                                      height="194 "
                                      viewBox="0 0 195 194 "
                                      fill="none "
                                      xmlns="http://www.w3.org/2000/svg "
                                      class="w-100 h-100 "
                                      data-v-4bd6f78a=" "
                                    >
                                      <ellipse
                                        cx="97.0409 "
                                        cy="96.8766 "
                                        rx="76.4975 "
                                        ry="76.2338 "
                                        transform="rotate(-18.8688 97.0409 96.8766) "
                                        fill="#FFD864 "
                                        data-v-4bd6f78a=" "
                                      ></ellipse>
                                      <path
                                        d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894 "
                                        stroke="#473D36 "
                                        stroke-width="2.45915 "
                                        stroke-linecap="round "
                                        data-v-4bd6f78a=" "
                                      ></path>
                                      <circle
                                        cx="134.577 "
                                        cy="85.9991 "
                                        r="2.11028 "
                                        transform="rotate(-18.8688 134.577 85.9991) "
                                        fill="#473D36 "
                                        data-v-4bd6f78a=" "
                                      ></circle>
                                      <circle
                                        cx="117.053 "
                                        cy="85.2973 "
                                        r="2.11028 "
                                        transform="rotate(-18.8688 117.053 85.2973) "
                                        fill="#473D36 "
                                        data-v-4bd6f78a=" "
                                      ></circle>
                                      <path
                                        d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z "
                                        fill="#F3EFE6 "
                                        data-v-4bd6f78a=" "
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="smiley-holder smiley-holder--2 "
                                data-v-7b34fee5=" "
                              >
                                <div
                                  data-id="waypoint-146 "
                                  className="synchronized-waypoint floating-bubble yellow-smiley smiley--2 "
                                  data-v-4bd6f78a=" "
                                  data-v-7b34fee5=" "
                                  style={{
                                    translate: "none",
                                    rotate: "none",
                                    scale: "none",
                                    transform:
                                      "translate3d(-2.1446%, -9.0696%, 0px) rotate(228.785deg)",
                                  }}
                                >
                                  <div data-v-4bd6f78a=" " className=" ">
                                    <svg
                                      width="195 "
                                      height="194 "
                                      viewBox="0 0 195 194 "
                                      fill="none "
                                      xmlns="http://www.w3.org/2000/svg "
                                      class="w-100 h-100 "
                                      data-v-4bd6f78a=" "
                                    >
                                      <ellipse
                                        cx="97.0409 "
                                        cy="96.8766 "
                                        rx="76.4975 "
                                        ry="76.2338 "
                                        transform="rotate(-18.8688 97.0409 96.8766) "
                                        fill="#FFD864 "
                                        data-v-4bd6f78a=" "
                                      ></ellipse>
                                      <path
                                        d="M121.464 98.397C123.664 102.725 129.567 101.598 130.985 98.4894 "
                                        stroke="#473D36 "
                                        stroke-width="2.45915 "
                                        stroke-linecap="round "
                                        data-v-4bd6f78a=" "
                                      ></path>
                                      <circle
                                        cx="134.577 "
                                        cy="85.9991 "
                                        r="2.11028 "
                                        transform="rotate(-18.8688 134.577 85.9991) "
                                        fill="#473D36 "
                                        data-v-4bd6f78a=" "
                                      ></circle>
                                      <circle
                                        cx="117.053 "
                                        cy="85.2973 "
                                        r="2.11028 "
                                        transform="rotate(-18.8688 117.053 85.2973) "
                                        fill="#473D36 "
                                        data-v-4bd6f78a=" "
                                      ></circle>
                                      <path
                                        d="M73.7871 55.8807C88.559 55.8807 88.559 47.4581 88.559 39.6372C88.559 47.4581 88.559 55.8807 103.331 55.8807C88.559 55.8807 88.559 66.7098 88.559 73.9292C88.559 66.7098 88.559 55.8807 73.7871 55.8807Z "
                                        fill="#F3EFE6 "
                                        data-v-4bd6f78a=" "
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="to-fade position-absolute b-0 l-0 pp-bold d-flex flex-column-reverse flex-sm-column w-100 faded ">
                        <div className="f1-custom-2 f5-1-sm f3-custom-xl text-uppercase color-white ">
                          THANK YOU FOR SIGNING UP!
                        </div>
                        <div className="text-uppercase f4 f10-sm tnx-caption pb-1-75 px-0-5 px-sm-1 px-xl-0 pb-sm-0 ">
                          YOU’VE SIGNED UP FOR OUR NEWSLETTER “CULTURE SHOCK”
                          AND WILL BE THE FIRST TO GET THE LATEST SCOOP
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-v-20b31861=" "
                  className="socials-component bg-yellow pt-1-75 pt-md-4 pt-lg-5 z-2 position-relative "
                >
                  <div
                    data-v-20b31861=" "
                    data-id="waypoint-352 "
                    className="synchronized-waypoint d-flex flex-column align-items-center "
                  >
                    <svg
                      data-v-20b31861=" "
                      viewBox="0 0 24 22 "
                      fill="none "
                      xmlns="http://www.w3.org/2000/svg "
                      data-preset="opacity,y "
                      data-delay=".1 "
                      data-fromy="-50 "
                      className="arrow mb-1-75 mb-md-4 mb-lg-5 should-animate "
                      style={{ opacity: 1 }}
                    >
                      <rect
                        data-v-20b31861=" "
                        x="12.3545 "
                        y="13.7109 "
                        width="12.3547 "
                        height="5.4052 "
                        rx="0.310973 "
                        transform="rotate(-180 12.3545 13.7109) "
                      ></rect>
                      <path
                        data-v-20b31861=" "
                        d="M23.4691 10.6818C23.6764 10.8015 23.6764 11.1007 23.4691 11.2204L6.98765 20.736C6.71212 20.895 6.40377 20.5867 6.56285 20.3112L11.8771 11.1066C11.9327 11.0104 11.9327 10.8918 11.8771 10.7956L6.56285 1.59102C6.40377 1.31548 6.71211 1.00714
                                    6.98765 1.16622L23.4691 10.6818Z "
                      ></path>
                    </svg>
                    <div
                      data-v-20b31861=" "
                      className="hash-wrapper mb-3 mb-md-0 "
                    >
                      <Fade direction="up">
                        <div
                        data-v-20b31861=" "
                        data-preset="y "
                        data-delay=".1 "
                        className="position-relative should-animate hash-bg "
                        style={{ opacity: 1 }}
                      >
                        <img
                          data-v-20b31861=" "
                          src={BobaHash}
                          alt="boba hash "
                          className="w-100 h-100 "
                        />
                        <h4
                          data-v-20b31861=" "
                          className="position-absolute center text-uppercase text-center color-yellow w-100 f3 f6-sm f3-1-xl mt-0-25 mt-xl-0-5 "
                        >
                          # join the
                          <br />
                          bubble
                        </h4>
                        <img
                          data-v-20b31861=" "
                          src={CircleStar}
                          alt="Boba bubble "
                          data-preset="scale "
                          data-ease="Elastic.easeOut "
                          data-fromscale="0 "
                          data-toscale="1 "
                          data-dur="2 "
                          className="social-bubble position-absolute should-animate "
                          style={{ opacity: 1 }}
                        />
                      </div>
                      </Fade>
                    </div>
                    <div data-v-20b31861=" " className="col-12 d-flex ">
                      <div
                        data-v-3d3e503e=" "
                        data-v-20b31861=" "
                        data-id="waypoint-354 "
                        className="synchronized-waypoint social-circle position-relative col-6 "
                      >
                        <a
                          data-v-3d3e503e=" "
                          href="https://www.tiktok.com/@bobaicecream "
                          target="_blank "
                        >
                          <div
                            data-v-6752e43c=" "
                            data-v-3d3e503e=" "
                            className="synchronized-proportion-div position-relative round-border position-relative has-proportion "
                            style={stylesF7}
                          >
                            <div
                              data-v-6752e43c=" "
                              className="w-100 h-100 t-0 l-0 position-absolute "
                            >
                              <figure
                                data-v-23b40a86=" "
                                data-v-3d3e503e=" "
                                className="spd overflow-hidden should-animate position-absolute w-100 h-100 t-0 l-0 "
                                data-preset="scale "
                                data-fromscale="1.1 "
                                data-toscale="1 "
                                data-dur="2 "
                                data-v-6752e43c=" "
                                style={{ opacity: 1 }}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=1200&amp;w=1200&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=1560&amp;w=1560&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1080px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=960&amp;w=960&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=1248&amp;w=1248&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=600&amp;w=600&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=780&amp;w=780&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=400&amp;w=400&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/61YxHVXvNjolgIaodt7DQw/3d54578a3c694a278788607b38f13ac2/tiktok.jpg?h=520&amp;w=520&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="image 1582 "
                                      className="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                          </div>
                          <div
                            data-v-3d3e503e=" "
                            href="https://www.tiktok.com/@bobaicecream "
                            className="d-flex flex-center position-absolute title-wrapper color-pink "
                          >
                            <svg
                              data-v-3d3e503e=" "
                              viewBox="0 0 24 22 "
                              fill="none "
                              xmlns="http://www.w3.org/2000/svg "
                              className="arrow-horizontal f4 f6-sm f2-xl mb-0-25 mb-md-0-5 mb-lg-1 "
                            >
                              <rect
                                data-v-3d3e503e=" "
                                x="12.3545 "
                                y="13.7109 "
                                width="12.3547 "
                                height="5.4052 "
                                rx="0.310973 "
                                transform="rotate(-180 12.3545 13.7109) "
                              ></rect>
                              <path
                                data-v-3d3e503e=" "
                                d="M23.4691 10.6818C23.6764 10.8015 23.6764 11.1007 23.4691 11.2204L6.98765 20.736C6.71212 20.895 6.40377 20.5867 6.56285 20.3112L11.8771 11.1066C11.9327 11.0104 11.9327 10.8918 11.8771 10.7956L6.56285 1.59102C6.40377 1.31548 6.71211
                                    1.00714 6.98765 1.16622L23.4691 10.6818Z "
                              ></path>
                            </svg>
                            <div
                              data-v-3d3e503e=" "
                              className="f4 f6-sm f2-xl pp-bold px-0-5 color-white mt-0-25 mt-md-0-5 mt-lg-1 "
                            >
                              TIKTOK
                            </div>
                            <svg
                              data-v-3d3e503e=" "
                              viewBox="0 0 24 22 "
                              fill="none "
                              xmlns="http://www.w3.org/2000/svg "
                              className="arrow-horizontal reversed f4 f6-sm f2-xl mb-0-25 mb-md-0-5 mb-lg-1 "
                            >
                              <rect
                                data-v-3d3e503e=" "
                                x="12.3545 "
                                y="13.7109 "
                                width="12.3547 "
                                height="5.4052 "
                                rx="0.310973 "
                                transform="rotate(-180 12.3545 13.7109) "
                              ></rect>
                              <path
                                data-v-3d3e503e=" "
                                d="M23.4691 10.6818C23.6764 10.8015 23.6764 11.1007 23.4691 11.2204L6.98765 20.736C6.71212 20.895 6.40377 20.5867 6.56285 20.3112L11.8771 11.1066C11.9327 11.0104 11.9327 10.8918 11.8771 10.7956L6.56285 1.59102C6.40377 1.31548 6.71211
                                    1.00714 6.98765 1.16622L23.4691 10.6818Z "
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                      <div
                        data-v-3d3e503e=" "
                        data-v-20b31861=" "
                        data-id="waypoint-358 "
                        className="synchronized-waypoint social-circle position-relative col-6 "
                      >
                        <a
                          data-v-3d3e503e=" "
                          href="https://instagram.com/bobaicecream "
                          target="_blank "
                        >
                          <div
                            data-v-6752e43c=" "
                            data-v-3d3e503e=" "
                            className="synchronized-proportion-div position-relative round-border position-relative has-proportion "
                            style={stylesF7}
                          >
                            <div
                              data-v-6752e43c=" "
                              className="w-100 h-100 t-0 l-0 position-absolute "
                            >
                              <figure
                                data-v-23b40a86=" "
                                data-v-3d3e503e=" "
                                className="spd overflow-hidden should-animate position-absolute w-100 h-100 t-0 l-0 "
                                data-preset="scale "
                                data-fromscale="1.1 "
                                data-toscale="1 "
                                data-dur="2 "
                                data-v-6752e43c=" "
                                style={{ opacity: 1 }}
                              >
                                <div data-v-23b40a86=" " className=" ">
                                  <picture data-v-23b40a86=" ">
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1920px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=1200&amp;w=1200&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=1560&amp;w=1560&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:1080px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=960&amp;w=960&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=1248&amp;w=1248&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:768px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=600&amp;w=600&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=780&amp;w=780&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <source
                                      data-v-23b40a86=" "
                                      media="(min-width:0px) "
                                      srcset=" https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=400&amp;w=400&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80 1x, https://images.ctfassets.net/j8k8klriwj2h/2SBZbsQvC8bv7HLIpw9Czx/364eb304e7f0a8c34043d062d5521cfd/instagram.jpg?h=520&amp;w=520&amp;q=80&amp;fit=fill&amp;&amp;fm=webp&amp;q=80
                                    2x "
                                    />
                                    <img
                                      data-v-23b40a86=" "
                                      draggable="false "
                                      loading="eager "
                                      alt="image 1546 "
                                      classname="w-100 h-100 position-absolute t-0 l-0 picture cover bg-center "
                                    />
                                  </picture>
                                </div>
                              </figure>
                            </div>
                          </div>
                          <div
                            data-v-3d3e503e=" "
                            href="https://instagram.com/bobaicecream "
                            className="d-flex flex-center position-absolute title-wrapper color-red2 "
                          >
                            <svg
                              data-v-3d3e503e=" "
                              viewBox="0 0 24 22 "
                              fill="none "
                              xmlns="http://www.w3.org/2000/svg "
                              className="arrow-horizontal f4 f6-sm f2-xl mb-0-25 mb-md-0-5 mb-lg-1 "
                            >
                              <rect
                                data-v-3d3e503e=" "
                                x="12.3545 "
                                y="13.7109 "
                                width="12.3547 "
                                height="5.4052 "
                                rx="0.310973 "
                                transform="rotate(-180 12.3545 13.7109) "
                              ></rect>
                              <path
                                data-v-3d3e503e=" "
                                d="M23.4691 10.6818C23.6764 10.8015 23.6764 11.1007 23.4691 11.2204L6.98765 20.736C6.71212 20.895 6.40377 20.5867 6.56285 20.3112L11.8771 11.1066C11.9327 11.0104 11.9327 10.8918 11.8771 10.7956L6.56285 1.59102C6.40377 1.31548 6.71211
                                    1.00714 6.98765 1.16622L23.4691 10.6818Z "
                              ></path>
                            </svg>
                            <div
                              data-v-3d3e503e=" "
                              className="f4 f6-sm f2-xl pp-bold px-0-5 color-white mt-0-25 mt-md-0-5 mt-lg-1 "
                            >
                              IG
                            </div>
                            <svg
                              data-v-3d3e503e=" "
                              viewBox="0 0 24 22 "
                              fill="none "
                              xmlns="http://www.w3.org/2000/svg "
                              className="arrow-horizontal reversed f4 f6-sm f2-xl mb-0-25 mb-md-0-5 mb-lg-1 "
                            >
                              <rect
                                data-v-3d3e503e=" "
                                x="12.3545 "
                                y="13.7109 "
                                width="12.3547 "
                                height="5.4052 "
                                rx="0.310973 "
                                transform="rotate(-180 12.3545 13.7109) "
                              ></rect>
                              <path
                                data-v-3d3e503e=" "
                                d="M23.4691 10.6818C23.6764 10.8015 23.6764 11.1007 23.4691 11.2204L6.98765 20.736C6.71212 20.895 6.40377 20.5867 6.56285 20.3112L11.8771 11.1066C11.9327 11.0104 11.9327 10.8918 11.8771 10.7956L6.56285 1.59102C6.40377 1.31548 6.71211
                                    1.00714 6.98765 1.16622L23.4691 10.6818Z "
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    data-v-20b31861=" "
                    data-id="waypoint-361 "
                    className="synchronized-waypoint "
                    
                  >
                    <Fade direction="up">
                      <div
                      data-v-20b31861="ade-up"
                      data-preset="opacity,y "
                      data-delay=".1 "
                      className="f5 f9-1-sm f6-xl color-red2 pp-bold text-center mt-2 mt-md-3 mt-lg-2 px-0-5 px-md-1-5 px-lg-6 pb-3 pb-md-7-5 pb-lg-10 should-animate"
                      
                      style={{ opacity: 1 }}
                      
                    >
                      PROUDLY AAPI⁃OWNED! A PORTION OF THE PROCEEDS, OF EVERY
                      PINT SOLD, GOES TO SUPPORT AAPI COMMUNITIES IN NEED.
                    </div>
                    </Fade>
                  </div>
                </div>
                 <div
                  data-id="waypoint-116"
                  className="synchronized-waypoint page-footer bg-yellow px-0-5 px-lg-2 py-1 py-lg-2"
                  data-v-709f7a56=""
                >
                  <Fade direction="up">
                    <div
                    data-preset="y"
                    data-delay=".2"
                    className="row justify-content-center justify-content-sm-between should-animate"
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
                  </Fade>
                </div>
                
              </div>
            </div>
            </div>
            
        </main>
      </div>
    </div>
  );
};

export default OurStory;
