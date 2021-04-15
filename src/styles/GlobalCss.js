import { createStyles, withStyles } from "@material-ui/core";
import getSpacingHelpers from "../utils/getSpacingHelper";
import customTheme from "./theme";

const GlobalCss = withStyles(() =>
  createStyles({
    "@global": {
      "*": {
        margin: 0,
        padding: 0,
        transition: "all .4s",
      },
      "::-webkit-scrollbar": {
        width: 8,
        height: 8,
      },
      /* Track */
      "::-webkit-scrollbar-track": {
        background: "#F3F4FB",
      },
      /* Handle */
      "::-webkit-scrollbar-thumb": {
        background: "#dfe0e6",
        borderRadius: "8px",
      },
      /* Handle on hover */
      "::-webkit-scrollbar-thumb:hover": {
        background: "#d7d8dc",
      },
      // bootstrap like spacing helpers (mt-3, pl-5, etc...)
      ...getSpacingHelpers(customTheme),
    },
  })
)(() => null);

export default GlobalCss;
