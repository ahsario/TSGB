type TTodo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export const getTodosByCount = async (count: number): Promise<TTodo[]> => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const todos: TTodo[] = await result.json();
  todos.length = count;
  return todos;
};
