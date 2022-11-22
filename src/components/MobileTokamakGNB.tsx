/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex, Link } from "@chakra-ui/react";
import PrevArrowIcon from "../assets/pagenate-prev-arrow-icon-inactive_1.svg";
import NextArrowIcon from "../assets/pagenate-prev-arrow-icon-inactive_2.svg";
import { useRef, useEffect, useState } from "react";
import "../css/gnb_mobile.css";
import styled from "@emotion/styled";

const menus = [
  {
    title: "Vision",
    url: 'https://vision-page.vercel.app/',
    isFoucsed: false,
  },
  {
    title: "Tokamak Network",
    url: "https://renewal-homepage.vercel.app/#/",
    isFoucsed: false,
  },
  {
    title: "Simple Staking",
    url: "https://rinkeby.simple.staking.tokamak.network/",
    isFoucsed: false,
  },
  {
    title: "Tokamak Network DAO",
    url: "https://rinkeby.dao.tokamak.network/#/",
    isFoucsed: false,
  },
  {
    title: "Swap",
    url: "http://goerli.swap.tokamak.network/",
    isFoucsed: true,
  },
  {
    title: "TONStarter",
    url: "https://rinkeby.tonstarter.tokamak.network/",
    isFoucsed: false,
  },
];

let currentPosition = 0;
let touchStartX = 0;
const deviceWidth = window.innerWidth;

const toRightXvalue = () => {
  switch (currentPosition) {
    case 0:
      return -120;
    case 1:
      return -270;
    case 2:
      return -430;
    case 3:
      return -560;
    default:
      return null;
  }
};

const toLeftXvalue = () => {
  switch (currentPosition) {
    case 0:
      return 0;
    case 1:
      return 0;
    case 2:
      return -120;
    case 3:
      return -270;
    case 4:
      return -430;
    default:
      return null;
  }
};

const catchTouchStart = (e: any) => {
  const touchObj = e.changedTouches[0];
  touchStartX = touchObj.pageX;
};

const handleNavigation = (e: any, rightArrow?: boolean) => {
  const ref: any = document.getElementsByClassName("gnb_mobile_menu");
  const transition = "0.8s ease-in-out";

  let direction;

  if (rightArrow !== undefined) {
    direction = rightArrow;
  } else {
    const touchObj = e.changedTouches[0];
    const distX = touchObj.pageX - touchStartX;

    direction = touchStartX > touchObj.pageX;
  }

  try {
    if (direction) {
      const xValue = toRightXvalue();
      const traslateX = `translateX(${xValue}px)`;
      ref[0].style.transition = transition;
      ref[0].style.transform = traslateX;

      ref[1].style.transition = transition;
      ref[1].style.transform = traslateX;

      ref[2].style.transition = transition;
      ref[2].style.transform = traslateX;

      ref[3].style.transition = transition;
      ref[3].style.transform = traslateX;

      ref[4].style.transition = transition;
      ref[4].style.transform = traslateX;

      ref[5].style.transition = transition;
      ref[5].style.transform = traslateX;
      return;
    }
    const xValue = toLeftXvalue();
    // e.target.style.transition = "0.8s linear";
    // e.target.style.transform = `translateX(100px)`;

    const traslateX = `translateX(${xValue}px)`;

    ref[0].style.transition = transition;
    ref[0].style.transform = traslateX;

    ref[1].style.transition = transition;
    ref[1].style.transform = traslateX;

    ref[2].style.transition = transition;
    ref[2].style.transform = traslateX;

    ref[3].style.transition = transition;
    ref[3].style.transform = traslateX;

    ref[4].style.transition = transition;
    ref[4].style.transform = traslateX;

    ref[5].style.transition = transition;
    ref[5].style.transform = traslateX;
  } finally {
    if (-1 < currentPosition && currentPosition < 4) {
      direction ? (currentPosition += 1) : (currentPosition -= 1);
    }
    if (currentPosition === -1) {
      currentPosition = 0;
    }
    if (currentPosition === 4 && direction === false) {
      currentPosition -= 1;
    }
    // lastX = e.target.offsetLeft;
  }
};

function MobileTokamakGNB() {
  return (
    <div className="gnb_mobile_header">
      <img
        src={PrevArrowIcon}
        alt={""}
        height={"40px"}
        onClick={(e) => {
          handleNavigation(e, false);
        }}
      ></img>
      <div className="gnb_mobile_menu_wrap">
        {menus.map((menu, index) => (
          <a
            className="gnb_mobile_menu"
            style={{
              minWidth:
                menu.title === "Tokamak Network DAO"
                  ? "186px"
                  : menu.title === "Tokamak Network"
                  ? "160px"
                  : menu.title === "Simple Staking"
                  ? "140px"
                  : "",
              fontWeight: menu.isFoucsed ? 600 : "",
              opacity: menu.isFoucsed ? 1 : 0.25,
              marginLeft: index === 0 ? `${(deviceWidth - 80 - 78) / 2}px` : "",
              marginRight: index === menus.length - 1 ? "31%" : "",
            }}
            href={menu.url}
            key={menu.title}
            onTouchStart={(e) => catchTouchStart(e)}
            onTouchEnd={(e) => handleNavigation(e)}
          >
            {menu.title}
          </a>
        ))}
      </div>
      <img
        src={NextArrowIcon}
        alt={""}
        width={"40px"}
        height={"40px"}
        onClick={(e) => {
          handleNavigation(e, true);
        }}
      ></img>
    </div>
  );
}
export default MobileTokamakGNB;
