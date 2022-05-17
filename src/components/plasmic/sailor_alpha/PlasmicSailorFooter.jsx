// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6tP4H2YXq73abyMEePhpsf
// Component: nhj0lG9b9L
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_sailor_alpha.module.css"; // plasmic-import: 6tP4H2YXq73abyMEePhpsf/projectcss
import sty from "./PlasmicSailorFooter.module.css"; // plasmic-import: nhj0lG9b9L/css
import Vector2Icon from "./icons/PlasmicIcon__Vector2"; // plasmic-import: k0qDy9mM7G/icon
import Wave11Icon from "./icons/PlasmicIcon__Wave11"; // plasmic-import: PQCgIB4zFs/icon
import Vector1Icon from "./icons/PlasmicIcon__Vector1"; // plasmic-import: ofxpl5CfgP/icon
import Wave1Icon from "./icons/PlasmicIcon__Wave1"; // plasmic-import: ZO-wlH3FQA/icon

export const PlasmicSailorFooter__VariantProps = new Array();

export const PlasmicSailorFooter__ArgProps = new Array();

function PlasmicSailorFooter__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {false ? (
        <Vector2Icon
          className={classNames(projectcss.all, sty.svg__jMhJy)}
          role={"img"}
        />
      ) : null}
      {false ? (
        <Wave11Icon
          className={classNames(projectcss.all, sty.svg___2PuI)}
          role={"img"}
        />
      ) : null}
      {false ? (
        <Vector1Icon
          className={classNames(projectcss.all, sty.svg__gIjH)}
          role={"img"}
        />
      ) : null}
      {false ? (
        <Wave1Icon
          className={classNames(projectcss.all, sty.svg__kNsKl)}
          role={"img"}
        />
      ) : null}

      <div className={classNames(projectcss.all, sty.freeBox___1ASPk)}>
        <div className={classNames(projectcss.all, sty.freeBox__pl5Ha)} />
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicSailorFooter__ArgProps,
      internalVariantPropNames: PlasmicSailorFooter__VariantProps
    });

    return PlasmicSailorFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSailorFooter";
  } else {
    func.displayName = `PlasmicSailorFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicSailorFooter = Object.assign(
  // Top-level PlasmicSailorFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicSailorFooter
    internalVariantProps: PlasmicSailorFooter__VariantProps,
    internalArgProps: PlasmicSailorFooter__ArgProps
  }
);

export default PlasmicSailorFooter;
/* prettier-ignore-end */
