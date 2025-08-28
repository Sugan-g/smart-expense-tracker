//utility functions for localstorage
export const saveExpenses = (expenses) => {
    try {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    } catch (error) {
        console.error("Error savings expense:", error);
    }
}

export const loadExpenses = () => {
    try {
        const data = localStorage.getItem("expenses");
        if (!data || data === 'undefined') {
            return [];
        }
        return JSON.parse(data);
    } catch (error) {
        console.error("Error loading expense:", error);
        return [];

    }

}