const sohaib = {
    uni: `uol`,
    sem: 7,
    isWearGlasses: false,
    courses: [`pf`, `oop`, `dsa`, `db`, `se`],
    cenveyance: {
        make: `honda`,
        model: 2022,
        variant: `xyz`
    }
}

console.log(sohaib)
console.log(typeof (sohaib))
console.log(Array.isArray(sohaib)) // false

console.log(sohaib.uni)  // uol
console.log(sohaib.sem)  // 7
console.log(sohaib.isWearGlasses)  // false

console.log(sohaib.courses)

let sohaibCourses = sohaib.courses
console.log(sohaibCourses)

console.log(sohaib.cenveyance)
console.log(sohaib.cenveyance.make)