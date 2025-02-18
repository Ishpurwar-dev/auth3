// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6w4xCETj1gYkorDVmc5wx8
// Component: QeicKanUEGZn

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

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import Image from "../../Image"; // plasmic-import: MwhU9T9RTx3a/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsxhQZeI50DLq3 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: xhQZeI50dLq3/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 6w4xCETj1gYkorDVmc5wx8/projectcss
import sty from "./PlasmicQuote.module.css"; // plasmic-import: QeicKanUEGZn/css

import ArrowRightSvgrepoCom1Icon from "./icons/PlasmicIcon__ArrowRightSvgrepoCom1"; // plasmic-import: qaiJBfqamnIH/icon
import UserAlt1SvgrepoCom1Icon from "./icons/PlasmicIcon__UserAlt1SvgrepoCom1"; // plasmic-import: iJYvLqwlJcCK/icon
import SignOutSvgrepoCom1Icon from "./icons/PlasmicIcon__SignOutSvgrepoCom1"; // plasmic-import: OHZmsuxMzmvB/icon

createPlasmicElementProxy;

export type PlasmicQuote__VariantMembers = {};
export type PlasmicQuote__VariantsArgs = {};
type VariantPropType = keyof PlasmicQuote__VariantsArgs;
export const PlasmicQuote__VariantProps = new Array<VariantPropType>();

export type PlasmicQuote__ArgsType = {};
type ArgPropType = keyof PlasmicQuote__ArgsType;
export const PlasmicQuote__ArgProps = new Array<ArgPropType>();

export type PlasmicQuote__OverridesType = {
  root?: Flex__<"div">;
  quote?: Flex__<"div">;
  group17?: Flex__<"div">;
  group16?: Flex__<"div">;
  group15?: Flex__<"div">;
  rectangle3?: Flex__<"div">;
  image?: Flex__<typeof Image>;
  img?: Flex__<typeof PlasmicImg__>;
  group13?: Flex__<"div">;
  group14?: Flex__<"div">;
  rectangle5?: Flex__<"div">;
  rectangle6?: Flex__<"div">;
  rectangle1?: Flex__<"div">;
};

export interface DefaultQuoteProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicQuote__RenderFunc(props: {
  variants: PlasmicQuote__VariantsArgs;
  args: PlasmicQuote__ArgsType;
  overrides: PlasmicQuote__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return (() => {
                const currentDate = new Date();

                // Calculate the changed date
                const targetDate = new Date(currentDate);
                targetDate.setDate(targetDate.getDate() + $state.i);

                // Format the target date to YYYY-MM-DD
                const formattedTargetDate = targetDate
                  .toISOString()
                  .split("T")[0];

                // Find data for the target date
                const targetData = $queries.query.data.find(
                  item => item.date.split("T")[0] === formattedTargetDate
                );

                // Return the found data or null if not found
                return targetData || null;
              })();
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return {};
              }
              throw e;
            }
          })()
      },
      {
        path: "i",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "eHLR5uNQdmui1ekZb8CzHG",
        opId: "b0a7aff5-7614-4cb2-87c3-3853e3d475da",
        userArgs: {},
        cacheKey: `plasmic.$.b0a7aff5-7614-4cb2-87c3-3853e3d475da.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

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

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__htEsV)}
          >
            <div
              data-plasmic-name={"quote"}
              data-plasmic-override={overrides.quote}
              className={classNames(projectcss.all, sty.quote)}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"group17"}
                data-plasmic-override={overrides.group17}
                hasGap={true}
                className={classNames(projectcss.all, sty.group17)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__u0Gi
                  )}
                >
                  {"Quote of the day"}
                </div>
                <Stack__
                  as={"div"}
                  data-plasmic-name={"group16"}
                  data-plasmic-override={overrides.group16}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.group16)}
                >
                  <div
                    data-plasmic-name={"group15"}
                    data-plasmic-override={overrides.group15}
                    className={classNames(projectcss.all, sty.group15)}
                  >
                    <div
                      data-plasmic-name={"rectangle3"}
                      data-plasmic-override={overrides.rectangle3}
                      className={classNames(projectcss.all, sty.rectangle3)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__jhYOn
                        )}
                      >
                        <Image
                          data-plasmic-name={"image"}
                          data-plasmic-override={overrides.image}
                          className={classNames("__wab_instance", sty.image)}
                          image3={
                            <PlasmicImg__
                              data-plasmic-name={"img"}
                              data-plasmic-override={overrides.img}
                              alt={""}
                              className={classNames(sty.img)}
                              displayHeight={"auto"}
                              displayMaxHeight={"none"}
                              displayMaxWidth={"100%"}
                              displayMinHeight={"0"}
                              displayMinWidth={"0"}
                              displayWidth={"auto"}
                              height={"100%"}
                              loading={"lazy"}
                              src={(() => {
                                try {
                                  return $state.data.image;
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
                              })()}
                              width={"100%"}
                            />
                          }
                        />

                        <Stack__
                          as={"div"}
                          data-plasmic-name={"group13"}
                          data-plasmic-override={overrides.group13}
                          hasGap={true}
                          className={classNames(projectcss.all, sty.group13)}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__cdTa
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return $state.data.Quote;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "\u201cWe cannot solve problems with the kind of thinking we employed when we came up with them.\u201d";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__fvyck
                            )}
                          >
                            <React.Fragment>
                              {(() => {
                                try {
                                  return $state.data.Author;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "\u00a0\u2014 Albert Einstein";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          </div>
                        </Stack__>
                      </Stack__>
                    </div>
                  </div>
                  <Stack__
                    as={"div"}
                    data-plasmic-name={"group14"}
                    data-plasmic-override={overrides.group14}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.group14)}
                  >
                    <div
                      data-plasmic-name={"rectangle5"}
                      data-plasmic-override={overrides.rectangle5}
                      className={classNames(projectcss.all, sty.rectangle5)}
                      onClick={async event => {
                        const $steps = {};

                        $steps["updateI"] = true
                          ? (() => {
                              const actionArgs = {
                                variable: {
                                  objRoot: $state,
                                  variablePath: ["i"]
                                },
                                operation: 3
                              };
                              return (({
                                variable,
                                value,
                                startIndex,
                                deleteCount
                              }) => {
                                if (!variable) {
                                  return;
                                }
                                const { objRoot, variablePath } = variable;

                                const oldValue = $stateGet(
                                  objRoot,
                                  variablePath
                                );
                                $stateSet(objRoot, variablePath, oldValue - 1);
                                return oldValue - 1;
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["updateI"] != null &&
                          typeof $steps["updateI"] === "object" &&
                          typeof $steps["updateI"].then === "function"
                        ) {
                          $steps["updateI"] = await $steps["updateI"];
                        }
                      }}
                    >
                      <ArrowRightSvgrepoCom1Icon
                        className={classNames(projectcss.all, sty.svg__kxvr4)}
                        role={"img"}
                      />
                    </div>
                    <div
                      data-plasmic-name={"rectangle6"}
                      data-plasmic-override={overrides.rectangle6}
                      className={classNames(projectcss.all, sty.rectangle6)}
                      onClick={async event => {
                        const $steps = {};

                        $steps["updateI"] = true
                          ? (() => {
                              const actionArgs = {
                                variable: {
                                  objRoot: $state,
                                  variablePath: ["i"]
                                },
                                operation: 2
                              };
                              return (({
                                variable,
                                value,
                                startIndex,
                                deleteCount
                              }) => {
                                if (!variable) {
                                  return;
                                }
                                const { objRoot, variablePath } = variable;

                                const oldValue = $stateGet(
                                  objRoot,
                                  variablePath
                                );
                                $stateSet(objRoot, variablePath, oldValue + 1);
                                return oldValue + 1;
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["updateI"] != null &&
                          typeof $steps["updateI"] === "object" &&
                          typeof $steps["updateI"].then === "function"
                        ) {
                          $steps["updateI"] = await $steps["updateI"];
                        }
                      }}
                    >
                      <ArrowRightSvgrepoCom1Icon
                        className={classNames(projectcss.all, sty.svg__nF5A)}
                        role={"img"}
                      />
                    </div>
                  </Stack__>
                </Stack__>
              </Stack__>
            </div>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__cHsIu)}
            >
              <div className={classNames(projectcss.all, sty.freeBox___8Z5XN)}>
                <UserAlt1SvgrepoCom1Icon
                  className={classNames(projectcss.all, sty.svg__yeMNb)}
                  role={"img"}
                />

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___5DVaZ
                  )}
                >
                  <React.Fragment>
                    {(() => {
                      try {
                        return $ctx.SupabaseUser.user.email;
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
                  </React.Fragment>
                </div>
              </div>
              <div
                data-plasmic-name={"rectangle1"}
                data-plasmic-override={overrides.rectangle1}
                className={classNames(projectcss.all, sty.rectangle1)}
                onClick={async event => {
                  const $steps = {};

                  $steps["invokeGlobalAction"] = true
                    ? (() => {
                        const actionArgs = { args: ["/quote"] };
                        return $globalActions[
                          "SupabaseUserGlobalContext.logout"
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
                }}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nSsCk
                  )}
                  onClick={async event => {
                    const $steps = {};

                    $steps["invokeGlobalAction"] = true
                      ? (() => {
                          const actionArgs = { args: [] };
                          return $globalActions[
                            "SupabaseUserGlobalContext.logout"
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
                  }}
                >
                  {"Sign out"}
                </div>
                <SignOutSvgrepoCom1Icon
                  className={classNames(projectcss.all, sty.svg__yciMm)}
                  onClick={async event => {
                    const $steps = {};

                    $steps["invokeGlobalAction"] = true
                      ? (() => {
                          const actionArgs = { args: ["/quote"] };
                          return $globalActions[
                            "SupabaseUserGlobalContext.logout"
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
                  }}
                  role={"img"}
                />
              </div>
            </Stack__>
          </Stack__>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "quote",
    "group17",
    "group16",
    "group15",
    "rectangle3",
    "image",
    "img",
    "group13",
    "group14",
    "rectangle5",
    "rectangle6",
    "rectangle1"
  ],
  quote: [
    "quote",
    "group17",
    "group16",
    "group15",
    "rectangle3",
    "image",
    "img",
    "group13",
    "group14",
    "rectangle5",
    "rectangle6"
  ],
  group17: [
    "group17",
    "group16",
    "group15",
    "rectangle3",
    "image",
    "img",
    "group13",
    "group14",
    "rectangle5",
    "rectangle6"
  ],
  group16: [
    "group16",
    "group15",
    "rectangle3",
    "image",
    "img",
    "group13",
    "group14",
    "rectangle5",
    "rectangle6"
  ],
  group15: ["group15", "rectangle3", "image", "img", "group13"],
  rectangle3: ["rectangle3", "image", "img", "group13"],
  image: ["image", "img"],
  img: ["img"],
  group13: ["group13"],
  group14: ["group14", "rectangle5", "rectangle6"],
  rectangle5: ["rectangle5"],
  rectangle6: ["rectangle6"],
  rectangle1: ["rectangle1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  quote: "div";
  group17: "div";
  group16: "div";
  group15: "div";
  rectangle3: "div";
  image: typeof Image;
  img: typeof PlasmicImg__;
  group13: "div";
  group14: "div";
  rectangle5: "div";
  rectangle6: "div";
  rectangle1: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicQuote__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicQuote__VariantsArgs;
    args?: PlasmicQuote__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicQuote__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicQuote__ArgsType,
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
          internalArgPropNames: PlasmicQuote__ArgProps,
          internalVariantPropNames: PlasmicQuote__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicQuote__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicQuote";
  } else {
    func.displayName = `PlasmicQuote.${nodeName}`;
  }
  return func;
}

export const PlasmicQuote = Object.assign(
  // Top-level PlasmicQuote renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    quote: makeNodeComponent("quote"),
    group17: makeNodeComponent("group17"),
    group16: makeNodeComponent("group16"),
    group15: makeNodeComponent("group15"),
    rectangle3: makeNodeComponent("rectangle3"),
    image: makeNodeComponent("image"),
    img: makeNodeComponent("img"),
    group13: makeNodeComponent("group13"),
    group14: makeNodeComponent("group14"),
    rectangle5: makeNodeComponent("rectangle5"),
    rectangle6: makeNodeComponent("rectangle6"),
    rectangle1: makeNodeComponent("rectangle1"),

    // Metadata about props expected for PlasmicQuote
    internalVariantProps: PlasmicQuote__VariantProps,
    internalArgProps: PlasmicQuote__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicQuote;
/* prettier-ignore-end */
