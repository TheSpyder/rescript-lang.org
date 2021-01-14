// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Mdx from "../common/Mdx.js";
import * as React from "react";
import * as Markdown from "./Markdown.js";

function ApiMarkdown$H1(Props) {
  var children = Props.children;
  return React.createElement("h1", {
              className: "text-6xl leading-1 mb-2 font-sans font-medium text-night-dark"
            }, children);
}

function ApiMarkdown$H2(Props) {
  var id = Props.id;
  var children = Props.children;
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  className: "border-b border-gray-10 mb-10 mt-20"
                }), React.createElement(Markdown.H2.make, {
                  id: id,
                  children: children
                }));
}

var $$default = Mdx.Components.t(undefined, undefined, undefined, Markdown.Intro.make, undefined, undefined, Markdown.P.make, Markdown.Li.make, ApiMarkdown$H1, ApiMarkdown$H2, Markdown.H3.make, Markdown.H4.make, Markdown.H5.make, Markdown.Ul.make, Markdown.Ol.make, undefined, Markdown.Thead.make, Markdown.Th.make, Markdown.Td.make, undefined, Markdown.InlineCode.make, undefined, undefined, Markdown.Code.make, Markdown.Pre.make, Markdown.A.make, undefined);

export {
  $$default ,
  $$default as default,
  
}
/* default Not a pure module */