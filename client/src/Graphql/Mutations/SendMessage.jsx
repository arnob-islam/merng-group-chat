import { gql } from '@apollo/client';

export const GET_ALL_MESSEGE = gql`
mutation($input: MessageInput) {
  sendMessage(input: $input)
}
`
