export default function SinglePost({ post, user}) {
    return (
        <>
            <span>
                {post.name}
            </span>
            <br />
            <div>
                {post.content}
            </div>
            <br />
            <button>Edit</button>
            <br />
        </>
    )
}
