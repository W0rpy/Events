import { ChildrenProps } from "../models/types";
import Header from "./Header";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
   palette: {
      primary: {
         main: '#34547A',
      }
   },
   components: {
      MuiInputLabel: {
         styleOverrides: {
            root: {
               color: '#34547A',
            }
         }
      },
      MuiMenuItem: {
         styleOverrides: {
            root: {
               color: '#34547A',
            }
         }
      },
      MuiSvgIcon: {
         styleOverrides: {
            root: {
               color: '#34547A',
            }
         }
      },
      MuiOutlinedInput: {
         styleOverrides: {
            root: {
               '&:hover': {
                  '.MuiOutlinedInput-notchedOutline': {
                     borderColor: '#34547A',
                  }
               },
               '.MuiOutlinedInput-notchedOutline': {
                  borderColor: '#34547A',
                  borderWidth: '2px',
               }
            },
         },
      },
   }

})

function Layout({ children }: ChildrenProps) {
   return (
      <ThemeProvider theme={theme}>
         <Header />
         <main>{children}</main>
      </ThemeProvider>
   )
}
export default Layout;