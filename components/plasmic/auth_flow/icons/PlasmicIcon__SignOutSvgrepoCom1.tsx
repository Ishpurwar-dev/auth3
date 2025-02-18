// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SignOutSvgrepoCom1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SignOutSvgrepoCom1Icon(props: SignOutSvgrepoCom1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M6 3a3 3 0 00-3 3v12a3 3 0 003 3h11a1 1 0 100-2H6a1 1 0 01-1-1V6a1 1 0 011-1h11a1 1 0 100-2H6zm9.707 4.293a1 1 0 10-1.414 1.414L16.586 11H8a1 1 0 100 2h8.586l-2.293 2.293a1 1 0 001.414 1.414l4-4a1 1 0 000-1.414l-4-4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SignOutSvgrepoCom1Icon;
/* prettier-ignore-end */
