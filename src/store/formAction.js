export const BASIC = 'BASIC'

export const WORK = 'WORK'

export const EDUCATION = 'EDUCATION'

export const SKILLS = 'SKILLS'

export const basic = (payload) => ({
    type: BASIC,
    payload
})

export const work = (payload) => ({
    type: WORK,
    payload
})

export const education = (payload) => ({
    type: EDUCATION,
    payload
})

export const skills = (payload) => ({
    type: SKILLS,
    payload
})