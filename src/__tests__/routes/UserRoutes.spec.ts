import { User } from "@prisma/client";
import request from "supertest";
import { Prisma } from "../../connections";
import { GroupRepository } from "../../entities/group/repository/GroupRepository";

import { app } from "../../index";
import { UserCreateInput } from "../../interfaces/IUser";

describe("/user", () => {
  app.listen(3001);
  const groupRepo = new GroupRepository(Prisma);
  var userId: string;
  var groupId: string;
  const updateObject = {
    firstName: "Cosmobots Changed",
    email: "test.changed@cosmobots.io",
    lastName: "changed",
  };
  it("should be able to create new users", async () => {
    const group = await groupRepo.create({
      description: "teste",
      name: "teste",
    });
    groupId = group.id;
    const response = await request(app)
      .post("/user")
      .send({
        firstName: "Cosmobots",
        email: "test@cosmobots.io",
        lastName: "Test",
        groupId: group.id,
      } as UserCreateInput)
      .expect(201);
    userId = response.body.id;
    expect(response.body).toMatchObject({
      firstName: "Cosmobots",
      email: "test@cosmobots.io",
      lastName: "Test",
    });
  });

  it("should be able to list all users", async () => {
    const response = await request(app).get("/user").expect(200);
    expect.arrayContaining(response.body);
  });

  it("should be able to update user", async () => {
    const response = await request(app)
      .put("/user/" + userId)
      .send(updateObject)
      .expect(200);
    expect(response.body).toMatchObject(updateObject);
  });

  it("should be able to delete user", async () => {
    const response = await request(app)
      .delete("/user/" + userId)
      .expect(200);
    expect(response.body).toMatchObject(updateObject);
  });

  it("should not be able to delete user that does not exist", async () => {
    const response = await request(app)
      .delete("/user/" + "this_id_does_not_exist")
      .expect(404);
    expect(response.body).toHaveProperty("message");
  });
  afterAll(() => {
    groupRepo.delete({ id: groupId });
  });
});
