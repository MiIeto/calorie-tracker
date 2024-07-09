import { Activity } from "../types";

export type ActivityActions =
	| { type: "save-activity"; payload: { newActivity: Activity } }
	| { type: "set-activeId"; payload: { id: Activity["id"] } }
	| { type: "delete-activity"; payload: { id: Activity["id"] } };

export type ActivityState = {
	activities: Activity[];
	activeId: Activity["id"];
};

export const initialState: ActivityState = {
	activities: [],
	activeId: "",
};

export const activityReducer = (
	state: ActivityState = initialState,
	action: ActivityActions
) => {
	switch (action.type) {
		case "save-activity":
			// eslint-disable-next-line no-case-declarations
			let updatedActivities: Activity[] = [];
			if (state.activeId) {
				updatedActivities = state.activities.map((activity) =>
					activity.id === state.activeId
						? action.payload.newActivity
						: activity
				);
			} else {
				updatedActivities = [
					...state.activities,
					action.payload.newActivity,
				];
			}
			return {
				...state,
				activities: updatedActivities,
				activeId: "",
			};
		case "set-activeId":
			return {
				...state,
				activeId: action.payload.id,
			};
		case "delete-activity":
			return {
				...state,
				activities: state.activities.filter(
					(activity) => activity.id !== action.payload.id
				),
			}
		default:
			return state;
	}
};
