const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwd2Z1YXF2d2x6cnRwYXV1Z290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5Njg3MTAsImV4cCI6MTk2MzU0NDcxMH0.sUI1TaJk5GE34Q06B2tduC38-RG8NO-HoqJhGa4wrhg';

const SUPABASE_URL = 'https://cpwfuaqvwlzrtpauugot.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchXMen(query){
    if (!query){
        const response = await client
            .from('X-Men')
            .select('*');

        return response.body;
    } else {
        const response = await client
            .from('X-Men')
            .select('*')
            .ilike('alias', `%${query}%`);

        return response.body;
    }
}

export async function fetchOneXPerson(id){
    const response = await client
        .from('X-Men')
        .select('*')
        .match({ id: id })
        .single();

    return response.body;
}