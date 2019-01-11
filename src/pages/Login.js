import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withFormik } from "formik";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Mutation } from "react-apollo";
import { Redirect, withRouter } from "react-router-dom";
import { LOGIN_REQUEST } from "../graphql/mutations";
import Logo from "../components/Logo";
import { login } from "../auth";
import logoBackground from "../assets/logo-background.jpg";
// import Logo from '../../components/Logo';

const Wrapper = styled.div`
  max-width: 100%;
  flex-basis: 100%;

  flex: 0 0 auto;
  margin: 0;
  box-sizing: border-box;
`;

const WrapperContent = styled.div`
  padding: 24px 24px 0px;
  /* min-height: 386px; */
`;

const WrapperField = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 8px;
  margin: 0;
  border: 0;
  display: inline-flex;
  padding: 0;
  position: relative;
  min-width: 0;
  flex-direction: column;
`;

class Login extends Component {
  state = {
    redirectToReferrer: false,
    fields: {
      email: "",
      password: ""
    },
    errors: {
      email: false,
      password: false
    },
    touched: {
      email: false,
      password: false
    }
  };

  confirm = async data => {
    // console.log('data', data);
    this.setState({ redirectToReferrer: true });
    login(data.Signin);
  };

  handleChange = field => evt => {
    this.setState(
      {
        ...this.state,
        fields: { ...this.state.fields, [field]: evt.target.value }
      },
      () => {
        this.validate({
          values: this.state.fields,
          fieldName: field
        });
      }
    );
    console.log('fields', this.state.fields);
  };

  handleBlur = field => evt => {
    this.setState({
      ...this.state,
      touched: { ...this.state.touched, [field]: true }
    });
  };

  validate = ({ values, fieldName }) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Por favor, insira o email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email inválido";
    }

    if (!values.password) {
      console.log("dasdas");
      errors.password = "Por favor, insira uma senha";
    }

    this.setState({
      ...this.state,
      errors
    });
  };

  handleSubmit = evt => {
    const checkValidate = Object.keys(this.state.errors).some(
      key => this.state.errors[key]
    );
    if (!checkValidate) {
      console.log("valido");
    }
    evt.preventDefault();
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/" }
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    const { email, password } = this.state.fields;

    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(${logoBackground})`,
          backgroundSize: "cover"
        }}
      >
        <div
          style={{
            margin: "0px auto",
            textAlign: "center",
            padding: 12,
            width: "calc(100% - 24px)",
            maxWidth: 496
          }}
        >
          <Paper
            elevation={1}
            style={{ width: "calc(100% - 48px)", padding: 24, borderRadius: 6 }}
          >
            <Wrapper>{/* <Logo style={{ height: 80 }} /> */}</Wrapper>
            <Wrapper>
              <WrapperContent>
                <Logo />
                <Typography variant="headline" component="h1">
                  Entre com sua conta
                </Typography>
                <Mutation
                  mutation={LOGIN_REQUEST}
                  onCompleted={data => this.confirm(data)}
                >
                  {(Signin, { loading, error, data }) => (
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        Signin({
                          variables: {
                            email: email,
                            password: password
                          }
                        });
                      }}
                    >
                    {error && <p style={{ color: 'red' }}>Erro :( Por favor, tente novamente <br /> E-mail ou Senha invalidos!</p>}
                      <WrapperField>
                        <TextField
                          error={
                            this.state.errors.email && this.state.touched.email
                          }
                          label="Email"
                          name="email"
                          onChange={this.handleChange("email")}
                          onBlur={this.handleBlur("email")}
                          value={this.state.fields.email}
                          margin="normal"
                        />
                      </WrapperField>
                      <WrapperField>
                        <TextField
                          error={
                            this.state.errors.password &&
                            this.state.touched.password
                          }
                          label="Senha"
                          name="email"
                          onChange={this.handleChange("password")}
                          onBlur={this.handleBlur("password")}
                          type="password"
                          autoComplete="current-password"
                          margin="normal"
                          value={this.state.fields.password}
                        />
                      </WrapperField>
                      <Button
                        style={{
                          float: "right",
                          textTransform: "none",
                          padding: "7px 8px",
                          minWidth: "64px",
                          fontSize: "0.8125rem",
                          minHeight: "32px",
                          color: "#1976d2"
                        }}
                      >
                        Esqueceu sua senha?
                      </Button>
                      <Button
                        style={{
                          width: "100%",
                          marginTop: 8,
                          marginBottom: 18
                        }}
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        Entrar
                      </Button>
                    </form>
                  )}
                </Mutation>
              </WrapperContent>
            </Wrapper>
          </Paper>
          <div
            style={{
              float: "left",
              display: "inline-flex",
              position: "relative",
              fontSize: "1rem",
              lineHeight: "1.1875em"
            }}
          />
          <div style={{ color: "#1976d2", padding: "0 12px" }} />
        </div>
      </div>
    );
  }
}

export default Login;
