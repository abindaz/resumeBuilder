import { BASIC, EDUCATION, SKILLS, WORK } from "./formAction";

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    education: [],
    work: [],
    skills: []
}
const reducers = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case BASIC:
            return {
                ...state,
                firstName: payload.fName,
                lastName: payload.lName,
                email: payload.email,
                phone: payload.phone,
                address: payload.address,
            }

        case WORK:
            return {
                ...state,
                work: [...payload],
            }

        case EDUCATION:
            return {
                ...state,
                education: payload,
            }

        case SKILLS:
            return {
                ...state,
                skills: payload,
            }

        default:
            return state
    }
}

export const selectData = (state) => state.data;

export default reducers;
