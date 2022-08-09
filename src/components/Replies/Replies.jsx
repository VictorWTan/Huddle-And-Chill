import { useState } from "react"

export default function Replies({ reply }) {

  return (
    <>
      <div className="flex flex-col justify-center self-center w-full p-5 border border-slate-500 border-t-0">
        <span>{reply.name}</span>
        <br />
        <span>{reply.content}</span>
      </div>
    </>
  )
}
