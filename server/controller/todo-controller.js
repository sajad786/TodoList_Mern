import Todo from '../modal/Todo.js'

export const addTodo = async (request, response) => {
    try {
        const newTodo = await Todo.create({
            data: request.body.data,
            createdAt: Date.now()
        })
        await newTodo.save()
       return response.status(200).json(newTodo)
    } catch (error) {
        return response.status(500).json(error.message)
    }
}

export const getAllTodos = async (request, response) => {
    try {
        const todos =   await Todo.find({}).sort({'createdAt': -1})
       return response.status(200).json(todos)
    } catch (error) {
        return response.status(500).json(error.message)
    }
}
 
export const toggleTodoDone = async (request, response) => {
    try {
          const todoRef =  await Todo.findById(request.params.id)
           const todo = await Todo.findByIdAndUpdate(
                {_id:request.params.id },
                { done: !todoRef.done}
            ) 
        await todo.save()
       return response.status(200).json(todo)
    } catch (error) {
        return response.status(500).json(error.message)
    }
}

export const updateTodo = async (request, response) => { 
    try {
            await Todo.findOneAndUpdate(
                {_id:request.params.id },
                { data: request.body.data}
            ) 
            const todo = await Todo.findById(request.params.id);
        // await todo.save()
       return response.status(200).json(todo)
    } catch (error) {
        return response.status(500).json(error.message)
    }
}

export const deleteTodo = async (request, response) => { 
    console.log('Received request to delete todo with ID:', request.params.id);
    try {
           const todo =  await Todo.findByIdAndDelete(request.params.id) 
       return response.status(200).json(todo)
    } catch (error) {
        return response.status(500).json(error.message)
    }
} 


// export const deleteTodo = async (request, response) => { 
//     console.log('Received request to delete todo with ID:', request.params.id);

//     try {
       
//         const todo = await Todo.findByIdAndDelete(request.params.id);
//         if (!todo) {
//             return response.status(404).json({ error: 'Todo not found' });
//         }
//         console.log('Successfully deleted todo:', todo);
//         return response.status(200).json(todo);
//     } catch (error) {
//         console.error('Error while deleting todo:', error);
//         return response.status(500).json(error.message);
//     }
// }
