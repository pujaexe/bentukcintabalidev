// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: sqsUtdEY9EziH5JCt3D7uY
// Component: UKDNwKMUKx
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../blank_project/plasmic_blank_project.module.css"; // plasmic-import: sqsUtdEY9EziH5JCt3D7uY/projectcss
import sty from "./PlasmicDialogOverlay.module.css"; // plasmic-import: UKDNwKMUKx/css

export type PlasmicDialogOverlay__VariantMembers = {};

export type PlasmicDialogOverlay__VariantsArgs = {};
type VariantPropType = keyof PlasmicDialogOverlay__VariantsArgs;
export const PlasmicDialogOverlay__VariantProps = new Array<VariantPropType>();

export type PlasmicDialogOverlay__ArgsType = {};
type ArgPropType = keyof PlasmicDialogOverlay__ArgsType;
export const PlasmicDialogOverlay__ArgProps = new Array<ArgPropType>();

export type PlasmicDialogOverlay__OverridesType = {
  root?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  button?: p.Flex<"button">;
};

export interface DefaultDialogOverlayProps {
  className?: string;
}

function PlasmicDialogOverlay__RenderFunc(props: {
  variants: PlasmicDialogOverlay__VariantsArgs;
  args: PlasmicDialogOverlay__ArgsType;
  overrides: PlasmicDialogOverlay__OverridesType;

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
      id={"dialogoverlay" as const}
    >
      <div className={classNames(projectcss.all, sty.freeBox__jrq7X)}>
        <div
          className={classNames(projectcss.all, sty.freeBox__j2VUt)}
          id={"dialogbox" as const}
        >
          <h1
            data-plasmic-name={"h1"}
            data-plasmic-override={overrides.h1}
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1
            )}
          >
            {"Dialod"}
          </h1>

          <button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames(
              projectcss.all,
              projectcss.button,
              projectcss.__wab_text,
              sty.button
            )}
            id={"closeDialogBtn" as const}
          >
            {"Click Me"}
          </button>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "button"],
  h1: ["h1"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDialogOverlay__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDialogOverlay__VariantsArgs;
    args?: PlasmicDialogOverlay__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDialogOverlay__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicDialogOverlay__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicDialogOverlay__ArgProps,
          internalVariantPropNames: PlasmicDialogOverlay__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicDialogOverlay__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDialogOverlay";
  } else {
    func.displayName = `PlasmicDialogOverlay.${nodeName}`;
  }
  return func;
}

export const PlasmicDialogOverlay = Object.assign(
  // Top-level PlasmicDialogOverlay renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicDialogOverlay
    internalVariantProps: PlasmicDialogOverlay__VariantProps,
    internalArgProps: PlasmicDialogOverlay__ArgProps
  }
);

export default PlasmicDialogOverlay;
/* prettier-ignore-end */
