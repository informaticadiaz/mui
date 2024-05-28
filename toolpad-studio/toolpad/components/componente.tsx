import * as React from "react";
import { createComponent } from "@toolpad/studio/browser";

export interface componenteProps {
  msg: string;
}

function componente({ msg }: componenteProps) {
  return <div>{msg}</div>;
}

export default createComponent(componente, {
  argTypes: {
    msg: {
      type: "string",
      default: "Hello world!",
    },
  },
});
