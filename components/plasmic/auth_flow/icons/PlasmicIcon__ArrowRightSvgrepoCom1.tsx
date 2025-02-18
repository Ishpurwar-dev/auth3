// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRightSvgrepoCom1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRightSvgrepoCom1Icon(
  props: ArrowRightSvgrepoCom1IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M20.488 8.821a1.668 1.668 0 012.357 0l10 10a1.666 1.666 0 010 2.357l-10 10a1.667 1.667 0 11-2.357-2.357l7.155-7.154H8.333a1.667 1.667 0 010-3.334h19.31l-7.155-7.154a1.667 1.667 0 010-2.358z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowRightSvgrepoCom1Icon;
/* prettier-ignore-end */
