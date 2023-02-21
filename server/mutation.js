import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation LogIn($password: String!, $email: String!) {
  loginUser(email: $email, password: $password) {
    token
    user {
      username
      email
      id
    }
    wallet {
      id
      walletAddress
      privateKey
    }
  }
}
`

export const REGISTER_USER = gql`
  mutation registerUser($username: String!, $email: String!, $password: String!) {
    registerUser(username: $username, email: $email, password: $password) {
      user {
        id
        email
      }
      token
    }
  }
`

export const ADD_WALLET = gql`
  mutation addWallet($privateKey: String, $walletAddress: String) {
    addWallet(privateKey: $privateKey, walletAddress: $walletAddress) {
      wallet {
        id
        privateKey
        walletAddress
        user {
          username
          email
        }
      }
      message
    }
  }
`

export const FORGOT_PASSWORD = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email) {
      result
    }
  }
`

export const VALIDATE_TAC = gql`
  mutation validateTac($email: String, $tac: String) {
    validateTac(email: $email, tac: $tac) {
      result
      token
    }
  }
`

export const CHANGE_PASSWORD = gql`
  mutation changePassword($password: String) {
    changePassword(password: $password) {
      result
    }
  }
`
