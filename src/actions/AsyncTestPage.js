export const increment = (delta = 1) => ({
    type: 'INCREMENT',
    payload: {
        delta
    }
});

export const incrementAsync = (defaultDelta = 1) => ({
    type: 'INCREMENT_ASYNC',
    payload: {
        defaultDelta
    }
});

export const decrement = (delta = 1) => ({
    type: 'DECREMENT',
    payload: {
        delta
    }
});

