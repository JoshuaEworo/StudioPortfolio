import { fail, redirect, type Load } from '@sveltejs/kit'
import { AuthApiError } from '@supabase/supabase-js'

export const actions = {
  signin: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      if (error instanceof AuthApiError && error.status === 400) {
        return fail(400, {
          error: 'Invalid credentials.',
          values: {
            email,
          },
        })
      }
      return fail(500, {
        error: 'Server error. Try again later.',
        values: {
          email,
        },
      })
    }

    console.log("THAT SHIT SIGNED ME IN")
    throw redirect(303, '/admin')
  },

  signout: async ({ locals: { supabase } }) => {
    await supabase.auth.signOut()
    console.log("THAT SHIT SIGNED ME OUT")
    throw redirect(303, '/login')
  },
}