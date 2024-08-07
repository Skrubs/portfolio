import { FocusTrap, Portal, useModal } from "./chunk-BU6YDZZD.js";
import { ListContext_default } from "./chunk-USQ42GCB.js";
import { Transition_default } from "./chunk-FJTIQE5L.js";
import { Paper_default } from "./chunk-HSZQ2XYL.js";
import { isHostComponent, useSlotProps } from "./chunk-63CT3VCP.js";
import {
  debounce_default,
  init_debounce,
  init_ownerDocument,
  init_ownerWindow,
  ownerDocument_default,
  ownerWindow_default,
} from "./chunk-2IMXPVZ5.js";
import {
  init_useEnhancedEffect,
  useEnhancedEffect_default,
} from "./chunk-2IINGK7N.js";
import { init_useForkRef, useForkRef_default } from "./chunk-5AL4GP22.js";
import { useTheme } from "./chunk-FVZ2FESL.js";
import { useRtl } from "./chunk-KUU34DBE.js";
import {
  HTMLElementType,
  chainPropTypes,
  elementAcceptingRef_default,
  elementTypeAcceptingRef_default,
  getScrollbarSize,
  init_HTMLElementType,
  init_chainPropTypes,
  init_elementAcceptingRef,
  init_elementTypeAcceptingRef,
  init_getScrollbarSize,
  init_integerPropType,
  init_refType,
  init_useTimeout,
  integerPropType_default,
  refType_default,
  useTimeout,
} from "./chunk-CZIZNHAF.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  clsx_default,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_clsx,
  init_composeClasses,
  init_extends,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_objectWithoutPropertiesLoose,
  init_styled,
  init_useThemeProps2 as init_useThemeProps,
  require_jsx_runtime,
  require_prop_types,
  require_react_is,
  rootShouldForwardProp_default,
  styled_default,
  useThemeProps2 as useThemeProps,
} from "./chunk-7DIJ4C62.js";
import { __toESM, require_react } from "./chunk-45FXRYJS.js";

// node_modules/@mui/material/Menu/Menu.js
init_extends();
init_objectWithoutPropertiesLoose();
var React8 = __toESM(require_react());
var import_react_is2 = __toESM(require_react_is());
var import_prop_types8 = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_HTMLElementType();

// node_modules/@mui/material/MenuList/MenuList.js
init_extends();
init_objectWithoutPropertiesLoose();
var React2 = __toESM(require_react());
var import_react_is = __toESM(require_react_is());
var import_prop_types2 = __toESM(require_prop_types());
init_ownerDocument();

// node_modules/@mui/material/List/List.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_styled();
init_useThemeProps();

// node_modules/@mui/material/List/listClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getListUtilityClass(slot) {
  return generateUtilityClass("MuiList", slot);
}
var listClasses = generateUtilityClasses("MuiList", [
  "root",
  "padding",
  "dense",
  "subheader",
]);
var listClasses_default = listClasses;

// node_modules/@mui/material/List/List.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = [
  "children",
  "className",
  "component",
  "dense",
  "disablePadding",
  "subheader",
];
var useUtilityClasses = (ownerState) => {
  const { classes, disablePadding, dense, subheader } = ownerState;
  const slots = {
    root: [
      "root",
      !disablePadding && "padding",
      dense && "dense",
      subheader && "subheader",
    ],
  };
  return composeClasses(slots, getListUtilityClass, classes);
};
var ListRoot = styled_default("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (props, styles3) => {
    const { ownerState } = props;
    return [
      styles3.root,
      !ownerState.disablePadding && styles3.padding,
      ownerState.dense && styles3.dense,
      ownerState.subheader && styles3.subheader,
    ];
  },
})(({ ownerState }) =>
  _extends(
    {
      listStyle: "none",
      margin: 0,
      padding: 0,
      position: "relative",
    },
    !ownerState.disablePadding && {
      paddingTop: 8,
      paddingBottom: 8,
    },
    ownerState.subheader && {
      paddingTop: 0,
    },
  ),
);
var List = React.forwardRef(function List2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiList",
  });
  const {
      children,
      className,
      component = "ul",
      dense = false,
      disablePadding = false,
      subheader,
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);
  const context = React.useMemo(
    () => ({
      dense,
    }),
    [dense],
  );
  const ownerState = _extends({}, props, {
    component,
    dense,
    disablePadding,
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime2.jsx)(ListContext_default.Provider, {
    value: context,
    children: (0, import_jsx_runtime.jsxs)(
      ListRoot,
      _extends(
        {
          as: component,
          className: clsx_default(classes.root, className),
          ref,
          ownerState,
        },
        other,
        {
          children: [subheader, children],
        },
      ),
    ),
  });
});
true
  ? (List.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * The content of the component.
       */
      children: import_prop_types.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types.default.object,
      /**
       * @ignore
       */
      className: import_prop_types.default.string,
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types.default.elementType,
      /**
       * If `true`, compact vertical padding designed for keyboard and mouse input is used for
       * the list and list items.
       * The prop is available to descendant components as the `dense` context.
       * @default false
       */
      dense: import_prop_types.default.bool,
      /**
       * If `true`, vertical padding is removed from the list.
       * @default false
       */
      disablePadding: import_prop_types.default.bool,
      /**
       * The content of the subheader, normally `ListSubheader`.
       */
      subheader: import_prop_types.default.node,
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types.default.oneOfType([
        import_prop_types.default.arrayOf(
          import_prop_types.default.oneOfType([
            import_prop_types.default.func,
            import_prop_types.default.object,
            import_prop_types.default.bool,
          ]),
        ),
        import_prop_types.default.func,
        import_prop_types.default.object,
      ]),
    })
  : void 0;
var List_default = List;

// node_modules/@mui/material/utils/getScrollbarSize.js
init_getScrollbarSize();
var getScrollbarSize_default = getScrollbarSize;

// node_modules/@mui/material/MenuList/MenuList.js
init_useForkRef();
init_useEnhancedEffect();
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded2 = [
  "actions",
  "autoFocus",
  "autoFocusItem",
  "children",
  "className",
  "disabledItemsFocusable",
  "disableListWrap",
  "onKeyDown",
  "variant",
];
function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === void 0) {
    return true;
  }
  let text = nextFocus.innerText;
  if (text === void 0) {
    text = nextFocus.textContent;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.indexOf(textCriteria.keys.join("")) === 0;
}
function moveFocus(
  list,
  currentFocus,
  disableListWrap,
  disabledItemsFocusable,
  traversalFunction,
  textCriteria,
) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(
    list,
    currentFocus,
    currentFocus ? disableListWrap : false,
  );
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = disabledItemsFocusable
      ? false
      : nextFocus.disabled ||
        nextFocus.getAttribute("aria-disabled") === "true";
    if (
      !nextFocus.hasAttribute("tabindex") ||
      !textCriteriaMatches(nextFocus, textCriteria) ||
      nextFocusDisabled
    ) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }
  return false;
}
var MenuList = React2.forwardRef(function MenuList2(props, ref) {
  const {
      // private
      // eslint-disable-next-line react/prop-types
      actions,
      autoFocus = false,
      autoFocusItem = false,
      children,
      className,
      disabledItemsFocusable = false,
      disableListWrap = false,
      onKeyDown,
      variant = "selectedMenu",
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded2);
  const listRef = React2.useRef(null);
  const textCriteriaRef = React2.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null,
  });
  useEnhancedEffect_default(() => {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  React2.useImperativeHandle(
    actions,
    () => ({
      adjustStyleForScrollbar: (containerElement, { direction }) => {
        const noExplicitWidth = !listRef.current.style.width;
        if (
          containerElement.clientHeight < listRef.current.clientHeight &&
          noExplicitWidth
        ) {
          const scrollbarSize = `${getScrollbarSize_default(ownerDocument_default(containerElement))}px`;
          listRef.current.style[
            direction === "rtl" ? "paddingLeft" : "paddingRight"
          ] = scrollbarSize;
          listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
        }
        return listRef.current;
      },
    }),
    [],
  );
  const handleKeyDown = (event) => {
    const list = listRef.current;
    const key = event.key;
    const currentFocus = ownerDocument_default(list).activeElement;
    if (key === "ArrowDown") {
      event.preventDefault();
      moveFocus(
        list,
        currentFocus,
        disableListWrap,
        disabledItemsFocusable,
        nextItem,
      );
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus(
        list,
        currentFocus,
        disableListWrap,
        disabledItemsFocusable,
        previousItem,
      );
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "End") {
      event.preventDefault();
      moveFocus(
        list,
        null,
        disableListWrap,
        disabledItemsFocusable,
        previousItem,
      );
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();
      if (criteria.keys.length > 0) {
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent =
        currentFocus &&
        !criteria.repeating &&
        textCriteriaMatches(currentFocus, criteria);
      if (
        criteria.previousKeyMatched &&
        (keepFocusOnCurrent ||
          moveFocus(
            list,
            currentFocus,
            false,
            disabledItemsFocusable,
            nextItem,
            criteria,
          ))
      ) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleRef = useForkRef_default(listRef, ref);
  let activeItemIndex = -1;
  React2.Children.forEach(children, (child, index) => {
    if (!React2.isValidElement(child)) {
      if (activeItemIndex === index) {
        activeItemIndex += 1;
        if (activeItemIndex >= children.length) {
          activeItemIndex = -1;
        }
      }
      return;
    }
    if (true) {
      if ((0, import_react_is.isFragment)(child)) {
        console.error(
          [
            "MUI: The Menu component doesn't accept a Fragment as a child.",
            "Consider providing an array instead.",
          ].join("\n"),
        );
      }
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
    if (
      activeItemIndex === index &&
      (child.props.disabled ||
        child.props.muiSkipListHighlight ||
        child.type.muiSkipListHighlight)
    ) {
      activeItemIndex += 1;
      if (activeItemIndex >= children.length) {
        activeItemIndex = -1;
      }
    }
  });
  const items = React2.Children.map(children, (child, index) => {
    if (index === activeItemIndex) {
      const newChildProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === void 0 && variant === "selectedMenu") {
        newChildProps.tabIndex = 0;
      }
      return React2.cloneElement(child, newChildProps);
    }
    return child;
  });
  return (0, import_jsx_runtime3.jsx)(
    List_default,
    _extends(
      {
        role: "menu",
        ref: handleRef,
        className,
        onKeyDown: handleKeyDown,
        tabIndex: autoFocus ? 0 : -1,
      },
      other,
      {
        children: items,
      },
    ),
  );
});
true
  ? (MenuList.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * If `true`, will focus the `[role="menu"]` container and move into tab order.
       * @default false
       */
      autoFocus: import_prop_types2.default.bool,
      /**
       * If `true`, will focus the first menuitem if `variant="menu"` or selected item
       * if `variant="selectedMenu"`.
       * @default false
       */
      autoFocusItem: import_prop_types2.default.bool,
      /**
       * MenuList contents, normally `MenuItem`s.
       */
      children: import_prop_types2.default.node,
      /**
       * @ignore
       */
      className: import_prop_types2.default.string,
      /**
       * If `true`, will allow focus on disabled items.
       * @default false
       */
      disabledItemsFocusable: import_prop_types2.default.bool,
      /**
       * If `true`, the menu items will not wrap focus.
       * @default false
       */
      disableListWrap: import_prop_types2.default.bool,
      /**
       * @ignore
       */
      onKeyDown: import_prop_types2.default.func,
      /**
       * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
       * and the vertical alignment relative to the anchor element.
       * @default 'selectedMenu'
       */
      variant: import_prop_types2.default.oneOf(["menu", "selectedMenu"]),
    })
  : void 0;
var MenuList_default = MenuList;

// node_modules/@mui/material/Popover/Popover.js
init_extends();
init_objectWithoutPropertiesLoose();
var React7 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_HTMLElementType();
init_refType();
init_elementTypeAcceptingRef();
init_integerPropType();
init_chainPropTypes();
init_styled();
init_useThemeProps();
init_debounce();
init_ownerDocument();
init_ownerWindow();
init_useForkRef();

// node_modules/@mui/material/Grow/Grow.js
init_extends();
init_objectWithoutPropertiesLoose();
var React3 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
init_useTimeout();
init_elementAcceptingRef();

// node_modules/@mui/material/transitions/utils.js
var reflow = (node) => node.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const { timeout, easing, style = {} } = props;
  return {
    duration:
      (_style$transitionDura = style.transitionDuration) != null
        ? _style$transitionDura
        : typeof timeout === "number"
          ? timeout
          : timeout[options.mode] || 0,
    easing:
      (_style$transitionTimi = style.transitionTimingFunction) != null
        ? _style$transitionTimi
        : typeof easing === "object"
          ? easing[options.mode]
          : easing,
    delay: style.transitionDelay,
  };
}

// node_modules/@mui/material/Grow/Grow.js
init_useForkRef();
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded3 = [
  "addEndListener",
  "appear",
  "children",
  "easing",
  "in",
  "onEnter",
  "onEntered",
  "onEntering",
  "onExit",
  "onExited",
  "onExiting",
  "style",
  "timeout",
  "TransitionComponent",
];
function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}
var styles = {
  entering: {
    opacity: 1,
    transform: getScale(1),
  },
  entered: {
    opacity: 1,
    transform: "none",
  },
};
var isWebKit154 =
  typeof navigator !== "undefined" &&
  /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
  /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
var Grow = React3.forwardRef(function Grow2(props, ref) {
  const {
      addEndListener,
      appear = true,
      children,
      easing,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style,
      timeout = "auto",
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition_default,
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded3);
  const timer = useTimeout();
  const autoTimeout = React3.useRef();
  const theme = useTheme();
  const nodeRef = React3.useRef(null);
  const handleRef = useForkRef_default(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction,
    } = getTransitionProps(
      {
        style,
        timeout,
        easing,
      },
      {
        mode: "enter",
      },
    );
    let duration;
    if (timeout === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [
      theme.transitions.create("opacity", {
        duration,
        delay,
      }),
      theme.transitions.create("transform", {
        duration: isWebKit154 ? duration : duration * 0.666,
        delay,
        easing: transitionTimingFunction,
      }),
    ].join(",");
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction,
    } = getTransitionProps(
      {
        style,
        timeout,
        easing,
      },
      {
        mode: "exit",
      },
    );
    let duration;
    if (timeout === "auto") {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [
      theme.transitions.create("opacity", {
        duration,
        delay,
      }),
      theme.transitions.create("transform", {
        duration: isWebKit154 ? duration : duration * 0.666,
        delay: isWebKit154 ? delay : delay || duration * 0.333,
        easing: transitionTimingFunction,
      }),
    ].join(",");
    node.style.opacity = 0;
    node.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next) => {
    if (timeout === "auto") {
      timer.start(autoTimeout.current || 0, next);
    }
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  return (0, import_jsx_runtime4.jsx)(
    TransitionComponent,
    _extends(
      {
        appear,
        in: inProp,
        nodeRef,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        addEndListener: handleAddEndListener,
        timeout: timeout === "auto" ? null : timeout,
      },
      other,
      {
        children: (state, childProps) => {
          return React3.cloneElement(
            children,
            _extends(
              {
                style: _extends(
                  {
                    opacity: 0,
                    transform: getScale(0.75),
                    visibility:
                      state === "exited" && !inProp ? "hidden" : void 0,
                  },
                  styles[state],
                  style,
                  children.props.style,
                ),
                ref: handleRef,
              },
              childProps,
            ),
          );
        },
      },
    ),
  );
});
true
  ? (Grow.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * Add a custom transition end trigger. Called with the transitioning DOM
       * node and a done callback. Allows for more fine grained transition end
       * logic. Note: Timeouts are still used as a fallback if provided.
       */
      addEndListener: import_prop_types3.default.func,
      /**
       * Perform the enter transition when it first mounts if `in` is also `true`.
       * Set this to `false` to disable this behavior.
       * @default true
       */
      appear: import_prop_types3.default.bool,
      /**
       * A single child content element.
       */
      children: elementAcceptingRef_default.isRequired,
      /**
       * The transition timing function.
       * You may specify a single easing or a object containing enter and exit values.
       */
      easing: import_prop_types3.default.oneOfType([
        import_prop_types3.default.shape({
          enter: import_prop_types3.default.string,
          exit: import_prop_types3.default.string,
        }),
        import_prop_types3.default.string,
      ]),
      /**
       * If `true`, the component will transition in.
       */
      in: import_prop_types3.default.bool,
      /**
       * @ignore
       */
      onEnter: import_prop_types3.default.func,
      /**
       * @ignore
       */
      onEntered: import_prop_types3.default.func,
      /**
       * @ignore
       */
      onEntering: import_prop_types3.default.func,
      /**
       * @ignore
       */
      onExit: import_prop_types3.default.func,
      /**
       * @ignore
       */
      onExited: import_prop_types3.default.func,
      /**
       * @ignore
       */
      onExiting: import_prop_types3.default.func,
      /**
       * @ignore
       */
      style: import_prop_types3.default.object,
      /**
       * The duration for the transition, in milliseconds.
       * You may specify a single timeout for all transitions, or individually with an object.
       *
       * Set to 'auto' to automatically calculate transition time based on height.
       * @default 'auto'
       */
      timeout: import_prop_types3.default.oneOfType([
        import_prop_types3.default.oneOf(["auto"]),
        import_prop_types3.default.number,
        import_prop_types3.default.shape({
          appear: import_prop_types3.default.number,
          enter: import_prop_types3.default.number,
          exit: import_prop_types3.default.number,
        }),
      ]),
    })
  : void 0;
Grow.muiSupportAuto = true;
var Grow_default = Grow;

// node_modules/@mui/material/Modal/Modal.js
init_objectWithoutPropertiesLoose();
init_extends();
var React6 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
init_clsx();
init_HTMLElementType();
init_elementAcceptingRef();
init_composeClasses();
init_styled();
init_useThemeProps();

// node_modules/@mui/material/Backdrop/Backdrop.js
init_objectWithoutPropertiesLoose();
init_extends();
var React5 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
init_clsx();
init_composeClasses();
init_styled();
init_useThemeProps();

// node_modules/@mui/material/Fade/Fade.js
init_extends();
init_objectWithoutPropertiesLoose();
var React4 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
init_elementAcceptingRef();
init_useForkRef();
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var _excluded4 = [
  "addEndListener",
  "appear",
  "children",
  "easing",
  "in",
  "onEnter",
  "onEntered",
  "onEntering",
  "onExit",
  "onExited",
  "onExiting",
  "style",
  "timeout",
  "TransitionComponent",
];
var styles2 = {
  entering: {
    opacity: 1,
  },
  entered: {
    opacity: 1,
  },
};
var Fade = React4.forwardRef(function Fade2(props, ref) {
  const theme = useTheme();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };
  const {
      addEndListener,
      appear = true,
      children,
      easing,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style,
      timeout = defaultTimeout,
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition_default,
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded4);
  const enableStrictModeCompat = true;
  const nodeRef = React4.useRef(null);
  const handleRef = useForkRef_default(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node);
    const transitionProps = getTransitionProps(
      {
        style,
        timeout,
        easing,
      },
      {
        mode: "enter",
      },
    );
    node.style.webkitTransition = theme.transitions.create(
      "opacity",
      transitionProps,
    );
    node.style.transition = theme.transitions.create(
      "opacity",
      transitionProps,
    );
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node) => {
    const transitionProps = getTransitionProps(
      {
        style,
        timeout,
        easing,
      },
      {
        mode: "exit",
      },
    );
    node.style.webkitTransition = theme.transitions.create(
      "opacity",
      transitionProps,
    );
    node.style.transition = theme.transitions.create(
      "opacity",
      transitionProps,
    );
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next) => {
    if (addEndListener) {
      addEndListener(nodeRef.current, next);
    }
  };
  return (0, import_jsx_runtime5.jsx)(
    TransitionComponent,
    _extends(
      {
        appear,
        in: inProp,
        nodeRef: enableStrictModeCompat ? nodeRef : void 0,
        onEnter: handleEnter,
        onEntered: handleEntered,
        onEntering: handleEntering,
        onExit: handleExit,
        onExited: handleExited,
        onExiting: handleExiting,
        addEndListener: handleAddEndListener,
        timeout,
      },
      other,
      {
        children: (state, childProps) => {
          return React4.cloneElement(
            children,
            _extends(
              {
                style: _extends(
                  {
                    opacity: 0,
                    visibility:
                      state === "exited" && !inProp ? "hidden" : void 0,
                  },
                  styles2[state],
                  style,
                  children.props.style,
                ),
                ref: handleRef,
              },
              childProps,
            ),
          );
        },
      },
    ),
  );
});
true
  ? (Fade.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * Add a custom transition end trigger. Called with the transitioning DOM
       * node and a done callback. Allows for more fine grained transition end
       * logic. Note: Timeouts are still used as a fallback if provided.
       */
      addEndListener: import_prop_types4.default.func,
      /**
       * Perform the enter transition when it first mounts if `in` is also `true`.
       * Set this to `false` to disable this behavior.
       * @default true
       */
      appear: import_prop_types4.default.bool,
      /**
       * A single child content element.
       */
      children: elementAcceptingRef_default.isRequired,
      /**
       * The transition timing function.
       * You may specify a single easing or a object containing enter and exit values.
       */
      easing: import_prop_types4.default.oneOfType([
        import_prop_types4.default.shape({
          enter: import_prop_types4.default.string,
          exit: import_prop_types4.default.string,
        }),
        import_prop_types4.default.string,
      ]),
      /**
       * If `true`, the component will transition in.
       */
      in: import_prop_types4.default.bool,
      /**
       * @ignore
       */
      onEnter: import_prop_types4.default.func,
      /**
       * @ignore
       */
      onEntered: import_prop_types4.default.func,
      /**
       * @ignore
       */
      onEntering: import_prop_types4.default.func,
      /**
       * @ignore
       */
      onExit: import_prop_types4.default.func,
      /**
       * @ignore
       */
      onExited: import_prop_types4.default.func,
      /**
       * @ignore
       */
      onExiting: import_prop_types4.default.func,
      /**
       * @ignore
       */
      style: import_prop_types4.default.object,
      /**
       * The duration for the transition, in milliseconds.
       * You may specify a single timeout for all transitions, or individually with an object.
       * @default {
       *   enter: theme.transitions.duration.enteringScreen,
       *   exit: theme.transitions.duration.leavingScreen,
       * }
       */
      timeout: import_prop_types4.default.oneOfType([
        import_prop_types4.default.number,
        import_prop_types4.default.shape({
          appear: import_prop_types4.default.number,
          enter: import_prop_types4.default.number,
          exit: import_prop_types4.default.number,
        }),
      ]),
    })
  : void 0;
var Fade_default = Fade;

// node_modules/@mui/material/Backdrop/backdropClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getBackdropUtilityClass(slot) {
  return generateUtilityClass("MuiBackdrop", slot);
}
var backdropClasses = generateUtilityClasses("MuiBackdrop", [
  "root",
  "invisible",
]);
var backdropClasses_default = backdropClasses;

// node_modules/@mui/material/Backdrop/Backdrop.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _excluded5 = [
  "children",
  "className",
  "component",
  "components",
  "componentsProps",
  "invisible",
  "open",
  "slotProps",
  "slots",
  "TransitionComponent",
  "transitionDuration",
];
var useUtilityClasses2 = (ownerState) => {
  const { classes, invisible } = ownerState;
  const slots = {
    root: ["root", invisible && "invisible"],
  };
  return composeClasses(slots, getBackdropUtilityClass, classes);
};
var BackdropRoot = styled_default("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (props, styles3) => {
    const { ownerState } = props;
    return [styles3.root, ownerState.invisible && styles3.invisible];
  },
})(({ ownerState }) =>
  _extends(
    {
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      WebkitTapHighlightColor: "transparent",
    },
    ownerState.invisible && {
      backgroundColor: "transparent",
    },
  ),
);
var Backdrop = React5.forwardRef(function Backdrop2(inProps, ref) {
  var _slotProps$root, _ref, _slots$root;
  const props = useThemeProps({
    props: inProps,
    name: "MuiBackdrop",
  });
  const {
      children,
      className,
      component = "div",
      components = {},
      componentsProps = {},
      invisible = false,
      open,
      slotProps = {},
      slots = {},
      TransitionComponent = Fade_default,
      transitionDuration,
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded5);
  const ownerState = _extends({}, props, {
    component,
    invisible,
  });
  const classes = useUtilityClasses2(ownerState);
  const rootSlotProps =
    (_slotProps$root = slotProps.root) != null
      ? _slotProps$root
      : componentsProps.root;
  return (0, import_jsx_runtime6.jsx)(
    TransitionComponent,
    _extends(
      {
        in: open,
        timeout: transitionDuration,
      },
      other,
      {
        children: (0, import_jsx_runtime6.jsx)(
          BackdropRoot,
          _extends(
            {
              "aria-hidden": true,
            },
            rootSlotProps,
            {
              as:
                (_ref =
                  (_slots$root = slots.root) != null
                    ? _slots$root
                    : components.Root) != null
                  ? _ref
                  : component,
              className: clsx_default(
                classes.root,
                className,
                rootSlotProps == null ? void 0 : rootSlotProps.className,
              ),
              ownerState: _extends(
                {},
                ownerState,
                rootSlotProps == null ? void 0 : rootSlotProps.ownerState,
              ),
              classes,
              ref,
              children,
            },
          ),
        ),
      },
    ),
  );
});
true
  ? (Backdrop.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * The content of the component.
       */
      children: import_prop_types5.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types5.default.object,
      /**
       * @ignore
       */
      className: import_prop_types5.default.string,
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types5.default.elementType,
      /**
       * The components used for each slot inside.
       *
       * This prop is an alias for the `slots` prop.
       * It's recommended to use the `slots` prop instead.
       *
       * @default {}
       */
      components: import_prop_types5.default.shape({
        Root: import_prop_types5.default.elementType,
      }),
      /**
       * The extra props for the slot components.
       * You can override the existing props or add new ones.
       *
       * This prop is an alias for the `slotProps` prop.
       * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
       *
       * @default {}
       */
      componentsProps: import_prop_types5.default.shape({
        root: import_prop_types5.default.object,
      }),
      /**
       * If `true`, the backdrop is invisible.
       * It can be used when rendering a popover or a custom select component.
       * @default false
       */
      invisible: import_prop_types5.default.bool,
      /**
       * If `true`, the component is shown.
       */
      open: import_prop_types5.default.bool.isRequired,
      /**
       * The extra props for the slot components.
       * You can override the existing props or add new ones.
       *
       * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
       *
       * @default {}
       */
      slotProps: import_prop_types5.default.shape({
        root: import_prop_types5.default.object,
      }),
      /**
       * The components used for each slot inside.
       *
       * This prop is an alias for the `components` prop, which will be deprecated in the future.
       *
       * @default {}
       */
      slots: import_prop_types5.default.shape({
        root: import_prop_types5.default.elementType,
      }),
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types5.default.oneOfType([
        import_prop_types5.default.arrayOf(
          import_prop_types5.default.oneOfType([
            import_prop_types5.default.func,
            import_prop_types5.default.object,
            import_prop_types5.default.bool,
          ]),
        ),
        import_prop_types5.default.func,
        import_prop_types5.default.object,
      ]),
      /**
       * The component used for the transition.
       * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
       * @default Fade
       */
      TransitionComponent: import_prop_types5.default.elementType,
      /**
       * The duration for the transition, in milliseconds.
       * You may specify a single timeout for all transitions, or individually with an object.
       */
      transitionDuration: import_prop_types5.default.oneOfType([
        import_prop_types5.default.number,
        import_prop_types5.default.shape({
          appear: import_prop_types5.default.number,
          enter: import_prop_types5.default.number,
          exit: import_prop_types5.default.number,
        }),
      ]),
    })
  : void 0;
var Backdrop_default = Backdrop;

// node_modules/@mui/material/Modal/modalClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getModalUtilityClass(slot) {
  return generateUtilityClass("MuiModal", slot);
}
var modalClasses = generateUtilityClasses("MuiModal", [
  "root",
  "hidden",
  "backdrop",
]);
var modalClasses_default = modalClasses;

// node_modules/@mui/material/Modal/Modal.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var _excluded6 = [
  "BackdropComponent",
  "BackdropProps",
  "classes",
  "className",
  "closeAfterTransition",
  "children",
  "container",
  "component",
  "components",
  "componentsProps",
  "disableAutoFocus",
  "disableEnforceFocus",
  "disableEscapeKeyDown",
  "disablePortal",
  "disableRestoreFocus",
  "disableScrollLock",
  "hideBackdrop",
  "keepMounted",
  "onBackdropClick",
  "onClose",
  "onTransitionEnter",
  "onTransitionExited",
  "open",
  "slotProps",
  "slots",
  "theme",
];
var useUtilityClasses3 = (ownerState) => {
  const { open, exited, classes } = ownerState;
  const slots = {
    root: ["root", !open && exited && "hidden"],
    backdrop: ["backdrop"],
  };
  return composeClasses(slots, getModalUtilityClass, classes);
};
var ModalRoot = styled_default("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (props, styles3) => {
    const { ownerState } = props;
    return [
      styles3.root,
      !ownerState.open && ownerState.exited && styles3.hidden,
    ];
  },
})(({ theme, ownerState }) =>
  _extends(
    {
      position: "fixed",
      zIndex: (theme.vars || theme).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
    },
    !ownerState.open &&
      ownerState.exited && {
        visibility: "hidden",
      },
  ),
);
var ModalBackdrop = styled_default(Backdrop_default, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (props, styles3) => {
    return styles3.backdrop;
  },
})({
  zIndex: -1,
});
var Modal = React6.forwardRef(function Modal2(inProps, ref) {
  var _ref,
    _slots$root,
    _ref2,
    _slots$backdrop,
    _slotProps$root,
    _slotProps$backdrop;
  const props = useThemeProps({
    name: "MuiModal",
    props: inProps,
  });
  const {
      BackdropComponent = ModalBackdrop,
      BackdropProps,
      className,
      closeAfterTransition = false,
      children,
      container,
      component,
      components = {},
      componentsProps = {},
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableEscapeKeyDown = false,
      disablePortal = false,
      disableRestoreFocus = false,
      disableScrollLock = false,
      hideBackdrop = false,
      keepMounted = false,
      onBackdropClick,
      open,
      slotProps,
      slots,
      // eslint-disable-next-line react/prop-types
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded6);
  const propsWithDefaults = _extends({}, props, {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted,
  });
  const {
    getRootProps,
    getBackdropProps,
    getTransitionProps: getTransitionProps2,
    portalRef,
    isTopModal,
    exited,
    hasTransition,
  } = useModal(
    _extends({}, propsWithDefaults, {
      rootRef: ref,
    }),
  );
  const ownerState = _extends({}, propsWithDefaults, {
    exited,
  });
  const classes = useUtilityClasses3(ownerState);
  const childProps = {};
  if (children.props.tabIndex === void 0) {
    childProps.tabIndex = "-1";
  }
  if (hasTransition) {
    const { onEnter, onExited } = getTransitionProps2();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }
  const RootSlot =
    (_ref =
      (_slots$root = slots == null ? void 0 : slots.root) != null
        ? _slots$root
        : components.Root) != null
      ? _ref
      : ModalRoot;
  const BackdropSlot =
    (_ref2 =
      (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null
        ? _slots$backdrop
        : components.Backdrop) != null
      ? _ref2
      : BackdropComponent;
  const rootSlotProps =
    (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null
      ? _slotProps$root
      : componentsProps.root;
  const backdropSlotProps =
    (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) !=
    null
      ? _slotProps$backdrop
      : componentsProps.backdrop;
  const rootProps = useSlotProps({
    elementType: RootSlot,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    getSlotProps: getRootProps,
    additionalProps: {
      ref,
      as: component,
    },
    ownerState,
    className: clsx_default(
      className,
      rootSlotProps == null ? void 0 : rootSlotProps.className,
      classes == null ? void 0 : classes.root,
      !ownerState.open &&
        ownerState.exited &&
        (classes == null ? void 0 : classes.hidden),
    ),
  });
  const backdropProps = useSlotProps({
    elementType: BackdropSlot,
    externalSlotProps: backdropSlotProps,
    additionalProps: BackdropProps,
    getSlotProps: (otherHandlers) => {
      return getBackdropProps(
        _extends({}, otherHandlers, {
          onClick: (e) => {
            if (onBackdropClick) {
              onBackdropClick(e);
            }
            if (otherHandlers != null && otherHandlers.onClick) {
              otherHandlers.onClick(e);
            }
          },
        }),
      );
    },
    className: clsx_default(
      backdropSlotProps == null ? void 0 : backdropSlotProps.className,
      BackdropProps == null ? void 0 : BackdropProps.className,
      classes == null ? void 0 : classes.backdrop,
    ),
    ownerState,
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return (0, import_jsx_runtime7.jsx)(Portal, {
    ref: portalRef,
    container,
    disablePortal,
    children: (0, import_jsx_runtime8.jsxs)(
      RootSlot,
      _extends({}, rootProps, {
        children: [
          !hideBackdrop && BackdropComponent
            ? (0, import_jsx_runtime7.jsx)(
                BackdropSlot,
                _extends({}, backdropProps),
              )
            : null,
          (0, import_jsx_runtime7.jsx)(FocusTrap, {
            disableEnforceFocus,
            disableAutoFocus,
            disableRestoreFocus,
            isEnabled: isTopModal,
            open,
            children: React6.cloneElement(children, childProps),
          }),
        ],
      }),
    ),
  });
});
true
  ? (Modal.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * A backdrop component. This prop enables custom backdrop rendering.
       * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
       * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
       * @default styled(Backdrop, {
       *   name: 'MuiModal',
       *   slot: 'Backdrop',
       *   overridesResolver: (props, styles) => {
       *     return styles.backdrop;
       *   },
       * })({
       *   zIndex: -1,
       * })
       */
      BackdropComponent: import_prop_types6.default.elementType,
      /**
       * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
       * @deprecated Use `slotProps.backdrop` instead.
       */
      BackdropProps: import_prop_types6.default.object,
      /**
       * A single child content element.
       */
      children: elementAcceptingRef_default.isRequired,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types6.default.object,
      /**
       * @ignore
       */
      className: import_prop_types6.default.string,
      /**
       * When set to true the Modal waits until a nested Transition is completed before closing.
       * @default false
       */
      closeAfterTransition: import_prop_types6.default.bool,
      /**
       * The component used for the root node.
       * Either a string to use a HTML element or a component.
       */
      component: import_prop_types6.default.elementType,
      /**
       * The components used for each slot inside.
       *
       * This prop is an alias for the `slots` prop.
       * It's recommended to use the `slots` prop instead.
       *
       * @default {}
       */
      components: import_prop_types6.default.shape({
        Backdrop: import_prop_types6.default.elementType,
        Root: import_prop_types6.default.elementType,
      }),
      /**
       * The extra props for the slot components.
       * You can override the existing props or add new ones.
       *
       * This prop is an alias for the `slotProps` prop.
       * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
       *
       * @default {}
       */
      componentsProps: import_prop_types6.default.shape({
        backdrop: import_prop_types6.default.oneOfType([
          import_prop_types6.default.func,
          import_prop_types6.default.object,
        ]),
        root: import_prop_types6.default.oneOfType([
          import_prop_types6.default.func,
          import_prop_types6.default.object,
        ]),
      }),
      /**
       * An HTML element or function that returns one.
       * The `container` will have the portal children appended to it.
       *
       * You can also provide a callback, which is called in a React layout effect.
       * This lets you set the container from a ref, and also makes server-side rendering possible.
       *
       * By default, it uses the body of the top-level document object,
       * so it's simply `document.body` most of the time.
       */
      container: import_prop_types6.default.oneOfType([
        HTMLElementType,
        import_prop_types6.default.func,
      ]),
      /**
       * If `true`, the modal will not automatically shift focus to itself when it opens, and
       * replace it to the last focused element when it closes.
       * This also works correctly with any modal children that have the `disableAutoFocus` prop.
       *
       * Generally this should never be set to `true` as it makes the modal less
       * accessible to assistive technologies, like screen readers.
       * @default false
       */
      disableAutoFocus: import_prop_types6.default.bool,
      /**
       * If `true`, the modal will not prevent focus from leaving the modal while open.
       *
       * Generally this should never be set to `true` as it makes the modal less
       * accessible to assistive technologies, like screen readers.
       * @default false
       */
      disableEnforceFocus: import_prop_types6.default.bool,
      /**
       * If `true`, hitting escape will not fire the `onClose` callback.
       * @default false
       */
      disableEscapeKeyDown: import_prop_types6.default.bool,
      /**
       * The `children` will be under the DOM hierarchy of the parent component.
       * @default false
       */
      disablePortal: import_prop_types6.default.bool,
      /**
       * If `true`, the modal will not restore focus to previously focused element once
       * modal is hidden or unmounted.
       * @default false
       */
      disableRestoreFocus: import_prop_types6.default.bool,
      /**
       * Disable the scroll lock behavior.
       * @default false
       */
      disableScrollLock: import_prop_types6.default.bool,
      /**
       * If `true`, the backdrop is not rendered.
       * @default false
       */
      hideBackdrop: import_prop_types6.default.bool,
      /**
       * Always keep the children in the DOM.
       * This prop can be useful in SEO situation or
       * when you want to maximize the responsiveness of the Modal.
       * @default false
       */
      keepMounted: import_prop_types6.default.bool,
      /**
       * Callback fired when the backdrop is clicked.
       * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
       */
      onBackdropClick: import_prop_types6.default.func,
      /**
       * Callback fired when the component requests to be closed.
       * The `reason` parameter can optionally be used to control the response to `onClose`.
       *
       * @param {object} event The event source of the callback.
       * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
       */
      onClose: import_prop_types6.default.func,
      /**
       * A function called when a transition enters.
       */
      onTransitionEnter: import_prop_types6.default.func,
      /**
       * A function called when a transition has exited.
       */
      onTransitionExited: import_prop_types6.default.func,
      /**
       * If `true`, the component is shown.
       */
      open: import_prop_types6.default.bool.isRequired,
      /**
       * The props used for each slot inside the Modal.
       * @default {}
       */
      slotProps: import_prop_types6.default.shape({
        backdrop: import_prop_types6.default.oneOfType([
          import_prop_types6.default.func,
          import_prop_types6.default.object,
        ]),
        root: import_prop_types6.default.oneOfType([
          import_prop_types6.default.func,
          import_prop_types6.default.object,
        ]),
      }),
      /**
       * The components used for each slot inside the Modal.
       * Either a string to use a HTML element or a component.
       * @default {}
       */
      slots: import_prop_types6.default.shape({
        backdrop: import_prop_types6.default.elementType,
        root: import_prop_types6.default.elementType,
      }),
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types6.default.oneOfType([
        import_prop_types6.default.arrayOf(
          import_prop_types6.default.oneOfType([
            import_prop_types6.default.func,
            import_prop_types6.default.object,
            import_prop_types6.default.bool,
          ]),
        ),
        import_prop_types6.default.func,
        import_prop_types6.default.object,
      ]),
    })
  : void 0;
var Modal_default = Modal;

// node_modules/@mui/material/Popover/popoverClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getPopoverUtilityClass(slot) {
  return generateUtilityClass("MuiPopover", slot);
}
var popoverClasses = generateUtilityClasses("MuiPopover", ["root", "paper"]);
var popoverClasses_default = popoverClasses;

// node_modules/@mui/material/Popover/Popover.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var _excluded7 = ["onEntering"];
var _excluded22 = [
  "action",
  "anchorEl",
  "anchorOrigin",
  "anchorPosition",
  "anchorReference",
  "children",
  "className",
  "container",
  "elevation",
  "marginThreshold",
  "open",
  "PaperProps",
  "slots",
  "slotProps",
  "transformOrigin",
  "TransitionComponent",
  "transitionDuration",
  "TransitionProps",
  "disableScrollLock",
];
var _excluded32 = ["slotProps"];
function getOffsetTop(rect, vertical) {
  let offset = 0;
  if (typeof vertical === "number") {
    offset = vertical;
  } else if (vertical === "center") {
    offset = rect.height / 2;
  } else if (vertical === "bottom") {
    offset = rect.height;
  }
  return offset;
}
function getOffsetLeft(rect, horizontal) {
  let offset = 0;
  if (typeof horizontal === "number") {
    offset = horizontal;
  } else if (horizontal === "center") {
    offset = rect.width / 2;
  } else if (horizontal === "right") {
    offset = rect.width;
  }
  return offset;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical]
    .map((n) => (typeof n === "number" ? `${n}px` : n))
    .join(" ");
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
var useUtilityClasses4 = (ownerState) => {
  const { classes } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"],
  };
  return composeClasses(slots, getPopoverUtilityClass, classes);
};
var PopoverRoot = styled_default(Modal_default, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (props, styles3) => styles3.root,
})({});
var PopoverPaper = styled_default(Paper_default, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (props, styles3) => styles3.paper,
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
});
var Popover = React7.forwardRef(function Popover2(inProps, ref) {
  var _slotProps$paper, _slots$root, _slots$paper;
  const props = useThemeProps({
    props: inProps,
    name: "MuiPopover",
  });
  const {
      action,
      anchorEl,
      anchorOrigin = {
        vertical: "top",
        horizontal: "left",
      },
      anchorPosition,
      anchorReference = "anchorEl",
      children,
      className,
      container: containerProp,
      elevation = 8,
      marginThreshold = 16,
      open,
      PaperProps: PaperPropsProp = {},
      slots,
      slotProps,
      transformOrigin = {
        vertical: "top",
        horizontal: "left",
      },
      TransitionComponent = Grow_default,
      transitionDuration: transitionDurationProp = "auto",
      TransitionProps: { onEntering } = {},
      disableScrollLock = false,
    } = props,
    TransitionProps = _objectWithoutPropertiesLoose(
      props.TransitionProps,
      _excluded7,
    ),
    other = _objectWithoutPropertiesLoose(props, _excluded22);
  const externalPaperSlotProps =
    (_slotProps$paper = slotProps == null ? void 0 : slotProps.paper) != null
      ? _slotProps$paper
      : PaperPropsProp;
  const paperRef = React7.useRef();
  const handlePaperRef = useForkRef_default(
    paperRef,
    externalPaperSlotProps.ref,
  );
  const ownerState = _extends({}, props, {
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    externalPaperSlotProps,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps,
  });
  const classes = useUtilityClasses4(ownerState);
  const getAnchorOffset = React7.useCallback(() => {
    if (anchorReference === "anchorPosition") {
      if (true) {
        if (!anchorPosition) {
          console.error(
            'MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.',
          );
        }
      }
      return anchorPosition;
    }
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    const anchorElement =
      resolvedAnchorEl && resolvedAnchorEl.nodeType === 1
        ? resolvedAnchorEl
        : ownerDocument_default(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();
    if (true) {
      const box = anchorElement.getBoundingClientRect();
      if (
        box.top === 0 &&
        box.left === 0 &&
        box.right === 0 &&
        box.bottom === 0
      ) {
        console.warn(
          [
            "MUI: The `anchorEl` prop provided to the component is invalid.",
            "The anchor element should be part of the document layout.",
            "Make sure the element is present in the document or that it's not display none.",
          ].join("\n"),
        );
      }
    }
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left:
        anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal),
    };
  }, [
    anchorEl,
    anchorOrigin.horizontal,
    anchorOrigin.vertical,
    anchorPosition,
    anchorReference,
  ]);
  const getTransformOrigin = React7.useCallback(
    (elemRect) => {
      return {
        vertical: getOffsetTop(elemRect, transformOrigin.vertical),
        horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal),
      };
    },
    [transformOrigin.horizontal, transformOrigin.vertical],
  );
  const getPositioningStyle = React7.useCallback(
    (element) => {
      const elemRect = {
        width: element.offsetWidth,
        height: element.offsetHeight,
      };
      const elemTransformOrigin = getTransformOrigin(elemRect);
      if (anchorReference === "none") {
        return {
          top: null,
          left: null,
          transformOrigin: getTransformOriginValue(elemTransformOrigin),
        };
      }
      const anchorOffset = getAnchorOffset();
      let top = anchorOffset.top - elemTransformOrigin.vertical;
      let left = anchorOffset.left - elemTransformOrigin.horizontal;
      const bottom = top + elemRect.height;
      const right = left + elemRect.width;
      const containerWindow = ownerWindow_default(resolveAnchorEl(anchorEl));
      const heightThreshold = containerWindow.innerHeight - marginThreshold;
      const widthThreshold = containerWindow.innerWidth - marginThreshold;
      if (marginThreshold !== null && top < marginThreshold) {
        const diff = top - marginThreshold;
        top -= diff;
        elemTransformOrigin.vertical += diff;
      } else if (marginThreshold !== null && bottom > heightThreshold) {
        const diff = bottom - heightThreshold;
        top -= diff;
        elemTransformOrigin.vertical += diff;
      }
      if (true) {
        if (
          elemRect.height > heightThreshold &&
          elemRect.height &&
          heightThreshold
        ) {
          console.error(
            [
              "MUI: The popover component is too tall.",
              `Some part of it can not be seen on the screen (${elemRect.height - heightThreshold}px).`,
              "Please consider adding a `max-height` to improve the user-experience.",
            ].join("\n"),
          );
        }
      }
      if (marginThreshold !== null && left < marginThreshold) {
        const diff = left - marginThreshold;
        left -= diff;
        elemTransformOrigin.horizontal += diff;
      } else if (right > widthThreshold) {
        const diff = right - widthThreshold;
        left -= diff;
        elemTransformOrigin.horizontal += diff;
      }
      return {
        top: `${Math.round(top)}px`,
        left: `${Math.round(left)}px`,
        transformOrigin: getTransformOriginValue(elemTransformOrigin),
      };
    },
    [
      anchorEl,
      anchorReference,
      getAnchorOffset,
      getTransformOrigin,
      marginThreshold,
    ],
  );
  const [isPositioned, setIsPositioned] = React7.useState(open);
  const setPositioningStyles = React7.useCallback(() => {
    const element = paperRef.current;
    if (!element) {
      return;
    }
    const positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
    setIsPositioned(true);
  }, [getPositioningStyle]);
  React7.useEffect(() => {
    if (disableScrollLock) {
      window.addEventListener("scroll", setPositioningStyles);
    }
    return () => window.removeEventListener("scroll", setPositioningStyles);
  }, [anchorEl, disableScrollLock, setPositioningStyles]);
  const handleEntering = (element, isAppearing) => {
    if (onEntering) {
      onEntering(element, isAppearing);
    }
    setPositioningStyles();
  };
  const handleExited = () => {
    setIsPositioned(false);
  };
  React7.useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });
  React7.useImperativeHandle(
    action,
    () =>
      open
        ? {
            updatePosition: () => {
              setPositioningStyles();
            },
          }
        : null,
    [open, setPositioningStyles],
  );
  React7.useEffect(() => {
    if (!open) {
      return void 0;
    }
    const handleResize = debounce_default(() => {
      setPositioningStyles();
    });
    const containerWindow = ownerWindow_default(anchorEl);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;
  if (
    transitionDurationProp === "auto" &&
    !TransitionComponent.muiSupportAuto
  ) {
    transitionDuration = void 0;
  }
  const container =
    containerProp ||
    (anchorEl ? ownerDocument_default(resolveAnchorEl(anchorEl)).body : void 0);
  const RootSlot =
    (_slots$root = slots == null ? void 0 : slots.root) != null
      ? _slots$root
      : PopoverRoot;
  const PaperSlot =
    (_slots$paper = slots == null ? void 0 : slots.paper) != null
      ? _slots$paper
      : PopoverPaper;
  const paperProps = useSlotProps({
    elementType: PaperSlot,
    externalSlotProps: _extends({}, externalPaperSlotProps, {
      style: isPositioned
        ? externalPaperSlotProps.style
        : _extends({}, externalPaperSlotProps.style, {
            opacity: 0,
          }),
    }),
    additionalProps: {
      elevation,
      ref: handlePaperRef,
    },
    ownerState,
    className: clsx_default(
      classes.paper,
      externalPaperSlotProps == null
        ? void 0
        : externalPaperSlotProps.className,
    ),
  });
  const _useSlotProps = useSlotProps({
      elementType: RootSlot,
      externalSlotProps: (slotProps == null ? void 0 : slotProps.root) || {},
      externalForwardedProps: other,
      additionalProps: {
        ref,
        slotProps: {
          backdrop: {
            invisible: true,
          },
        },
        container,
        open,
      },
      ownerState,
      className: clsx_default(classes.root, className),
    }),
    { slotProps: rootSlotPropsProp } = _useSlotProps,
    rootProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded32);
  return (0, import_jsx_runtime9.jsx)(
    RootSlot,
    _extends(
      {},
      rootProps,
      !isHostComponent(RootSlot) && {
        slotProps: rootSlotPropsProp,
        disableScrollLock,
      },
      {
        children: (0, import_jsx_runtime9.jsx)(
          TransitionComponent,
          _extends(
            {
              appear: true,
              in: open,
              onEntering: handleEntering,
              onExited: handleExited,
              timeout: transitionDuration,
            },
            TransitionProps,
            {
              children: (0, import_jsx_runtime9.jsx)(
                PaperSlot,
                _extends({}, paperProps, {
                  children,
                }),
              ),
            },
          ),
        ),
      },
    ),
  );
});
true
  ? (Popover.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * A ref for imperative actions.
       * It currently only supports updatePosition() action.
       */
      action: refType_default,
      /**
       * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
       * or a function that returns either.
       * It's used to set the position of the popover.
       */
      anchorEl: chainPropTypes(
        import_prop_types7.default.oneOfType([
          HTMLElementType,
          import_prop_types7.default.func,
        ]),
        (props) => {
          if (
            props.open &&
            (!props.anchorReference || props.anchorReference === "anchorEl")
          ) {
            const resolvedAnchorEl = resolveAnchorEl(props.anchorEl);
            if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
              const box = resolvedAnchorEl.getBoundingClientRect();
              if (
                box.top === 0 &&
                box.left === 0 &&
                box.right === 0 &&
                box.bottom === 0
              ) {
                return new Error(
                  [
                    "MUI: The `anchorEl` prop provided to the component is invalid.",
                    "The anchor element should be part of the document layout.",
                    "Make sure the element is present in the document or that it's not display none.",
                  ].join("\n"),
                );
              }
            } else {
              return new Error(
                [
                  "MUI: The `anchorEl` prop provided to the component is invalid.",
                  `It should be an Element or PopoverVirtualElement instance but it's \`${resolvedAnchorEl}\` instead.`,
                ].join("\n"),
              );
            }
          }
          return null;
        },
      ),
      /**
       * This is the point on the anchor where the popover's
       * `anchorEl` will attach to. This is not used when the
       * anchorReference is 'anchorPosition'.
       *
       * Options:
       * vertical: [top, center, bottom];
       * horizontal: [left, center, right].
       * @default {
       *   vertical: 'top',
       *   horizontal: 'left',
       * }
       */
      anchorOrigin: import_prop_types7.default.shape({
        horizontal: import_prop_types7.default.oneOfType([
          import_prop_types7.default.oneOf(["center", "left", "right"]),
          import_prop_types7.default.number,
        ]).isRequired,
        vertical: import_prop_types7.default.oneOfType([
          import_prop_types7.default.oneOf(["bottom", "center", "top"]),
          import_prop_types7.default.number,
        ]).isRequired,
      }),
      /**
       * This is the position that may be used to set the position of the popover.
       * The coordinates are relative to the application's client area.
       */
      anchorPosition: import_prop_types7.default.shape({
        left: import_prop_types7.default.number.isRequired,
        top: import_prop_types7.default.number.isRequired,
      }),
      /**
       * This determines which anchor prop to refer to when setting
       * the position of the popover.
       * @default 'anchorEl'
       */
      anchorReference: import_prop_types7.default.oneOf([
        "anchorEl",
        "anchorPosition",
        "none",
      ]),
      /**
       * The content of the component.
       */
      children: import_prop_types7.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types7.default.object,
      /**
       * @ignore
       */
      className: import_prop_types7.default.string,
      /**
       * An HTML element, component instance, or function that returns either.
       * The `container` will passed to the Modal component.
       *
       * By default, it uses the body of the anchorEl's top-level document object,
       * so it's simply `document.body` most of the time.
       */
      container: import_prop_types7.default.oneOfType([
        HTMLElementType,
        import_prop_types7.default.func,
      ]),
      /**
       * Disable the scroll lock behavior.
       * @default false
       */
      disableScrollLock: import_prop_types7.default.bool,
      /**
       * The elevation of the popover.
       * @default 8
       */
      elevation: integerPropType_default,
      /**
       * Specifies how close to the edge of the window the popover can appear.
       * If null, the popover will not be constrained by the window.
       * @default 16
       */
      marginThreshold: import_prop_types7.default.number,
      /**
       * Callback fired when the component requests to be closed.
       * The `reason` parameter can optionally be used to control the response to `onClose`.
       */
      onClose: import_prop_types7.default.func,
      /**
       * If `true`, the component is shown.
       */
      open: import_prop_types7.default.bool.isRequired,
      /**
       * Props applied to the [`Paper`](/material-ui/api/paper/) element.
       *
       * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
       * @deprecated Use `slotProps.paper` instead.
       *
       * @default {}
       */
      PaperProps: import_prop_types7.default.shape({
        component: elementTypeAcceptingRef_default,
      }),
      /**
       * The extra props for the slot components.
       * You can override the existing props or add new ones.
       *
       * @default {}
       */
      slotProps: import_prop_types7.default.shape({
        paper: import_prop_types7.default.oneOfType([
          import_prop_types7.default.func,
          import_prop_types7.default.object,
        ]),
        root: import_prop_types7.default.oneOfType([
          import_prop_types7.default.func,
          import_prop_types7.default.object,
        ]),
      }),
      /**
       * The components used for each slot inside.
       *
       * @default {}
       */
      slots: import_prop_types7.default.shape({
        paper: import_prop_types7.default.elementType,
        root: import_prop_types7.default.elementType,
      }),
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types7.default.oneOfType([
        import_prop_types7.default.arrayOf(
          import_prop_types7.default.oneOfType([
            import_prop_types7.default.func,
            import_prop_types7.default.object,
            import_prop_types7.default.bool,
          ]),
        ),
        import_prop_types7.default.func,
        import_prop_types7.default.object,
      ]),
      /**
       * This is the point on the popover which
       * will attach to the anchor's origin.
       *
       * Options:
       * vertical: [top, center, bottom, x(px)];
       * horizontal: [left, center, right, x(px)].
       * @default {
       *   vertical: 'top',
       *   horizontal: 'left',
       * }
       */
      transformOrigin: import_prop_types7.default.shape({
        horizontal: import_prop_types7.default.oneOfType([
          import_prop_types7.default.oneOf(["center", "left", "right"]),
          import_prop_types7.default.number,
        ]).isRequired,
        vertical: import_prop_types7.default.oneOfType([
          import_prop_types7.default.oneOf(["bottom", "center", "top"]),
          import_prop_types7.default.number,
        ]).isRequired,
      }),
      /**
       * The component used for the transition.
       * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
       * @default Grow
       */
      TransitionComponent: import_prop_types7.default.elementType,
      /**
       * Set to 'auto' to automatically calculate transition time based on height.
       * @default 'auto'
       */
      transitionDuration: import_prop_types7.default.oneOfType([
        import_prop_types7.default.oneOf(["auto"]),
        import_prop_types7.default.number,
        import_prop_types7.default.shape({
          appear: import_prop_types7.default.number,
          enter: import_prop_types7.default.number,
          exit: import_prop_types7.default.number,
        }),
      ]),
      /**
       * Props applied to the transition element.
       * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
       * @default {}
       */
      TransitionProps: import_prop_types7.default.object,
    })
  : void 0;
var Popover_default = Popover;

// node_modules/@mui/material/Menu/Menu.js
init_styled();
init_useThemeProps();

// node_modules/@mui/material/Menu/menuClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getMenuUtilityClass(slot) {
  return generateUtilityClass("MuiMenu", slot);
}
var menuClasses = generateUtilityClasses("MuiMenu", ["root", "paper", "list"]);
var menuClasses_default = menuClasses;

// node_modules/@mui/material/Menu/Menu.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var _excluded8 = ["onEntering"];
var _excluded23 = [
  "autoFocus",
  "children",
  "className",
  "disableAutoFocusItem",
  "MenuListProps",
  "onClose",
  "open",
  "PaperProps",
  "PopoverClasses",
  "transitionDuration",
  "TransitionProps",
  "variant",
  "slots",
  "slotProps",
];
var RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right",
};
var LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left",
};
var useUtilityClasses5 = (ownerState) => {
  const { classes } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"],
    list: ["list"],
  };
  return composeClasses(slots, getMenuUtilityClass, classes);
};
var MenuRoot = styled_default(Popover_default, {
  shouldForwardProp: (prop) =>
    rootShouldForwardProp_default(prop) || prop === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (props, styles3) => styles3.root,
})({});
var MenuPaper = styled_default(PopoverPaper, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (props, styles3) => styles3.paper,
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
});
var MenuMenuList = styled_default(MenuList_default, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (props, styles3) => styles3.list,
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
});
var Menu = React8.forwardRef(function Menu2(inProps, ref) {
  var _slots$paper, _slotProps$paper;
  const props = useThemeProps({
    props: inProps,
    name: "MuiMenu",
  });
  const {
      autoFocus = true,
      children,
      className,
      disableAutoFocusItem = false,
      MenuListProps = {},
      onClose,
      open,
      PaperProps = {},
      PopoverClasses,
      transitionDuration = "auto",
      TransitionProps: { onEntering } = {},
      variant = "selectedMenu",
      slots = {},
      slotProps = {},
    } = props,
    TransitionProps = _objectWithoutPropertiesLoose(
      props.TransitionProps,
      _excluded8,
    ),
    other = _objectWithoutPropertiesLoose(props, _excluded23);
  const isRtl = useRtl();
  const ownerState = _extends({}, props, {
    autoFocus,
    disableAutoFocusItem,
    MenuListProps,
    onEntering,
    PaperProps,
    transitionDuration,
    TransitionProps,
    variant,
  });
  const classes = useUtilityClasses5(ownerState);
  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  const menuListActionsRef = React8.useRef(null);
  const handleEntering = (element, isAppearing) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, {
        direction: isRtl ? "rtl" : "ltr",
      });
    }
    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };
  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      if (onClose) {
        onClose(event, "tabKeyDown");
      }
    }
  };
  let activeItemIndex = -1;
  React8.Children.map(children, (child, index) => {
    if (!React8.isValidElement(child)) {
      return;
    }
    if (true) {
      if ((0, import_react_is2.isFragment)(child)) {
        console.error(
          [
            "MUI: The Menu component doesn't accept a Fragment as a child.",
            "Consider providing an array instead.",
          ].join("\n"),
        );
      }
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  const PaperSlot =
    (_slots$paper = slots.paper) != null ? _slots$paper : MenuPaper;
  const paperExternalSlotProps =
    (_slotProps$paper = slotProps.paper) != null
      ? _slotProps$paper
      : PaperProps;
  const rootSlotProps = useSlotProps({
    elementType: slots.root,
    externalSlotProps: slotProps.root,
    ownerState,
    className: [classes.root, className],
  });
  const paperSlotProps = useSlotProps({
    elementType: PaperSlot,
    externalSlotProps: paperExternalSlotProps,
    ownerState,
    className: classes.paper,
  });
  return (0, import_jsx_runtime10.jsx)(
    MenuRoot,
    _extends(
      {
        onClose,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: isRtl ? "right" : "left",
        },
        transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
        slots: {
          paper: PaperSlot,
          root: slots.root,
        },
        slotProps: {
          root: rootSlotProps,
          paper: paperSlotProps,
        },
        open,
        ref,
        transitionDuration,
        TransitionProps: _extends(
          {
            onEntering: handleEntering,
          },
          TransitionProps,
        ),
        ownerState,
      },
      other,
      {
        classes: PopoverClasses,
        children: (0, import_jsx_runtime10.jsx)(
          MenuMenuList,
          _extends(
            {
              onKeyDown: handleListKeyDown,
              actions: menuListActionsRef,
              autoFocus:
                autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
              autoFocusItem,
              variant,
            },
            MenuListProps,
            {
              className: clsx_default(classes.list, MenuListProps.className),
              children,
            },
          ),
        ),
      },
    ),
  );
});
true
  ? (Menu.propTypes = {
      // ┌────────────────────────────── Warning ──────────────────────────────┐
      // │ These PropTypes are generated from the TypeScript type definitions. │
      // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
      // └─────────────────────────────────────────────────────────────────────┘
      /**
       * An HTML element, or a function that returns one.
       * It's used to set the position of the menu.
       */
      anchorEl: import_prop_types8.default.oneOfType([
        HTMLElementType,
        import_prop_types8.default.func,
      ]),
      /**
       * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
       * children are not focusable. If you set this prop to `false` focus will be placed
       * on the parent modal container. This has severe accessibility implications
       * and should only be considered if you manage focus otherwise.
       * @default true
       */
      autoFocus: import_prop_types8.default.bool,
      /**
       * Menu contents, normally `MenuItem`s.
       */
      children: import_prop_types8.default.node,
      /**
       * Override or extend the styles applied to the component.
       */
      classes: import_prop_types8.default.object,
      /**
       * @ignore
       */
      className: import_prop_types8.default.string,
      /**
       * When opening the menu will not focus the active item but the `[role="menu"]`
       * unless `autoFocus` is also set to `false`. Not using the default means not
       * following WAI-ARIA authoring practices. Please be considerate about possible
       * accessibility implications.
       * @default false
       */
      disableAutoFocusItem: import_prop_types8.default.bool,
      /**
       * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
       * @default {}
       */
      MenuListProps: import_prop_types8.default.object,
      /**
       * Callback fired when the component requests to be closed.
       *
       * @param {object} event The event source of the callback.
       * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
       */
      onClose: import_prop_types8.default.func,
      /**
       * If `true`, the component is shown.
       */
      open: import_prop_types8.default.bool.isRequired,
      /**
       * @ignore
       */
      PaperProps: import_prop_types8.default.object,
      /**
       * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
       */
      PopoverClasses: import_prop_types8.default.object,
      /**
       * The extra props for the slot components.
       * You can override the existing props or add new ones.
       *
       * @default {}
       */
      slotProps: import_prop_types8.default.shape({
        paper: import_prop_types8.default.oneOfType([
          import_prop_types8.default.func,
          import_prop_types8.default.object,
        ]),
        root: import_prop_types8.default.oneOfType([
          import_prop_types8.default.func,
          import_prop_types8.default.object,
        ]),
      }),
      /**
       * The components used for each slot inside.
       *
       * @default {}
       */
      slots: import_prop_types8.default.shape({
        paper: import_prop_types8.default.elementType,
        root: import_prop_types8.default.elementType,
      }),
      /**
       * The system prop that allows defining system overrides as well as additional CSS styles.
       */
      sx: import_prop_types8.default.oneOfType([
        import_prop_types8.default.arrayOf(
          import_prop_types8.default.oneOfType([
            import_prop_types8.default.func,
            import_prop_types8.default.object,
            import_prop_types8.default.bool,
          ]),
        ),
        import_prop_types8.default.func,
        import_prop_types8.default.object,
      ]),
      /**
       * The length of the transition in `ms`, or 'auto'
       * @default 'auto'
       */
      transitionDuration: import_prop_types8.default.oneOfType([
        import_prop_types8.default.oneOf(["auto"]),
        import_prop_types8.default.number,
        import_prop_types8.default.shape({
          appear: import_prop_types8.default.number,
          enter: import_prop_types8.default.number,
          exit: import_prop_types8.default.number,
        }),
      ]),
      /**
       * Props applied to the transition element.
       * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
       * @default {}
       */
      TransitionProps: import_prop_types8.default.object,
      /**
       * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
       * @default 'selectedMenu'
       */
      variant: import_prop_types8.default.oneOf(["menu", "selectedMenu"]),
    })
  : void 0;
var Menu_default = Menu;

export {
  getListUtilityClass,
  listClasses_default,
  List_default,
  MenuList_default,
  reflow,
  getTransitionProps,
  Grow_default,
  Fade_default,
  getBackdropUtilityClass,
  backdropClasses_default,
  Backdrop_default,
  getModalUtilityClass,
  modalClasses_default,
  Modal_default,
  getPopoverUtilityClass,
  popoverClasses_default,
  getOffsetTop,
  getOffsetLeft,
  PopoverRoot,
  PopoverPaper,
  Popover_default,
  getMenuUtilityClass,
  menuClasses_default,
  Menu_default,
};
//# sourceMappingURL=chunk-B6ZFRO7G.js.map
