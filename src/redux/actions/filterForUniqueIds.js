export default function filterForUniqueIds(array) {
    let unique = {};
    for (let id of array) {
      unique[id] = id;
    }
    return Object.values(unique);
}