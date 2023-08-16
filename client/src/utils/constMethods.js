export function customSort(array, order) {
    try {
        if (order === "asc") {
            return array.slice().sort();
        } else if (order === "desc") {
            return array.slice().sort().reverse();
        } else {
            throw new Error("Invalid sorting order. Please use 'asc' or 'desc'.");
        }
    } catch (error) {
        console.warn("Error sorting array",error.message);
    }
    
  }