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


export const updateBlog = async (id: string, content: string) => {
    try {
        const { data, error } = await supabase
            .from('blogs')
            .update({ content })
            .eq('id', id)
            .select();

        if (error) {
            throw error;
        } else {
            console.log(data);
            // Assuming data contains the updated blog, you can update your store
            blogStore.update(blogs => blogs.map(blog => blog.id === id ? data[0] : blog));
        }

        console.log(`Blog post with ID ${id} content updated successfully.`);
    } catch (error) {
        console.error('Error updating blog content:', error);
    }
}

export const deleteBlog = async (id: string) => {
    try {
        const { data, error } = await supabase
            .from('blogs')
            .delete()
            .eq('id', id);

        if (error) {
            throw error;
        } else {
            console.log(data);
            // Assuming data contains the updated blog, you can update your store
            blogStore.update(blogs => blogs.filter(blog => blog.id !== id));
        }

        console.log(`Blog post with ID ${id} content updated successfully.`);
    } catch (error) {
        console.error('Error updating blog content:', error);
    }
}

export const createBlog = async (id: string, title: string, description: string, headerImg: string = "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg") => {
    try {
        const { data, error } = await supabase
            .from('blogs')
            .upsert([
                {
                    id: id,
                    title: title,
                    description: description,
                    content: "### " + title,
                    header_image: headerImg,
                    created_at: new Date().toISOString(),
                    published: false
                }
            ])
            .select();

        if (error) {
            throw error;
        } else {
            if (data) {
                console.log(data);
                const createdBlog = data[0];
                console.log(createdBlog);
                // Assuming data contains the newly created blog, you can update your store
                blogStore.update(blogs => [...blogs, createdBlog]);
            }
        }

        console.log(`New blog post created successfully.`);
    } catch (error) {
        console.error('Error creating blog post:', error);
    }
}



export const editBlog = async (id: string, title: string, description: string, imgLink: string, published: boolean) => {
    try {
        const { data, error } = await supabase
            .from('blogs')
            .update({ title: title, description: description, header_image: imgLink, published: published})
            .eq('id', id)
            .select();

        if (error) {
            throw error;
        } else {
            console.log(data);
            // Assuming data contains the updated blog, you can update your store
            blogStore.update(blogs => blogs.map(blog => blog.id === id ? data[0] : blog));
        }

        console.log(`Blog post with ID ${id} content updated successfully.`);
    } catch (error) {
        console.error('Error updating blog content:', error);
    }
}