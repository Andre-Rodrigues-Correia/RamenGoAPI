import request from 'supertest'
import app from "../src/app.js";


describe('Should test order controller', () => {
    test('Should create a new order with success', () => {
        const order = {
            proteinId: 1,
            brothId: 1
        }

        return request(app).post('/order').send(order).then((res) => {
            expect(res.body.id).toBeTruthy()
            expect(res.body.status).toEqual(201)
        })
    })
});