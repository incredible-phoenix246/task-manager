"use client";

import React from "react";
import styled from "styled-components";
import { useGlobalState } from "../Context/globalProvider";
import Image from "next/image";
import menu from "../utils/menu";
import Link from "next/link";

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth || "15rem"};
  background-color: ${(props) => props.theme.colorBg || "#F9F6EE"};
  border: 2px solid ${(props) => props.theme.borderColor || "#00008b"};
  border-radius: 1rem;
`;

function Sidebar() {
  const { theme } = useGlobalState();
  console.log(theme);

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlat">
          <div className="profile-img">
            <Image
              src="/hero-image.png"
              alt="avatar"
              width="100"
              height="100"
            />
          </div>
          <div className="profile-info">
            <h1>
              <span>Testing</span>
              <span>Lets see</span>
            </h1>
            <p>Front-End Developer</p>
          </div>

          <ul className="nav-items">
            {menu.map((item) => (
              <li key={item.id}>
                {item.icon}
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SidebarStyled>
  );
}

export default Sidebar;
