'use server';

import { revalidatePath } from 'next/cache';

import { connectToDatabase } from '../_database';

import TodoModel, { ITodo } from '../_database/models/todo.model';

export async function createTodo(formData: FormData) {
  const input = formData.get('input') as string;

  try {
    await connectToDatabase();

    const newTodo = await TodoModel.create({ title: input });
  } catch (error) {
    console.error('Error creating todo', error);
  }

  revalidatePath('/');
}

export async function todoStatus(formData: FormData) {
  const inputId = formData.get('inputId') as string;

  try {
    await connectToDatabase();

    const todo = await TodoModel.findById(inputId);

    if (!todo) {
      return;
    }

    todo.isCompleted = !todo.isCompleted;
    await todo.save();

    revalidatePath('/');

    return todo.isCompleted;
  } catch (error) {
    console.error('Error changing status:', error);
  }
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get('inputId') as string;

  try {
    await connectToDatabase();

    await TodoModel.findByIdAndDelete(inputId);

    revalidatePath('/');
  } catch (error) {
    console.error('Error deleting', error);
  }
}

export async function getAllTodos(query?: string) {
  try {
    await connectToDatabase();

    const searchCriteria = query
      ? { title: { $regex: query, $options: 'i' } } // Case-insensitive search
      : {};

    const data = await TodoModel.find(searchCriteria)
      .select('title id isCompleted')
      .sort({ createdAt: 'desc' })
      .exec();

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export async function getStatus(isCompleted: boolean, query?: string) {
  try {
    await connectToDatabase();

    const searchCriteria = query
      ? { title: { $regex: query, $options: 'i' } } // Case-insensitive search
      : {};

    const todos = await TodoModel.find({ ...searchCriteria, isCompleted })
      .select('title id isCompleted')
      .sort({ createdAt: 'desc' })
      .exec();

    return todos;
  } catch (error) {
    console.error('Error fetching todos by completion status:', error);
  }
}
