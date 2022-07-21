import React from 'react'
import { CommentSection} from 'react-comments-section'
import 'react-comments-section/dist/index.css'

const Discussion = () => {
  const data =[
    {
      userId: '02b',
      comId: '017',
      fullName: 'Josh',
      userProfile: '',
      text: 'I think you have a point🤔',
      avatarUrl: 'https://ui-avatars.com/api/name=Lily&background=random',
      replies: []
    }
  ]
  return <CommentSection
        currentUser={{
          currentUserId: '',
          currentUserImg:
            '',
          currentUserProfile:
            '',
          currentUserFullName: 'Strange'
        }}
        commentData={data}
      />
}

export default Discussion