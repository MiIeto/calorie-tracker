import { useMemo } from "react";
import { Activity } from "../types";
import CalorieDisplay from "./CalorieDisplay";

type CalorieTrackerProps = {
	activities: Activity[];
};

export default function CalorieTracker({ activities }: CalorieTrackerProps) {
	//Contadores
	const caloriesConsumed = useMemo(
		() =>
			activities.reduce(
				(total, activity) =>
					activity.category === 1 ? total + activity.calories : total,
				0
			),
		[activities]
	);

	const caloriesBurned = useMemo(
		() =>
			activities.reduce(
				(total, activity) =>
					activity.category === 2 ? total + activity.calories : total,
				0
			),
		[activities]
	);

	const totalCalories = useMemo(
		() => caloriesConsumed - caloriesBurned,
		[activities]
	);

	const difference = totalCalories > 0 ? true : false;

	return (
		<>
			<h2 className="text-4xl font-black text-white text-center">
				Resumen de Calorias
			</h2>
			<div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
				<CalorieDisplay
					calories={caloriesConsumed}
					text="Consumidas"
					category={1}
				/>
				<CalorieDisplay
					calories={totalCalories}
					text="Diferencia"
					difference={difference}
				/>
				<CalorieDisplay
					calories={caloriesBurned}
					text="Quemadas"
					category={2}
				/>
			</div>
		</>
	);
}
