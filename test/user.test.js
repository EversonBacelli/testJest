const request = require('supertest')


const app = require("../src/app.js")

test("Listar usuários", () => {
    return request(app).get('/users')
        .then(res => {
            expect(res.status).toBe(200)
            expect(res.body).toHaveLength(1)
            expect(res.body[0]).toHaveProperty('name','Jonh Doe')
        })
}) 

test('Incluir usuário com sucesso', () =>{
    return request(app).post('/users')
        .send({name: "Julia", mail:"ju@gmail.com"})
        .then((res) => {
            expect(res.status).toBe(201);
            expect(res.body.name).toBe('Julia')
        })
})