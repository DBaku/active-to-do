import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const categories = [
    "Haushalt",
    "Termine",
    "Wohnen",
    "Einkaufen",
    "Zu erledigen",
    "Geplant",
    "Arbeit & Job",
    "Kunst",
];

export default function Projektboard() {
    const [tasks, setTasks] = useState({});
    const [newTasks, setNewTasks] = useState({});

    const handleAddTask = (category) => {
        if (!newTasks[category]) return;
        const updated = { ...tasks };
        const id = Date.now();
        if (!updated[category]) updated[category] = [];
        updated[category].push({ id, title: newTasks[category], subtasks: [], done: false });
        setTasks(updated);
        setNewTasks({ ...newTasks, [category]: "" });
    };

    const handleAddSubtask = (category, taskId, subtask) => {
        const updated = { ...tasks };
        const task = updated[category].find((t) => t.id === taskId);
        if (task && subtask) {
            task.subtasks.push({ id: Date.now(), title: subtask, done: false });
            setTasks(updated);
        }
    };

    const toggleDone = (category, taskId, subId = null) => {
        const updated = { ...tasks };
        const task = updated[category].find((t) => t.id === taskId);
        if (task) {
            if (subId === null) {
                task.done = !task.done;
            } else {
                const sub = task.subtasks.find((s) => s.id === subId);
                if (sub) sub.done = !sub.done;
            }
            setTasks(updated);
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {categories.map((cat) => (
                <Card key={cat} className="bg-white shadow-md rounded-2xl p-4">
                    <CardContent>
                        <h2 className="text-xl font-bold mb-2">{cat}</h2>
                        <div className="flex gap-2 mb-4">
                            <Input
                                placeholder="Neue Aufgabe"
                                value={newTasks[cat] || ""}
                                onChange={(e) =>
                                    setNewTasks({ ...newTasks, [cat]: e.target.value })
                                }
                            />
                            <Button onClick={() => handleAddTask(cat)}>+</Button>
                        </div>
                        {tasks[cat]?.map((task) => (
                            <div key={task.id} className="mb-2">
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        checked={task.done}
                                        onCheckedChange={() => toggleDone(cat, task.id)}
                                    />
                                    <span className={task.done ? "line-through" : ""}>
                                        {task.title}
                                    </span>
                                </div>
                                <div className="ml-6 mt-1">
                                    {task.subtasks.map((sub) => (
                                        <div key={sub.id} className="flex items-center gap-2">
                                            <Checkbox
                                                checked={sub.done}
                                                onCheckedChange={() =>
                                                    toggleDone(cat, task.id, sub.id)
                                                }
                                            />
                                            <span className={sub.done ? "line-through" : ""}>
                                                {sub.title}
                                            </span>
                                        </div>
                                    ))}
                                    <div className="flex gap-2 mt-1">
                                        <Input
                                            placeholder="Unteraufgabe hinzufügen"
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    handleAddSubtask(cat, task.id, e.target.value);
                                                    e.target.value = "";
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
