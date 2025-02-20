// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6w4xCETj1gYkorDVmc5wx8
// Component: RFtKsNJUE0ai

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

import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdPassword } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdPassword_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import Button from "../../Button"; // plasmic-import: VgnuFTHcwOqi/component

import { useScreenVariants as useScreenVariantsxhQZeI50DLq3 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: xhQZeI50dLq3/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6w4xCETj1gYkorDVmc5wx8/projectcss
import sty from "./PlasmicUpdatePassword.module.css"; // plasmic-import: RFtKsNJUE0ai/css

import CircleIcon from "./icons/PlasmicIcon__Circle"; // plasmic-import: 6wz4CaO-nkvo/icon
import ArrowUpRightSvgrepoCom1Icon from "./icons/PlasmicIcon__ArrowUpRightSvgrepoCom1"; // plasmic-import: 57WzVwD7aYxV/icon
import ArrowRightSvgrepoCom1Icon from "./icons/PlasmicIcon__ArrowRightSvgrepoCom1"; // plasmic-import: qaiJBfqamnIH/icon

createPlasmicElementProxy;

export type PlasmicUpdatePassword__VariantMembers = {};
export type PlasmicUpdatePassword__VariantsArgs = {};
type VariantPropType = keyof PlasmicUpdatePassword__VariantsArgs;
export const PlasmicUpdatePassword__VariantProps = new Array<VariantPropType>();

export type PlasmicUpdatePassword__ArgsType = {};
type ArgPropType = keyof PlasmicUpdatePassword__ArgsType;
export const PlasmicUpdatePassword__ArgProps = new Array<ArgPropType>();

export type PlasmicUpdatePassword__OverridesType = {
  root?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  h1?: Flex__<"h1">;
  form?: Flex__<typeof FormWrapper>;
  button?: Flex__<typeof Button>;
  svg?: Flex__<"svg">;
};

export interface DefaultUpdatePasswordProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicUpdatePassword__RenderFunc(props: {
  variants: PlasmicUpdatePassword__VariantsArgs;
  args: PlasmicUpdatePassword__ArgsType;
  overrides: PlasmicUpdatePassword__OverridesType;
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
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
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
        <div className={classNames(projectcss.all, sty.freeBox___3N5Qc)}>
          <div className={classNames(projectcss.all, sty.freeBox__ct9Fe)}>
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
          <div className={classNames(projectcss.all, sty.freeBox___6BCtB)}>
            <div className={classNames(projectcss.all, sty.freeBox__rFJs)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__qPjHi)}
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
                  {"Update Password"}
                </h1>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ne33V
                  )}
                >
                  {"Enter the new Password"}
                </div>
              </Stack__>
              <div className={classNames(projectcss.all, sty.freeBox__n6A9H)}>
                {(() => {
                  const child$Props = {
                    className: classNames("__wab_instance", sty.form),
                    extendedOnValuesChange: async (...eventArgs: any) => {
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "value",
                        ["form", "value"],
                        FormWrapper_Helpers
                      ).apply(null, eventArgs);
                    },
                    formItems: undefined,
                    labelCol: { span: 8, horizontalOnly: true },
                    layout: "vertical",
                    mode: undefined,
                    onFinish: async values => {
                      const $steps = {};

                      $steps["invokeGlobalAction"] =
                        $state.form.value["new-password"] ===
                        $state.form.value["confirmpassword"]
                          ? (() => {
                              const actionArgs = {
                                args: [
                                  (() => {
                                    try {
                                      return $state.form.value.confirmpassword;
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
                                "SupabaseUserGlobalContext.updateUserPassword"
                              ]?.apply(null, [...actionArgs.args]);
                            })()
                          : undefined;
                      if (
                        $steps["invokeGlobalAction"] != null &&
                        typeof $steps["invokeGlobalAction"] === "object" &&
                        typeof $steps["invokeGlobalAction"].then === "function"
                      ) {
                        $steps["invokeGlobalAction"] = await $steps[
                          "invokeGlobalAction"
                        ];
                      }
                    },
                    onIsSubmittingChange: async (...eventArgs: any) => {
                      generateStateOnChangePropForCodeComponents(
                        $state,
                        "isSubmitting",
                        ["form", "isSubmitting"],
                        FormWrapper_Helpers
                      ).apply(null, eventArgs);
                    },
                    ref: ref => {
                      $refs["form"] = ref;
                    },
                    requiredMark: true,
                    validateTrigger: ["onSubmit"],
                    wrapperCol: { span: 16, horizontalOnly: true }
                  };
                  initializeCodeComponentStates(
                    $state,
                    [
                      {
                        name: "value",
                        plasmicStateName: "form.value"
                      },
                      {
                        name: "isSubmitting",
                        plasmicStateName: "form.isSubmitting"
                      }
                    ],
                    [],
                    FormWrapper_Helpers ?? {},
                    child$Props
                  );

                  return (
                    <FormWrapper
                      data-plasmic-name={"form"}
                      data-plasmic-override={overrides.form}
                      {...child$Props}
                    >
                      <FormItemWrapper
                        className={classNames(
                          "__wab_instance",
                          sty.formField__spoLo
                        )}
                        label={"New Password"}
                        name={"new-password"}
                      >
                        <AntdPassword
                          className={classNames(
                            "__wab_instance",
                            sty.passwordInput___54O7
                          )}
                        />
                      </FormItemWrapper>
                      <FormItemWrapper
                        className={classNames(
                          "__wab_instance",
                          sty.formField__rn5Jq
                        )}
                        label={"Confirm Password"}
                        name={"confirmpassword"}
                        rules={[
                          {
                            ruleType: "advanced",
                            custom: (rule, value) => {
                              return (
                                $state.form.value["new-password"] ===
                                $state.form.value["confirmpassword"]
                              );
                            },
                            message:
                              "New Password and Old Password must be same"
                          }
                        ]}
                        validateTrigger={["onSubmit"]}
                      >
                        <AntdPassword
                          className={classNames(
                            "__wab_instance",
                            sty.passwordInput__dnvba
                          )}
                        />
                      </FormItemWrapper>
                      <Button
                        className={classNames("__wab_instance", sty.button)}
                        color={"neutral"}
                        label={
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox___3EwEw
                            )}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__ytwJr
                              )}
                            >
                              {"UPDATE"}
                            </div>
                            <ArrowUpRightSvgrepoCom1Icon
                              className={classNames(projectcss.all, sty.svg)}
                              role={"img"}
                            />
                          </div>
                        }
                        onClick={async event => {
                          const $steps = {};

                          $steps["invokeGlobalAction"] =
                            $state.form.value.confirmpassword ===
                            $state.form.value["new-password"]
                              ? (() => {
                                  const actionArgs = {
                                    args: [
                                      (() => {
                                        try {
                                          return $state.form.value
                                            .confirmpassword;
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
                                    "SupabaseUserGlobalContext.updateUserPassword"
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
                    </FormWrapper>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "h1", "form", "button", "svg"],
  img: ["img"],
  h1: ["h1"],
  form: ["form", "button", "svg"],
  button: ["button", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof PlasmicImg__;
  h1: "h1";
  form: typeof FormWrapper;
  button: typeof Button;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUpdatePassword__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUpdatePassword__VariantsArgs;
    args?: PlasmicUpdatePassword__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUpdatePassword__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicUpdatePassword__ArgsType,
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
          internalArgPropNames: PlasmicUpdatePassword__ArgProps,
          internalVariantPropNames: PlasmicUpdatePassword__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUpdatePassword__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUpdatePassword";
  } else {
    func.displayName = `PlasmicUpdatePassword.${nodeName}`;
  }
  return func;
}

export const PlasmicUpdatePassword = Object.assign(
  // Top-level PlasmicUpdatePassword renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    h1: makeNodeComponent("h1"),
    form: makeNodeComponent("form"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicUpdatePassword
    internalVariantProps: PlasmicUpdatePassword__VariantProps,
    internalArgProps: PlasmicUpdatePassword__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicUpdatePassword;
/* prettier-ignore-end */
