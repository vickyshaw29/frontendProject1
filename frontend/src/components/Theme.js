import { createMuiTheme } from '@material-ui/core/styles'
const arcPurple="#fff"
const arcOrange="#e53935"
const arcWhite="#0d47a1"
export default createMuiTheme({
    palette: {
      primary: {
        main: `${arcPurple}`,
      },
      secondary: {
        main: `${arcOrange}`,
      },
      background:{
        paper:`${arcWhite}`
    }
    },
    typography:{
      h4:{
        fontWeight:"300"
      },
      h1:{
        fontWeight:"300"
      }
    },
  });