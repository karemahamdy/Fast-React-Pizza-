import { useSelector } from "react-redux"

function User() {
const username = useSelector((state) => state.user.username)
  return (
    <>
     <h1 className="font-semibold ">{username}</h1>
    </>
  )
}
export default User