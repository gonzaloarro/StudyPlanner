// React
import React, { useEffect } from "react";
// Redux
import { connect } from "react-redux";
// React Router
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// Actions
import { loadUser } from "../actions/auth";
// Components
import App from "../containers/App";
import Plans from "./Plans";
import LoadingScreen from "../components/utils/loading";
import Login from "../containers/Login";
import Registration from "../containers/Registration";

// Theme
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../style/theme";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.font};
  }
`;

const mapStateToProps = state => ({
  auth: state.auth,
  plans: state.plans,
  theme: state.theme
})

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(loadUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)

function Root(props) {

  const theme = props.theme.theme === "light" ? lightTheme : darkTheme;


  const loadUser = props.loadUser;

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <>
    <GlobalStyle theme={theme}/>
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/register" render={() => {
          if (props.auth.isLoading) {
            return <LoadingScreen/>
          }
          else if (!props.auth.isAuthenticated) {
            return <Registration/>
          }
          else {
            return <Redirect to="/"/>
          }
        }}
        />
        <Route
          path="/"
          render={() => {
            if (props.auth.isLoading) {
              return <LoadingScreen/>
            }
            else if (!props.auth.isAuthenticated) {
              return <Login/>
            }
            else if (!props.plans.activePlan) {
              return <Plans/>
            }
            else {
              return <App/>
            }
          }}
        />
      </Switch>
    </Router>
    </ThemeProvider>
    </>
  )
}
