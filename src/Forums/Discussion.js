import React from 'react'
import { CommentSection} from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import user from './profile-pic.png'

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
          currentUserId: 'under',
          currentUserImg:
            {user},
          currentUserProfile: "https://www.linkedin.com/in/alfred-genadri-3375651b9/",
          currentUserFullName: 'Captain Underpants'
        }}
        commentData={data}
      />
}

export default Discussion