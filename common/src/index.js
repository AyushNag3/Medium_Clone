import z from 'zod';
export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
});
export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
});
export const updateblog = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
});
export const createblogInput = z.object({
    title: z.string(),
    content: z.string(),
});
