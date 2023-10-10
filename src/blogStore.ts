import { writable } from 'svelte/store';
import { supabase } from '$lib/supabase';

interface Blog {
    id: string;
    title: string;
    description: string;
    content: string; 
    header_image: string;
    created_at: string;
    published: boolean;
}

async function fetchAllBlogs(): Promise<Blog[]> {
    const { data, error } = await supabase
        .from('blogs')
        .select('id, title, description, content, header_image, created_at, published')
        .order('created_at', { ascending: false });
  
    // console.log("Here are the articles", {data})
    
    if (error) {
        console.error('Error fetching all blogs:', error);
        throw new Error('Failed to fetch all blogs');
    }
  
    return data;
}

export const blogStore = writable<Blog[]>([], () => {
    fetchAllBlogs().then((data) => {
      blogStore.set(data);
    });
  
    // Return a function to stop the initial subscription
    return () => {};
  });