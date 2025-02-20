// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6w4xCETj1gYkorDVmc5wx8
// Component: JhI-zVVc4vG6

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

import { useScreenVariants as useScreenVariantsxhQZeI50DLq3 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: xhQZeI50dLq3/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6w4xCETj1gYkorDVmc5wx8/projectcss
import sty from "./PlasmicForgetPassword.module.css"; // plasmic-import: JhI-zVVc4vG6/css

import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: 6wz4CaO-nkvo/icon
import ArrowUpRightSvgrepoCom1Icon from "./icons/PlasmicIcon__ArrowUpRightSvgrepoCom1"; // plasmic-import: 57WzVwD7aYxV/icon
import ArrowRightSvgrepoCom1Icon from "./icons/PlasmicIcon__ArrowRightSvgrepoCom1"; // plasmic-import: qaiJBfqamnIH/icon

createPlasmicElementProxy;

export type PlasmicForgetPassword__VariantMembers = {};
export type PlasmicForgetPassword__VariantsArgs = {};
type VariantPropType = keyof PlasmicForgetPassword__VariantsArgs;
export const PlasmicForgetPassword__VariantProps = new Array<VariantPropType>();

export type PlasmicForgetPassword__ArgsType = {};
type ArgPropType = keyof PlasmicForgetPassword__ArgsType;
export const PlasmicForgetPassword__ArgProps = new Array<ArgPropType>();

export type PlasmicForgetPassword__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  input?: Flex__<typeof AntdInput>;
  button?: Flex__<typeof Button>;
  svg?: Flex__<"svg">;
  link?: Flex__<"a"> & Partial<LinkProps>;
};

export interface DefaultForgetPasswordProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicForgetPassword__RenderFunc(props: {
  variants: PlasmicForgetPassword__VariantsArgs;
  args: PlasmicForgetPassword__ArgsType;
  overrides: PlasmicForgetPassword__OverridesType;
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
        path: "input.value",
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
        <div className={classNames(projectcss.all, sty.freeBox__dDhE)}>
          <div className={classNames(projectcss.all, sty.freeBox__fjzWh)}>
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
          <div className={classNames(projectcss.all, sty.freeBox___9QcbV)}>
            <div className={classNames(projectcss.all, sty.freeBox__irYq1)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__oh3V8)}
              >
                <h1
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1___1Rl4O
                  )}
                >
                  {"Forgot Password"}
                </h1>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__s2Gy
                  )}
                >
                  {"Enter your email and we will send you reset password link"}
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__eIbDw)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__itup)}
                >
                  <h1
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1__rqwrc
                    )}
                  >
                    {"Email"}
                  </h1>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__uMcz2)}
                  >
                    {(() => {
                      const child$Props = {
                        allowClear: false,
                        className: classNames("__wab_instance", sty.input),
                        onChange: async (...eventArgs: any) => {
                          generateStateOnChangePropForCodeComponents(
                            $state,
                            "value",
                            ["input", "value"],
                            AntdInput_Helpers
                          ).apply(null, eventArgs);
                        },
                        placeholder: "Enter your email",
                        size: "large",
                        type: "text",
                        value: generateStateValueProp($state, [
                          "input",
                          "value"
                        ])
                      };
                      initializeCodeComponentStates(
                        $state,
                        [
                          {
                            name: "value",
                            plasmicStateName: "input.value"
                          }
                        ],
                        [],
                        AntdInput_Helpers ?? {},
                        child$Props
                      );

                      return (
                        <AntdInput
                          data-plasmic-name={"input"}
                          data-plasmic-override={overrides.input}
                          {...child$Props}
                        />
                      );
                    })()}
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__m9AzH
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
                              return "Validation message";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </div>
                  </div>
                </Stack__>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__hSrn7)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__n0YNw)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__a7Adk)}
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
                            sty.freeBox__rn583
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__uvjAz
                            )}
                          >
                            {"CONTINUE"}
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
                                      return $state.input.value;
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
                                "SupabaseUserGlobalContext.resetPasswordForEmail"
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
                        sty.text__wznq0
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
                className={classNames(projectcss.all, sty.freeBox___8GS1Q)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__jl2ZX)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mkbMp
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{"Back to "}</React.Fragment>
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
                          onClick={async event => {
                            const $steps = {};

                            $steps["goToLogin"] = true
                              ? (() => {
                                  const actionArgs = { destination: `/login` };
                                  return (({ destination }) => {
                                    if (
                                      typeof destination === "string" &&
                                      destination.startsWith("#")
                                    ) {
                                      document
                                        .getElementById(destination.substr(1))
                                        .scrollIntoView({ behavior: "smooth" });
                                    } else {
                                      __nextRouter?.push(destination);
                                    }
                                  })?.apply(null, [actionArgs]);
                                })()
                              : undefined;
                            if (
                              $steps["goToLogin"] != null &&
                              typeof $steps["goToLogin"] === "object" &&
                              typeof $steps["goToLogin"].then === "function"
                            ) {
                              $steps["goToLogin"] = await $steps["goToLogin"];
                            }
                          }}
                          platform={"nextjs"}
                        >
                          <React.Fragment>
                            <span
                              className={
                                "plasmic_default__all plasmic_default__span"
                              }
                              style={{ fontWeight: 700 }}
                            >
                              {"Sign In"}
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
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "input", "button", "svg", "link"],
  img: ["img"],
  input: ["input"],
  button: ["button", "svg"],
  svg: ["svg"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
  input: typeof AntdInput;
  button: typeof Button;
  svg: "svg";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicForgetPassword__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicForgetPassword__VariantsArgs;
    args?: PlasmicForgetPassword__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicForgetPassword__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicForgetPassword__ArgsType,
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
          internalArgPropNames: PlasmicForgetPassword__ArgProps,
          internalVariantPropNames: PlasmicForgetPassword__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicForgetPassword__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicForgetPassword";
  } else {
    func.displayName = `PlasmicForgetPassword.${nodeName}`;
  }
  return func;
}

export const PlasmicForgetPassword = Object.assign(
  // Top-level PlasmicForgetPassword renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    input: makeNodeComponent("input"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicForgetPassword
    internalVariantProps: PlasmicForgetPassword__VariantProps,
    internalArgProps: PlasmicForgetPassword__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicForgetPassword;
/* prettier-ignore-end */
