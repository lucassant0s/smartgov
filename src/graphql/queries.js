import gql from "graphql-tag";

const filterContract =
  (localStorage.getItem("filterContract") &&
    `&contract_id=${localStorage.getItem("filterContract")}`) ||
  " ";
const filterConsumer =
  (localStorage.getItem("filterConsumer") &&
    `&consumer_id=${localStorage.getItem("filterConsumer")}`) ||
  " ";
const filterUnit =
  (localStorage.getItem("filterUnit") &&
    `&unit_id=${localStorage.getItem("filterUnit")}`) ||
  " ";

export const GET_MAINBOX = gql`
  {
    mainbox @rest(type: "Mainbox", path: "main-box?${filterConsumer}${filterContract}${filterUnit}") {
      id
      title
      icon
      value
      pre
      pos
    }
  }
`;

export const GET_ALERTS = gql`
  {
    alerts @rest(type: "Alerts", path: "alerts") {
      id
      type
      message
      redirectTo
    }
  }
`;

export const GET_USER_ME = gql`
  {
    user {
      id
      name
      email
      rules {
        id
        name
      }
    }
  }
`;

export const GET_MODULES = gql`
  {
    readAllEquipments
  }
`;

/*
* FILTRO DE SELETORES
*/

export const GET_CONTRACTS = gql`
  {
    contracts @rest(type: "Contracts", path: "contracts") {
      id
      name
    }
  }
`;

export const GET_CONSUMERS = gql`
  query consumers($teste: String) {
    consumers @rest(type: "Consumers", path: "consumers") {
      id
      name
    }
  }
`;

export const GET_UNITS = gql`
  {
    units @rest(type: "Units", path: "units") {
      id
      name
      children
    }
  }
`;
