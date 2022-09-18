// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DownIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DownIconsvgIcon(props: DownIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"22 - Down"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        data-name={"Path 209"}
        d={
          "M15 0a15 15 0 1015 15A15.007 15.007 0 0015 0zm0 2A13 13 0 112 15 13.006 13.006 0 0115 2z"
        }
        fillRule={"evenodd"}
      ></path>

      <path
        data-name={"Path 210"}
        d={
          "M20.293 11.293L15 16.586l-5.293-5.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 10-1.414-1.414z"
        }
        fillRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default DownIconsvgIcon;
/* prettier-ignore-end */
