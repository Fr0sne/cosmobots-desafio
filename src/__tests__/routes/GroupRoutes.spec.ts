import request from "supertest";
import { app } from "../../index";
import { GroupCreateInput } from "../../interfaces/IGroup";

describe("/group", () => {
  app.listen(3000);
  var groupId: string;
  const updateObject = {
    name: "Changed Name",
    description: "Changed description",
  };
  it("should be able to create new group", async () => {
    const response = await request(app)
      .post("/group")
      .send({
        name: "Test",
        description: "Test",
      } as GroupCreateInput)
      .expect(201);
    expect(response.body).toMatchObject({
      name: "Test",
      description: "Test",
    });
    groupId = response.body.id;
  });

  it("should be able to list all groups", async () => {
    const response = await request(app).get("/group").expect(200);
    expect.arrayContaining(response.body);
  });

  it("should be able to update group", async () => {
    const response = await request(app)
      .put("/group/" + groupId)
      .send(updateObject)
      .expect(200);
    expect(response.body).toMatchObject(updateObject);
  });

  it("should be able to delete group", async () => {
    const response = await request(app)
      .delete("/group/" + groupId)
      .expect(200);
    expect(response.body).toMatchObject(updateObject);
  });

  it("should not be able to delete group that does not exist", async () => {
    const response = await request(app)
      .delete("/group/" + "this_id_does_not_exist")
      .expect(404);
    expect(response.body).toHaveProperty("message");
  });
});
