import React from "react";
import { Button } from "@storybook/react/demo";
import Header from "./components/organisms/header";
import "./styles/styles.scss";
import silhouette from "./images/silhouette.png";
import Logo from "./components/atoms/logo";
import Navbar from "./components/molecules/navbar";

export default { title: "Button" };

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const withBootstrapEmoji = () => (
  <button className="btn btn-primary m-3">
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </button>
);

export const withText = () => <p>Lorem ipsum dolor sit amet</p>;

export const withLogo = () => <Logo />;
export const withNavbar = () => (
  <Navbar>
    <a class="navbar-brand" href="#">
      <Logo />
    </a>
  </Navbar>
);

export const withHeader = () => (
  <Header fn={(e) => console.log("hola mundo")}>
    <img className="position-absolute" src={silhouette} />
  </Header>
);
