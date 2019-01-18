class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName,lastName,id,scores) {
        super(firstName, lastName, id)
        this.scores = scores
    }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here

    calculate() {
        let sum = 0
        for (let score of this.scores) {
            sum += score
        }
        const avarage = sum / this.scores.length

        if (avarage >= 90 && avarage <= 100)
            return 'O'
        else if (avarage >= 80 && avarage < 90)
            return 'E'
        else if (avarage >= 70 && avarage < 80)
            return 'A'
        else if (avarage >= 55 && avarage < 70)
            return 'P'
        else if (avarage >= 40 && avarage < 55) 
            return 'D'
        else if (avarage < 40) 
            return 'T'
    }
}