// 'Generics' - Introduction to generic types
type FilterCallback<U> = (
  value: U,
  index?: number,
  array?: U[],
) => boolean;

export function myFilter<T>( array: T[], predicate: FilterCallback<T>): T[] {
  const newArray = [];

  for (let i=0; i < array.length; i++) {
    if (predicate(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

const array = [1 ,2 ,3, 4, 5, 6, 8, 7, 9, 10];

const arrayFilteredOriginal = array.filter((value) =>  value < 5);
console.log(arrayFilteredOriginal);

const arrayFiltered = myFilter(array, (value) =>  value < 5);
console.log(arrayFiltered);
