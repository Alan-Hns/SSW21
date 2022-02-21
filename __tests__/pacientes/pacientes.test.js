const app = require('../../app');
const supertest = require("supertest");
describe ('Test suite de api v1 pacientes endpoint', ()=> {
  it("GET /api/v1/pacientes/", async ()=> {
    await supertest(app).get('/api/v1/pacientes')
      .set({ apitoken:'d427f8ec-495f-4482-a182-e4025197e37e'})
      .expect(200);
  });
});