users 
    FOREIGN KEY email_id
    
    fruits
           FOREIGN KEY user_id
    courses
           FOREIGN KEY user_id
    emails
       id
 

 query
    users -> id  -> result -> email title

    fruits -> id result user_name, email_title
        select f.id, u.username, e.title from fruits f 
        join users u on f.user_id = u.id 
        join emails e on u.email_id = e.id
        where id = ''


    courses -> id => result course_title, user_name, email_title, teacher_name, teacher_surname
   


   
    company
         FOREIGN KEY user_id
     company -> email_id => result -> company_title, user_name, user_email_title, company_email_title

    employess
        FOREIGN KEY user_id
        FOREIGN KEY company_id

        employess -> id => result -> user_name, user_email, company_title, company_email
    cars
          FOREIGN KEY user_id
          FOREIGN KEY company_id
         cars -> id => result -> car_title, user_name, user_email, company_title, company_email

    customers
         FOREIGN KEY employe_id
         FOREIGN KEY company_id
         FOREIGN KEY car_id
        customers -> id => result -> company_title, company_email, car_title, employe_id -> tegishli -> user_email;

         
    

