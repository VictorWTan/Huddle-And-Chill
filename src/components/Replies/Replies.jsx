export default function Replies({reply}) {
  return (
    <div className="flex flex-col justify-center self-center w-1/4 p-5 border border-black">
      <span>{reply.name}</span>
      <br />
      <span>{reply.content}</span>
    </div>
  )
}
