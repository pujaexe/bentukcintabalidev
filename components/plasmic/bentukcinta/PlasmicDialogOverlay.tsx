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

import { useScreenVariants as useScreenVariantsqo0Z9EiWgEmol } from "../blank_project/PlasmicGlobalVariant__Screen"; // plasmic-import: Qo0Z9eiWgEMOL/globalVariant

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
  dialogWrapper?: p.Flex<"div">;
  dialog?: p.Flex<"div">;
  h4?: p.Flex<"h4">;
  h6?: p.Flex<"h6">;
  protokolList?: p.Flex<"div">;
  protokol1?: p.Flex<"div">;
  protokol12?: p.Flex<"div">;
  protokol13?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsqo0Z9EiWgEmol()
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
      id={"dialogoverlay" as const}
    >
      <div
        data-plasmic-name={"dialogWrapper"}
        data-plasmic-override={overrides.dialogWrapper}
        className={classNames(projectcss.all, sty.dialogWrapper)}
      >
        <div
          data-plasmic-name={"dialog"}
          data-plasmic-override={overrides.dialog}
          className={classNames(projectcss.all, sty.dialog)}
          id={"dialogbox" as const}
        >
          <h4
            data-plasmic-name={"h4"}
            data-plasmic-override={overrides.h4}
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4
            )}
          >
            {"Protokol Covid-19"}
          </h4>

          <h6
            data-plasmic-name={"h6"}
            data-plasmic-override={overrides.h6}
            className={classNames(
              projectcss.all,
              projectcss.h6,
              projectcss.__wab_text,
              sty.h6
            )}
          >
            {"Mari kita lindungi kesehatan bersama"}
          </h6>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__jyj03
            )}
          >
            {
              "Tanpa mengurangi rasa hormat, dikarenakan situasi yang sedang terjadi ditengah Pandemi Covid-19 ini kami memohon maaf karena acara akan diselenggarakan sesuai peraturan dan himbauan pemerintah."
            }
          </div>

          <p.Stack
            as={"div"}
            data-plasmic-name={"protokolList"}
            data-plasmic-override={overrides.protokolList}
            hasGap={true}
            className={classNames(projectcss.all, sty.protokolList)}
          >
            <div
              data-plasmic-name={"protokol1"}
              data-plasmic-override={overrides.protokol1}
              className={classNames(projectcss.all, sty.protokol1)}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__kD1Z8)}
                displayHeight={"42px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"42px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/bentukcinta/images/washHandsSvgrepoComsvg.svg",
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___0ShW2
                )}
              >
                {"Membersihkan Tangan"}
              </div>
            </div>

            <div
              data-plasmic-name={"protokol12"}
              data-plasmic-override={overrides.protokol12}
              className={classNames(projectcss.all, sty.protokol12)}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__ksbFu)}
                displayHeight={"42px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"42px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/bentukcinta/images/ppeMaskN95SvgrepoComsvg.svg",
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cGxs6
                )}
              >
                {"Memakai Masker"}
              </div>
            </div>

            <div
              data-plasmic-name={"protokol13"}
              data-plasmic-override={overrides.protokol13}
              className={classNames(projectcss.all, sty.protokol13)}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__jEyh)}
                displayHeight={"42px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"42px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/bentukcinta/images/socialDistancingSvgrepoComsvg.svg",
                  fullWidth: 150,
                  fullHeight: 150,
                  aspectRatio: 1
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vQxy1
                )}
              >
                {"Menjaga Jarak"}
              </div>
            </div>
          </p.Stack>

          {true ? (
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
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
                {"Buka Undangan"}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "dialogWrapper",
    "dialog",
    "h4",
    "h6",
    "protokolList",
    "protokol1",
    "protokol12",
    "protokol13",
    "freeBox",
    "button"
  ],
  dialogWrapper: [
    "dialogWrapper",
    "dialog",
    "h4",
    "h6",
    "protokolList",
    "protokol1",
    "protokol12",
    "protokol13",
    "freeBox",
    "button"
  ],
  dialog: [
    "dialog",
    "h4",
    "h6",
    "protokolList",
    "protokol1",
    "protokol12",
    "protokol13",
    "freeBox",
    "button"
  ],
  h4: ["h4"],
  h6: ["h6"],
  protokolList: ["protokolList", "protokol1", "protokol12", "protokol13"],
  protokol1: ["protokol1"],
  protokol12: ["protokol12"],
  protokol13: ["protokol13"],
  freeBox: ["freeBox", "button"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  dialogWrapper: "div";
  dialog: "div";
  h4: "h4";
  h6: "h6";
  protokolList: "div";
  protokol1: "div";
  protokol12: "div";
  protokol13: "div";
  freeBox: "div";
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
    dialogWrapper: makeNodeComponent("dialogWrapper"),
    dialog: makeNodeComponent("dialog"),
    h4: makeNodeComponent("h4"),
    h6: makeNodeComponent("h6"),
    protokolList: makeNodeComponent("protokolList"),
    protokol1: makeNodeComponent("protokol1"),
    protokol12: makeNodeComponent("protokol12"),
    protokol13: makeNodeComponent("protokol13"),
    freeBox: makeNodeComponent("freeBox"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicDialogOverlay
    internalVariantProps: PlasmicDialogOverlay__VariantProps,
    internalArgProps: PlasmicDialogOverlay__ArgProps
  }
);

export default PlasmicDialogOverlay;
/* prettier-ignore-end */
