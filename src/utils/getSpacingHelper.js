const getSpacingHelpers = (theme) => {
  const sides = ["t", "r", "b", "l", "x", "y", ""];
  const sizes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "auto"];
  const properties = ["margin", "padding"];
  const polarities = ["", "n"];
  const classes = {};
  sides.forEach((side) =>
    sizes.forEach((size) =>
      properties.forEach((property) =>
        polarities.forEach((polarity) => {
          // auto only in margin left, right and horizontal (x)
          if (size === "auto" && (property[0] !== "m" || polarity || !side))
            return;
          // negative only in margin and size !== 0 (auto is handled in previous if)
          if (polarity === "n" && (property[0] !== "m" || size === 0)) return;
          let obj = {};
          // size 3 === theme.spacing, polarity makes number negative
          let value =
            (typeof size === "string"
              ? size
              : Math.round(size * theme.spacing()) * (polarity ? -1 : 1) +
                "px") + " !important"; // win specificity
          if (!side || side === "y" || side === "t")
            obj[property + "Top"] = value;
          if (!side || side === "x" || side === "l")
            obj[property + "Left"] = value;
          if (!side || side === "x" || side === "r")
            obj[property + "Right"] = value;
          if (!side || side === "y" || side === "b")
            obj[property + "Bottom"] = value;
          // class construction
          classes[`.${property[0]}${side}-${polarity}${size}`] = obj;
        })
      )
    )
  );
  return classes;
};

export default getSpacingHelpers;
