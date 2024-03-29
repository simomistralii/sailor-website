// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6tP4H2YXq73abyMEePhpsf
// Component: _5wgUA_BX3
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: 9HJOL_ndHV/component
import DiscoverButton from "../../DiscoverButton"; // plasmic-import: XuXn_eVAMfJ/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_sailor_alpha.module.css"; // plasmic-import: 6tP4H2YXq73abyMEePhpsf/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: _5wgUA_BX3/css
import titre1PngHD0J16Vls from "./images/titre1Png.png"; // plasmic-import: hD0j16vls/picture

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

export const defaultHomepage__Args = {};

function PlasmicHomepage__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHomepage__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
            light={true}
          />

          <div
            data-plasmic-name={"heroSection"}
            data-plasmic-override={overrides.heroSection}
            className={classNames(projectcss.all, sty.heroSection)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"container"}
              data-plasmic-override={overrides.container}
              hasGap={true}
              className={classNames(projectcss.all, sty.container)}
            >
              {true ? (
                <div
                  data-plasmic-name={"textContainer"}
                  data-plasmic-override={overrides.textContainer}
                  className={classNames(projectcss.all, sty.textContainer)}
                >
                  {true ? (
                    <div
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___6RMm8
                      )}
                    >
                      {true ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox___6Js8C
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__t75Qm
                            )}
                          >
                            {
                              "From the streets to the blockchain: \nthe journey of the"
                            }
                          </div>

                          <p.PlasmicImg
                            data-plasmic-name={"sailor"}
                            data-plasmic-override={overrides.sailor}
                            alt={""}
                            className={classNames(sty.sailor)}
                            displayHeight={"auto"}
                            displayMaxHeight={"none"}
                            displayMaxWidth={"100%"}
                            displayMinHeight={"0"}
                            displayMinWidth={"0"}
                            displayWidth={"auto"}
                            loading={"lazy"}
                            src={{
                              src: titre1PngHD0J16Vls,
                              fullWidth: 431,
                              fullHeight: 294,
                              aspectRatio: undefined
                            }}
                          />
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__q9R62
                    )}
                  >
                    {"by Raphael Federici"}
                  </div>
                </div>
              ) : null}

              <DiscoverButton
                data-plasmic-name={"cta"}
                data-plasmic-override={overrides.cta}
                className={classNames("__wab_instance", sty.cta)}
                link={"/artist"}
              >
                {"Discover his journey"}
              </DiscoverButton>
            </p.Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "heroSection",
    "container",
    "textContainer",
    "sailor",
    "cta"
  ],

  header: ["header"],
  heroSection: ["heroSection", "container", "textContainer", "sailor", "cta"],
  container: ["container", "textContainer", "sailor", "cta"],
  textContainer: ["textContainer", "sailor"],
  sailor: ["sailor"],
  cta: ["cta"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    heroSection: makeNodeComponent("heroSection"),
    container: makeNodeComponent("container"),
    textContainer: makeNodeComponent("textContainer"),
    sailor: makeNodeComponent("sailor"),
    cta: makeNodeComponent("cta"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
