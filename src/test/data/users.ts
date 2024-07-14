import { NewUser, User } from "../../type/User"

const user1: User = {
    id: 1,
    email: "kien@gmail.com",
    name: "kien",
    password: "kien",
    avatar: "",
    role: "admin"
}

const user2: User = {
    id: 2,
    email: "truong@gmail.com",
    name: "truong",
    password: "truong",
    avatar: "",
    role: "customer"
}

const user3: User = {
    id: 3,
    email: "sherif@gmail.com",
    name: "sherif",
    password: "sherif",
    avatar: "",
    role: "admin"
}


export const users = [user1, user2, user3]
export { user1, user2, user3} 