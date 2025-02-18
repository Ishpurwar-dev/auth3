// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowUpRightSvgrepoCom1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowUpRightSvgrepoCom1Icon(
  props: ArrowUpRightSvgrepoCom1IconProps
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
          "M13.333 13.852a2.186 2.186 0 010-4.371h15c1.208 0 2.186.979 2.186 2.186v15a2.186 2.186 0 01-4.371 0v-9.723L13.212 29.879a2.186 2.186 0 01-3.09-3.091l12.934-12.936h-9.723z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowUpRightSvgrepoCom1Icon;
/* prettier-ignore-end */
