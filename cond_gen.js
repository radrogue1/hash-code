let workerId = uniqueId.split(':')[0];

function get_hash(key, n_conditions) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % n_conditions;
};
let condition = get_hash(workerId, 4);
