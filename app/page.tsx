"use client"

import { useState } from "react";
// import { Todo } from "./component/Todo";
// import TodoList from "./component/TodoList";

export default function Home() {

	interface Todo {
		value : string
	}

	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodo = () => {
		if (todo) {
			setTodos([...todos, { value: todo }])
			setTodo('');
			console.log("todo = ", todo);
			console.log("todos = ", todos);
		}
	}

	const deleteTodo = () => {
	}

	return (
		<div className="w-1/2 mt-20 ">
			<div className="text-center rounded-lg text-4xl bg-blue-600 text-white p-3">
				Todo list app
			</div>
			<div className="text-center rounded-lg justify-around mt-10">
				<input type="text"
					value={todo}
					onChange={(event) => setTodo(event.target.value)}
					placeholder="할 일을 추가하세요."
					className="py-1 px-1 w-5/6 text-center rounded-lg bg-gray-100" />
				<button className="text-white bg-blue-600 hover:bg-blue-800 py-1 px-2 w-1/6 rounded-lg"
					onClick={() => addTodo()}>
					추가
				</button>
			</div>
			<div className="mt-5 bg-gray-100 rounded-lg">
				<div className="flex justify-around text-black mt-5 h-10 border-b-2 border-gray-200">
					<div className="w-5/6 text-center content-center">목록</div>
					<div className="w-1/6 text-center content-center">비고</div>
				</div>
				{
					todos.map((todos, i) => (
						<div className="rounded-lg flex justify-around h-10">
							<div className="w-5/6 text-center content-center">{i}{todos.value}</div>
							<div className="w-1/6 flex justify-around content-center">
								<button>수정</button>
								<button
								onClick={() => deleteTodo()}
								>
									삭제
								</button>
							</div>
						</div>
					))}
				{/* <TodoList /> */}
			</div>
		</div>
	);
}
