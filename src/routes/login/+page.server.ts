import { redirect } from '@sveltejs/kit'

import type { Actions } from './$types'

export const actions: Actions = {

  login: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      console.error(error)
      throw redirect(303, '/login/error')
    } else {
      console.log("THAT SHIT SIGNED ME IN")
      throw redirect(303, '/admin')
    }
  },


  logout: async ({ locals: { supabase } }) => {
    await supabase.auth.signOut()
    console.log("THAT SHIT SIGNED ME OUT")
    throw redirect(303, '/login')
  },
}