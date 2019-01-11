import gql from "graphql-tag";

export const LOGIN_REQUEST = gql`
  mutation Signin($email: String, $password: String) {
    Signin(email: $email, password: $password)
  }
`;

export const EQUIPMENT_TOGGLE = gql`
  mutation equipmentToggle($id: Number, $isActive: Boolean) {
    equipmentToggle(input: { id: $id, isActive: $isActive })
      @rest(type: "EquipmentToggle", path: "equipment-toggle", method: "POST") {
      NoResponse
    }
  }
`;
