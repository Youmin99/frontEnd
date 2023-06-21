import { gql } from '@apollo/client'

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment(
    $boardId: ID!
    $createBoardCommentInput: createBoardCommentInput!)
    {
    createBoardComment(
      boardId: $boardId, 
      createBoardCommentInput: $createBoardCommentInput)
    {
      _id
    }
  }
`
