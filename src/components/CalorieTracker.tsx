import CalorieDisplay from './CalorieDisplay';
import { useActivity } from '../hooks/useActivity';

export default function CalorieTracker() {
	const { caloriesBurned, caloriesConsumed, totalCalories } = useActivity();

	return (
		<>
			<h2 className='text-4xl font-black text-white text-center'>
				Resumen de Calorias
			</h2>
			<div className='flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10'>
				<CalorieDisplay
					calories={caloriesConsumed}
					text='Consumidas'
					category={1}
				/>
				<CalorieDisplay
					calories={totalCalories}
					text='Diferencia'
				/>
				<CalorieDisplay
					calories={caloriesBurned}
					text='Quemadas'
					category={2}
				/>
			</div>
		</>
	);
}
