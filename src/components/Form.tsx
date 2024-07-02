import { useState, ChangeEvent, FormEvent } from "react";
import { Activity } from "../types";
import { categories } from "../data/categories";

export default function Form() {
	const [activity, setActivity] = useState<Activity>({
		category: 1,
		name: "",
		calories: 0,
	});

	const handleChange = (
		e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
	) => {
		const isNumberField = ["category", "calories"].includes(e.target.id);

		setActivity({
			...activity,
			[e.target.id]: isNumberField ? +e.target.value : e.target.value,
		});
	};

	const isValidActivity = () => {
		const { name, calories } = activity;
		return name.trim() !== "" && calories > 0;
	};

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }

	return (
		<form className="space-y-5 bg-white shadow p-10 rounded-lg">
			<div className="grid grid-cols-1 gap-3">
				<label htmlFor="category" className="font-bold">
					Categoria:
				</label>
				<select
					id="category"
					value={activity.category}
					className="border border-slate-300 p-2 rounded-lg w-full bg-white"
					onChange={handleChange}
				>
					{categories.map((category) => (
						<option key={category.id} value={category.id}>
							{category.name}
						</option>
					))}
				</select>
			</div>

			<div className="grid grid-cols-1 gap-3">
				<label htmlFor="name" className="font-bold">
					Actividad:
				</label>
				<input
					id="name"
					type="text"
					value={activity.name}
					className="border border-slate-300 p-2 rounded-lg"
					placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
					onChange={handleChange}
				/>
			</div>

			<div className="grid grid-cols-1 gap-3">
				<label htmlFor="calories" className="font-bold">
					Calorias:
				</label>
				<input
					id="calories"
					type="number"
					value={activity.calories}
					className="border border-slate-300 p-2 rounded-lg"
					placeholder="Calorias. Ej. 300 o 500"
					onChange={handleChange}
				/>
			</div>
			<input
				type="submit"
				value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
				className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10 disabled:cursor-default"
				disabled={!isValidActivity()}
                onSubmit={() => handleSubmit}
			/>
		</form>
	);
}
