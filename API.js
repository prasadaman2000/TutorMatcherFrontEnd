function login(user,pass) {
    var data = {
        todo:"login",
        user: user,
        password: pass
    };
    console.log("sent");
    axios.post('http://169.233.161.73:8080/', qs.stringify(data))
    .then(function (response) {
        if(response.data.message == "success"){
            sessionStorage.setItem('user', response.data.result);
            switch(response.data.result.type){
                case "tutor":
                    window.location.href = 'tutor.html'
                    break;
                case "tutee":
                    window.location.href = 'tutee.html'
                    break;
                default:
                    console.log("unknown type");
            }
            
        }
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function findByKeyword(keyword) {
    var data = {
        type:"tutee",
        todo:"findByKeyword",
        keyword:keyword
    };
    console.log("sent");
    axios.post('http://169.233.161.73:8080/', qs.stringify(data))
    .then(function (response) {
        if(response)
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function signupTutor(user,pass,fname,lname,subjects,exp,desc,pay,available,email,pic) {
    var data = {
        type:"tutor",
        todo:"signup",
        user: user,
        password: pass,
        fname: fname,
        lname: lname,
        subjects: subjects,
        exp: exp,
        desc: desc,
        pay:pay,
        available:available,
        email:email,
        pic:pic
    };
    axios.post('http://169.233.161.73:8080/', qs.stringify(data))
    .then(function (response) {
        if(response.data.message == "success"){
            sessionStorage.setItem('user', response.data.result);
            window.location.href = 'tutor.html';
        }
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function signupTutee(user,pass,fname,lname,subjects,email,pic) {
    var data = {
        type:"tutor",
        todo:"signup",
        user: user,
        password: pass,
        fname: fname,
        lname: lname,
        subjects: subjects,
        exp: exp,
        desc: desc,
        pay:pay,
        available:available,
        email:email,
        pic:pic
    };
    axios.post('http://169.233.161.73:8080/', qs.stringify(data))
    .then(function (response) {
        if(response.data.message == "success"){
            sessionStorage.setItem('user', response.data.result);
            window.location.href = 'tutee.html';
        }
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}