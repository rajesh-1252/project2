import {UnAuthticatedError} from "../errors/unauthenticated.js"

const checkPermissions = (requestUser, resourceUserId) => {
    if(requestUser.userId === resourceUserId.toString()) return

    throw new UnAuthticatedError('Not authorized to access this route')
}

export default checkPermissions
