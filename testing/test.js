let chai=require('chai');
let chaiHttp=require('chai-http');
let mocha=require('mocha');
let server=require('../src/app.js');

// Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Users API',function(){

    /**
     * 1. Test the GET {by id} route
     */
    
    describe("GET user/:id",function(){
        it("It should GET an User by id",function(done){
            const userId="e2184253-9b8e-4fec-80a5-2e2f9cf0f777";
            chai.request(server)
                .get('/user/'+userId)
                .end(function(err,res){
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('id');
                    res.body.should.have.property('login');
                    res.body.should.have.property('password');
                    res.body.should.have.property('age');
                    res.body.should.have.property('isDeleted');
                    res.body.should.have.property('id').eq(userId);
                    done();
                });
        });


        it("It should NOT GET an User by unexisting id",function(done){
            const userId="e2184253-9b8e-4fec-80a5-2e2f9cf0f776";
            chai.request(server)
                .get('/user/'+userId)
                .end(function(err,res){
                    res.should.have.status(400);
                    res.body.should.have.property('message').eq('User does not exist');
                    done();
                });
        });

    });



    /**
     *  2. Test the POST route - It creates a new User
     */

    describe("POST /user/signup",function(){
        it("It should create a new User",function(done){

            const newUser={
                "login":"Dumbeldore",
                "password":"dumb567",
                "age":"67"
            }

            chai.request(server)
                .post('/user/signup')
                .send(newUser)
                .end(function(err,res){
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('id');
                    res.body.should.have.property('login').eq(newUser.login);
                    res.body.should.have.property('password').eq(newUser.password);
                    res.body.should.have.property('age').eq(Number(newUser.age));
                    res.body.should.have.property('isDeleted').eq(false);
                    done();
                });
        });

        it("It should NOT create a new User without login property",function(done){
            const newUser={
                "password":"dumb567",
                "age":"67"
            }
            chai.request(server)
                .post('/user/signup')
                .send(newUser)
                .end(function(err,res){
                    res.should.have.status(400);
                    res.body[0].should.have.property('message').eq('"login" is required');
                    done();
                });
        });

        it("It should NOT create a new User without password property",function(done){
            const newUser={
                "login":"Dumbeldore",
                "age":"67"
            }
            chai.request(server)
                .post('/user/signup')
                .send(newUser)
                .end(function(err,res){
                    res.should.have.status(400);
                    res.body[0].should.have.property('message').eq('"password" is required');
                    done();
                });
        });

        it("It should NOT create a new User without age property",function(done){
            const newUser={
                "login":"Dumbeldore",
                "password":"dumb567"
            }
            chai.request(server)
                .post('/user/signup')
                .send(newUser)
                .end(function(err,res){
                    res.should.have.status(400);
                    res.body[0].should.have.property('message').eq('"age" is required');
                    done();
                });
        });

        it("It should NOT create a new User when password contains special characters",function(done){
            const newUser={
                "login":"Dumbeldore",
                "password":"dumb@567",
                "age":"67"
            }
            chai.request(server)
                .post('/user/signup')
                .send(newUser)
                .end(function(err,res){
                    res.should.have.status(400);
                    res.body[0].should.have.property('message').eq('"password" must only contain alpha-numeric characters');
                    done();
                });
        });

        it("It should NOT create a new User when age is not a Number",function(done){
            const newUser={
                "login":"Dumbeldore",
                "password":"dumb567",
                "age":"abc"
            }
            chai.request(server)
                .post('/user/signup')
                .send(newUser)
                .end(function(err,res){
                    res.should.have.status(400);
                    res.body[0].should.have.property('message').eq('"age" must be a number');
                    done();
                });
        });
    });


    /**
     * Test the PUT route
     */

    describe("PUT user/:id ",function(){
        it("Update an user using existing id",function(done){
            const userId="e2184253-9b8e-4fec-80a5-2e2f9cf0f777";
            const user={
                "login": "Harry James Potter",
                "password": "harry123",
                "age": 25,
                "isDeleted": false
            }
            chai.request(server)
                .put('/user/'+userId)
                .send(user)
                .end(function(err,res){
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('id').eq(userId);
                    res.body.should.have.property('login').eq(user.login);
                    res.body.should.have.property('age').eq(user.age);
                    res.body.should.have.property('password').eq(user.password);
                    res.body.should.have.property('isDeleted').eq(user.isDeleted);
                    done();
                });
        });

        it("Update an user should fail when isDeleted is true",function(done){
            const userId="356a5303-141d-48ac-8b63-655e4e8ee912";
            const user={
                "login": "Hermoine Granger",
                "password": "herm789",
                "age": 25,
                "isDeleted": true
            }
            chai.request(server)
                .put('/user/'+userId)
                .send(user)
                .end(function(err,res){
                    res.should.have.status(400);
                    res.body.should.have.property('message').eq('User does not exist');
                    done();
                });
        });

        it("Update should fail when there no existing user id",function(done){
            const userId="e2184253-9b8e-4fec-80a5-2e2f9cf0f776";
            const user={
                "login": "Harry James Potter",
                "password": "harry123",
                "age": 25,
                "isDeleted": false
            }
            chai.request(server)
                .put('/user/'+userId)
                .send(user)
                .end(function(err,res){
                    res.should.have.status(400);
                    res.body.should.have.property('message').eq('User does not exist');
                    done();
                }); 
        });

        it("Update should fail when password has special characters",function(done){
            const userId="e2184253-9b8e-4fec-80a5-2e2f9cf0f777";
            const user={
                "login": "Harry James Potter",
                "password": "harry@123",
                "age": 25,
                "isDeleted": false
            }
            chai.request(server)
                .put('/user/'+userId)
                .send(user)
                .end(function(err,res){
                    res.should.have.status(400);
                    res.body[0].should.have.property('message').eq('"password" must only contain alpha-numeric characters');
                    done();
                });
        });

        it("Update should fail when age is not a number",function(done){
            const userId="e2184253-9b8e-4fec-80a5-2e2f9cf0f777";
            const user={
                "login": "Harry James Potter",
                "password": "harry123",
                "age": "abc",
                "isDeleted": false
            }
            chai.request(server)
                .put('/user/'+userId)
                .send(user)
                .end(function(err,res){
                    res.should.have.status(400);
                    res.body[0].should.have.property('message').eq('"age" must be a number');
                    done();
                });
        });

        it("Update should fail when password is less than 3 characters",function(done){
            const userId="e2184253-9b8e-4fec-80a5-2e2f9cf0f777";
            const user={
                "login": "Harry James Potter",
                "password": "ha",
                "age": "25",
                "isDeleted": false
            }
            chai.request(server)
                .put('/user/'+userId)
                .send(user)
                .end(function(err,res){
                    res.should.have.status(400);
                    res.body[0].should.have.property('message').eq('"password" length must be at least 3 characters long');
                    done();
                });
        });

        it("Update should fail when age is less than 4 years",function(done){
            const userId="e2184253-9b8e-4fec-80a5-2e2f9cf0f777";
            const user={
                "login": "Harry James Potter",
                "password": "harry123",
                "age": "3",
                "isDeleted": false
            }
            chai.request(server)
                .put('/user/'+userId)
                .send(user)
                .end(function(err,res){
                    res.should.have.status(400);
                    res.body[0].should.have.property('message').eq('"age" must be greater than or equal to 4');
                    done();
                });
        });
    });


    /**
     * Test the GET AUTOSUGGEST USERS route
     */
    
    describe('GET auto suggestions user/getAutoSuggestUsers/:loginSubstring/:limit',function(){

        it("Get all users starting with given substring and limit",function(done){
            const loginSubstring='H';
            const limit=1;
            chai.request(server)
                .get('/user/getAutoSuggestUsers/'+loginSubstring+'/'+limit)
                .end(function(err,res){
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eq(1);
                    done();
                });
        });

        it("Get an empty array if any doesn't match given substring",function(done){
            const loginSubstring='Z';
            const limit=5;
            chai.request(server)
                .get('/user/getAutoSuggestUsers/'+loginSubstring+'/'+limit)
                .end(function(err,res){
                    res.should.have.status(400);
                    res.body.should.have.property('message').eq('No users matching the substring');
                    done();
                });
        });
    });


    /**
     * Test the DELETE route
     */

    describe('DELETE /user/:id',function(){
        it("Should delete user with given user id",function(done){
            const userId="e2184253-9b8e-4fec-80a5-2e2f9cf0f777";
            chai.request(server)
                .delete('/user/'+userId)
                .end(function(err,res){
                    res.should.have.status(200);
                    res.text.should.be.eq('"Deleted Successfully"');
                    done();
                });
        });

        it("Should NOT delete user if isDeleted is true",function(done){
            const userId="356a5303-141d-48ac-8b63-655e4e8ee912";
            chai.request(server)
                .delete('/user/'+userId)
                .end(function(err,res){
                    res.should.have.status(400);
                    res.body.should.have.property('message').eq("User does not exist");
                    done();
                });
        });

        it("Should NOT delete user if no user id exists",function(done){
            const userId="e2184253-9b8e-4fec-80a5-2e2f9cf0f776";
            chai.request(server)
                .delete('/user/'+userId)
                .end(function(err,res){
                    res.should.have.status(400);
                    res.body.should.have.property('message').eq("User does not exist");
                    done();
                });
        });
    });
    
});