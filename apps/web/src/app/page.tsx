"use client";

import { useEffect, useState } from "react";

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

const fetchTasks = async () => {
  const res = await fetch(`${API_URL}/tasks`);
  const data = await res.json();
  setTasks(Array.isArray(data) ? data : []);
};

  const createTask = async () => {
    if (!title.trim()) return;

    await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (id: string, completed: boolean) => {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !completed }),
    });

    fetchTasks();
  };

  const deleteTask = async (id: string) => {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
    });

    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <main style={{ maxWidth: "700px", margin: "40px auto", fontFamily: "Arial" }}>
      <h1>Task Checklist App</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Write a task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ flex: 1, padding: "10px" }}
        />
        <button onClick={createTask} style={{ padding: "10px 16px" }}>
          Add Task
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px",
              border: "1px solid #ccc",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.title}
            </span>

            <div style={{ display: "flex", gap: "8px" }}>
              <button onClick={() => toggleTask(task.id, task.completed)}>
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
 }