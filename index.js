// // Code your solution here

function findMatching (array, target) { 
    return array.filter(name => name.toLowerCase() === target.toLowerCase());
}

function fuzzyMatch (array, target) {
    return array.filter(name => name.toLowerCase().slice(0,target.length) === target.toLowerCase());
}

function matchName (obj, target) { 
    return obj.filter(element => element.name.toLowerCase() === target.toLowerCase());
}