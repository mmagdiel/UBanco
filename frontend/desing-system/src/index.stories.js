import React from "react";
import { Button } from "@storybook/react/demo";
import "./styles/styles.scss";

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
