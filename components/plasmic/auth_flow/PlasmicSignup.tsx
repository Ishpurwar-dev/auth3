// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6w4xCETj1gYkorDVmc5wx8
// Component: ceGgYjBvzYZr

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import Button from "../../Button"; // plasmic-import: VgnuFTHcwOqi/component
import Verify2 from "../../Verify2"; // plasmic-import: bwLBr7IB5Xyw/component

import { useScreenVariants as useScreenVariantsxhQZeI50DLq3 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: xhQZeI50dLq3/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6w4xCETj1gYkorDVmc5wx8/projectcss
import sty from "./PlasmicSignup.module.css"; // plasmic-import: ceGgYjBvzYZr/css

import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: 6wz4CaO-nkvo/icon
import ArrowUpRightSvgrepoCom1Icon from "./icons/PlasmicIcon__ArrowUpRightSvgrepoCom1"; // plasmic-import: 57WzVwD7aYxV/icon
import ArrowRightSvgrepoCom1Icon from "./icons/PlasmicIcon__ArrowRightSvgrepoCom1"; // plasmic-import: qaiJBfqamnIH/icon

createPlasmicElementProxy;

export type PlasmicSignup__VariantMembers = {};
export type PlasmicSignup__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignup__VariantsArgs;
export const PlasmicSignup__VariantProps = new Array<VariantPropType>();

export type PlasmicSignup__ArgsType = {};
type ArgPropType = keyof PlasmicSignup__ArgsType;
export const PlasmicSignup__ArgProps = new Array<ArgPropType>();

export type PlasmicSignup__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  input3?: Flex__<typeof AntdInput>;
  input4?: Flex__<typeof AntdInput>;
  button?: Flex__<typeof Button>;
  svg?: Flex__<"svg">;
  link?: Flex__<"a"> & Partial<LinkProps>;
  verify2?: Flex__<typeof Verify2>;
};

export interface DefaultSignupProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSignup__RenderFunc(props: {
  variants: PlasmicSignup__VariantsArgs;
  args: PlasmicSignup__ArgsType;
  overrides: PlasmicSignup__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const $globalActions = useGlobalActions?.();

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "verifyModal",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "input3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      },
      {
        path: "input4.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("value", AntdInput_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsxhQZeI50DLq3()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

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
          plasmic_antd_5_hostless_css.plasmic_tokens,
          plasmic_plasmic_rich_components_css.plasmic_tokens,
          sty.root
        )}
      >
        <div className={classNames(projectcss.all, sty.freeBox__ulLh6)}>
          <div className={classNames(projectcss.all, sty.freeBox__r3Mhn)}>
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"100%"}
              displayMaxHeight={"none"}
              displayMaxWidth={
                hasVariant(globalVariants, "screen", "tablet")
                  ? "861px"
                  : "none"
              }
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={
                hasVariant(globalVariants, "screen", "tablet") ? "100%" : "auto"
              }
              loading={"lazy"}
              src={{
                src: "/plasmic/auth_flow/images/unsplashX2Tmfd1SgAPng2.png",
                fullWidth: 878,
                fullHeight: 1024,
                aspectRatio: undefined
              }}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__g9GK7)}>
            <div className={classNames(projectcss.all, sty.freeBox__wKjP)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__di2Ed)}
              >
                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1__umvQg
                  )}
                >
                  {"Create your\naccount"}
                </h1>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vwXsM
                  )}
                >
                  {"It\u2019s just a few minutes!"}
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__r7Cal)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__egdOi)}
                >
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1__jKfmb
                    )}
                  >
                    {"Email"}
                  </h1>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__ikUU)}
                  >
                    {(() => {
                      const child$Props = {
                        allowClear: false,
                        className: classNames("__wab_instance", sty.input3),
                        onChange: async (...eventArgs: any) => {
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "value",
                            ["input3", "value"],
                            AntdInput_Helpers
                          ).apply(null, eventArgs);
                        },
                        placeholder: "Enter your email",
                        size: "large",
                        type: "text",
                        value: generateStateValueProp($state, [
                          "input3",
                          "value"
                        ])
                      };
                      initializeCodeComponentStates(
                        $state,
                        [
                          {
                            name: "value",
                            plasmicStateName: "input3.value"
                          }
                        ],
                        [],
                        AntdInput_Helpers ?? {},
                        child$Props
                      );

                      return (
                        <AntdInput
                          data-plasmic-name={"input3"}
                          data-plasmic-override={overrides.input3}
                          {...child$Props}
                        />
                      );
                    })()}
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gDdMg
                      )}
                    >
                      <React.Fragment>
                        {(() => {
                          try {
                            return undefined;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "Validation message";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__dPq2O)}
                >
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1__tuSp
                    )}
                  >
                    {"Password"}
                  </h1>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__s47PN)}
                  >
                    {(() => {
                      const child$Props = {
                        allowClear: false,
                        className: classNames("__wab_instance", sty.input4),
                        onChange: async (...eventArgs: any) => {
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "value",
                            ["input4", "value"],
                            AntdInput_Helpers
                          ).apply(null, eventArgs);
                        },
                        placeholder: "Enter your password",
                        size: "large",
                        type: "password",
                        value: generateStateValueProp($state, [
                          "input4",
                          "value"
                        ])
                      };
                      initializeCodeComponentStates(
                        $state,
                        [
                          {
                            name: "value",
                            plasmicStateName: "input4.value"
                          }
                        ],
                        [],
                        AntdInput_Helpers ?? {},
                        child$Props
                      );

                      return (
                        <AntdInput
                          data-plasmic-name={"input4"}
                          data-plasmic-override={overrides.input4}
                          {...child$Props}
                        />
                      );
                    })()}
                    <div
                      className={classNames(projectcss.all, sty.freeBox__zHoq)}
                    >
                      {(() => {
                        try {
                          return $ctx.SupabaseUser.error;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return true;
                          }
                          throw e;
                        }
                      })() ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___9XyL5
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return $ctx.SupabaseUser.error;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "Password length must be greater than 6";
                                }
                                throw e;
                              }
                            })()}
                          </React.Fragment>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </Stack__>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__vX17I)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__kdkhR)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox___9DVnE)}
                  >
                    <Button
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames("__wab_instance", sty.button)}
                      color={"neutral"}
                      label={
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__gIhRx
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__uo0YT
                            )}
                          >
                            {"Create Account"}
                          </div>
                          <ArrowUpRightSvgrepoCom1Icon
                            data-plasmic-name={"svg"}
                            data-plasmic-override={overrides.svg}
                            className={classNames(projectcss.all, sty.svg)}
                            role={"img"}
                          />
                        </div>
                      }
                      onClick={async event => {
                        const $steps = {};

                        $steps["invokeGlobalAction"] = true
                          ? (() => {
                              const actionArgs = {
                                args: [
                                  (() => {
                                    try {
                                      return $state.input3.value;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })(),
                                  (() => {
                                    try {
                                      return $state.input4.value;
                                    } catch (e) {
                                      if (
                                        e instanceof TypeError ||
                                        e?.plasmicType ===
                                          "PlasmicUndefinedDataError"
                                      ) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()
                                ]
                              };
                              return $globalActions[
                                "SupabaseUserGlobalContext.signup"
                              ]?.apply(null, [...actionArgs.args]);
                            })()
                          : undefined;
                        if (
                          $steps["invokeGlobalAction"] != null &&
                          typeof $steps["invokeGlobalAction"] === "object" &&
                          typeof $steps["invokeGlobalAction"].then ===
                            "function"
                        ) {
                          $steps["invokeGlobalAction"] = await $steps[
                            "invokeGlobalAction"
                          ];
                        }
                      }}
                      submitsForm={true}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__y5THp
                      )}
                    >
                      {"Validation message"}
                    </div>
                  </div>
                </Stack__>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__eXDg2)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___6ZtVh)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eMn0G
                    )}
                  >
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#000000" }}
                      >
                        {"Already a member?"}
                      </span>
                      <React.Fragment> </React.Fragment>
                      {
                        <PlasmicLink__
                          data-plasmic-name={"link"}
                          data-plasmic-override={overrides.link}
                          className={classNames(
                            projectcss.all,
                            projectcss.a,
                            projectcss.__wab_text,
                            projectcss.plasmic_default__inline,
                            sty.link
                          )}
                          component={Link}
                          href={`/login`}
                          platform={"nextjs"}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ fontWeight: 700 }}
                            >
                              {"Sign in"}
                            </span>
                          </React.Fragment>
                        </PlasmicLink__>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                </Stack__>
              </Stack__>
            </div>
          </div>
        </div>
        <Verify2
          data-plasmic-name={"verify2"}
          data-plasmic-override={overrides.verify2}
          className={classNames("__wab_instance", sty.verify2)}
          email={(() => {
            try {
              return $state.input3.value;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "rajendra@levelworks.co";
              }
              throw e;
            }
          })()}
          password={(() => {
            try {
              return $state.input4.value;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })()}
        />
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "input3", "input4", "button", "svg", "link", "verify2"],
  img: ["img"],
  input3: ["input3"],
  input4: ["input4"],
  button: ["button", "svg"],
  svg: ["svg"],
  link: ["link"],
  verify2: ["verify2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
  input3: typeof AntdInput;
  input4: typeof AntdInput;
  button: typeof Button;
  svg: "svg";
  link: "a";
  verify2: typeof Verify2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignup__VariantsArgs;
    args?: PlasmicSignup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSignup__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
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
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSignup__ArgProps,
          internalVariantPropNames: PlasmicSignup__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSignup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignup";
  } else {
    func.displayName = `PlasmicSignup.${nodeName}`;
  }
  return func;
}

export const PlasmicSignup = Object.assign(
  // Top-level PlasmicSignup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    input3: makeNodeComponent("input3"),
    input4: makeNodeComponent("input4"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    link: makeNodeComponent("link"),
    verify2: makeNodeComponent("verify2"),

    // Metadata about props expected for PlasmicSignup
    internalVariantProps: PlasmicSignup__VariantProps,
    internalArgProps: PlasmicSignup__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSignup;
/* prettier-ignore-end */
