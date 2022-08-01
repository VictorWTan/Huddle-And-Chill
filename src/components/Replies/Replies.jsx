import { useState } from "react"

export default function Replies({ reply }) {

  const [showReplies, setShowReplies] = useState(false)

  const handleShowClick = () => {
    setShowReplies(!showReplies)
  }

  return (
    <>
      <button className='border border-slate-500 border-t-0' onClick={handleShowClick}>...</button>
    { showReplies &&
      <div className="flex flex-col justify-center self-center w-full p-5 border border-slate-500 border-t-0">
        <span>{reply.name}</span>
        <br />
        <span>{reply.content}</span>
      </div>
    } 
    </>
  )
}
