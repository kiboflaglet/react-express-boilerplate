import { env } from "./env"

export const logError = (error: string) => {
    if (env.NODE_ENV === 'development') {
        console.log(error)
    }
}