import { z } from 'zod';
import { writable as localStorageStore } from 'svelte-local-storage-store';
import { writable } from 'svelte/store';

/* EXERCISE */
export const exerciseSchema = z.object({
  id: z.string().default(crypto.randomUUID),
  name: z.string()
});
export type TExercise = z.infer<typeof exerciseSchema>;

/* REST */
export const restSchema = z.object({
  durationSeconds: z.number().default(60)
});
export type TRest = z.infer<typeof restSchema>;

/* ROUTINE ITEM */
export const routineItemSchema = z.discriminatedUnion('type', [
  z.object({
    id: z.string().default(crypto.randomUUID),
    type: z.literal('exercise'),
    data: exerciseSchema
  }),
  z.object({
    id: z.string().default(crypto.randomUUID),
    type: z.literal('rest'),
    data: restSchema
  })
]);
export type TRoutineItem = z.infer<typeof routineItemSchema>;

/* ROUTINE */
export const routineSchema = z.object({
  id: z.string().default(crypto.randomUUID),
  items: z.array(routineItemSchema).default(Array),
  sets: z.number().default(3),
  repsPerSet: z.number().default(5)
});
export type TRoutine = z.infer<typeof routineSchema>;

/* APP STATE */
export const appStateSchema = z.object({
  drawerVisible: z.boolean().default(false)
});
export type TAppState = z.infer<typeof appStateSchema>;
export const appState = writable<TAppState>(appStateSchema.parse({}));

/* USER STATE */
export const userStateSchema = z.object({
  exercises: z.array(exerciseSchema).default(Array),
  routines: z.array(routineSchema).default(Array)
});
export type TUserState = z.infer<typeof userStateSchema>;
export const userState = localStorageStore<TUserState>('user-state', userStateSchema.parse({}));
