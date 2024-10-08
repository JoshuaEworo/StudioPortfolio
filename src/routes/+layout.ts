import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr'
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async ({ url, data, depends, fetch }) => {
  /**
   * Declare a dependency so the layout can be invalidated, for example, on
   * session refresh.
   */
  depends('supabase:auth')

  const supabase = isBrowser()
    ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
      })
    : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
        cookies: {
          getAll() {
            return data.cookies
          },
        },
      })

  /**
   * It's fine to use `getSession` here, because on the client, `getSession` is
   * safe, and on the server, it reads `session` from the `LayoutData`, which
   * safely checked the session using `safeGetSession`.
   */
  const {
    data: { session },
  } = await supabase.auth.getSession()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return { session, supabase, user, url: url.pathname,
    projects: [
			      { 
                name : "Delta AI",
                type : "AI System | Desktop App Development",
                img : "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                link: "/"
            },
            { 
              name : "Pantrack",
              type : "AI Web App Development",
              img : "https://images.unsplash.com/photo-1715443973614-0a1435ab54fa?q=80&w=2800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              link: "https://pantrack-ten.vercel.app/"
            },
            { 
                name : "Mind Palace",
                type : "Web App Development",
                img : "https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                link: "https://github.com/TeamTenacity01/Mind-Palace"
            },
            { 
                name : "Aero Maestro",
                type : "Web App Development | AI System",
                img : "https://images.unsplash.com/photo-1692029861107-991b13db6ad0?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                link: "https://devpost.com/software/aeromaestro"
            },
            { 
                name : "ClientSide",
                type : "Web App Development",
                img : "https://images.unsplash.com/photo-1691458591407-2690397eb5f3?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                link: "https://joshuaeworo.github.io/React-CRM-App/"
            },
            { 
                name : "Otto's Arena",
                type : "C++ Program | Game Development",
                img : "https://images.unsplash.com/photo-1525711857929-4272fb4a040f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                link: "https://replit.com/@JoshuaEworo1/OttosArenaRPG"
            },
        ]
  }
}