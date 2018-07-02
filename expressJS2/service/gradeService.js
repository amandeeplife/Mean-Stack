const Grade = require('../model/Grade')

class GradeService {
    
    constructor(){
        this.grades =[]
    }
 
   addGrade(name,course,grade){
    //    console.log("errr")
    grade = new Grade(name,course,grade);
    // console.log("errrdd")
    this.grades.push(grade);
    console.log("grade Saved Successfully")
    console.log("Array"+this.grades)
    }
    getGrade(name){
        console.log("insdie gradeservice"+this.grades)
        for (var fieldIndex = 0; fieldIndex < this.grades.length; fieldIndex ++) {
            if(this.grades[fieldIndex].name == name){
               return this.grades[fieldIndex];               
            }
        }
    }
    deleteGrade(name){
         
        for (var fieldIndex = 0; fieldIndex < this.grades.length; fieldIndex ++) {
            if(this.grades[fieldIndex].name == name){
              this.grades.splice(fieldIndex,1);               
            }
        }
    }
    putGrade(grade){
         
        for (var fieldIndex = 0; fieldIndex < this.grades.length; fieldIndex ++) {
            if(this.grades[fieldIndex].name == grade.name){
              this.grades[fieldIndex] = grade;               
            }
        }
    }




}
module.exports = GradeService;