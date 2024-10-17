import { UserRole } from "@prisma/client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

export function withAuth(WrappedComponent: React.ComponentType, allowedRoles: UserRole[]) {
  return function WithAuth(props: any) {
    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === "loading") {
      return <div>Loading...</div>
    }

    if (!session) {
      router.push("/auth/signin")
      return null
    }

    if (!allowedRoles.includes(session.user.role as UserRole)) {
      router.push("/unauthorized")
      return null
    }

    return <WrappedComponent {...props} />
  }
}