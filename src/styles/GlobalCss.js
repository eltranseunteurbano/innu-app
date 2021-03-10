import { createStyles, withStyles } from "@material-ui/core";
import getSpacingHelpers from "../utils/getSpacingHelper";
import customTheme from "./theme";

const GlobalCss = withStyles(() =>
  createStyles({
    "@global": {
      "*": {
        margin: 0,
        padding: 0,
      },
      // bootstrap like spacing helpers (mt-3, pl-5, etc...)
      ...getSpacingHelpers(customTheme),
    },
  })
)(() => null);

export default GlobalCss;
