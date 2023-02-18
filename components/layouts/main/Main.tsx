import { FunctionComponent } from "preact";

import { MainProps } from "./interfaces.ts";

const Main: FunctionComponent<MainProps> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Main;
