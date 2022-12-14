// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sqsUtdEY9EziH5JCt3D7uY
// Component: eGAkIo7VuV
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { GraphCMSFetcher } from "@plasmicpkgs/plasmic-graphcms"; // plasmic-import: 8sYtOZawA08/codeComponent
import { PlasmicHead } from "@plasmicapp/react-web"; // plasmic-import: wPGZWqMTEY/codeComponent
import { Embed } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: PKldDYkH42/codeComponent
import Layout from "../../Layout"; // plasmic-import: KyRWDtnvsi/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: sqsUtdEY9EziH5JCt3D7uY/projectcss
import sty from "./PlasmicInvitationPage.module.css"; // plasmic-import: eGAkIo7VuV/css

export type PlasmicInvitationPage__VariantMembers = {};

export type PlasmicInvitationPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicInvitationPage__VariantsArgs;
export const PlasmicInvitationPage__VariantProps = new Array<VariantPropType>();

export type PlasmicInvitationPage__ArgsType = {};
type ArgPropType = keyof PlasmicInvitationPage__ArgsType;
export const PlasmicInvitationPage__ArgProps = new Array<ArgPropType>();

export type PlasmicInvitationPage__OverridesType = {
  root?: p.Flex<"div">;
  graphCmsFetcher?: p.Flex<typeof GraphCMSFetcher>;
  head?: p.Flex<typeof PlasmicHead>;
  jsdelivercss?: p.Flex<typeof Embed>;
  layout?: p.Flex<typeof Layout>;
  jsfancybox?: p.Flex<typeof Embed>;
};

export interface DefaultInvitationPageProps {}

function PlasmicInvitationPage__RenderFunc(props: {
  variants: PlasmicInvitationPage__VariantsArgs;
  args: PlasmicInvitationPage__ArgsType;
  overrides: PlasmicInvitationPage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

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
          <GraphCMSFetcher
            data-plasmic-name={"graphCmsFetcher"}
            data-plasmic-override={overrides.graphCmsFetcher}
            className={classNames("__wab_instance", sty.graphCmsFetcher)}
            noLayout={true}
            query={(() => {
              try {
                return {
                  query:
                    'query MyQuery {\n  pengantin(where: {slug: "' +
                    $ctx.params.slug +
                    '"}) {\n    slug\n    title\n    templateUse\n evenDateTime\n }\n}\n',
                  variables: {}
                };
              } catch (e) {
                if (e instanceof TypeError) {
                  return {
                    query:
                      'query MyQuery {\n  pengantin(where: {slug: "agustika"}) {\n    slug\n    title\n    eventMap\n    templateUse\n  }\n}\n',
                    variables: {}
                  };
                }
                throw e;
              }
            })()}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <React.Fragment>
                  <PlasmicHead
                    data-plasmic-name={"head"}
                    data-plasmic-override={overrides.head}
                    canonical={"" as const}
                    className={classNames("__wab_instance", sty.head)}
                    description={"Undanga Online Bentuk Cinta" as const}
                    title={(() => {
                      try {
                        return "Bentuk | " + $ctx.graphCmsItem.title;
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return "Bentuk Cinta";
                        }
                        throw e;
                      }
                    })()}
                  />

                  <Embed
                    data-plasmic-name={"jsdelivercss"}
                    data-plasmic-override={overrides.jsdelivercss}
                    className={classNames("__wab_instance", sty.jsdelivercss)}
                    code={
                      '<link\n      rel="stylesheet"\n      href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css"\n/>' as const
                    }
                  />

                  <Layout
                    data-plasmic-name={"layout"}
                    data-plasmic-override={overrides.layout}
                    className={classNames("__wab_instance", sty.layout)}
                    layoutSlug={(() => {
                      try {
                        return $ctx.graphCmsItem.slug;
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return undefined;
                        }
                        throw e;
                      }
                    })()}
                    template={$ctx.graphCmsItem.templateUse}
                  />

                  <Embed
                    data-plasmic-name={"jsfancybox"}
                    data-plasmic-override={overrides.jsfancybox}
                    className={classNames("__wab_instance", sty.jsfancybox)}
                    code={
                      '<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>\n    <script>\n      Fancybox.bind(\'[data-fancybox="gallery"]\', {\n        infinite: false\n      });\n</script>' as const
                    }
                  />
                </React.Fragment>
              )}
            </ph.DataCtxReader>
          </GraphCMSFetcher>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "graphCmsFetcher",
    "head",
    "jsdelivercss",
    "layout",
    "jsfancybox"
  ],
  graphCmsFetcher: [
    "graphCmsFetcher",
    "head",
    "jsdelivercss",
    "layout",
    "jsfancybox"
  ],
  head: ["head"],
  jsdelivercss: ["jsdelivercss"],
  layout: ["layout"],
  jsfancybox: ["jsfancybox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  graphCmsFetcher: typeof GraphCMSFetcher;
  head: typeof PlasmicHead;
  jsdelivercss: typeof Embed;
  layout: typeof Layout;
  jsfancybox: typeof Embed;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInvitationPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInvitationPage__VariantsArgs;
    args?: PlasmicInvitationPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInvitationPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInvitationPage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicInvitationPage__ArgProps,
          internalVariantPropNames: PlasmicInvitationPage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicInvitationPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInvitationPage";
  } else {
    func.displayName = `PlasmicInvitationPage.${nodeName}`;
  }
  return func;
}

export const PlasmicInvitationPage = Object.assign(
  // Top-level PlasmicInvitationPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    graphCmsFetcher: makeNodeComponent("graphCmsFetcher"),
    head: makeNodeComponent("head"),
    jsdelivercss: makeNodeComponent("jsdelivercss"),
    layout: makeNodeComponent("layout"),
    jsfancybox: makeNodeComponent("jsfancybox"),

    // Metadata about props expected for PlasmicInvitationPage
    internalVariantProps: PlasmicInvitationPage__VariantProps,
    internalArgProps: PlasmicInvitationPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicInvitationPage;
/* prettier-ignore-end */
