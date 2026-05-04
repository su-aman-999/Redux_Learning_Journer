import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const todoApi = createApi({
    reducerPath: 'todoApi',

    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),

    //*Tags: Tags RTK Query me automatic data refresh ka system hai.
    //?tagTypes: define karta hai kaun-kaun se tags use honge (allowed labels list)
    tagTypes: ['Tasks'],

    endpoints: (builder) => ({

        getTasks: builder.query({
            query: () => `tasks`,

            transformResponse: (tasks) => [...tasks].reverse(),

            //?providesTags → batata hai query ne kaunsa data/tag provide (cache me store) kiya
            providesTags: ['Tasks']
        }),

        addTask: builder.mutation({
            query: (task) => ({
                url: 'tasks',
                method: "POST",
                body: task
            }),

            //?invalidatesTags → batata hai kaunsa tag outdated hai, jisse RTK Query refetch trigger karta hai
            invalidatesTags: ['Tasks'],

            //?🔥 Optimistic Update
            async onQueryStarted(task, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    todoApi.util.updateQueryData("getTasks", undefined, (draft) => {
                        draft.unshift({ id: crypto.randomUUID(), ...task });
                    })
                )

                try {
                    await queryFulfilled;
                }
                catch {
                    patchResult.undo();
                }
            }

        }),

        updateTask: builder.mutation({
            query: ({ id, ...updatedTask }) => ({
                url: `tasks/${id}`,
                method: "PATCH",
                body: updatedTask
            }),

            invalidatesTags: ['Tasks'],


            //?🔥 Optimistic Update
            async onQueryStarted({ id, ...updatedTask }, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    todoApi.util.updateQueryData("getTasks", undefined, (draft) => {

                        const taskIndex = draft.findIndex((el) => el.id === id)

                        draft[taskIndex] = { ...draft[taskIndex], ...updatedTask }
                    })
                )

                try {
                    await queryFulfilled;
                }
                catch {
                    patchResult.undo();
                }
            }

        }),

        deleteTask: builder.mutation({
            query: (id) => ({
                url: `tasks/${id}`,
                method: "DELETE",
            }),

            invalidatesTags: ['Tasks'],



            //?🔥 Optimistic Update
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    todoApi.util.updateQueryData("getTasks", undefined, (draft) => {

                        const taskIndex = draft.findIndex((el) => el.id === id)

                        if (taskIndex !== -1)
                            draft.splice(taskIndex, 1)
                    })
                )

                try {
                    await queryFulfilled;
                }
                catch {
                    patchResult.undo();
                }
            }
        }),

    })
})

export default todoApi;

export const {
    useGetTasksQuery,
    useAddTaskMutation,
    useDeleteTaskMutation,
    useUpdateTaskMutation
} = todoApi