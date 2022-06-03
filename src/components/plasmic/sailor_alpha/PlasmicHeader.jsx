// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6tP4H2YXq73abyMEePhpsf
// Component: 9HJOL_ndHV
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { NavigationBar } from "@plasmicpkgs/plasmic-nav"; // plasmic-import: jGx9tiKJoex/codeComponent
import { useScreenVariants as useScreenVariantsu0VQjvxy5SkDm } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: U0vQjvxy5SKDm/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_sailor_alpha.module.css"; // plasmic-import: 6tP4H2YXq73abyMEePhpsf/projectcss
import sty from "./PlasmicHeader.module.css"; // plasmic-import: 9HJOL_ndHV/css
import signat101Rr4KQb0BZ from "./images/signat101.png"; // plasmic-import: rr4KQb0b-Z/picture
import logoWhitepngLJoWiw4Hh from "./images/logoWhitepng.png"; // plasmic-import: lJoWIW4HH/picture

export const PlasmicHeader__VariantProps = new Array("light");

export const PlasmicHeader__ArgProps = new Array();

export const defaultHeader__Args = {};

function PlasmicHeader__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHeader__Args, props.args);
  const $props = args;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsu0VQjvxy5SkDm()
  });

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
      <NavigationBar
        data-plasmic-name={"navigationBar"}
        data-plasmic-override={overrides.navigationBar}
        brand={
          <a
            className={classNames(
              projectcss.all,
              projectcss.a,
              sty.link__itcKm,
              {
                [sty.linklight__itcKmBLk3V]: hasVariant(
                  variants,
                  "light",
                  "light"
                )
              }
            )}
            href={"/homepage"}
          >
            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img, {
                [sty.imglight]: hasVariant(variants, "light", "light")
              })}
              displayHeight={"40px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              src={
                hasVariant(variants, "light", "light")
                  ? {
                      src: logoWhitepngLJoWiw4Hh,
                      fullWidth: 125,
                      fullHeight: 46,
                      aspectRatio: undefined
                    }
                  : hasVariant(globalVariants, "screen", "mobileOnly")
                  ? {
                      src: signat101Rr4KQb0BZ,
                      fullWidth: 2813,
                      fullHeight: 780,
                      aspectRatio: undefined
                    }
                  : {
                      src: signat101Rr4KQb0BZ,
                      fullWidth: 2813,
                      fullHeight: 780,
                      aspectRatio: undefined
                    }
              }
            />
          </a>
        }
        className={classNames("__wab_instance", sty.navigationBar, {
          [sty.navigationBarlight]: hasVariant(variants, "light", "light")
        })}
        closeButton={
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__xRx6F)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={"https://static1.plasmic.app/close.svg"}
          />
        }
        forceOpenMenu={
          hasVariant(globalVariants, "screen", "mobileOnly") ? false : undefined
        }
        itemsGap={8}
        menuItems={
          true ? (
            <p.Stack
              as={"div"}
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              {true ? (
                <div
                  data-plasmic-name={"menuCont"}
                  data-plasmic-override={overrides.menuCont}
                  className={classNames(projectcss.all, sty.menuCont)}
                >
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___70Kzq
                    )}
                    href={"/gallery"}
                  >
                    {"GALLERY"}
                  </a>

                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__p31H1
                    )}
                    href={"/artist"}
                  >
                    {"THE ARTIST"}
                  </a>

                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__u03Ge
                    )}
                    href={"/artwork"}
                  >
                    {"ARTWORK"}
                  </a>

                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__bFdFf
                    )}
                    href={"/vision"}
                  >
                    {"VISION"}
                  </a>

                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__qbgp
                    )}
                    href={"/roadmap"}
                  >
                    {"ROADMAP"}
                  </a>

                  {true ? (
                    <a
                      className={classNames(
                        projectcss.all,
                        projectcss.a,
                        projectcss.__wab_text,
                        sty.link__u2Ot5
                      )}
                      href={"/mint"}
                    >
                      {"    MINT    "}
                    </a>
                  ) : null}
                </div>
              ) : null}
            </p.Stack>
          ) : null
        }
        openButton={
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__b4Qlz)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={"https://static1.plasmic.app/menu.svg"}
          />
        }
        responsiveBreakpoint={768}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "navigationBar", "img", "freeBox", "menuCont"],
  navigationBar: ["navigationBar", "img", "freeBox", "menuCont"],
  img: ["img"],
  freeBox: ["freeBox", "menuCont"],
  menuCont: ["menuCont"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    img: makeNodeComponent("img"),
    freeBox: makeNodeComponent("freeBox"),
    menuCont: makeNodeComponent("menuCont"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */
