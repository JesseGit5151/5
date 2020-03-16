//01
// let movies = ['die hard', 'lord of the rings', 'harry potter', 'pirates of the caribean', 'fast and furious'];
// console.log(movies[1]);

//02
// let movies = new Array(5);
// movies[0] = 'die hard';
// movies[1] = 'lord of the rings';
// movies[2] = 'harry potter';
// movies[3] = 'pirates of the caribean';
// movies[4] = 'fast and furious';
// console.log(movies[0]);

//03
// let movies = new Array(5);
// movies[0] = 'die hard';
// movies[1] = 'lord of the rings';
// movies[2] = 'harry potter';
// movies[3] = 'pirates of the caribean';
// movies[4] = 'fast and furious';
// movies[5] = 'new movie';
// console.log(movies.length);

//04
// let movies = ['die hard', 'lord of the rings', 'harry potter', 'pirates of the caribean', 'fast and furious']
// delete movies[0];
// console.log(movies);

//05
// let movies = ['die hard', 'lord of the rings', 'harry potter', 'pirates of the caribean', 'fast and furious','shawshank', 'bubble boy'];

// for(let i = 0; i < movies.length; i++) {
//     console.log(movies[i])
// }

//06
// let movies = ['die hard', 'lord of the rings', 'harry potter', 'pirates of the caribean', 'fast and furious','shawshank', 'bubble boy'];

// for(movie in movies) {
//     console.log(movies[movie])
// }

//07
// let movies = ['die hard', 'lord of the rings', 'harry potter', 'pirates of the caribean', 'fast and furious','shawshank', 'bubble boy'];

// for(let i = 0; i < movies.length; i++) {
//     movies.sort();
//     console.log(movies[i])
// }

//08
// let movies = ['die hard', 'lord of the rings', 'harry potter', 'pirates of the caribean', 'fast and furious','shawshank', 'bubble boy'];

// let leastFavMovies = [ 'harry potter', 'pirates of the caribean', 'fast and furious'];

// console.log('Movies I like:')
// console.log(' ');

// for(let i = 0; i < movies.length; i++) {
//     console.log(movies[i])
// }
// console.log(' ');
// console.log('Movies I dislike:')
// console.log(' ');

// for(let j = 0; j < leastFavMovies.length; j++) {
//     console.log(leastFavMovies[j])
// }

//09
// let favMovies = ['die hard', 'lord of the rings', 'harry potter', 'pirates of the caribean', 'fast and furious','shawshank', 'bubble boy'];

// let leastFavMovies = [ 'harry potter', 'pirates of the caribean', 'fast and furious'];


// let movies = favMovies.concat(leastFavMovies);
// movies.sort().reverse();
// console.log(movies.join('\n'));

//10
// let favMovies = ['die hard', 'lord of the rings', 'harry potter', 'pirates of the caribean', 'fast and furious','shawshank', 'bubble boy'];

// let leastFavMovies = [ 'harry potter', 'pirates of the caribean', 'fast and furious'];


// let movies = favMovies.concat(leastFavMovies);
// movies.sort().reverse();
// console.log(movies.join('\n'));
// console.log(' ');
// let lastItem = movies.pop();
// console.log('This is the last item in the array: ' + lastItem);

//11
// let favMovies = ['die hard', 'lord of the rings', 'harry potter', 'pirates of the caribean', 'fast and furious','shawshank', 'bubble boy'];

// let leastFavMovies = [ 'harry potter', 'pirates of the caribean', 'fast and furious'];


// let movies = favMovies.concat(leastFavMovies);
// movies.sort().reverse();
// console.log(movies.join('\n'));
// console.log(' ');
// let firstItem = movies.shift();
// console.log('This is the first item in the array: ' + firstItem);

//12(See if you can do this with the filter method)
// let favMovies = ['die hard', 'lord of the rings', 'friday night lights', 'deep blue sea', 'tarzan','shawshank', 'bubble boy'];

// let leastFavMovies = [ 'harry potter', 'pirates of the caribean', 'fast and furious'];

// let movies = favMovies.concat(leastFavMovies);
// movies.sort();

// for(movie in movies) {
    
// for(i in leastFavMovies) {
//     if(movies[movie] === leastFavMovies[i]) {
//         console.log(movies.pop(movie));
//     }
// }
// }
// movies.push('Terminator', 'speed');
// console.log(movies);

//13
// let employee1 = [];
// employee1["id"] = 1001;
// employee1["name"] = "Jesse Rodriguez";
// employee1["title"] = "Web Developer";
// employee1["department"] = "Engineering";
// employee1["isCurrent"] = true;


// let employee2 = [];
// employee2["id"] = 1002;
// employee2["name"] = "Dave Smith";
// employee2["title"] = "Web Designer";
// employee2["department"] = "Arts";
// employee2["isCurrent"] = false;

// for(i in employee1) {
//     console.log(employee1[i])
// }
// for(j in employee2) {
//     console.log(employee2[j])
// }

// let thirdObj = {...employee2, ...employee1}
// console.log(thirdObj)
// let employees = employee1.concat(employee2);
// console.log(employees)

//14
//15


//16
// let movies = [['die hard', 1], ['lord of the rings', 2], ['harry potter', 3], ['pirates of the caribean', 4], ['fast and furious', 5]];
// // console.log(movies)

// movies.filter((movie) => {
//     console.log(movie[0])
// })

//17
// let employees = ['sam wise', 'tom holmes', 'phil black', 'adam pum', 'jesse rodriguez'];

// function showEmployee(arr) {
//     console.log('Employees:');
//     console.log(' ');
//     for(employee in employees) {
//         console.log(employees[employee].toUpperCase())
//     }
// }

// showEmployee(employees)

//18
// let arrNames = ['sam wise', 'tom holmes', 'phil black', 'adam pum', 'jesse rodriguez', true, 9, 23, null, false, 0, undefined];

// function filterValues(arr) {
//     //returns only values that are true, not useful if 0's are important
//     return arr.filter(Boolean);
// }

// console.log(filterValues(arrNames));

//second method:
// let x = arrNames.filter(item => item);
// console.log(x)

//19
// let nums = [0, 1, 2, 3, 4, 5, 6, 7 ,8,9];
// console.log(nums)
// function randomItem(arr) {
// let rand = arr[parseInt(Math.random() * arr.length)];
//     console.log(rand);
// }
// randomItem(nums)

//20
// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// function biggestNum(arr) {
//         console.log(Math.max(...arr));
// }
// biggestNum(nums);