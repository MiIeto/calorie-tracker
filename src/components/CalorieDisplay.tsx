import { useActivity } from '../hooks/useActivity';

type CalorieDisplayProps = {
	calories: number;
	text: string;
	category?: number;
};
export default function CalorieDisplay({
	calories,
	text,
	category,
}: CalorieDisplayProps) {
	const { difference } = useActivity();
	const textColor = (): boolean => {
		if (category === 1) {
			return !!difference;
		} else {
			return !difference;
		}
	};
	return (
		<p className='text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center'>
			<span
				className={`font-black text-6xl ${
					textColor() ? 'text-orange-500' : 'text-green-500'
				}`}
			>
				{calories}
			</span>
			{text}
		</p>
	);
}
