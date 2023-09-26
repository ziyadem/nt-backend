


let courses = [
    {
        id: 1,
        title: 'react', 
        price: 12000
    },
    {
        id: 2,
        title: 'Vue', 
        price: 14000
    }, 
    {
        id: 3,
        title: 'Angular', 
        price: 14000
    }, 
    {
        id: 4,
        title: 'Nodejs', 
        price: 13000
    }
]

export class CourseRepository {


    getCourses(){
        return courses
    }

    createCourse(course){
        courses.push(
            {...course, id: courses.length + 1}
        )

        return course
    }


    getOne(course_id){
        return courses.find(c => c.id === +course_id)

    }

    deleteCourse(course_id){
        courses.forEach((c, idx) => {
            if(c.id == course_id){
                courses.splice(idx, 1)
            }
        })
        return {
            course_id
        }

    }

    updateCourse(course_id, updateCourse){

    let { title, price } = updateCourse; 
        courses.forEach((c, idx) => {
            if(c.id == course_id){
                c.title = title ? title : c.title
                c.price = price ? price : c.price
                
            }
        })

        return {
            course_id
        }

    }

}
