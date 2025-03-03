// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => {
        return movie.director;
    })
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDrama = moviesArray.filter((movie) => {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return movie;
        }
    })
    let counter = 0;
    spielbergDrama.forEach((movie) => {
        counter += 1;
    })
    return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const averageScore = moviesArray.reduce((acc, val) => {
        if (val.score === 0) {
            return 0;
        } else {
            return acc + val.score / moviesArray.length;
        }
    }, 0)
    const averageScoreRounded = (Math.round((averageScore + Number.EPSILON) * 100) / 100);
    return averageScoreRounded; 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesClone = [];

    for (let i = 0; i < moviesArray.length; i++) {
        moviesClone[i] = moviesArray[i];
    }
    moviesClone.sort((b, a) => {
        if (b.year > a.year) {
            return b.title - a.title;
        } else {
            return b.year - a.year;
        }
    })
    console.log(moviesClone)
    return moviesClone;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
