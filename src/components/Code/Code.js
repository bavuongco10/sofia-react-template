import React from "react";
import {useMountedState} from 'react-use';
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import s from "./Code.module.scss";


const Code = ({ children }) => {
  const isMounted = useMountedState();
  if(!isMounted()) return null;

  return (
    <div className={s.codeContainer}>
      {/*<SyntaxHighlighter*/}
      {/*  className=""*/}
      {/*  language="javascript"*/}
      {/*  style={docco}*/}
      {/*>*/}
      {/*  {children}*/}
      {/*</SyntaxHighlighter>*/}
    </div>
  );
};

export default Code;
