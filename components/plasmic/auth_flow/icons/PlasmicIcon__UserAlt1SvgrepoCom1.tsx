// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UserAlt1SvgrepoCom1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UserAlt1SvgrepoCom1Icon(props: UserAlt1SvgrepoCom1IconProps) {
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
          "M20 6.667a5 5 0 100 10 5 5 0 000-10zm-8.333 5a8.333 8.333 0 1116.666 0 8.333 8.333 0 01-16.666 0zM20 25c-5.523 0-10 4.477-10 10a1.667 1.667 0 11-3.333 0c0-7.364 5.97-13.333 13.333-13.333 7.364 0 13.333 5.97 13.333 13.333A1.667 1.667 0 1130 35c0-5.523-4.477-10-10-10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UserAlt1SvgrepoCom1Icon;
/* prettier-ignore-end */
